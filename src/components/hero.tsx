
import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
    >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Left: Introduction */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Welcome to my portfolio
            </p>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-primary">Joerel Epiz.</span>
            </h1>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Software Developer
            </h2>

            <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              I build modern, responsive, and user-friendly
              web applications. Passionate about technology,
              problem-solving, and creating solutions that
              make a difference.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Work
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex h-12 items-center rounded-lg border px-6 text-sm font-semibold transition-colors hover:bg-accent"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
            <div className="flex items-center gap-6 pt-2">
                <Link
                    href="https://github.com/JoerelEpiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                    GitHub ↗
                </Link>

                <Link
                    href="#"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                    LinkedIn ↗
                </Link>
            </div>
        </div>

        
        {/* Right: Profile Image */}
        <div className="relative mx-auto w-full max-w-md">
            {/* Profile Picture */}
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-xl">
                <Image
                src="/images/profile.jpg"
                alt="Joerel Epiz"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 384px"
                />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 right-4 rounded-xl border bg-background/95 px-5 py-3 shadow-lg backdrop-blur sm:-right-6">
                <p className="text-sm font-semibold">
                Building something
                </p>
                <p className="text-xs text-muted-foreground">
                One line of code at a time.
                </p>
            </div>
        </div>



      </div>

      {/* Scroll Indicator */}
      <Link
        href="#projects"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        Scroll to explore
        <ArrowDown className="size-4 animate-bounce" />
      </Link>
    </section>
  )
}
