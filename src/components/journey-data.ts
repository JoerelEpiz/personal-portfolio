
export type JourneyItem = {
  year: string
  title: string
  description: string
  category: string
  image: string
  imageAlt: string
  caption: string
}

export const journeyData: JourneyItem[] = [
  {
    year: "2015",
    title: "The beginning of my IT journey.",
    description:
      "Started my journey in Information Technology at Saint Joseph College, building the foundation for my career in technology.",
    category: "EDUCATION",
    image: "/images/1.png",
    imageAlt: "My educational journey",
    caption: "2015 — The beginning.",
  },
  {
    year: "2017",
    title: "Entering the professional world.",
    description:
      "Began working at the Department of Public Works and Highways, gaining practical experience in IT support and administrative operations.",
    category: "PROFESSIONAL EXPERIENCE",
    image: "/images/2.png",
    imageAlt: "Professional experience",
    caption: "2017 — A new chapter.",
  },
  {
    year: "2020",
    title: "Growing through experience.",
    description:
      "Completed an important chapter of professional experience, developing practical technical and administrative skills.",
    category: "CAREER DEVELOPMENT",
    image: "/images/3.png",
    imageAlt: "Professional development",
    caption: "2020 — Lessons and experience.",
  },
  {
    year: "2024",
    title: "A new professional chapter.",
    description:
      "Started a new chapter in my professional career while continuing to build on my experience and knowledge.",
    category: "PROFESSIONAL JOURNEY",
    image: "/images/4.jpg",
    imageAlt: "A new professional chapter",
    caption: "2024 — Moving forward.",
  },
  {
    year: "2026",
    title: "Building what's next.",
    description:
      "Exploring modern web development, software engineering, and building practical applications while continuously improving my technical skills.",
    category: "SOFTWARE DEVELOPMENT",
    image: "/images/1.png",
    imageAlt: "Software development journey",
    caption: "2026 — Building the future.",
  },
]
