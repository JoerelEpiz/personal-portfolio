
"use client"

import { useState } from "react"
import Image from "next/image"
import { journeyData, type JourneyItem } from "./journey-data"

function JourneyPhoto({ journey }: { journey: JourneyItem }) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative aspect-4/5 max-h-150 w-full overflow-hidden rounded-t-[28px] bg-muted">
      {hasError ? (
        <div
          role="img"
          aria-label={`${journey.year}: photo unavailable`}
          className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-muted-foreground"
        >
          Photo unavailable
        </div>
      ) : (
        <Image
          src={journey.image}
          alt={journey.imageAlt}
          fill
          sizes="(max-width: 1023px) 90vw, 40vw"
          onError={() => setHasError(true)}
          className="object-cover"
        />
      )}
    </div>
  )
}

export function About() {
  const [activeId, setActiveId] = useState(
    journeyData[0]?.id ?? ""
  )

  const activeJourney =
    journeyData.find((item) => item.id === activeId) ??
    journeyData[0]

  if (!activeJourney) return null

  return (
    <section
      id="about"
      className="relative min-h-screen scroll-mt-20 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1800px] px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter">
              My life{" "}
              <span className="text-muted-foreground/50">journey.</span>
            </h2>
            <p className="mt-5 text-sm uppercase tracking-wide text-muted-foreground sm:text-lg">
              A story of experience, growth & continuous learning.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-border/70" />

        {/* Timeline */}
        <div className="mt-10 grid grid-cols-12 gap-5 lg:gap-7">

          {/* Year Navigation: Scrollable */}
          <aside className="col-span-2 hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-5 text-sm uppercase tracking-wide text-muted-foreground">
                Year
              </p>

              <nav className="flex max-h-[65vh] flex-col items-start gap-5 overflow-y-auto overscroll-contain pr-3 pb-4 scrollbar-thin">
                {journeyData.map((item) => {
                  const isActive = activeId === item.id

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`group flex shrink-0 items-center gap-2 text-xl transition-colors duration-300 ${
                        isActive
                          ? "font-semibold text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span
                        className={`h-3 w-3 shrink-0 rounded-full transition-all duration-300 ${
                          isActive
                            ? "scale-100 bg-foreground"
                            : "scale-75 bg-transparent group-hover:bg-muted-foreground/50"
                        }`}
                      />

                      {item.year}
                    </button>
                  )
                })}
              </nav>
            </div>
          </aside>


          {/* Story */}
          <div className="col-span-12 lg:col-span-5">
            <div
              key={activeJourney.id}
              className="journey-enter"
            >
              <p className="mb-5 text-sm uppercase tracking-wide text-muted-foreground">
                The story
              </p>

              <h3 className="text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
                {activeJourney.year}
              </h3>

              <h4 className="mt-8 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {activeJourney.title}
              </h4>

              {activeJourney.where && (
                <p className="mb-5 text-sm uppercase tracking-wide text-muted-foreground">
                  {activeJourney.where}
                </p>
              )}

              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                {activeJourney.description}
              </p>

              <p className="mt-4 text-sm uppercase tracking-wide text-muted-foreground">
                {activeJourney.category}
              </p>
            </div>

            {/* Mobile / Tablet Year Selector */}
            <div className="mt-8 flex gap-5 overflow-x-auto border-t border-border/70 pt-5 pb-2 lg:hidden">
              {journeyData.map((item) => {
                const isActive = activeId === item.id

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`shrink-0 text-base transition-colors duration-300 ${
                      isActive
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.year}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Photograph */}
          <div className="col-span-12 lg:col-span-5">
            <div key={`image-${activeJourney.id}`} className="journey-image-enter">
              <JourneyPhoto journey={activeJourney} />
            </div>

            <p
              key={`caption-${activeJourney.id}`}
              className="journey-enter mt-3 text-sm text-muted-foreground"
            >
              {activeJourney.caption}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
