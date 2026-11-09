
import {
  PanelsTopLeft,
  Compass,
  PencilRuler,
  Rocket,
} from "lucide-react"
import Image from "next/image"

const highlights = [
  {
    title: "Web Development",
    description:
      "Building responsive and modern web applications using Next.js, React, TypeScript, and Tailwind CSS.",
    image: "/images/4.jpg",
  },
  {
    title: "Problem Solving",
    description:
      "Turning real-world problems into practical solutions through technology and logical thinking.",
    image: "/images/2.png",
  },
  {
    title: "System Development",
    description:
      "Designing structured applications, database systems, and user-friendly interfaces.",
    image: "/images/3.png ",
  },
  {
    title: "Continuous Learning",
    description:
      "Exploring modern technologies and improving my skills in software engineering and development.",
    image: "/images/1.png",
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-wide text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            About me
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Turning ideas into meaningful solutions
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground">
            A quick look at who I am, my background, and what I bring
            to every project.
          </p>
        </div>

        {/* About Content */}
        <div className="mt-14 grid gap-6 lg:grid-cols-4">

          {/* Main About Card */}
          <div className="relative overflow-hidden border-border/70 bg-card p-6 sm:p-8 lg:col-span-2">

            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl"
            />

            <h3 className="relative text-xl font-semibold tracking-tight">
              Hi, I&apos;m Joerel.
            </h3>

            <p className="relative mt-4 leading-relaxed text-muted-foreground">
              I&apos;m an Information Technology graduate with a background
              in technical support, IT operations, and administrative
              work. I enjoy exploring technology and building practical
              solutions that make everyday tasks easier and more
              efficient.
            </p>

            <p className="relative mt-4 leading-relaxed text-muted-foreground">
              My experience includes computer troubleshooting,
              network configuration, system development, and
              application development. I&apos;m currently expanding my
              skills in modern web technologies, software engineering,
              and database management.
            </p>

            {/* Personal Details */}
            <dl className="relative mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">

              <div className="rounded-xl border border-border/60 bg-transparent/60 p-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Location
                </dt>
                <dd className="mt-1 font-medium">
                  Philippines
                </dd>
              </div>

              <div className="rounded-xl border border-border/60 bg-transparent/60 p-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  Field
                </dt>
                <dd className="mt-1 font-medium text-emerald-600 dark:text-emerald-400">
                  Information Technology
                </dd>
              </div>

            </dl>
          </div>

          {/* Highlight Images */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1 xl:grid-cols-2">

        {highlights.map((item) => (
            <div
            key={item.title}
            className="group relative min-h-64 overflow-hidden rounded-2xl border border-border/70"
            >
            <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 300px"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Image Content */}
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h4 className="text-base font-semibold tracking-tight">
                {item.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-white/75">
                {item.description}
                </p>
            </div>
            </div>
        ))}

        </div>

          
        </div>
      </div>
    </section>
  )
}
