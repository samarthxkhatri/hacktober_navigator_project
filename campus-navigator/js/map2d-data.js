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
      { id: "all", name: "All Blocks", count: 28 },
      { id: "block1", name: "Block 1 (Auditorium & Workshop)", count: 9 },
      { id: "block2", name: "Block 2 (Centers of Excellence)", count: 10 },
      { id: "block3", name: "Block 3 (Core Mechanical Labs)", count: 9 }
    ],
    categories: [
      { id: "all", name: "All Spaces", icon: "🏢", color: "#64748b" },
      { id: "coe", name: "Centers of Excellence", icon: "⭐", color: "#f59e0b" },
      { id: "lab", name: "Specialized Labs", icon: "🔬", color: "#06b6d4" },
      { id: "classroom", name: "Classrooms & Tutorials", icon: "📚", color: "#3b82f6" },
      { id: "seminar", name: "Auditorium & Seminar", icon: "🏛️", color: "#8b5cf6" },
      { id: "office", name: "Faculty & Administration", icon: "👔", color: "#10b981" },
      { id: "amenity", name: "Corridors & Amenities", icon: "🚻", color: "#ec4899" }
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
      code: "LAB-TH",
      block: "block3",
      blockLabel: "Block 3",
      name: "Heat Transfer & Thermal Engineering Lab",
      blueprintLabel: "LAB 25'10\"X34'0\"",
      dimensions: "25'10\" × 34'0\"",
      category: "lab",
      categoryLabel: "Specialized Labs",
      capacity: "35 Students",
      inCharge: "Senior Faculty Thermal Stream",
      desc: "Comprehensive thermodynamics laboratory for testing conduction, convection, radiation heat transfer, refrigeration cycles, and heat exchanger performance.",
      equipment: [
        "Shell and Tube Heat Exchanger Apparatus",
        "Stefan-Boltzmann Radiation Constant Verification Rig",
        "Forced and Natural Convection Testing Units",
        "Vapor Compression Refrigeration & Air-Conditioning Tutor",
        "Critical Heat Flux & Boiling Heat Transfer Rig"
      ],
      svg: {
        type: "polygon",
        points: "920,240 1005,240 985,380 900,380",
        labelPos: [952, 310]
      },
      tags: ["Heat Transfer", "Thermal", "Refrigeration", "Thermodynamics", "Radiation"]
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
        points: "800,390 890,390 870,500 780,500",
        labelPos: [835, 445]
      },
      tags: ["Metrology", "Measurement", "Quality Control", "Inspection", "Microscope"]
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
    }
  ],

  // Exterior Grounds (Road, Lawns, Pathways)
  exterior: [
    {
      id: "ext-road",
      name: "Main Campus Arterial Roadway",
      type: "road",
      svg: {
        x: 40, y: 730, width: 1120, height: 80,
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
        x: 810, y: 640, width: 290, height: 75
      },
      desc: "East manicured lawn fronting Block 3 automobile and fluid mechanics laboratories.",
      streetViewId: "palm-avenue"
    }
  ]
};
