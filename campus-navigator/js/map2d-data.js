/* ==========================================================================
   CAMPUS 2D FLOOR PLAN DATA
   Department of Mechanical Engineering
   Acropolis Institute of Technology and Research (AITR), Indore
   Based on the official Ground Floor Plan blueprint (Blocks 1, 2, and 3).
   ========================================================================== */

window.MAP2D_DATA = {
  metadata: {
    title: "Ground Floor Plan",
    department: "Department of Mechanical Engineering",
    institute: "Acropolis Institute of Technology and Research, Indore",
    orientation: "North (Right)",
    blocks: [
      { id: "all", name: "All Areas", count: 41 },
      { id: "block1", name: "Block 1 (Auditorium & Workshop)", count: 9 },
      { id: "block2", name: "Block 2 (Centers of Excellence)", count: 10 },
      { id: "block3", name: "Block 3 (Core Mechanical Labs & Extension)", count: 12 },
      { id: "palm-extension", name: "East Extension (Palm Avenue)", count: 5 },
      { id: "sports-canteen", name: "Sports Complex & Canteen Hub", count: 4 }
    ],
    categories: [
      { id: "all", name: "All Spaces", icon: "🏢", color: "#64748b" },
      { id: "coe", name: "Centers of Excellence", icon: "⭐", color: "#f59e0b" },
      { id: "lab", name: "Specialized Labs", icon: "🔬", color: "#06b6d4" },
      { id: "classroom", name: "Classrooms & Tutorials", icon: "📚", color: "#3b82f6" },
      { id: "seminar", name: "Auditorium & Seminar", icon: "🏛️", color: "#8b5cf6" },
      { id: "office", name: "Faculty & Administration", icon: "👔", color: "#10b981" },
      { id: "amenity", name: "Corridors & Amenities", icon: "🚻", color: "#ec4899" },
      { id: "sports", name: "Sports & Dining Hub", icon: "🏀", color: "#f97316" }
    ]
  },

  // Rooms and spaces across Blocks 1, 2, and 3
  rooms: [
    /* ------------------------------ BLOCK 1 ------------------------------ */
    {
      id: "b1-seminar",
      code: "B1-SH",
      block: "block1",
      blockLabel: "Block 1",
      name: "Department Seminar Hall / Auditorium",
      blueprintLabel: "SEMINAR HALL",
      dimensions: "34'4\" × 34'0\"",
      category: "seminar",
      categoryLabel: "Auditorium & Seminar",
      capacity: "180 Seats",
      inCharge: "Prof. Mech Events Committee",
      desc: "Tiered multi-purpose acoustic auditorium with stepped amphitheater seating, central audio-visual projection, and stage lighting. Used for departmental guest lectures, national technical symposiums, research seminars, and student orientation.",
      equipment: [
        "Stepped Curved Amphitheater Seating (180 seats)",
        "Dual High-Lumen Laser Projectors & Motorized Screens",
        "Dolby Sound Reinforcement with Wireless Mic Array",
        "Stage Green Room & Podiums for Keynote Speakers",
        "Centralized Air Conditioning System"
      ],
      shape: "tiered_hall",
      // SVG geometry coordinates [points or rect]
      svg: {
        type: "polygon",
        points: "120,110 230,110 230,230 120,230",
        labelPos: [175, 170],
        arch: "curved_front"
      },
      tags: ["Seminar", "Auditorium", "Lectures", "Conferences"],
      streetViewId: "block1-entrance"
    },
    {
      id: "b1-drawing",
      code: "B1-DH",
      block: "block1",
      blockLabel: "Block 1",
      name: "Engineering Drawing Hall & Design Studio",
      blueprintLabel: "DRAWING HALL",
      dimensions: "34'4\" × 34'0\"",
      category: "lab",
      categoryLabel: "Specialized Labs",
      capacity: "70 Drafting Workstations",
      inCharge: "Dr. Engineering Graphics Lab",
      desc: "Spacious naturally-lit drawing studio equipped with drafting boards, model demonstration stages, and digital display screens for Engineering Graphics, Machine Drawing, and Computer-Aided Drafting fundamentals.",
      equipment: [
        "70 Adjustable Drafting Tables with Mini-Drafters",
        "3D Geometric Model Display Cabinets",
        "Large-Format Smart Whiteboard with Digital Projector",
        "AutoCAD 2D/3D Design Demonstration Workstation"
      ],
      svg: {
        type: "polygon",
        points: "235,110 325,110 310,230 220,230",
        labelPos: [270, 170]
      },
      tags: ["Drawing", "Drafting", "Graphics", "Design Studio"],
      streetViewId: "block1-forecourt"
    },
    {
      id: "b1-tr1",
      code: "TR-101",
      block: "block1",
      blockLabel: "Block 1",
      name: "Tutorial Room TR-101",
      blueprintLabel: "TUTORIAL 19'4\"X25'10\"",
      dimensions: "19'4\" × 25'10\"",
      category: "classroom",
      categoryLabel: "Classrooms & Tutorials",
      capacity: "45 Students",
      inCharge: "Faculty Mech UG Coordinator",
      desc: "Smart tutorial classroom dedicated to small-group academic discussions, numerical problem solving, and GATE/competitive exam mentoring sessions.",
      equipment: [
        "Ergonomic Student Tablet Desks",
        "Interactive Touch Display Panel & Document Camera",
        "Dual Marker Boards & Acoustic Wall Paneling"
      ],
      svg: {
        type: "polygon",
        points: "325,110 380,110 365,230 310,230",
        labelPos: [345, 170]
      },
      tags: ["Tutorial", "Classroom", "Smart Board", "TR-101"]
    },
    {
      id: "b1-workshop",
      code: "LAB-1",
      block: "block1",
      blockLabel: "Block 1",
      name: "Central Mechanical Workshop & Foundry (Lab-1)",
      blueprintLabel: "LAB - 1 41'10\"X39'6\"",
      dimensions: "41'10\" × 39'6\"",
      category: "lab",
      categoryLabel: "Specialized Labs",
      capacity: "50 Students",
      inCharge: "Workshop Superintendent",
      desc: "Heavy machinery fabrication and foundry workshop. Houses industrial-grade centre lathes, vertical milling machines, shaper machines, welding stations, foundry moulding sand preparation, and blacksmithing forges.",
      equipment: [
        "Geared Head Precision Centre Lathes (12 units)",
        "Universal Milling Machine & Shaper Machines",
        "MIG / TIG / Electric Arc Welding Booths",
        "Foundry Pit & Sand Rammer / Sieve Shakers",
        "Heavy Duty Radial Drilling Machine"
      ],
      svg: {
        type: "polygon",
        points: "200,240 330,240 310,380 180,380",
        labelPos: [255, 310]
      },
      tags: ["Workshop", "Foundry", "Welding", "Machining", "Lathe", "Lab-1"]
    },
    {
      id: "b1-complab1",
      code: "COMP-1",
      block: "block1",
      blockLabel: "Block 1",
      name: "Computer Lab 1 / Simulation Studio",
      blueprintLabel: "COMP LAB 61'2\"X34'2\"",
      dimensions: "61'2\" × 34'2\"",
      category: "lab",
      categoryLabel: "Specialized Labs",
      capacity: "60 Workstations",
      inCharge: "Lab In-Charge Computer Applications",
      desc: "High-performance computational lab used for Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD), MATLAB mathematical simulations, and numerical design modeling.",
      equipment: [
        "60 HP Intel Core i7 High-Performance Workstations",
        "ANSYS Mechanical & Fluent Multiphysics Suite",
        "MATLAB & Simulink Campus License",
        "SolidWorks Simulation & HyperWorks",
        "10 Gbps High-Speed Campus Network"
      ],
      svg: {
        type: "polygon",
        points: "335,240 440,240 420,380 315,380",
        labelPos: [380, 310]
      },
      tags: ["Computer Lab", "ANSYS", "CFD", "Simulation", "FEA"]
    },
    {
      id: "b1-tr2",
      code: "TR-102",
      block: "block1",
      blockLabel: "Block 1",
      name: "Tutorial Room TR-102",
      blueprintLabel: "TUTORIAL 20'2\"X34'2\"",
      dimensions: "20'2\" × 34'2\"",
      category: "classroom",
      categoryLabel: "Classrooms & Tutorials",
      capacity: "45 Students",
      inCharge: "Senior Faculty Advisor",
      desc: "Modern teaching room equipped for second and third-year Mechanical Engineering core curriculum lectures, tutorials, and project team reviews.",
      equipment: [
        "Smart Classroom Display with Wireless Screencast",
        "Hybrid AV Microphone System",
        "Whiteboards and Reference Chart Displays"
      ],
      svg: {
        type: "polygon",
        points: "445,240 500,240 480,380 425,380",
        labelPos: [462, 310]
      },
      tags: ["Tutorial", "Classroom", "TR-102", "Smart Room"]
    },
    {
      id: "b1-stair1",
      code: "STAIR-1",
      block: "block1",
      blockLabel: "Block 1",
      name: "Staircase 1 (Block 1 West Wing)",
      blueprintLabel: "STAIRCASE",
      dimensions: "16'1\" × 12'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      desc: "Wide staircase providing safe vertical transit to the first and second floor lecture halls and research laboratories.",
      equipment: ["Fire Hose Cabinet", "Emergency Exit Signage", "Non-slip Granite Treads"],
      svg: {
        type: "rect",
        x: 320, y: 550, width: 50, height: 60,
        labelPos: [345, 580]
      },
      tags: ["Stairs", "Exit", "First Floor Access"]
    },
    {
      id: "b1-staff",
      code: "B1-FAC",
      block: "block1",
      blockLabel: "Block 1",
      name: "Faculty Staff Room (Block 1)",
      blueprintLabel: "STAFF ROOM 16'1\"X25'3\"",
      dimensions: "16'1\" × 25'3\"",
      category: "office",
      categoryLabel: "Faculty & Administration",
      capacity: "12 Faculty Members",
      inCharge: "Senior Faculty Coordinator",
      desc: "Faculty cabins for professors of Manufacturing Science, Materials Engineering, and Thermal Systems. Includes individual cabins, discussion table, and student consultation desks.",
      equipment: [
        "12 Faculty Cabins with PC & High-speed LAN",
        "Departmental Library & Reference Journal Racks",
        "Meeting Conference Table"
      ],
      svg: {
        type: "rect",
        x: 170, y: 550, width: 145, height: 60,
        labelPos: [242, 580]
      },
      tags: ["Staff", "Faculty", "Cabins", "Professors"]
    },
    {
      id: "b1-washroom",
      code: "B1-WC",
      block: "block1",
      blockLabel: "Block 1",
      name: "Washrooms & Restrooms (Block 1)",
      blueprintLabel: "TOILET / REST ROOM",
      dimensions: "16'1\" × 11'9\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      desc: "Clean, well-maintained sanitation facilities for students and faculty.",
      equipment: ["Touchless Fixtures", "Water Conservation Aerators"],
      svg: {
        type: "rect",
        x: 70, y: 550, width: 95, height: 60,
        labelPos: [117, 580]
      },
      tags: ["Washroom", "Restroom", "Toilet"]
    },

    /* ------------------------------ BLOCK 2 ------------------------------ */
    {
      id: "b2-ibm",
      code: "IBM-COE",
      block: "block2",
      blockLabel: "Block 2",
      name: "IBM Software Centre of Excellence",
      blueprintLabel: "COMP LAB 61'2\"X34'2\"",
      dimensions: "61'2\" × 34'2\"",
      category: "coe",
      categoryLabel: "Centers of Excellence",
      capacity: "65 High-End Workstations",
      inCharge: "Dr. Head of IBM Centre of Excellence",
      desc: "Premier industry-academic facility established jointly with IBM. Dedicated to Cloud Computing, Cognitive Systems, Enterprise Software Development, AI, and Big Data Analytics. Students work on live IBM certification curricula and industry research capstones.",
      equipment: [
        "65 IBM ThinkStation Workstations with Dual Displays",
        "IBM Cloud Pak & Watson AI Learning Environments",
        "Enterprise Linux Server Rack & Dedicated Switchboard",
        "Acoustic Glass Partitions with IBM Signage",
        "Baggage Cubicles & Biometric Entry Access"
      ],
      svg: {
        type: "polygon",
        points: "540,110 650,110 630,230 520,230",
        labelPos: [585, 170]
      },
      tags: ["IBM", "COE", "Software", "AI", "Cloud", "Center of Excellence", "Computer Lab"],
      streetViewId: "ibm-coe"
    },
    {
      id: "b2-tr1",
      code: "TR-201",
      block: "block2",
      blockLabel: "Block 2",
      name: "Tutorial Room TR-201",
      blueprintLabel: "TUTORIAL 20'2\"X34'2\"",
      dimensions: "20'2\" × 34'2\"",
      category: "classroom",
      categoryLabel: "Classrooms & Tutorials",
      capacity: "45 Students",
      inCharge: "Senior Faculty Advisor",
      desc: "Airy, tech-enabled classroom used for Kinematics of Machines, Dynamics, and Mechanics of Solids lectures and interactive problem-solving modules.",
      equipment: [
        "Interactive Ultra-Short-Throw Projector",
        "Comfortable Ergonomic Seating",
        "Magnetic Whiteboard System"
      ],
      svg: {
        type: "polygon",
        points: "655,110 710,110 690,230 635,230",
        labelPos: [672, 170]
      },
      tags: ["Tutorial", "Classroom", "TR-201"]
    },
    {
      id: "b2-skf",
      code: "SKF-COE",
      block: "block2",
      blockLabel: "Block 2",
      name: "SKF Centre of Excellence (Room 23)",
      blueprintLabel: "LAB 26'10\"X34'0\"",
      dimensions: "26'10\" × 34'0\"",
      category: "coe",
      categoryLabel: "Centers of Excellence",
      capacity: "35 Students",
      inCharge: "Prof. In-Charge Tribology & Machine Health",
      desc: "State-of-the-art specialized research laboratory established in partnership with SKF Bearings. Focuses on Machine Condition Monitoring, Vibration Spectrum Analysis, Bearing Tribology, Lubrication Engineering, and Predictive Maintenance for heavy industry.",
      equipment: [
        "SKF Machine Condition Advisor & Multilog On-line System",
        "Vibration Spectrum Analyzer & Bearing Test Rigs",
        "Dynamic Balancing Demonstration Apparatus",
        "Lubrication Oil Analysis & Viscosity Measurement Kit",
        "Cut-section Industrial Bearing Display Museum"
      ],
      svg: {
        type: "polygon",
        points: "510,240 600,240 580,380 490,380",
        labelPos: [545, 310]
      },
      tags: ["SKF", "COE", "Room 23", "Vibration", "Bearings", "Tribology", "Condition Monitoring"],
      streetViewId: "skf-coe"
    },
    {
      id: "b2-tr2",
      code: "TR-202",
      block: "block2",
      blockLabel: "Block 2",
      name: "Tutorial Room TR-202",
      blueprintLabel: "TUTORIAL 19'4\"X25'10\"",
      dimensions: "19'4\" × 25'10\"",
      category: "classroom",
      categoryLabel: "Classrooms & Tutorials",
      capacity: "40 Students",
      inCharge: "Faculty Academic Counselor",
      desc: "Dedicated classroom for Department Electives, Heat Transfer modeling, and Renewable Energy Systems tutorials.",
      equipment: [
        "Smart Classroom Display Screen",
        "Acoustic Wall Cladding",
        "High-Speed Wi-Fi 6 Access Point"
      ],
      svg: {
        type: "polygon",
        points: "605,240 660,240 640,380 585,380",
        labelPos: [622, 310]
      },
      tags: ["Tutorial", "Classroom", "TR-202"]
    },
    {
      id: "b2-idea",
      code: "IDEA-LAB",
      block: "block2",
      blockLabel: "Block 2",
      name: "AICTE IDEA Lab / Maker & Prototyping Space",
      blueprintLabel: "LAB 25'10\"X34'0\"",
      dimensions: "25'10\" × 34'0\"",
      category: "coe",
      categoryLabel: "Centers of Excellence",
      capacity: "45 Makers & Researchers",
      inCharge: "Chief Mentor & IDEA Lab Coordinator",
      desc: "Nationally funded AICTE (All India Council for Technical Education) IDEA (Idea Development, Evaluation & Application) Lab. Equipped with state-of-the-art digital fabrication machinery, 3D printers, laser cutters, CNC routers, electronics prototyping stations, IoT testing rigs, and rapid prototyping tools for interdisciplinary student startups.",
      equipment: [
        "Industrial SLA & FDM High-Precision 3D Printers",
        "CO2 Laser Cutting & Engraving Machine",
        "Desktop 4-Axis CNC Milling & PCB Router",
        "Digital DSO Oscilloscopes & IoT Soldering Stations",
        "Vinyl Cutter, Power Tools & Rapid Prototyping Benches"
      ],
      svg: {
        type: "polygon",
        points: "665,240 755,240 735,380 645,380",
        labelPos: [700, 310]
      },
      tags: ["AICTE", "IDEA Lab", "Maker Space", "3D Printing", "Robotics", "IoT", "Innovation", "Laser Cutter"],
      streetViewId: "aicte-inside"
    },
    {
      id: "b2-staff",
      code: "B2-STAFF",
      block: "block2",
      blockLabel: "Block 2",
      name: "Staff Room & Faculty Workstations (Block 2)",
      blueprintLabel: "STAFF ROOM 25'10\"X21'11\"",
      dimensions: "25'10\" × 21'11\"",
      category: "office",
      categoryLabel: "Faculty & Administration",
      capacity: "16 Faculty Members",
      inCharge: "Senior Faculty In-Charge Block 2",
      desc: "Primary departmental faculty room for professors and lecturers of Mechanical Engineering. Includes consultation space for student academic guidance and research project mentoring.",
      equipment: [
        "16 Computer Workstations with Dedicated LAN",
        "Faculty Library & Curriculum Archival Cabinets",
        "Student Discussion & Counseling Area"
      ],
      svg: {
        type: "polygon",
        points: "630,390 730,390 710,500 610,500",
        labelPos: [670, 445]
      },
      tags: ["Staff Room", "Faculty", "Block 2", "Faculty Cabins"]
    },
    {
      id: "b2-foyer",
      code: "B2-FOYER",
      block: "block2",
      blockLabel: "Block 2",
      name: "Dept. of Mechanical Engineering Entrance Lobby",
      blueprintLabel: "DEPT ENTRANCE / BLUEPRINT WALL",
      dimensions: "22'0\" × 18'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      desc: "Central entrance foyer to the Department of Mechanical Engineering. Features the official departmental Ground Floor Plan mounted on the wall, notice boards, and corridor leading to IBM, SKF, and AICTE labs.",
      equipment: [
        "Official Ground Floor Plan Display Board",
        "Student Academic Achievement Hoardings",
        "Directional Wayfinding Signage to Labs",
        "Visitor Welcome Reception Point"
      ],
      svg: {
        type: "rect",
        x: 480, y: 400, width: 120, height: 90,
        labelPos: [540, 445]
      },
      tags: ["Entrance", "Lobby", "Foyer", "Floor Plan Wall", "Reception"],
      streetViewId: "dept-me"
    },
    {
      id: "b2-hod",
      code: "HOD-ME",
      block: "block2",
      blockLabel: "Block 2",
      name: "Head of Department (HOD) Office",
      blueprintLabel: "HOD ROOM 16'1\"X24'0\"",
      dimensions: "16'1\" × 24'0\"",
      category: "office",
      categoryLabel: "Faculty & Administration",
      capacity: "Executive Office + 10 Guests",
      inCharge: "Head, Dept. of Mechanical Engineering",
      desc: "Executive office of the Head of the Mechanical Engineering Department. Fitted with executive conference seating, digital institutional dashboard, and departmental archives.",
      equipment: [
        "Executive HOD Workstation & Institutional Terminal",
        "10-Seat Conference Table for Faculty Reviews",
        "Accreditation & NBA / NAAC Documentation Archive",
        "Visitor Waiting Lounge"
      ],
      svg: {
        type: "rect",
        x: 520, y: 550, width: 95, height: 60,
        labelPos: [567, 580]
      },
      tags: ["HOD", "Head of Department", "Office", "Executive", "Administration"]
    },
    {
      id: "b2-adm",
      code: "ADM-OFF",
      block: "block2",
      blockLabel: "Block 2",
      name: "Department Administrative Office",
      blueprintLabel: "OFFICE ADM 15'X24'0\"",
      dimensions: "15'0\" × 24'0\"",
      category: "office",
      categoryLabel: "Faculty & Administration",
      inCharge: "Administrative Officer",
      desc: "Central administrative office for student records, timetable schedules, university examination paperwork, and departmental official correspondence.",
      equipment: [
        "Administrative Multi-Station Network",
        "Student Records & Confidential Examination Safe",
        "Public Information & Certificate Issuance Desk"
      ],
      svg: {
        type: "rect",
        x: 430, y: 550, width: 85, height: 60,
        labelPos: [472, 580]
      },
      tags: ["Admin", "Administration", "Office", "Records", "Exam Cell"]
    },
    {
      id: "b2-conf",
      code: "B2-CONF",
      block: "block2",
      blockLabel: "Block 2",
      name: "Department Faculty Conference Room",
      blueprintLabel: "CONFERENCE / FACULTY 16'1\"X24'0\"",
      dimensions: "16'1\" × 24'0\"",
      category: "office",
      categoryLabel: "Faculty & Administration",
      capacity: "20 Seats",
      inCharge: "Department Secretary",
      desc: "Formal meeting room for departmental meetings, Board of Studies discussions, faculty development workshops, and industry visitor interactions.",
      equipment: [
        "20-Seat Teak Wood Oval Conference Table",
        "Video Conferencing Camera & Dual Display Screens",
        "Acoustic Glass Walls and Soundproofing"
      ],
      svg: {
        type: "rect",
        x: 620, y: 550, width: 85, height: 60,
        labelPos: [662, 580]
      },
      tags: ["Conference", "Meeting Room", "Faculty", "Board of Studies"]
    },

    /* ------------------------------ BLOCK 3 ------------------------------ */
    {
      id: "b3-cadcam",
      code: "B3-CAD",
      block: "block3",
      blockLabel: "Block 3",
      name: "CAD / CAM & CNC Machining Simulation Lab",
      blueprintLabel: "COMP LAB 61'2\"X34'2\"",
      dimensions: "61'2\" × 34'2\"",
      category: "lab",
      categoryLabel: "Specialized Labs",
      capacity: "60 Students",
      inCharge: "Prof. In-Charge CAD/CAM Center",
      desc: "Dedicated advanced design and computer-aided manufacturing laboratory. Equipped with Siemens NX, PTC Creo, Mastercam, and CNC simulator consoles for automated tool path generation and precision part modeling.",
      equipment: [
        "60 CAD Workstations with Dedicated GPU Accelerators",
        "Siemens NX & SolidWorks CAD/CAM Software Licenses",
        "Mastercam CNC Code Generation Workstation",
        "Interactive Large Smart Display for Code Demonstration"
      ],
      svg: {
        type: "polygon",
        points: "765,110 875,110 855,230 745,230",
        labelPos: [810, 170]
      },
      tags: ["CAD", "CAM", "CNC", "Siemens NX", "Design", "SolidWorks"]
    },
    {
      id: "b3-tr1",
      code: "TR-301",
      block: "block3",
      blockLabel: "Block 3",
      name: "Tutorial Room TR-301",
      blueprintLabel: "TUTORIAL 17'4\"X25'10\"",
      dimensions: "17'4\" × 25'10\"",
      category: "classroom",
      categoryLabel: "Classrooms & Tutorials",
      capacity: "40 Students",
      inCharge: "Faculty Mentor Final Year",
      desc: "Classroom for advanced mechanical engineering electives such as Power Plant Engineering, Mechatronics, and Industrial Robotics.",
      equipment: [
        "High-Resolution Short-Throw Projector",
        "Modern Ergonomic Chairs with Tablet Arms",
        "Audio System with Wireless Microphones"
      ],
      svg: {
        type: "polygon",
        points: "880,110 935,110 915,230 860,230",
        labelPos: [897, 170]
      },
      tags: ["Tutorial", "Classroom", "TR-301"]
    },
    {
      id: "b3-auto",
      code: "LAB-AUTO",
      block: "block3",
      blockLabel: "Block 3",
      name: "Automobile & IC Engines Laboratory",
      blueprintLabel: "LAB 26'10\"X34'0\"",
      dimensions: "26'10\" × 34'0\"",
      category: "lab",
      categoryLabel: "Specialized Labs",
      capacity: "35 Students",
      inCharge: "Prof. Automotive Research Cell",
      desc: "Hands-on internal combustion engine testing laboratory. Features multi-cylinder petrol and diesel engine test rigs with eddy current dynamometers, computerised performance data logging, and cut-section automotive transmission assemblies.",
      equipment: [
        "Computerized Multi-Cylinder Petrol Engine Test Rig",
        "Four-Stroke Variable Compression Ratio (VCR) Diesel Engine",
        "Eddy Current & Hydraulic Dynamometers",
        "Exhaust Gas Emission Analyzer & Smoke Meter",
        "Cut-Section Differential, Gearbox & Chassis Display"
      ],
      svg: {
        type: "polygon",
        points: "740,240 825,240 805,380 720,380",
        labelPos: [772, 310]
      },
      tags: ["Automobile", "IC Engine", "Dynamometer", "Automotive", "Diesel", "Petrol Engine"]
    },
    {
      id: "b3-fm",
      code: "LAB-FM",
      block: "block3",
      blockLabel: "Block 3",
      name: "Fluid Mechanics & Hydraulic Machinery Lab",
      blueprintLabel: "LAB 26'10\"X34'0\"",
      dimensions: "26'10\" × 34'0\"",
      category: "lab",
      categoryLabel: "Specialized Labs",
      capacity: "35 Students",
      inCharge: "Dr. Fluid Dynamics & Turbo-Machinery",
      desc: "Laboratory for studying fluid behavior and industrial hydraulic power generation. Equipped with working Pelton Wheel, Francis Turbine, Kaplan Turbine, Bernoulli theorem rigs, and flow measurement benches.",
      equipment: [
        "Pelton Wheel Impulse Turbine Test Rig",
        "Francis Inward Flow Reaction Turbine Apparatus",
        "Kaplan Axial Flow Turbine Test Bench",
        "Centrifugal & Reciprocating Multistage Pump Rigs",
        "Venturimeter, Orifice & Notch Calibration Benches"
      ],
      svg: {
        type: "polygon",
        points: "830,240 915,240 895,380 810,380",
        labelPos: [862, 310]
      },
      tags: ["Fluid Mechanics", "Hydraulics", "Turbine", "Pelton Wheel", "Pumps", "Flow"]
    },
    {
      id: "b3-thermal",
      code: "ROOM-35",
      block: "block3",
      blockLabel: "Block 3",
      name: "Heat and Mass Transfer & Thermal Engineering Lab (Room 35)",
      blueprintLabel: "LAB 35 (25'10\"X34'0\")",
      dimensions: "25'10\" × 34'0\"",
      category: "lab",
      categoryLabel: "Specialized Labs",
      capacity: "35 Students",
      inCharge: "Senior Faculty, Thermal Engineering Stream",
      desc: "Comprehensive thermodynamics and heat transfer laboratory (Room 35). Equipped with working test rigs for conduction, natural convection, forced convection, Stefan-Boltzmann radiation constant verification, thermal conductivity of insulating powder, and heat exchanger performance.",
      equipment: [
        "Natural Convection Heat Transfer Apparatus",
        "Thermal Conductivity of Insulating Powder Testing Bench",
        "Stefan-Boltzmann Radiation Constant Verification Rig",
        "Shell and Tube Heat Exchanger Experimental Unit",
        "Pin-Fin Natural & Forced Convection Heat Transfer Rig",
        "Parallel & Counter Flow Heat Exchanger Apparatus"
      ],
      photo: "photos/block3-thermal-lab.jpg",
      streetViewId: "block3-thermal-lab",
      svg: {
        type: "polygon",
        points: "920,240 1005,240 985,380 900,380",
        labelPos: [952, 310]
      },
      tags: ["Room 35", "Heat Transfer", "Thermal", "Convection", "Insulating Powder", "Stefan Boltzmann", "Block 3"]
    },
    {
      id: "b3-room31",
      code: "ROOM-31",
      block: "block3",
      blockLabel: "Block 3",
      name: "3D Printer Prototyping Cell & Faculty Cabin (Room 31)",
      blueprintLabel: "ROOM 31 / 3D PRINTER",
      dimensions: "16'1\" × 15'0\"",
      category: "lab",
      categoryLabel: "Specialized Labs",
      capacity: "12 Students & Researchers",
      inCharge: "Mr. Hiraman Sikdar (Assistant Professor)",
      desc: "Specialized 3D printing and digital prototyping laboratory under the supervision of Prof. Hiraman Sikdar. Houses precision FDM/SLA additive manufacturing systems, slicing workstations, and 3D geometric verification equipment.",
      equipment: [
        "High-Precision FDM 3D Printers",
        "3D Toolpath & Slicing Software Workstations",
        "Additive Prototyping Material Storage",
        "Post-Processing & Finishing Station",
        "Faculty Research & Consultation Desk"
      ],
      photo: "photos/block3-room31.jpg",
      streetViewId: "block3-room31",
      svg: {
        type: "polygon",
        points: "765,390 830,390 815,490 750,490",
        labelPos: [790, 440]
      },
      tags: ["3D Printer", "Additive Manufacturing", "Room 31", "Hiraman Sikdar", "Prototyping", "Block 3"]
    },
    {
      id: "b3-lounge",
      code: "B3-LOUNGE",
      block: "block3",
      blockLabel: "Block 3",
      name: "Block-III Placement Showcase Lounge & Waiting Area",
      blueprintLabel: "STUDENT LOUNGE & FOYER",
      dimensions: "24'0\" × 16'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      capacity: "20 Students",
      desc: "Student concourse and waiting lounge outside Room 35. Features steel bench seating, Acropolis placement achievement hoarding (GM, Unilever, etc.), and aisle leading to the rear security gate.",
      equipment: [
        "Student Ergonomic Waiting Benches",
        "Acropolis Placement Achievement Hoarding",
        "Directional Wayfinding to Labs & Rear Exit"
      ],
      photo: "photos/block3-lounge.jpg",
      streetViewId: "block3-lounge",
      svg: {
        type: "polygon",
        points: "835,390 910,390 895,490 820,490",
        labelPos: [865, 440]
      },
      tags: ["Lounge", "Placement", "Waiting Area", "Block 3", "Room 35 Access"]
    },
    {
      id: "b3-metro",
      code: "LAB-MET",
      block: "block3",
      blockLabel: "Block 3",
      name: "Metrology & Quality Assurance Laboratory",
      blueprintLabel: "STAFF ROOM / PROJECT LAB 16'1\"X25'0\"",
      dimensions: "16'1\" × 25'0\"",
      category: "lab",
      categoryLabel: "Specialized Labs",
      capacity: "25 Students",
      inCharge: "Faculty Quality Control In-Charge",
      desc: "High-precision measurement and quality control laboratory. Houses profile projectors, toolmakers microscopes, surface roughness testers, slip gauge comparators, and angle measurement instruments.",
      equipment: [
        "Optical Profile Projector with Digital Micrometer Heads",
        "Toolmakers Microscope with 30x Magnification",
        "Electronic Surface Roughness Tester (Ra, Rz values)",
        "Sine Bars, Bevel Protractors & Grade 0 Slip Gauge Sets",
        "Pneumatic & Mechanical Comparator Units"
      ],
      svg: {
        type: "polygon",
        points: "915,390 995,390 980,490 900,490",
        labelPos: [948, 440]
      },
      tags: ["Metrology", "Measurement", "Quality Control", "Inspection", "Microscope"]
    },
    {
      id: "b3-foyer",
      code: "B3-FOYER",
      block: "block3",
      blockLabel: "Block 3",
      name: "Block-III Entrance Foyer & Skylight Passage",
      blueprintLabel: "BLOCK-III FOYER / ENTRY",
      dimensions: "20'0\" × 18'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      desc: "Covered transition junction and entrance foyer connecting the main campus passage into Block-III. Features an open overhead skylight with tie-beams, departmental announcement board, and corridor access.",
      photo: "photos/block3-foyer.jpg",
      streetViewId: "block3-foyer",
      svg: {
        type: "rect",
        x: 755, y: 550, width: 60, height: 60,
        labelPos: [785, 580]
      },
      tags: ["Block 3", "Foyer", "Entrance", "Skylight", "Notice Board"]
    },
    {
      id: "b3-stair3",
      code: "STAIR-3",
      block: "block3",
      blockLabel: "Block 3",
      name: "Staircase 3 (Block 3 East Wing)",
      blueprintLabel: "STAIRCASE",
      dimensions: "16'1\" × 12'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      desc: "East wing stairwell providing emergency exit and access to upper floor mechanical laboratories and research centers.",
      equipment: ["Fire Extinguisher Station", "Safety Handrails"],
      svg: {
        type: "rect",
        x: 710, y: 550, width: 45, height: 60,
        labelPos: [732, 580]
      },
      tags: ["Stairs", "Staircase 3", "East Access"]
    },
    {
      id: "b3-staff",
      code: "B3-OFF",
      block: "block3",
      blockLabel: "Block 3",
      name: "Staff Office & Lab In-Charge Cabins (Block 3)",
      blueprintLabel: "OFFICE 16'1\"X24'0\"",
      dimensions: "16'1\" × 24'0\"",
      category: "office",
      categoryLabel: "Faculty & Administration",
      capacity: "10 Faculty / Lab In-Charges",
      inCharge: "Block 3 Lab Administrator",
      desc: "Faculty cabins for automobile, fluid mechanics, and metrology professors and technical assistants.",
      equipment: ["Computer Terminals", "Lab Consumable Requisition Desk"],
      svg: {
        type: "rect",
        x: 820, y: 550, width: 85, height: 60,
        labelPos: [862, 580]
      },
      tags: ["Office", "Staff", "Block 3", "Faculty"]
    },
    {
      id: "b3-corner",
      code: "B3-STORE",
      block: "block3",
      blockLabel: "Block 3",
      name: "Department Tool Crib & Component Store",
      blueprintLabel: "REST ROOM / STORE 24'X17'",
      dimensions: "24'0\" × 17'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      inCharge: "Central Store Officer",
      desc: "Secure inventory storage for cutting tools, measuring probes, consumables, spare parts, and raw material stocks.",
      equipment: ["Industrial Tool Racks", "Inventory Tracking Terminal"],
      svg: {
        type: "polygon",
        points: "910,550 1020,550 1000,610 890,610",
        labelPos: [950, 580]
      },
      tags: ["Store", "Tool Crib", "Inventory", "Restroom"]
    },
    {
      id: "b-passage",
      code: "PASSAGE",
      block: "all",
      blockLabel: "Main Passage Spine",
      name: "Main Connecting Passage (Library – Block 1 – Block 2 – Block 3)",
      blueprintLabel: "MAIN CONNECTING PASSAGE",
      dimensions: "180'0\" × 12'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      desc: "The primary connecting passage and architectural spine linking the Library, 1st Block, 2nd Block, and 3rd Block. Overlooks the front landscaped lawns, providing continuous weather-protected student circulation across all academic departments.",
      equipment: [
        "Covered Weather-Protected Walkway",
        "Natural Daylight & Courtyard Views",
        "Direct Inter-Block Access Portals"
      ],
      tags: ["Passage", "Connecting Corridor", "Main Spine", "Library", "Block 1", "Block 2", "Block 3"],
      streetViewId: "dept-me",
      svg: {
        type: "rect",
        x: 70, y: 520, width: 940, height: 26,
        labelPos: [540, 533]
      }
    },

    /* -------------------------- BLOCK-II ROADWAY FACADE -------------------------- */
    {
      id: "b2-facade",
      code: "B2-EXT",
      block: "palm-extension",
      blockLabel: "Block 2 Front",
      name: "Block-II Roadway Facade & Hacktoberfest Hub",
      blueprintLabel: "BLOCK-II FRONT 36'X22'",
      dimensions: "36'0\" × 22'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      capacity: "Open Access Area",
      inCharge: "Campus Events Coordinator",
      desc: "Front roadway facade of Block-II featuring the accessible entry ramp, the Department of Mechanical Engineering SKF Centre of Excellence banner, and official Hacktoberfest event showcase.",
      equipment: [
        "Accessible Entry Ramp & Potted Planter Landscaping",
        "SKF Centre of Excellence Vertical Signage",
        "Official Hacktoberfest Event Display Banner",
        "Main Campus Road Access Crosswalk"
      ],
      svg: {
        type: "polygon",
        points: "690,625 760,625 760,715 690,715",
        labelPos: [725, 670]
      },
      tags: ["Block-II", "Facade", "Hacktoberfest", "SKF", "Ramp"],
      streetViewId: "block2-facade",
      photo: "photos/block2-facade.jpg"
    },

    /* -------------------------- EAST EXTENSION (AFTER BLOCK 3) -------------------------- */
    {
      id: "ext-palm-speedbreaker",
      code: "PALM-1",
      block: "palm-extension",
      blockLabel: "After Block 3",
      name: "Palm Avenue Speed Breaker & MSME Crossing",
      blueprintLabel: "PALM CROSSING",
      dimensions: "40'0\" × 24'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      capacity: "Campus Arterial",
      inCharge: "Campus Safety & Transport",
      desc: "Zebra-striped speed breaker directly past Block 3 with the MSME Nodal Officers welcome board and the commencement of the Royal Palm Avenue.",
      equipment: [
        "Zebra-Striped Traffic Calming Speed Breaker",
        "MSME Nodal Officers Official Welcome Board",
        "Pedestrian Safety Crosswalk to East Campus",
        "Lawn Border Planters and Royal Palms"
      ],
      svg: {
        type: "polygon",
        points: "1035,620 1155,620 1155,715 1035,715",
        labelPos: [1095, 665]
      },
      tags: ["Palm Avenue", "Speed Breaker", "MSME", "Crossing", "Road"],
      streetViewId: "palm-speedbreaker",
      photo: "photos/palm-speedbreaker.jpg"
    },
    {
      id: "ext-palm-walkway",
      code: "PALM-2",
      block: "palm-extension",
      blockLabel: "After Block 3",
      name: "Royal Palm Avenue Boulevard",
      blueprintLabel: "ROYAL PALM AVENUE",
      dimensions: "90'0\" × 30'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      capacity: "Open Promenade",
      inCharge: "Campus Landscape & Horticulture",
      desc: "Iconic campus boulevard flanked by towering royal palms with white-and-red painted trunks, pedestrian walkways, and academic wing facades.",
      equipment: [
        "Lined Royal Palm Boulevard (Roystonea Regia)",
        "Overhead Steel Truss Gateway Arch",
        "Shaded Sidewalks for Student Transit",
        "Night Streetlight Illumination"
      ],
      svg: {
        type: "polygon",
        points: "1035,465 1155,465 1155,605 1035,605",
        labelPos: [1095, 535]
      },
      tags: ["Palm Avenue", "Boulevard", "Royal Palms", "Green space", "Walkway"],
      streetViewId: "palm-walkway",
      photo: "photos/palm-walkway.jpg"
    },
    {
      id: "ext-palm-promenade",
      code: "PALM-3",
      block: "palm-extension",
      blockLabel: "After Block 3",
      name: "Palm Avenue South Promenade & Two-Wheeler Bay",
      blueprintLabel: "TWO-WHEELER BAY",
      dimensions: "90'0\" × 30'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      capacity: "120 Parking Bays",
      inCharge: "Campus Estate & Security",
      desc: "Southern stretch of Palm Avenue featuring designated shaded two-wheeler parking under the royal palm canopy, active student walkways, and crosswalks.",
      equipment: [
        "Organized Two-Wheeler / Scooter Parking Lanes",
        "Palm-Shaded Pedestrian Promenade",
        "Campus Directional Wayfinding Signage",
        "Perimeter CCTV Surveillance"
      ],
      svg: {
        type: "polygon",
        points: "1035,310 1155,310 1155,450 1035,450",
        labelPos: [1095, 380]
      },
      tags: ["Parking", "Promenade", "Bikes", "Students", "Palm Avenue"],
      streetViewId: "palm-promenade",
      photo: "photos/palm-promenade.jpg"
    },
    {
      id: "ext-south-plaza",
      code: "PALM-4",
      block: "palm-extension",
      blockLabel: "After Block 3",
      name: "South Academic Wing Plaza Approach",
      blueprintLabel: "SOUTH PLAZA",
      dimensions: "80'0\" × 35'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      capacity: "Open Plaza",
      inCharge: "Campus Infrastructure Team",
      desc: "Paved courtyard promenade with decorative pavers, tree canopies, and campus safety barriers leading directly toward the south academic facilities.",
      equipment: [
        "Interlocking Paver Courtyard Walkway",
        "Mature Shading Ornamental Tree Canopy",
        "Mobile Security Barrier Checkpoints",
        "Direct Linkage toward Campus Main Security Gate"
      ],
      svg: {
        type: "polygon",
        points: "1035,140 1155,140 1155,295 1035,295",
        labelPos: [1095, 218]
      },
      tags: ["Plaza", "South Block", "Pavers", "Walkway", "Trees"],
      streetViewId: "south-plaza",
      photo: "photos/south-plaza.jpg"
    },

    /* ---------------------- SPORTS COMPLEX & CANTEEN HUB ---------------------- */
    {
      id: "sports-complex",
      code: "SPORTS",
      block: "sports-canteen",
      blockLabel: "Sports Hub",
      name: "Acropolis Sports Complex & Basketball Court",
      blueprintLabel: "SPORTS COMPLEX & BASKETBALL COURT",
      dimensions: "120'0\" × 85'0\"",
      category: "sports",
      categoryLabel: "Sports & Dining Hub",
      capacity: "Outdoor Sports Arena",
      inCharge: "Dept. of Physical Education & Sports",
      desc: "Full-scale athletic arena and regulation basketball court facility accommodating inter-college sports tournaments, basketball championships, volleyball, and physical conditioning.",
      equipment: [
        "Regulation Basketball Court with Acrylic Surface & Hoops",
        "Spectator Seating & Tournament Viewing Stands",
        "High-Intensity Evening Floodlighting",
        "Athletics Conditioning & Sports Equipment Storage"
      ],
      photo: "photos/sports-complex-path.jpg",
      streetViewId: "sports-complex-path",
      svg: {
        type: "polygon",
        points: "1175,140 1315,140 1315,295 1175,295",
        labelPos: [1245, 218]
      },
      tags: ["Sports", "Basketball", "Court", "Athletics", "Gym", "Fitness"]
    },
    {
      id: "canteen-plaza",
      code: "CANTEEN",
      block: "sports-canteen",
      blockLabel: "Canteen Hub",
      name: "Campus Canteen & Outdoor Food Court",
      blueprintLabel: "CANTEEN & FOOD TRUCK PLAZA",
      dimensions: "75'0\" × 50'0\"",
      category: "sports",
      categoryLabel: "Sports & Dining Hub",
      capacity: "250+ Students & Staff",
      inCharge: "Campus Catering & Student Welfare",
      desc: "Vibrant campus dining hub and outdoor food court featuring a mobile food truck, beverage bars, fresh refreshment counters, and open-air herringbone paved dining plaza.",
      equipment: [
        "Specialized Food Truck & Quick-Service Kitchen Kiosk",
        "Outdoor Herringbone Interlocking Paver Dining Courtyard",
        "Cold Beverage & Refreshment Counters",
        "Eco-Friendly Waste Sorting & Sanitization Stations"
      ],
      photo: "photos/canteen-plaza.jpg",
      streetViewId: "canteen-plaza",
      svg: {
        type: "polygon",
        points: "1175,310 1315,310 1315,450 1175,450",
        labelPos: [1245, 380]
      },
      tags: ["Canteen", "Cafeteria", "Food Truck", "Dining", "Snacks", "Lunch", "Food"]
    },
    {
      id: "canteen-walkway",
      code: "CANTEEN-WALK",
      block: "sports-canteen",
      blockLabel: "Canteen Walkway",
      name: "Canteen Shaded Walkway & Bike Canopy",
      blueprintLabel: "CANTEEN WALKWAY & SHED",
      dimensions: "80'0\" × 20'0\"",
      category: "amenity",
      categoryLabel: "Corridors & Amenities",
      capacity: "Covered Parking & Transit",
      inCharge: "Campus Estate Management",
      desc: "Tree-shaded herringbone interlocking paved promenade equipped with covered two-wheeler parking canopy, connecting AFMR, the sports avenue, and the Canteen food court.",
      equipment: [
        "Herringbone Paver Pedestrian Transit Lane",
        "Covered Two-Wheeler / Scooter Parking Canopies",
        "Mature Shading Avenue Trees"
      ],
      photo: "photos/canteen-walkway.jpg",
      streetViewId: "canteen-walkway",
      svg: {
        type: "polygon",
        points: "1175,465 1315,465 1315,605 1175,605",
        labelPos: [1245, 535]
      },
      tags: ["Canteen Walkway", "Bike Shed", "Parking", "Pavers", "Walkway"]
    },
    {
      id: "afmr-block",
      code: "AFMR",
      block: "sports-canteen",
      blockLabel: "Management Block",
      name: "Acropolis Faculty of Management & Research (AFMR)",
      blueprintLabel: "FACULTY OF MANAGEMENT & RESEARCH",
      dimensions: "90'0\" × 60'0\"",
      category: "office",
      categoryLabel: "Faculty & Administration",
      capacity: "MBA & Research Programs",
      inCharge: "Director, AFMR",
      desc: "Dedicated institutional academic building for the Acropolis Faculty of Management & Research. Houses management lecture theatres, MBA seminar rooms, faculty chambers, and administrative offices.",
      equipment: [
        "Executive Management Lecture Theatres",
        "Case Study & Group Discussion Rooms",
        "Faculty Research Cabins & Board Rooms",
        "Accessible Ramp Entrance & Landscaped Forecourt"
      ],
      photo: "photos/afmr-entrance.jpg",
      streetViewId: "afmr-entrance",
      svg: {
        type: "polygon",
        points: "1175,620 1315,620 1315,715 1175,715",
        labelPos: [1245, 665]
      },
      tags: ["AFMR", "Management", "MBA", "Research", "Faculty of Management"]
    }
  ],

  // Exterior Grounds (Road, Lawns, Pathways)
  exterior: [
    {
      id: "ext-road",
      name: "Main Campus Arterial Roadway",
      type: "road",
      svg: {
        x: 40, y: 730, width: 1280, height: 80,
        dashY: 770
      },
      desc: "Wide asphalt two-lane divided road connecting Security Gate, parking bays, Block-I, and Block-II.",
      streetViewId: "parking-road"
    },
    {
      id: "ext-lawn1",
      name: "Front Landscaped Lawn 1 (Block 1 West)",
      blueprintLabel: "LAWN",
      type: "lawn",
      svg: {
        x: 60, y: 640, width: 310, height: 75
      },
      desc: "Lush green lawn with seasonal flowers facing Block 1 workshop and drawing hall."
    },
    {
      id: "ext-path1",
      name: "Pedestrian Pathway 1",
      blueprintLabel: "← PATH WAY",
      type: "pathway",
      svg: {
        x: 375, y: 620, width: 45, height: 110,
        arrowPos: [397, 675]
      },
      desc: "Paved walkway connecting the campus road directly to Block 1 and Block 2 breezeway.",
      streetViewId: "gate-crossing"
    },
    {
      id: "ext-lawn2",
      name: "Front Landscaped Lawn 2 (Block 2 Central)",
      blueprintLabel: "LAWN",
      type: "lawn",
      svg: {
        x: 425, y: 640, width: 330, height: 75
      },
      desc: "Central green lawn area facing Block 2 entrance and HOD office.",
      streetViewId: "orange-lawn"
    },
    {
      id: "ext-path2",
      name: "Pedestrian Pathway 2",
      blueprintLabel: "← PATH WAY",
      type: "pathway",
      svg: {
        x: 760, y: 620, width: 45, height: 110,
        arrowPos: [782, 675]
      },
      desc: "Lined pathway with decorative potted plants leading to Block-II main entrance.",
      streetViewId: "block2-path"
    },
    {
      id: "ext-lawn3",
      name: "Front Landscaped Lawn 3 (Block 3 East)",
      blueprintLabel: "LAWN",
      type: "lawn",
      svg: {
        x: 810, y: 640, width: 215, height: 75
      },
      desc: "East manicured lawn fronting Block 3 automobile and fluid mechanics laboratories.",
      streetViewId: "palm-avenue"
    }
  ]
};
