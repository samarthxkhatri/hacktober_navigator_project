/* ==========================================================================
   CAMPUS DATA  —  the only file you need to edit to change places/links.

   Each location:
     id          unique key (also used in links)
     name        shown in the UI and searchable
     photo       path to the photo
     area        "campus" (outdoors) or "block2" (inside Block-II) — decides which mini-map shows it
     map         [x, y] on the 0–100 mini-map of that area
     desc, tags, keywords   shown in the info card / used by search
     links       where you can walk FROM this photo:
                 { to, dir, at?: [x%, y%], back?: "dir for the return arrow" }
                 dir = "forward" | "back" | "left" | "right" | "enter"
                 `at` = where the arrow sits on the photo, in % of width/height.
                 Reverse links are created automatically (forward<->back, left<->right,
                 enter<->back) unless you declare them yourself on the other location.

   TIP: press  E  in the app to drag arrows into place, then "Copy JSON" and paste
        the result into ARROW_OVERRIDES at the bottom of this file.
   ========================================================================== */

window.START_ID = "security-gate";

window.AREAS = {
  campus: { label: "Campus" },
  block2: { label: "Inside Block-II" },
  block3: { label: "Inside Block-III" },
};

window.LOCATIONS = [
  /* ---------------------------- OUTDOORS ---------------------------- */
  {
    id: "security-gate", name: "Security Gate", area: "campus", map: [8, 90],
    photo: "photos/security-gate.jpg",
    desc: "Main entry with the guard post and barrier. Visitors check in here.",
    tags: ["Entrance"], keywords: ["entry", "entrance", "main gate", "guard", "security", "start"],
    links: [
      { to: "gate-crossing", dir: "forward", at: [58, 74] },
      { to: "south-plaza", dir: "left", at: [24, 76] },
    ],
  },
  {
    id: "gate-crossing", name: "Gate Crossing", area: "campus", map: [14, 78],
    photo: "photos/gate-crossing.jpg",
    desc: "Zebra crossing just inside the gate. School buses park on the left.",
    tags: ["Road"], keywords: ["bus", "school bus", "zebra", "crossing", "bus parking"],
    links: [{ to: "main-junction", dir: "forward", at: [46, 64] }],
  },
  {
    id: "main-junction", name: "Main Junction", area: "campus", map: [22, 67],
    photo: "photos/main-junction.jpg",
    desc: "Road splits here. The pink glass-fronted building is on the left; two-wheeler parking runs to the right.",
    tags: ["Road"], keywords: ["junction", "intersection", "pink building", "glass building", "chowk"],
    links: [{ to: "parking-road", dir: "forward", at: [66, 62] }],
  },
  {
    id: "parking-road", name: "Parking Road", area: "campus", map: [31, 59],
    photo: "photos/parking-road.jpg",
    desc: "Two-wheeler parking on both sides of the road, shaded by trees.",
    tags: ["Parking"], keywords: ["parking", "bike", "scooter", "two wheeler", "motorcycle"],
    links: [{ to: "parking-road-north", dir: "forward", at: [62, 60] }],
  },
  {
    id: "parking-road-north", name: "Parking Road (North)", area: "campus", map: [40, 52],
    photo: "photos/parking-road-north.jpg",
    desc: "The parking road continues towards the ambulance point and Block-I.",
    tags: ["Parking"], keywords: ["parking", "bike", "scooter"],
    links: [{ to: "ambulance-junction", dir: "forward", at: [58, 66] }],
  },
  {
    id: "ambulance-junction", name: "Ambulance Junction", area: "campus", map: [50, 45],
    photo: "photos/ambulance-junction.jpg",
    desc: "Wide junction where the campus ambulance is parked. The Sports Achievement board stands ahead.",
    tags: ["Medical", "Landmark"], keywords: ["ambulance", "medical", "first aid", "sports achievement", "hoarding"],
    links: [{ to: "block1-entrance", dir: "left", at: [30, 68] }],
  },
  {
    id: "block1-entrance", name: "Block-I Entrance", area: "campus", map: [58, 34],
    photo: "photos/block1-entrance.jpg",
    desc: "Front of Block-I with the Acropolis signboard, the red sculpture and the steps up to the courtyard.",
    tags: ["Academic", "Landmark"], keywords: ["block 1", "block i", "block-1", "acropolis", "sculpture", "red cube"],
    links: [{ to: "block1-forecourt", dir: "right", at: [82, 80] }],
  },
  {
    id: "block1-forecourt", name: "Block-I Forecourt", area: "campus", map: [67, 30],
    photo: "photos/block1-forecourt.jpg",
    desc: "Block-I seen from the road, next to the tall Sports Achievement hoarding.",
    tags: ["Academic"], keywords: ["block 1", "block i", "forecourt", "sports achievement"],
    links: [{ to: "palm-crossing", dir: "forward", at: [52, 88] }],
  },
  {
    id: "palm-crossing", name: "Palm Avenue Crossing", area: "campus", map: [78, 36],
    photo: "photos/palm-crossing.jpg",
    desc: "Zebra crossing at the start of the palm-lined avenue.",
    tags: ["Road"], keywords: ["palm", "crossing", "zebra", "avenue"],
    links: [{ to: "orange-lawn", dir: "right", at: [82, 74] }],
  },
  {
    id: "orange-lawn", name: "Orange Building Lawn", area: "campus", map: [86, 47],
    photo: "photos/orange-lawn.jpg",
    desc: "The long orange academic building with its lawn and row of trees.",
    tags: ["Academic", "Green space"], keywords: ["lawn", "garden", "grass", "orange building", "trees"],
    links: [
      { to: "block2-facade", dir: "forward", at: [54, 86] },
      { to: "block2-path", dir: "right", at: [80, 80] },
    ],
  },
  {
    id: "block2-facade", name: "Block-II Facade & Hacktoberfest Showcase", area: "campus", map: [89, 53],
    photo: "photos/block2-facade.jpg",
    desc: "Main roadway perspective of Block-II showing the red entrance ramp, SKF Centre of Excellence banner, and Hacktoberfest showcase.",
    tags: ["Academic", "Landmark"], keywords: ["block 2", "block ii", "facade", "hacktoberfest", "skf", "banner", "ramp"],
    links: [
      { to: "block2-path", dir: "enter", at: [22, 60], back: "back" },
      { to: "courtyard", dir: "right", at: [85, 78], back: "left" },
    ],
  },
  {
    id: "block2-path", name: "Block-II Entrance Path", area: "campus", map: [86, 59],
    photo: "photos/block2-path.jpg",
    desc: "Paved walkway lined with potted plants leading to the Block-II entrance.",
    tags: ["Academic"], keywords: ["block 2", "block ii", "block-2", "walkway", "path"],
    links: [
      { to: "block2-door", dir: "enter", at: [58, 58], back: "back" },
      { to: "courtyard", dir: "right", at: [86, 80] },
      { to: "block2-facade", dir: "back", at: [50, 92] },
    ],
  },
  {
    id: "courtyard", name: "Block Courtyard", area: "campus", map: [76, 66],
    photo: "photos/courtyard.jpg",
    desc: "Courtyard in front of the neighbouring block, with the green carpet path and a tall lamp post.",
    tags: ["Academic"], keywords: ["courtyard", "lamp post", "block", "stairs"],
    links: [{ to: "msme-block", dir: "forward", at: [62, 90] }],
  },
  {
    id: "msme-block", name: "Block-III / MSME Entrance", area: "campus", map: [66, 73],
    photo: "photos/msme-block.jpg",
    desc: "Block-III entrance with the MSME Nodal Officers welcome board and ground entrance portal.",
    tags: ["Academic", "Entrance"], keywords: ["block 3", "block iii", "msme", "nodal officers", "block", "entrance", "door"],
    links: [
      { to: "palm-avenue", dir: "forward", at: [62, 86] },
      { to: "block3-foyer", dir: "enter", at: [44, 54], back: "back" },
    ],
  },
  {
    id: "palm-avenue", name: "Palm Avenue", area: "campus", map: [55, 82],
    photo: "photos/palm-avenue.jpg",
    desc: "Long avenue of royal palms with the steel arch over the road.",
    tags: ["Road", "Landmark"], keywords: ["palm", "avenue", "arch", "royal palm", "road"],
    links: [{ to: "palm-speedbreaker", dir: "forward", at: [50, 78] }],
  },
  {
    id: "palm-speedbreaker", name: "Palm Avenue Speed Breaker", area: "campus", map: [46, 88],
    photo: "photos/palm-speedbreaker.jpg",
    desc: "Zebra-striped speed breaker on Palm Avenue with royal palms and the MSME Nodal Officers welcome board on the left.",
    tags: ["Road", "Landmark"], keywords: ["palm", "speed breaker", "zebra", "msme", "avenue", "crossing"],
    links: [{ to: "palm-walkway", dir: "forward", at: [48, 72] }],
  },
  {
    id: "palm-walkway", name: "Royal Palm Avenue Walk", area: "campus", map: [37, 91],
    photo: "photos/palm-walkway.jpg",
    desc: "Tree-lined boulevard flanked by majestic royal palms with white-and-red painted trunks and student walkways.",
    tags: ["Road", "Green space"], keywords: ["palm avenue", "royal palm", "walkway", "trees", "students"],
    links: [{ to: "palm-promenade", dir: "forward", at: [50, 74] }],
  },
  {
    id: "palm-promenade", name: "Palm Avenue South Promenade", area: "campus", map: [28, 93],
    photo: "photos/palm-promenade.jpg",
    desc: "South section of Palm Avenue with designated two-wheeler parking under the royal palms and student walkway.",
    tags: ["Road", "Parking"], keywords: ["parking", "bikes", "scooters", "promenade", "palm avenue", "students"],
    links: [{ to: "south-plaza", dir: "forward", at: [48, 76] }],
  },
  {
    id: "south-plaza", name: "South Block Plaza Pathway", area: "campus", map: [19, 93],
    photo: "photos/south-plaza.jpg",
    desc: "Shaded paved promenade past the yellow barricade heading towards the south academic facilities, Sports Complex, and Canteen.",
    tags: ["Academic", "Walkway"], keywords: ["plaza", "pathway", "south block", "trees", "barricade"],
    links: [
      { to: "security-gate", dir: "forward", at: [46, 74] },
      { to: "sports-road", dir: "left", at: [25, 78], back: "back" },
    ],
  },

  /* ---------------------- SPORTS COMPLEX & CANTEEN HUB ---------------------- */
  {
    id: "sports-road", name: "Sports Complex & Canteen Roadway", area: "campus", map: [14, 96],
    photo: "photos/sports-road.jpg",
    desc: "Tree-shaded campus access road with zebra speed-breaker leading towards the Sports Complex, Basketball Court, AFMR, and the Canteen.",
    tags: ["Road", "Sports", "Canteen"],
    keywords: ["sports road", "canteen road", "speedbreaker", "trees", "cars", "parking"],
    links: [
      { to: "south-plaza", dir: "back", at: [50, 92] },
      { to: "sports-complex-path", dir: "forward", at: [48, 62] },
      { to: "afmr-entrance", dir: "left", at: [24, 70] },
    ],
  },
  {
    id: "afmr-entrance", name: "Faculty of Management & Research (AFMR)", area: "campus", map: [9, 98],
    photo: "photos/afmr-entrance.jpg",
    desc: "Entrance portal of the Acropolis Faculty of Management & Research (AFMR) featuring an accessible ramp, security post, and landscaped forecourt.",
    tags: ["Academic", "Entrance", "Management"],
    keywords: ["afmr", "management", "research", "faculty of management", "entrance", "mba", "ramp"],
    links: [
      { to: "sports-road", dir: "back", at: [50, 90] },
      { to: "canteen-walkway", dir: "right", at: [82, 78] },
    ],
  },
  {
    id: "sports-complex-path", name: "Sports Complex & Basketball Court Approach", area: "campus", map: [20, 98],
    photo: "photos/sports-complex-path.jpg",
    desc: "Paved campus road leading directly to the Acropolis Sports Complex, outdoor athletics facility, and regulation basketball court.",
    tags: ["Sports", "Basketball", "Athletics"],
    keywords: ["sports complex", "basketball court", "basketball", "sports", "court", "athletics", "ground", "fitness"],
    links: [
      { to: "sports-road", dir: "back", at: [50, 92] },
      { to: "canteen-walkway", dir: "right", at: [80, 75] },
    ],
  },
  {
    id: "canteen-walkway", name: "Canteen Shaded Walkway & Bike Canopy", area: "campus", map: [26, 98],
    photo: "photos/canteen-walkway.jpg",
    desc: "Herringbone-paved shaded walkway flanked by covered two-wheeler parking canopy and leafy trees, leading into the Campus Canteen.",
    tags: ["Walkway", "Parking", "Canteen"],
    keywords: ["canteen walkway", "bike shed", "canopy", "pavers", "two wheeler", "parking"],
    links: [
      { to: "canteen-plaza", dir: "forward", at: [50, 65] },
      { to: "sports-complex-path", dir: "left", at: [20, 78] },
      { to: "afmr-entrance", dir: "back", at: [50, 90] },
    ],
  },
  {
    id: "canteen-plaza", name: "Campus Canteen & Food Truck Plaza", area: "campus", map: [32, 98],
    photo: "photos/canteen-plaza.jpg",
    desc: "Vibrant campus food court and Canteen featuring a dedicated food truck, outdoor dining plaza with decorative paving, and student refreshments.",
    tags: ["Dining", "Canteen", "Food"],
    keywords: ["canteen", "food truck", "food", "cafeteria", "lunch", "snacks", "dining", "tea", "coffee"],
    links: [
      { to: "canteen-walkway", dir: "back", at: [50, 90] },
      { to: "south-plaza", dir: "left", at: [22, 75] },
    ],
  },

  /* ----------------------------- BLOCK-II ----------------------------- */
  {
    id: "block2-door", name: "Block-II Main Door", area: "block2", map: [7, 55],
    photo: "photos/block2-door.jpg",
    desc: "Ground-floor entrance of Block-II. The corridor beyond leads to the Mechanical Engineering labs.",
    tags: ["Academic", "Entrance"], keywords: ["block 2", "block ii", "block-2", "door", "entrance", "inside"],
    links: [{ to: "dept-me", dir: "forward", at: [52, 74] }],
  },
  {
    id: "dept-me", name: "Dept. of Mechanical Engineering", area: "block2", map: [21, 55],
    photo: "photos/dept-me.jpg",
    desc: "Department entrance hall. The IBM Software Centre of Excellence is straight ahead; the floor plan is on the left wall.",
    tags: ["Department", "Academic"], keywords: ["mechanical", "mech", "me department", "department", "engineering"],
    links: [
      { to: "ibm-coe", dir: "forward", at: [44, 76] },
      { to: "floor-plan", dir: "left", at: [14, 40], back: "back" },
    ],
  },
  {
    id: "floor-plan", name: "Ground Floor Plan", area: "block2", map: [21, 30],
    photo: "photos/floor-plan.jpg",
    desc: "Ground-floor plan of the Mechanical Engineering Department (Blocks 2 and 3, labs, tutorial rooms, pathways).",
    tags: ["Info"], keywords: ["map", "plan", "floor plan", "ground floor", "layout"],
    links: [],
  },
  {
    id: "ibm-coe", name: "IBM Software Centre of Excellence", area: "block2", map: [37, 55],
    photo: "photos/ibm-coe.jpg",
    desc: "Glass-door computer lab with the IBM signage. Bags are left on the shelf outside.",
    tags: ["Lab"], keywords: ["ibm", "software", "coe", "centre of excellence", "computer lab", "lab"],
    links: [{ to: "skf-corridor", dir: "forward", at: [30, 76] }],
  },
  {
    id: "skf-corridor", name: "SKF Corridor", area: "block2", map: [51, 55],
    photo: "photos/skf-corridor.jpg",
    desc: "Corridor with SKF posters and a fire-hose reel.",
    tags: ["Corridor"], keywords: ["skf", "corridor", "fire hose", "hallway"],
    links: [
      { to: "skf-coe", dir: "left", at: [20, 80], back: "right" },
      { to: "aicte-corridor", dir: "forward", at: [50, 70] },
    ],
  },
  {
    id: "skf-coe", name: "SKF Centre of Excellence (Room 23)", area: "block2", map: [51, 78],
    photo: "photos/skf-coe.jpg",
    desc: "Room 23 — the SKF Centre of Excellence, run by the Department of Mechanical Engineering.",
    tags: ["Lab"], keywords: ["skf", "coe", "room 23", "23", "centre of excellence", "bearing", "lab"],
    links: [],
  },
  {
    id: "aicte-corridor", name: "AICTE IDEA Lab Corridor", area: "block2", map: [64, 55],
    photo: "photos/aicte-corridor.jpg",
    desc: "Corridor running past the AICTE IDEA Lab glass wall.",
    tags: ["Corridor"], keywords: ["aicte", "idea lab", "corridor", "hallway"],
    links: [
      { to: "aicte-door", dir: "left", at: [14, 82], back: "right" },
      { to: "corridor-poster", dir: "forward", at: [50, 70] },
    ],
  },
  {
    id: "aicte-door", name: "AICTE IDEA Lab", area: "block2", map: [64, 30],
    photo: "photos/aicte-door.jpg",
    desc: "Entrance to the AICTE IDEA Lab — the innovation and prototyping space.",
    tags: ["Lab", "Innovation"], keywords: ["aicte", "idea lab", "innovation", "prototype", "startup", "lab"],
    links: [{ to: "aicte-inside", dir: "enter", at: [50, 84] }],
  },
  {
    id: "aicte-inside", name: "AICTE IDEA Lab (Inside)", area: "block2", map: [82, 18],
    photo: "photos/aicte-inside.jpg",
    desc: "Reception corner with the lab's vision and mission board.",
    tags: ["Lab", "Innovation"], keywords: ["aicte", "idea lab", "reception", "vision", "mission", "inside"],
    links: [],
  },
  {
    id: "corridor-poster", name: "Lab Corridor & Inter-Block Passage", area: "block2", map: [78, 55],
    photo: "photos/corridor-poster.jpg",
    desc: "The corridor further along, with the AICTE IDEA Lab poster on the left wall and passage leading towards Block-III.",
    tags: ["Corridor"], keywords: ["corridor", "hallway", "aicte", "poster", "passage", "block 3"],
    links: [
      { to: "aicte-poster", dir: "left", at: [20, 72], back: "right" },
      { to: "block3-foyer", dir: "forward", at: [50, 70], back: "left" },
    ],
  },
  {
    id: "aicte-poster", name: "AICTE IDEA Lab Poster Wall", area: "block2", map: [91, 55],
    photo: "photos/aicte-poster.jpg",
    desc: "AICTE IDEA Lab poster beside the yellow door frame.",
    tags: ["Corridor"], keywords: ["aicte", "poster", "idea lab", "wall"],
    links: [],
  },

  /* ----------------------------- BLOCK-III ---------------------------- */
  {
    id: "block3-foyer", name: "Block-III Entrance Foyer & Skylight Passage", area: "block3", map: [15, 50],
    photo: "photos/block3-foyer.jpg",
    desc: "Covered transition junction and entrance foyer connecting the main campus passage into Block-III. Features an overhead skylight with concrete tie-beams, departmental announcement board, and direct access into the academic corridor.",
    tags: ["Block 3", "Entrance", "Passage", "Foyer"],
    keywords: ["block 3", "block iii", "foyer", "skylight", "entrance", "passage", "notice board", "start"],
    links: [
      { to: "block3-corridor", dir: "forward", at: [48, 62] },
      { to: "msme-block", dir: "back", at: [50, 92] },
      { to: "corridor-poster", dir: "left", at: [18, 76] },
    ],
  },
  {
    id: "block3-corridor", name: "Block-III Academic Corridor", area: "block3", map: [38, 50],
    photo: "photos/block3-corridor.jpg",
    desc: "Main central corridor of Block-III illuminated with daylight from courtyard louvered windows on the left. Leads directly towards Room 31 and the placement lounge.",
    tags: ["Block 3", "Corridor"],
    keywords: ["block 3", "block iii", "corridor", "hallway", "aisle", "windows", "gate"],
    links: [
      { to: "block3-lounge", dir: "forward", at: [50, 68] },
      { to: "block3-room31", dir: "right", at: [76, 52] },
      { to: "block3-foyer", dir: "back", at: [50, 92] },
    ],
  },
  {
    id: "block3-room31", name: "Room 31 · 3D Printer & Faculty Cabin", area: "block3", map: [38, 25],
    photo: "photos/block3-room31.jpg",
    desc: "Room 31: 3D Printing Prototyping Cell and faculty cabin of Mr. Hiraman Sikdar (Assistant Professor). Dedicated to additive manufacturing and rapid prototyping.",
    tags: ["Block 3", "Lab", "3D Printing"],
    keywords: ["room 31", "31", "3d printer", "hiraman sikdar", "additive manufacturing", "prototyping", "lab"],
    links: [
      { to: "block3-corridor", dir: "back", at: [50, 90] },
    ],
  },
  {
    id: "block3-lounge", name: "Block-III Placement Lounge & Room 35", area: "block3", map: [65, 50],
    photo: "photos/block3-lounge.jpg",
    desc: "Student concourse and waiting lounge outside Room 35 with steel seating, Acropolis placement achievement hoarding (GM, Unilever, etc.), and view towards the rear campus gate.",
    tags: ["Block 3", "Lounge", "Placement"],
    keywords: ["block 3", "lounge", "placement", "waiting", "seating", "room 35 entrance", "bench"],
    links: [
      { to: "block3-thermal-lab", dir: "enter", at: [38, 48] },
      { to: "block3-corridor", dir: "back", at: [50, 92] },
    ],
  },
  {
    id: "block3-thermal-lab", name: "Room 35 · Heat & Mass Transfer Lab", area: "block3", map: [65, 75],
    photo: "photos/block3-thermal-lab.jpg",
    desc: "Room 35: Heat and Mass Transfer & Thermal Engineering Laboratory. Features natural convection apparatus, thermal conductivity of insulating powder testing rig, and Stefan-Boltzmann constant setups.",
    tags: ["Block 3", "Lab", "Thermal"],
    keywords: ["room 35", "35", "heat and mass transfer", "thermal engineering", "convection", "stefan boltzmann", "insulating powder", "lab"],
    links: [
      { to: "block3-lounge", dir: "back", at: [50, 90] },
    ],
  },
];

/* Arrow position overrides — paste the JSON copied from Edit mode (press E) here.
   Format:  "fromId>toId": [x%, y%]  */
window.ARROW_OVERRIDES = {};
