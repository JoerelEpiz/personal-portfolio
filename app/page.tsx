
import { Hero } from "@/src/components/hero"
import { Navbar } from "@/src/components/navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="home" className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Welcome to the Home Page
          </h1>
          <p className="mt-4 text-muted-foreground">
            This is the main content of the home page.
          </p>
        </div>
      </section>
    </main>
  )
}
