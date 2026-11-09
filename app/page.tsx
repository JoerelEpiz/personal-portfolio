
import { Hero } from "@/src/components/hero"
import { Navbar } from "@/src/components/navbar"
import { About } from "@/src/components/about"
import { Contact } from "@/src/components/contactus"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">

      {/* Global Gradient Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* Top Cyan Glow */}
        <div className="absolute top-30 h-125 w-125 rounded-full bg-cyan-500/30 blur-[120px]" />

        {/* Right Blue Glow */}
        <div className="absolute top-30 right-30 h-125 w-125 rounded-full bg-orange-500/30 blur-[120px]" /> 

        {/* Bottom Cyan Glow */}
        {/* <div className="absolute bottom-0 -left-20 h-125 w-125 rounded-full bg-cyan-400/30 blur-[120px]" /> */}

      </div>

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Contact />

        <section
          id="home"
          className="flex min-h-screen items-center justify-center"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Welcome to the Home Page
            </h1>
            <p className="mt-4 text-muted-foreground">
              This is the main content of the home page.
            </p>
          </div>
        </section>
      </div>

    </main>
  )
}
