import Link from "next/link"
import {
  Mail,
  Phone,
} from "lucide-react"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Footer Container */}
        <div className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8">

          {/* Logo */}
          <div className="flex justify-center">
            <Link
              href="#home"
              className="text-2xl font-bold tracking-tight"
            >
              Joerel Epiz
            </Link>
          </div>

          {/* Navigation */}
          <nav className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-8 border-t border-border/70" />

          {/* Bottom Footer */}
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

            <p className="text-sm text-muted-foreground">
              © 2026 Joerel Epiz. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5">

              <a
                href="mailto:joerelzipe@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <Mail size={16} />
                joerelzipe@gmail.com
              </a>

              <a
                href="tel:+639940939130"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <Phone size={16} />
                Contact Me
              </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
