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
};

window.LOCATIONS = [
  /* ---------------------------- OUTDOORS ---------------------------- */
  {
    id: "security-gate", name: "Security Gate", area: "campus", map: [8, 90],
    photo: "photos/security-gate.jpg",
    desc: "Main entry with the guard post and barrier. Visitors check in here.",
    tags: ["Entrance"], keywords: ["entry", "entrance", "main gate", "guard", "security", "start"],
    links: [{ to: "gate-crossing", dir: "forward", at: [58, 74] }],
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
    links: [{ to: "block2-path", dir: "forward", at: [54, 86] }],
  },
  {
    id: "block2-path", name: "Block-II Entrance Path", area: "campus", map: [86, 59],
    photo: "photos/block2-path.jpg",
    desc: "Paved walkway lined with potted plants leading to the Block-II entrance.",
    tags: ["Academic"], keywords: ["block 2", "block ii", "block-2", "walkway", "path"],
    links: [
      { to: "block2-door", dir: "enter", at: [58, 58], back: "back" },
      { to: "courtyard", dir: "right", at: [86, 80] },
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
    id: "msme-block", name: "MSME Block Entrance", area: "campus", map: [66, 73],
    photo: "photos/msme-block.jpg",
    desc: "Block entrance with the MSME Nodal Officers welcome board.",
    tags: ["Academic"], keywords: ["msme", "nodal officers", "block", "entrance"],
    links: [{ to: "palm-avenue", dir: "forward", at: [62, 86] }],
  },
  {
    id: "palm-avenue", name: "Palm Avenue", area: "campus", map: [55, 82],
    photo: "photos/palm-avenue.jpg",
    desc: "Long avenue of royal palms with the steel arch over the road.",
    tags: ["Road", "Landmark"], keywords: ["palm", "avenue", "arch", "royal palm", "road"],
    links: [],
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
    id: "corridor-poster", name: "Lab Corridor", area: "block2", map: [78, 55],
    photo: "photos/corridor-poster.jpg",
    desc: "The corridor further along, with the AICTE IDEA Lab poster on the left wall.",
    tags: ["Corridor"], keywords: ["corridor", "hallway", "aicte", "poster"],
    links: [{ to: "aicte-poster", dir: "left", at: [20, 72], back: "right" }],
  },
  {
    id: "aicte-poster", name: "AICTE IDEA Lab Poster Wall", area: "block2", map: [91, 55],
    photo: "photos/aicte-poster.jpg",
    desc: "AICTE IDEA Lab poster beside the yellow door frame.",
    tags: ["Corridor"], keywords: ["aicte", "poster", "idea lab", "wall"],
    links: [],
  },
];

/* Arrow position overrides — paste the JSON copied from Edit mode (press E) here.
   Format:  "fromId>toId": [x%, y%]  */
window.ARROW_OVERRIDES = {};
