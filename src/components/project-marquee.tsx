
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck } from "lucide-react"

const projects = [
  {
    number: "01",
    title: "PRO-8 Police Station Directory",
    description:
      "A searchable Eastern Visayas police directory with emergency calling and published office contacts.",
    category: "Public Safety Directory",
    year: "2026",
    href: "/projects/pro-8-directory",
    image: "/images/projects/ev-ps-directory.png",
  },
  {
    number: "02",
    title: "PDS Generator",
    description:
      "A web application for generating and managing personal data sheets.",
    category: "Web Application",
    year: "2026",
    href: "/projects/pds-generator",
    image: "/images/projects/pds-generator.png",
  },
]

function ProjectCard({
  project,
  isDuplicate,
}: {
  project: (typeof projects)[number]
  isDuplicate: boolean
}) {
  const card = (
    <article className="project-card group relative w-[320px] shrink-0 sm:w-[420px]">
      {/* Project image */}
      <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-border/60 bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 320px, 420px"
            className="project-card-image object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full flex-col items-center justify-center gap-3 bg-neutral-100 text-neutral-700">
            <ShieldCheck size={48} strokeWidth={1.4} aria-hidden="true" />
            <span className="text-xs font-bold tracking-[0.18em]">PRO-8 DIRECTORY</span>
          </div>
        )}

        {/* Cinematic overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-black/10 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Project number */}
        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          PROJECT / {project.number}
        </span>

        {/* View indicator */}
        <div className="absolute bottom-5 right-5 flex size-11 translate-y-3 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          ↗
        </div>
      </div>

      {/* Project information */}
      <div className="flex items-start justify-between gap-4 px-1 pt-5">
        <div className="min-w-0">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {project.category}
          </p>

          <h3 className="text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-2xl">
            {project.title}
          </h3>

          <p className="mt-2 max-w-[340px] text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <span className="pt-1 text-xs tabular-nums text-muted-foreground">
          {project.year}
        </span>
      </div>
    </article>
  )

  if (!project.href) return card

  return (
    <Link
      href={project.href}
      tabIndex={isDuplicate ? -1 : undefined}
      className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      aria-label={`Open ${project.title}`}
    >
      {card}
    </Link>
  )
}

export function ProjectMarquee() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[400px] rounded-full bg-primary/[0.05] blur-[120px]" />

      <div className="relative z-10 mx-auto mb-14 max-w-7xl px-6 sm:px-10">
        {/* Section header */}
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" />
              A selection of my work
            </p>

            <h2 className="text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter">
              Selected
              <span className="ml-3 text-muted-foreground/50">
                Works.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Ideas transformed into digital experiences.
              A collection of things I have built, explored,
              and continue to improve.
            </p>
          </div>

          <div className="flex items-center gap-5 border-t border-border pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            <span className="text-5xl font-light tracking-tighter">
              {String(projects.length).padStart(2, "0")}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest">
                Projects
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                And counting...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite marquee */}
      <div className="project-marquee relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-32" />

        <div className="project-marquee-track flex w-max gap-7 py-3">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              inert={copy === 1}
              className="flex shrink-0 gap-7"
            >
              {projects.map((project) => (
                <ProjectCard
                  key={`${copy}-${project.number}`}
                  project={project}
                  isDuplicate={copy === 1}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom information */}
      <div className="relative z-10 mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 px-6 sm:flex-row sm:items-center sm:px-10">
        <p className="text-xs text-muted-foreground">
          A continuous journey of building and learning.
        </p>

        <a
          href="https://github.com/JoerelEpiz"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-primary"
        >
          Explore my GitHub
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>
      </div>
    </section>
  )
}
