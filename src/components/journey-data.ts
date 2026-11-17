
export type JourneyItem = {
  id: string
  year: string
  title: string
  description: string
  where: string
  category: string
  image: string
  imageAlt: string
  caption: string
}

export const journeyData: JourneyItem[] = [
  {
    id: "birth",
    year: "1995",
    title: "Born into the world.",
    where: "Maasin City, Southern Leyte, Philippines",
    description:
      "The beginning of my journey, filled with opportunities, challenges, and experiences that would shape who I am today.",
    category: "PERSONAL",
    image: "/images/about/1.png",
    imageAlt: "The beginning of my journey",
    caption: "1995 — The beginning.",
  },
  {
    id: "elementary-school",
    year: "2001-07",
    title: "Elementary School",
    where: "Mahayahay Elementary School",
    description:
      "Started my formal education at Mahayahay Elementary School, building the foundation for my academic journey.",
    category: "EDUCATION",
    image: "/images/about/2.png",
    imageAlt: "Elementary school journey",
    caption: "2001–2007 — First steps in education.",
  },
  {
    id: "high-school",
    year: "2007-11",
    title: "High School Years",
    where: "Manhilo National High School",
    description:
      "Continued my education at Manhilo National High School, developing knowledge, discipline, and friendships that became part of my growing years.",
    category: "EDUCATION",
    image: "/images/about/3.png",
    imageAlt: "High school journey",
    caption: "2007–2011 — Growing and learning.",
  },
  {
    id: "college-it",
    year: "2011-15",
    title: "College: Information Technology",
    where: "Saint Joseph College",
    description:
      "Pursued a Bachelor of Science in Information Technology at Saint Joseph College, where I developed my interest and foundation in computers and technology.",
    category: "EDUCATION",
    image: "/images/about/4.png",
    imageAlt: "College and IT education",
    caption: "2011–2015 — Building my IT foundation.",
  },
  {
    id: "construction-worker",
    year: "2013-14",
    title: "Construction Worker",
    where: "Jner Cepada Construction",
    description:
      "Worked at Jner Cepada Construction, gaining hands-on experience in construction work, teamwork, and the value of hard work.",
    category: "WORK EXPERIENCE",
    image: "/images/about/5.png",
    imageAlt: "Construction work experience",
    caption: "2013–2014 — Learning the value of hard work.",
  },
  {
    id: "uniqlo-associate",
    year: "2015-16",
    title: "Store Associate at UNIQLO",
    where: "Fast Retailing Philippines, Inc., (Uniqlo), SM Cebu City",
    description:
      "Joined Fast Retailing Philippines, Inc. at UNIQLO SM Cebu City. Developed customer service, communication, teamwork, and retail operations skills.",
    category: "WORK EXPERIENCE",
    image: "/images/about/6.png",
    imageAlt: "UNIQLO retail experience",
    caption: "2015–2016 — My first corporate experience.",
  },
  {
    id: "dpwh-davao",
    year: "2017-20",
    title: "Administrative Aide I",
    where: "Department of Public Works and Highways, Davao City District Engineering Office",
    description:
      "Worked at the Department of Public Works and Highways, Davao City District Engineering Office. Handled records management, documentation, contract assistance, bookkeeping, and administrative operations.",
    category: "WORK EXPERIENCE",
    image: "/images/about/7.png",
    imageAlt: "DPWH Davao City District Engineering Office",
    caption: "2017–2020 — Public service and administration.",
  },
  {
    id: "vhanline-it",
    year: "2021-22",
    title: "IT Personnel",
    where: "Vhanline Tax Consultancy and Services",
    description:
      "Joined Vhanline Tax Consultancy and Services, assisting with online business registrations, government transactions, permits, insurance processing, and digital record management.",
    category: "WORK EXPERIENCE",
    image: "/images/about/8.png",
    imageAlt: "IT and business consultancy experience",
    caption: "2021–2022 — Applying technology in business.",
  },
  {
    id: "sunlight-purchasing",
    year: "2022",
    title: "Purchasing Assistant",
    where: "Sunlight Hotels and Resorts",
    description:
      "Worked at Sunlight Hotels and Resorts, gaining experience in purchasing assistance, coordination, and administrative support.",
    category: "WORK EXPERIENCE",
    image: "/images/about/9.png",
    imageAlt: "Purchasing assistant experience",
    caption: "2022 — Expanding my professional experience.",
  },
  {
    id: "protemps-dealer",
    year: "2022-23",
    title: "Dealer Coordinator",
    where: "Protemps Inc.",
    description:
      "Joined Protemps Inc. as a Dealer Coordinator, developing coordination, communication, and professional relationship management skills.",
    category: "WORK EXPERIENCE",
    image: "/images/about/10.png",
    imageAlt: "Dealer coordination experience",
    caption: "2022–2023 — Strengthening coordination skills.",
  },
  {
    id: "tesda-smaw",
    year: "2022-23",
    title: "TESDA Shielded Metal Arc Welding (SMAW)",
    where: "Saint Joseph College",
    description:
      "Completed vocational trade course training in Shielded Metal Arc Welding (SMAW) at Saint Joseph College, gaining practical knowledge and hands-on skills in metal fabrication, welding techniques, and workplace safety.",
    category: "VOCATIONAL",
    image: "/images/about/17.png",
    imageAlt: "Shielded Metal Arc Welding vocational training",
    caption: "2022–2023 — Building practical skills through technical education.",
  },
  {
    id: "denzel-graphic-artist",
    year: "2023-24",
    title: "Graphic Artist",
    where: "Denzel Printing Services",
    description:
      "Worked at Denzel Printing Services, exploring creativity through graphic design, visual communication, and printing-related projects.",
    category: "WORK EXPERIENCE",
    image: "/images/about/11.png",
    imageAlt: "Graphic design and printing experience",
    caption: "2023–2024 — Bringing creativity to life.",
  },
  {
    id: "professional-training",
    year: "2023",
    title: "Career Service Professional Examination",
    where: "Sto. Cristo Elementary School, Quezon City",
    description:
      "Completed Carter Service Professional training at Sto. Cristo Elementary School, Quezon City, as part of my professional development journey.",
    category: "TRAINING",
    image: "/images/about/12.png",
    imageAlt: "Professional training",
    caption: "2023 — Preparing for new opportunities.",
  },
  {
    id: "pnp-entrance-exam",
    year: "2024",
    title: "Philippine National Police Entrance Examination",
    where: "Port Bonifacio High School",
    description:
      "Took the Philippine National Police Entrance Examination at Port Bonifacio High School, marking an important milestone toward my goal of entering public service.",
    category: "ACHIEVEMENT",
    image: "/images/about/13.png",
    imageAlt: "PNP entrance examination milestone",
    caption: "2024 — A step toward public service.",
  },
  {
    id: "dpwh-computer-operator",
    year: "2024",
    title: "Computer Operator I",
    where: "Department of Public Works and Highways, North Manila District",
    description:
      "Worked at the Department of Public Works and Highways, North Manila District, applying my IT background and technical skills in an administrative and computer operations role.",
    category: "WORK EXPERIENCE",
    image: "/images/about/14.png",
    imageAlt: "DPWH North Manila District",
    caption: "February–May 2024 — Back to IT operations.",
  },
  {
    id: "computer-proficiency-exam",
    year: "2024",
    title: "Computer Proficiency Examination",
    where: "Department of Public Works and Highways, North Manila District",
    description:
      "Undertook the Computer Proficiency Examination at the Department of Public Works and Highways, North Manila District, further demonstrating my technical knowledge and computer skills.",
    category: "ACHIEVEMENT",
    image: "/images/about/15.png",
    imageAlt: "Computer proficiency examination",
    caption: "2024 — Testing my technical capabilities.",
  },
  {
    // Public Safety Basic Recruit Course — based on the supplied certificate.
    id: "pnp-psbrc",
    year: "2024-25",
    title: "Public Safety Basic Recruit Course (PSBRC)",
    where: "Police Regional Training Center 8 (PRTC 8)",
    description:
      "Successfully completed the Public Safety Basic Recruit Course (PSBRC), PRTC 8 Batch 2024-01 CLS Alpha to Delta, conducted from December 20, 2024 to June 23, 2025. Recognized with the Excellence Service Award for demonstrating commitment, determination, and excellence throughout the training.",
    category: "POLICE TRAINING",
    image: "/images/about/psbrc.png",
    imageAlt: "PSBRC certificate and Excellence Service Award",
    caption: "June 2025 — Excellence Service Award, PRTC 8.",
  },
  {
    // Basic Internal Security Operations Course — dates supplied by the user.
    id: "pnp-bisoc",
    year: "2026",
    title: "Basic Internal Security Operations Course (BISOC)",
    where: "Philippine National Police",
    description:
      "Undertook the Basic Internal Security Operations Course (BISOC) from April to July 2026 as part of continuing professional training and development in the Philippine National Police.",
    category: "POLICE TRAINING",
    image: "/images/about/bisoc.png",
    imageAlt: "Basic Internal Security Operations Course training",
    caption: "April–July 2026 — Basic Internal Security Operations Course.",
  },
  {
    id: "pnp-police-officer",
    year: "2024-PRESENT",
    title: "Police Officer - Patrolman",
    where: "Philippine National Police",
    description:
      "Joined the Philippine National Police on December 20, 2024. Today, I dedicate myself to public service while continuing to pursue my passion for technology and software development during my free time.",
    category: "PUBLIC SERVICE",
    image: "/images/about/16.png",
    imageAlt: "Philippine National Police career",
    caption: "December 2024 — A new chapter of service.",
  },
]
