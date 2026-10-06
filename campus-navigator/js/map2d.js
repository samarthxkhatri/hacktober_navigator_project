/* ==========================================================================
   2D MAP INTERACTIVE ENGINE
   Renders the 3-Block Ground Floor Plan of Mechanical Engineering Dept
   Acropolis Institute of Technology and Research (AITR), Indore
   ========================================================================== */

(() => {
  'use strict';

  const DATA = window.MAP2D_DATA;
  if (!DATA) {
    console.error('[map2d] MAP2D_DATA not found');
    return;
  }

  // State
  let currentFilter = 'all';
  let currentBlock = 'all';
  let currentTheme = 'modern'; // 'modern' or 'blueprint'
  let selectedRoomId = null;
  let zoomLevel = 1;
  let panOffset = { x: 0, y: 0 };
  let isPanning = false;
  let startPan = { x: 0, y: 0 };

  const SVG_WIDTH = 1360;
  const SVG_HEIGHT = 860;

  // DOM Elements
  let mapSvg = null;
  let mapContainer = null;
  let roomDetailsModal = null;
  let tooltip = null;

  // Initialize once DOM is ready
  function init() {
    mapContainer = document.getElementById('map2d-container');
    if (!mapContainer) return;

    createMapStructure();
    renderSvgMap();
    setupControls();
    setupSearch();
    renderDirectory();
    setupEventListeners();

    // Check URL hash for direct room inspection
    handleInitialHash();
  }

  function handleInitialHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('room-')) {
      const rId = hash.replace('room-', '');
      setTimeout(() => inspectRoom(rId), 300);
    }
  }

  // Create UI frame around the map
  function createMapStructure() {
    // Tooltip
    tooltip = document.createElement('div');
    tooltip.className = 'map2d-tooltip glass';
    tooltip.hidden = true;
    document.body.appendChild(tooltip);

    // Inspector Modal
    roomDetailsModal = document.getElementById('room-inspector-modal');
    if (!roomDetailsModal) {
      roomDetailsModal = document.createElement('div');
      roomDetailsModal.id = 'room-inspector-modal';
      roomDetailsModal.className = 'room-inspector-modal glass';
      roomDetailsModal.hidden = true;
      document.body.appendChild(roomDetailsModal);
    }
  }

  // Render the SVG Map
  function renderSvgMap() {
    const svgWrap = document.getElementById('map2d-svg-wrap');
    if (!svgWrap) return;

    const isBlueprint = currentTheme === 'blueprint';

    let svgHtml = `
      <svg id="interactive-floorplan-svg" 
           viewBox="0 0 ${SVG_WIDTH} ${SVG_HEIGHT}" 
           preserveAspectRatio="xMidYMid meet" 
           class="floorplan-svg ${isBlueprint ? 'theme-blueprint' : 'theme-modern'}">
        
        <defs>
          <!-- Blueprint grid pattern -->
          <pattern id="cad-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(56, 189, 248, 0.08)" stroke-width="0.5"/>
          </pattern>
          <pattern id="cad-grid-major" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#cad-grid)"/>
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(56, 189, 248, 0.16)" stroke-width="1"/>
          </pattern>

          <!-- Lawn grass pattern -->
          <pattern id="lawn-pattern" width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill="#14532d"/>
            <circle cx="7" cy="7" r="1.5" fill="#16a34a" opacity="0.6"/>
          </pattern>

          <!-- Filter glow effects -->
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Background -->
        <rect width="${SVG_WIDTH}" height="${SVG_HEIGHT}" class="svg-bg" />
        <rect width="${SVG_WIDTH}" height="${SVG_HEIGHT}" fill="url(#cad-grid-major)" opacity="${isBlueprint ? '0.7' : '0.35'}" />

        <g id="map-world" transform="translate(${panOffset.x}, ${panOffset.y}) scale(${zoomLevel})">
          
          <!-- Outer Architectural Blueprint Border -->
          <rect x="20" y="20" width="${SVG_WIDTH - 40}" height="${SVG_HEIGHT - 40}" class="blueprint-frame" />
          <rect x="26" y="26" width="${SVG_WIDTH - 52}" height="${SVG_HEIGHT - 52}" class="blueprint-frame-inner" />

          <!-- Title Stamp Block (Top Left) -->
          <g class="blueprint-stamp-tl">
            <rect x="36" y="36" width="220" height="52" class="stamp-box" />
            <text x="146" y="62" class="stamp-title" text-anchor="middle">GROUND FLOOR PLAN</text>
            <text x="146" y="77" class="stamp-sub" text-anchor="middle">BLOCKS 1, 2 & 3 · ARCHITECTURAL LAYOUT</text>
          </g>

          <!-- Compass Rose (Top Right - Matching Photo with North pointing East/Right) -->
          <g class="blueprint-compass" transform="translate(1190, 36)">
            <rect x="0" y="0" width="120" height="42" class="stamp-box" rx="6" />
            <text x="25" y="26" class="compass-n-label">N</text>
            <!-- Bold arrow pointing Right -->
            <path d="M 48 21 L 96 21 M 86 13 L 98 21 L 86 29" class="compass-arrow" />
            <circle cx="48" cy="21" r="3" class="compass-dot" />
          </g>

          <!-- Block Labels (Watermark Headers) -->
          <g class="block-watermarks">
            <text x="290" y="80" class="block-marker-label">BLOCK - 1</text>
            <text x="610" y="80" class="block-marker-label">BLOCK - 2</text>
            <text x="870" y="80" class="block-marker-label">BLOCK - 3</text>
            <text x="1095" y="80" class="block-marker-label">PALM AVE</text>
            <text x="1245" y="80" class="block-marker-label">SPORTS & FOOD</text>
          </g>

          <!-- EXTERIOR ELEMENTS (Road, Lawns, Pathways) -->
          <g id="exterior-layer">
            ${renderExteriorElements()}
          </g>

          <!-- CONNECTING BREEZEWAYS & CORRIDORS -->
          <g id="corridors-layer">
            ${renderCorridors()}
          </g>

          <!-- ROOMS LAYER -->
          <g id="rooms-layer">
            ${renderRooms()}
          </g>

          <!-- ARCHITECTURAL DETAILS (Stairs, Doors, Icons) -->
          <g id="details-layer">
            ${renderArchitecturalDetails()}
          </g>

          <!-- FOOTER TEXT STAMP (Department & Institute Info) -->
          <g class="blueprint-footer-stamp">
            <rect x="300" y="814" width="600" height="38" class="stamp-box" rx="6" />
            <text x="600" y="828" class="footer-dept-title" text-anchor="middle">MECHANICAL ENGINEERING DEPARTMENT</text>
            <text x="600" y="842" class="footer-inst-title" text-anchor="middle">ACROPOLIS INSTITUTE OF TECHNOLOGY AND RESEARCH, INDORE</text>
          </g>

        </g>
      </svg>
    `;

    svgWrap.innerHTML = svgHtml;
    mapSvg = document.getElementById('interactive-floorplan-svg');

    attachSvgEvents();
  }

  // Render Exterior Grounds (Road, Lawn, Pathways)
  function renderExteriorElements() {
    return DATA.exterior.map(item => {
      if (item.type === 'road') {
        return `
          <g class="ext-group road-group" data-id="${item.id}" data-name="${item.name}">
            <rect x="${item.svg.x}" y="${item.svg.y}" width="${item.svg.width}" height="${item.svg.height}" rx="6" class="ext-road-bed" />
            <!-- Dashed highway lane marking -->
            <line x1="${item.svg.x + 10}" y1="${item.svg.dashY}" x2="${item.svg.x + item.svg.width - 10}" y2="${item.svg.dashY}" class="ext-road-divider" />
            <text x="${item.svg.x + item.svg.width / 2}" y="${item.svg.dashY + 22}" class="road-label" text-anchor="middle">CAMPUS MAIN ACCESS ROADWAY</text>
          </g>
        `;
      } else if (item.type === 'lawn') {
        const cx = item.svg.x + item.svg.width / 2;
        const cy = item.svg.y + item.svg.height / 2;
        return `
          <g class="ext-group lawn-group" data-id="${item.id}" data-name="${item.name}">
            <rect x="${item.svg.x}" y="${item.svg.y}" width="${item.svg.width}" height="${item.svg.height}" rx="4" class="ext-lawn-bed" />
            <text x="${cx}" y="${cy + 5}" class="lawn-label" text-anchor="middle">LAWN</text>
          </g>
        `;
      } else if (item.type === 'pathway') {
        const px = item.svg.arrowPos[0];
        const py = item.svg.arrowPos[1];
        return `
          <g class="ext-group pathway-group" data-id="${item.id}" data-name="${item.name}">
            <rect x="${item.svg.x}" y="${item.svg.y}" width="${item.svg.width}" height="${item.svg.height}" class="ext-pathway-bed" />
            <!-- Vertical pathway arrow -->
            <path d="M ${px} ${py + 25} L ${px} ${py - 15} M ${px - 7} ${py - 5} L ${px} ${py - 17} L ${px + 7} ${py - 5}" class="pathway-arrow" />
            <text x="${px}" y="${py + 40}" class="pathway-text" text-anchor="middle">← PATH WAY</text>
          </g>
        `;
      }
      return '';
    }).join('');
  }

  // Render Corridors connecting the wings and main passage
  function renderCorridors() {
    return `
      <!-- Lower Main Front Connecting Passage (Spine linking Library, Block 1, Block 2 & Block 3) -->
      <g class="main-passage-group">
        <rect x="70" y="520" width="940" height="30" class="corridor-rect main-passage-rect" />
        <line x1="72" y1="520" x2="1008" y2="520" stroke="rgba(255, 201, 40, 0.4)" stroke-width="1.5" stroke-dasharray="6 4" />
        <text x="210" y="539" class="corridor-text">LIBRARY & BLOCK 1 LINK</text>
        <text x="540" y="539" class="corridor-text passage-highlight-text">MAIN CONNECTING PASSAGE (CENTRAL SPINE)</text>
        <text x="880" y="539" class="corridor-text">BLOCK 3 PASSAGE ENTRY</text>
      </g>

      <!-- Diagonal Corridor Block 1 -->
      <polygon points="200,230 330,230 315,240 185,240" class="corridor-rect" />

      <!-- Diagonal Corridor Block 2 -->
      <polygon points="510,230 710,230 690,240 490,240" class="corridor-rect" />

      <!-- Diagonal Corridor Block 3 (Aisle connecting Foyer, Room 31, Room 35 & rear exit) -->
      <polygon points="740,230 940,230 920,240 720,240" class="corridor-rect" />
      <polygon points="755,240 770,240 860,520 845,520" class="corridor-rect" opacity="0.65" />
    `;
  }

  // Render Rooms
  function renderRooms() {
    return DATA.rooms.map(room => {
      const isSelected = room.id === selectedRoomId;
      const isFilteredOut = !matchesFilters(room);
      const catColor = getCategoryColor(room.category);
      const hasStreetView = !!room.streetViewId;

      let shapeSvg = '';
      if (room.shape === 'tiered_hall') {
        // Seminar hall with curved amphitheater tiered seats
        shapeSvg = `
          <polygon points="${room.svg.points}" class="room-shape" />
          <!-- Amphitheater stepped curved rows -->
          <path d="M 135 150 A 60 60 0 0 1 215 150" class="tiered-seat-row" />
          <path d="M 145 170 A 50 50 0 0 1 205 170" class="tiered-seat-row" />
          <path d="M 155 190 A 40 40 0 0 1 195 190" class="tiered-seat-row" />
          <rect x="155" y="125" width="40" height="14" class="stage-podium" rx="2" />
          <text x="175" y="135" class="stage-label" text-anchor="middle">STAGE</text>
        `;
      } else if (room.svg.type === 'polygon') {
        shapeSvg = `<polygon points="${room.svg.points}" class="room-shape" />`;
      } else if (room.svg.type === 'rect') {
        shapeSvg = `<rect x="${room.svg.x}" y="${room.svg.y}" width="${room.svg.width}" height="${room.svg.height}" rx="3" class="room-shape" />`;
      }

      const lx = room.svg.labelPos[0];
      const ly = room.svg.labelPos[1];

      return `
        <g class="room-group ${isFilteredOut ? 'dimmed' : ''} ${isSelected ? 'selected' : ''} cat-${room.category} blk-${room.block}" 
           id="room-svg-${room.id}"
           data-id="${room.id}" 
           data-category="${room.category}" 
           data-block="${room.block}">
          
          ${shapeSvg}

          <!-- Room Content Labels -->
          <g class="room-text-wrap" pointer-events="none">
            <text x="${lx}" y="${ly - 10}" class="room-code-tag" text-anchor="middle">${room.code}</text>
            <text x="${lx}" y="${ly + 4}" class="room-name-label" text-anchor="middle">${truncate(room.name, 22)}</text>
            <text x="${lx}" y="${ly + 16}" class="room-dim-label" text-anchor="middle">${room.dimensions}</text>
            ${hasStreetView ? `
              <circle cx="${lx}" cy="${ly + 28}" r="6" class="streetview-badge" />
              <text x="${lx}" y="${ly + 31}" class="streetview-badge-icon" text-anchor="middle">🚶</text>
            ` : ''}
          </g>

          <!-- Interactive Click Overlay -->
          <title>${room.code} · ${room.name} (${room.dimensions})</title>
        </g>
      `;
    }).join('');
  }

  // Render Architectural Details (Stairs, Doors, Key Landmarks)
  function renderArchitecturalDetails() {
    return `
      <!-- Staircase 1 Treads -->
      <g class="staircase-treads">
        <line x1="322" y1="560" x2="368" y2="560" class="stair-line" />
        <line x1="322" y1="570" x2="368" y2="570" class="stair-line" />
        <line x1="322" y1="580" x2="368" y2="580" class="stair-line" />
        <line x1="322" y1="590" x2="368" y2="590" class="stair-line" />
        <line x1="322" y1="600" x2="368" y2="600" class="stair-line" />
        <path d="M 345 605 L 345 555 L 340 562 M 345 555 L 350 562" class="stair-arrow" />
        <text x="345" y="550" class="stair-text" text-anchor="middle">UP</text>
      </g>

      <!-- Staircase 2 Treads -->
      <g class="staircase-treads">
        <line x1="712" y1="560" x2="753" y2="560" class="stair-line" />
        <line x1="712" y1="570" x2="753" y2="570" class="stair-line" />
        <line x1="712" y1="580" x2="753" y2="580" class="stair-line" />
        <line x1="712" y1="590" x2="753" y2="590" class="stair-line" />
        <line x1="712" y1="600" x2="753" y2="600" class="stair-line" />
        <path d="M 732 605 L 732 555 L 727 562 M 732 555 L 737 562" class="stair-arrow" />
        <text x="732" y="550" class="stair-text" text-anchor="middle">UP</text>
      </g>
    `;
  }

  // Filter verification
  function matchesFilters(room) {
    if (currentFilter !== 'all' && room.category !== currentFilter) {
      return false;
    }
    if (currentBlock !== 'all' && room.block !== currentBlock) {
      return false;
    }
    return true;
  }

  function getCategoryColor(cat) {
    const found = DATA.metadata.categories.find(c => c.id === cat);
    return found ? found.color : '#64748b';
  }

  function truncate(str, len) {
    if (!str) return '';
    return str.length > len ? str.substring(0, len - 1) + '…' : str;
  }

  // Event handlers on SVG rooms
  function attachSvgEvents() {
    const roomGroups = mapSvg.querySelectorAll('.room-group');
    roomGroups.forEach(g => {
      const rId = g.dataset.id;
      const room = DATA.rooms.find(r => r.id === rId);
      if (!room) return;

      g.addEventListener('click', (e) => {
        e.stopPropagation();
        inspectRoom(rId);
      });

      g.addEventListener('mouseenter', (e) => {
        showTooltip(room, e);
      });

      g.addEventListener('mousemove', (e) => {
        positionTooltip(e);
      });

      g.addEventListener('mouseleave', () => {
        hideTooltip();
      });
    });

    // Exterior grounds click / hover
    const extGroups = mapSvg.querySelectorAll('.ext-group');
    extGroups.forEach(g => {
      const eId = g.dataset.id;
      const ext = DATA.exterior.find(x => x.id === eId);
      if (!ext) return;

      g.addEventListener('click', (e) => {
        e.stopPropagation();
        inspectExterior(ext);
      });

      g.addEventListener('mouseenter', (e) => {
        tooltip.innerHTML = `<strong>${ext.name}</strong><br><span style="font-size:12px;opacity:0.8;">${ext.desc}</span>`;
        tooltip.hidden = false;
        positionTooltip(e);
      });

      g.addEventListener('mousemove', (e) => {
        positionTooltip(e);
      });

      g.addEventListener('mouseleave', () => {
        hideTooltip();
      });
    });

    // Background click closes inspector
    mapSvg.addEventListener('click', () => {
      // Don't close if clicked background intentionally, but clear selection highlight
      clearSelection();
    });
  }

  function showTooltip(room, e) {
    const coeBadge = room.category === 'coe' ? '⭐ Center of Excellence' : room.categoryLabel;
    tooltip.innerHTML = `
      <div class="tt-header">
        <span class="tt-code">${room.code}</span>
        <span class="tt-badge" style="background:${getCategoryColor(room.category)}22; color:${getCategoryColor(room.category)}">${coeBadge}</span>
      </div>
      <div class="tt-title">${room.name}</div>
      <div class="tt-meta">Dimensions: <strong>${room.dimensions}</strong> · ${room.blockLabel}</div>
      ${room.streetViewId ? '<div class="tt-walk">🚶 Street View photo available — click to view</div>' : ''}
    `;
    tooltip.hidden = false;
    positionTooltip(e);
  }

  function positionTooltip(e) {
    if (!tooltip || tooltip.hidden) return;
    const x = e.clientX + 16;
    const y = e.clientY + 16;
    tooltip.style.left = `${Math.min(window.innerWidth - 300, x)}px`;
    tooltip.style.top = `${Math.min(window.innerHeight - 150, y)}px`;
  }

  function hideTooltip() {
    if (tooltip) tooltip.hidden = true;
  }

  // Inspect Room (Opens Modal)
  function inspectRoom(roomId) {
    const room = DATA.rooms.find(r => r.id === roomId);
    if (!room) return;

    selectedRoomId = roomId;

    // Highlight on SVG
    mapSvg.querySelectorAll('.room-group').forEach(g => {
      g.classList.toggle('selected', g.dataset.id === roomId);
    });

    // Pulse highlight the room
    const targetSvg = document.getElementById(`room-svg-${roomId}`);
    if (targetSvg) {
      targetSvg.classList.add('pulse-active');
      setTimeout(() => targetSvg.classList.remove('pulse-active'), 1500);
    }

    const coeTag = room.category === 'coe' ? '<span class="pill-gold">⭐ Industry Center of Excellence</span>' : '';
    const streetViewBtn = room.streetViewId
      ? `<button class="btn primary glow" id="btn-jump-streetview" data-sv="${room.streetViewId}">
           🚶 View in Street-View Walk
         </button>`
      : '';

    const equipmentList = (room.equipment || []).map(eq => `<li>${eq}</li>`).join('');

    roomDetailsModal.innerHTML = `
      <div class="inspector-card">
        <button class="inspector-close" id="inspector-close-btn" aria-label="Close">✕</button>
        
        <div class="inspector-header">
          <div class="inspector-badge-row">
            <span class="room-code-badge">${room.code}</span>
            <span class="room-block-badge">${room.blockLabel}</span>
            <span class="room-cat-badge" style="background:${getCategoryColor(room.category)}26; color:${getCategoryColor(room.category)}">
              ${room.categoryLabel}
            </span>
            ${coeTag}
          </div>
          <h2 class="inspector-title">${room.name}</h2>
          <div class="inspector-dim-tag">Blueprint Area / Size: <strong>${room.dimensions}</strong></div>
        </div>

        ${room.photo ? `
          <div class="inspector-photo-preview">
            <img src="${room.photo}" alt="${room.name}" />
          </div>
        ` : ''}

        <div class="inspector-body">
          <p class="inspector-desc">${room.desc}</p>

          ${room.capacity ? `
            <div class="inspector-field">
              <span class="field-label">Seating / Working Capacity:</span>
              <span class="field-value">${room.capacity}</span>
            </div>
          ` : ''}

          ${room.inCharge ? `
            <div class="inspector-field">
              <span class="field-label">Faculty / Lab In-Charge:</span>
              <span class="field-value">${room.inCharge}</span>
            </div>
          ` : ''}

          ${equipmentList ? `
            <div class="inspector-equipment-section">
              <h3>Equipment & Facilities</h3>
              <ul class="equipment-list">
                ${equipmentList}
              </ul>
            </div>
          ` : ''}
        </div>

        <div class="inspector-actions">
          ${streetViewBtn}
          <button class="btn ghost" id="btn-nav-to-room" data-room="${room.id}">
            🧭 Set Navigation Route
          </button>
        </div>
      </div>
    `;

    roomDetailsModal.hidden = false;

    // Attach button listeners inside modal
    document.getElementById('inspector-close-btn').onclick = closeInspector;

    const svBtn = document.getElementById('btn-jump-streetview');
    if (svBtn) {
      svBtn.onclick = () => {
        closeInspector();
        jumpToStreetView(room.streetViewId);
      };
    }

    const navBtn = document.getElementById('btn-nav-to-room');
    if (navBtn) {
      navBtn.onclick = () => {
        closeInspector();
        startCampusWalkTo(room);
      };
    }
  }

  function inspectExterior(ext) {
    roomDetailsModal.innerHTML = `
      <div class="inspector-card">
        <button class="inspector-close" id="inspector-close-btn" aria-label="Close">✕</button>
        <div class="inspector-header">
          <span class="room-cat-badge" style="background:#16a34a33; color:#4ade80">Campus Grounds</span>
          <h2 class="inspector-title">${ext.name}</h2>
        </div>
        ${ext.photo ? `
          <div class="inspector-photo-preview">
            <img src="${ext.photo}" alt="${ext.name}" />
          </div>
        ` : ''}
        <div class="inspector-body">
          <p class="inspector-desc">${ext.desc}</p>
        </div>
        <div class="inspector-actions">
          ${ext.streetViewId ? `
            <button class="btn primary glow" id="btn-jump-streetview" data-sv="${ext.streetViewId}">
              🚶 View in Street-View Walk
            </button>
          ` : ''}
        </div>
      </div>
    `;
    roomDetailsModal.hidden = false;
    document.getElementById('inspector-close-btn').onclick = closeInspector;
    const svBtn = document.getElementById('btn-jump-streetview');
    if (svBtn && ext.streetViewId) {
      svBtn.onclick = () => {
        closeInspector();
        jumpToStreetView(ext.streetViewId);
      };
    }
  }

  function closeInspector() {
    if (roomDetailsModal) roomDetailsModal.hidden = true;
    clearSelection();
  }

  function clearSelection() {
    selectedRoomId = null;
    if (mapSvg) {
      mapSvg.querySelectorAll('.room-group.selected').forEach(el => el.classList.remove('selected'));
    }
  }

  // Jump from 2D map to Street-View Virtual Walk
  function jumpToStreetView(photoId) {
    if (window.CampusWalk && typeof window.CampusWalk.jumpToPhoto === 'function') {
      window.CampusWalk.jumpToPhoto(photoId);
    } else {
      // Fallback: switch view mode and set hash
      window.location.hash = '#' + photoId;
      if (document.body.classList.contains('mode-landing')) {
        window.switchViewMode('walk');
      }
    }
  }

  function startCampusWalkTo(room) {
    // If room has a street view photo, navigate directly to it
    const targetPhoto = room.streetViewId || 'block2-door';
    jumpToStreetView(targetPhoto);
  }

  // Controls (Zoom, Pan, Category Filter, Block Selector, Theme)
  function setupControls() {
    // Zoom In
    const btnZoomIn = document.getElementById('map-zoom-in');
    if (btnZoomIn) {
      btnZoomIn.onclick = () => updateZoom(0.2);
    }

    // Zoom Out
    const btnZoomOut = document.getElementById('map-zoom-out');
    if (btnZoomOut) {
      btnZoomOut.onclick = () => updateZoom(-0.2);
    }

    // Reset View
    const btnReset = document.getElementById('map-zoom-reset');
    if (btnReset) {
      btnReset.onclick = resetView;
    }

    // Fullscreen Toggle
    const btnFullscreen = document.getElementById('map-fullscreen-toggle');
    if (btnFullscreen) {
      btnFullscreen.onclick = toggleMapFullscreen;
    }

    // Theme Toggle (Modern vs Blueprint CAD mode)
    const btnTheme = document.getElementById('map-theme-toggle');
    if (btnTheme) {
      btnTheme.onclick = () => {
        currentTheme = currentTheme === 'modern' ? 'blueprint' : 'modern';
        btnTheme.textContent = currentTheme === 'blueprint' ? '🎨 Modern Style' : '📐 Blueprint CAD';
        renderSvgMap();
      };
    }

    // Category Filter Chips
    const categoryBar = document.getElementById('category-filter-bar');
    if (categoryBar) {
      categoryBar.innerHTML = DATA.metadata.categories.map(cat => `
        <button class="filter-chip ${cat.id === currentFilter ? 'active' : ''}" data-cat="${cat.id}">
          <span class="chip-icon">${cat.icon}</span>
          <span class="chip-name">${cat.name}</span>
        </button>
      `).join('');

      categoryBar.querySelectorAll('.filter-chip').forEach(btn => {
        btn.onclick = () => {
          categoryBar.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentFilter = btn.dataset.cat;
          updateFilterDimming();
        };
      });
    }

    // Block Tabs
    const blockBar = document.getElementById('block-tabs-bar');
    if (blockBar) {
      blockBar.innerHTML = DATA.metadata.blocks.map(blk => `
        <button class="block-tab ${blk.id === currentBlock ? 'active' : ''}" data-blk="${blk.id}">
          ${blk.name} (${blk.count})
        </button>
      `).join('');

      blockBar.querySelectorAll('.block-tab').forEach(btn => {
        btn.onclick = () => {
          blockBar.querySelectorAll('.block-tab').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentBlock = btn.dataset.blk;
          updateFilterDimming();
          focusBlock(currentBlock);
        };
      });
    }
  }

  function updateZoom(delta) {
    zoomLevel = Math.max(0.7, Math.min(2.5, zoomLevel + delta));
    applyTransform();
  }

  function resetView() {
    zoomLevel = 1;
    panOffset = { x: 0, y: 0 };
    applyTransform();
  }

  function applyTransform() {
    const world = document.getElementById('map-world');
    if (world) {
      world.setAttribute('transform', `translate(${panOffset.x}, ${panOffset.y}) scale(${zoomLevel})`);
    }
  }

  function focusBlock(blockId) {
    if (blockId === 'all') {
      resetView();
      return;
    }
    // Block centers
    const centers = {
      block1: { x: -80, y: 30, zoom: 1.25 },
      block2: { x: -280, y: 30, zoom: 1.25 },
      block3: { x: -520, y: 30, zoom: 1.25 },
      'palm-extension': { x: -680, y: 30, zoom: 1.25 },
      'sports-canteen': { x: -780, y: 30, zoom: 1.25 }
    };
    if (centers[blockId]) {
      zoomLevel = centers[blockId].zoom;
      panOffset = { x: centers[blockId].x, y: centers[blockId].y };
      applyTransform();
    }
  }

  function toggleMapFullscreen() {
    const wrap = document.getElementById('floorplan-explorer-section');
    if (wrap) {
      wrap.classList.toggle('fullscreen-map');
      const isFull = wrap.classList.contains('fullscreen-map');
      document.body.style.overflow = isFull ? 'hidden' : '';
      const btn = document.getElementById('map-fullscreen-toggle');
      if (btn) btn.innerHTML = isFull ? '✕ Exit Fullscreen' : '⛶ Fullscreen Map';
    }
  }

  function updateFilterDimming() {
    if (!mapSvg) return;
    mapSvg.querySelectorAll('.room-group').forEach(g => {
      const rId = g.dataset.id;
      const room = DATA.rooms.find(r => r.id === rId);
      if (!room) return;
      const matches = matchesFilters(room);
      g.classList.toggle('dimmed', !matches);
    });
  }

  // Live Room Search
  function setupSearch() {
    const searchInput = document.getElementById('map2d-search-input');
    const searchResults = document.getElementById('map2d-search-results');
    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) {
        searchResults.hidden = true;
        searchResults.innerHTML = '';
        return;
      }

      const matches = DATA.rooms.filter(r => {
        return (
          r.name.toLowerCase().includes(q) ||
          r.code.toLowerCase().includes(q) ||
          r.blockLabel.toLowerCase().includes(q) ||
          (r.tags && r.tags.some(t => t.toLowerCase().includes(q))) ||
          (r.equipment && r.equipment.some(eq => eq.toLowerCase().includes(q)))
        );
      }).slice(0, 6);

      if (matches.length === 0) {
        searchResults.innerHTML = '<div class="search-empty">No matching rooms found</div>';
      } else {
        searchResults.innerHTML = matches.map(r => `
          <div class="search-item" data-id="${r.id}">
            <div class="search-item-title">${r.name}</div>
            <div class="search-item-sub">
              <span class="badge-code">${r.code}</span> · ${r.blockLabel} · ${r.dimensions}
            </div>
          </div>
        `).join('');

        searchResults.querySelectorAll('.search-item').forEach(item => {
          item.onclick = () => {
            const rId = item.dataset.id;
            searchInput.value = '';
            searchResults.hidden = true;
            inspectRoom(rId);
          };
        });
      }

      searchResults.hidden = false;
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.hidden = true;
      }
    });
  }

  // Directory Grid for Landing Page
  function renderDirectory() {
    const dirWrap = document.getElementById('rooms-directory-grid');
    if (!dirWrap) return;

    dirWrap.innerHTML = DATA.rooms.map(room => {
      const coeBadge = room.category === 'coe' ? '<span class="pill-gold">⭐ CoE</span>' : '';
      return `
        <div class="directory-card glass" data-id="${room.id}">
          <div class="card-head">
            <span class="card-code">${room.code}</span>
            <span class="card-block">${room.blockLabel}</span>
            ${coeBadge}
          </div>
          <h3 class="card-title">${room.name}</h3>
          <p class="card-dim">Area: ${room.dimensions}</p>
          <p class="card-summary">${truncate(room.desc, 95)}</p>
          <div class="card-footer">
            <button class="btn-card-inspect">Inspect Room ➜</button>
            ${room.streetViewId ? '<span class="card-walk-icon" title="Street View available">🚶</span>' : ''}
          </div>
        </div>
      `;
    }).join('');

    dirWrap.querySelectorAll('.directory-card').forEach(card => {
      card.onclick = () => {
        const rId = card.dataset.id;
        // Scroll to map
        const mapSection = document.getElementById('floorplan-explorer-section');
        if (mapSection) {
          mapSection.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => inspectRoom(rId), 400);
      };
    });
  }

  // Event Listeners for Panning & Keyboard
  function setupEventListeners() {
    const svgWrap = document.getElementById('map2d-svg-wrap');
    if (!svgWrap) return;

    svgWrap.addEventListener('mousedown', (e) => {
      if (e.target.closest('.room-group') || e.target.closest('.ext-group')) return;
      isPanning = true;
      startPan = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
      svgWrap.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
      if (!isPanning) return;
      panOffset = { x: e.clientX - startPan.x, y: e.clientY - startPan.y };
      applyTransform();
    });

    window.addEventListener('mouseup', () => {
      if (isPanning) {
        isPanning = false;
        svgWrap.style.cursor = 'grab';
      }
    });

    // Mouse wheel zoom
    svgWrap.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.1 : -0.1;
      updateZoom(delta);
    }, { passive: false });

    // Keyboard ESC to close modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeInspector();
      }
    });
  }

  // Expose API
  window.Campus2DMap = {
    init,
    inspectRoom,
    focusBlock,
    updateFilter: (cat) => {
      currentFilter = cat;
      updateFilterDimming();
    },
    jumpToStreetView
  };

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
