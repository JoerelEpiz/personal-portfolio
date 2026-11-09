
import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-transparent px-5 text-foreground sm:px-10 lg:h-screen lg:min-h-190"
    >
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col pb-8 lg:block lg:h-full lg:min-h-190 lg:pb-0">

        {/* Background Name */}
        <div className="relative z-0 w-full pt-12 text-center sm:pt-16 lg:absolute lg:left-1/2 lg:top-10 lg:-translate-x-1/2 lg:pt-0">
          <h1 className="font-[family-name:var(--font-satoshi)] whitespace-nowrap text-[clamp(2.2rem,12vw,12rem)] leading-[0.85] tracking-tight">
            <span className="font-light text-transparent [-webkit-text-stroke:1.5px_var(--foreground)]">
              JOEREL
            </span>{" "}
            <span className="font-black tracking-wider">
              EPIZ
            </span>
          </h1>
        </div>

        {/* Center Profile Image */}
        <div className="relative z-10 mx-auto -mt-8 h-[45svh] min-h-75 max-h-120 w-full max-w-130 shrink-0 sm:-mt-12 sm:h-[50svh]  md:-mt-1 md:h-[55svh] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-[95%] lg:max-h-none lg:-translate-x-1/2">

          <Image
            src="/images/joepiz.png"
            alt="Joerel Epiz"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 520px"
            className="object-contain object-bottom -translate-y-3 sm:-translate-y-16 lg:-translate-y-35"
          />

        </div>

        {/* Left: Introduction */}
        <div className="relative z-20 mx-auto mt-4 w-full max-w-md space-y-4 sm:mt-6 lg:absolute lg:bottom-16 lg:left-2 lg:mx-0 lg:mt-0 lg:w-[65%] lg:max-w-77.5">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
              Welcome to my portfolio
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
              Police Officer & Software Developer
            </h2>

            <p className="text-xs leading-6 text-muted-foreground sm:text-sm sm:leading-7">
              I build modern, responsive, and user-friendly
              web applications. Passionate about technology,
              problem-solving, and creating solutions that
              make a difference.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link
              href="#projects"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground transition-all hover:opacity-90 sm:h-11 sm:px-5 sm:text-sm"
            >
              View My Work
              <ArrowRight className="size-3.5" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex h-10 items-center rounded-full border border-border bg-background/80 px-4 text-xs font-semibold transition-colors hover:bg-accent sm:h-11 sm:px-5 sm:text-sm"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="relative z-20 mt-8 flex items-center justify-center gap-3 lg:absolute lg:bottom-10 lg:right-2 lg:mt-0 lg:flex-col lg:items-end">

          <Link
            href="https://github.com/JoerelEpiz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-medium backdrop-blur transition-colors hover:bg-accent"
          >
            GitHub ↗
          </Link>

          <Link
            href="https://linkedin.com/in/joerleepiz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-background/80 px-4 py-2 text-xs font-medium backdrop-blur transition-colors hover:bg-accent"
          >
            LinkedIn ↗
          </Link>

        </div>

        {/* Scroll Indicator - Desktop */}
        <Link
          href="#projects"
          className="absolute bottom-3 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground lg:flex"
        >
          Scroll to explore
          <ArrowDown className="size-4 animate-bounce" />
        </Link>

      </div>
    </section>
  )
}
