
"use client"

const projects = [
  {
    title: "Personal Portfolio",
    description: "My personal portfolio website.",
    category: "Web Development",
    image: "/images/projects/portfolio.png",
  },
  {
    title: "Crime Monitoring System",
    description: "Geographic crime monitoring platform.",
    category: "Full Stack",
    image: "/images/projects/crime-monitoring.png",
  },
  {
    title: "NFC Business Card",
    description: "Digital business card platform.",
    category: "Web Application",
    image: "/images/projects/tapcard.png",
  },
]

export function ProjectMarquee() {
  return (
    <div className="project-marquee w-full overflow-hidden">
      <div className="project-marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 gap-6 pr-6"
          >
            {projects.map((project, index) => (
              <article
                key={`${copy}-${index}`}
                className="w-[300px] shrink-0 overflow-hidden
                rounded-2xl border bg-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <p className="text-xs text-muted-foreground">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
