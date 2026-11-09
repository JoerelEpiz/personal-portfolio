
"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {useEffect, useState} from "react"
import {useTheme} from "next-themes"
import {Menu, Sun, Moon} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]


function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        disabled
      />
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="relative"
    >
      <Sun className="size-4.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

      <Moon className="absolute size-4.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}


export function Navbar() {
    const router = useRouter()  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          (&gt;_ )
        </Link>

        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
            <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
            {link.name}
            </Link>
        ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
        <ThemeToggle />

        <Link
          href="#contact"
          className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Let&apos;s Talk
        </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
        <Sheet>
            <SheetTrigger
            render={
                <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                />
            }
            >
            <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent
            side="right"
            className="w-[320px] max-w-[85vw] p-0"
            >
            <div className="flex h-full flex-col px-6 py-8">

                {/* Header */}
                <div className="border-b pb-6">
                <SheetTitle className="text-left text-xl font-bold">
                    Navigation
                </SheetTitle>
                <p className="mt-1 text-sm text-muted-foreground">
                    Explore my portfolio
                </p>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-1 flex-col gap-2 py-8">
                {navLinks.map((link) => (
                    <SheetClose
                    key={link.name}
                    render={
                        <button
                        type="button"
                        onClick={() => router.push(link.href)}
                        className="flex min-h-12 w-full items-center rounded-lg px-4 text-left text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        />
                    }
                    >
                    {link.name}
                    </SheetClose>
                ))}
                </nav>

                {/* Footer */}
                <div className="border-t pt-6">

                {/* Appearance */}
                <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-medium">
                    Appearance
                    </span>
                    <ThemeToggle />
                </div>

                {/* CTA */}
                <SheetClose
                    render={
                    <button
                        type="button"
                        onClick={() => router.push("#contact")}
                        className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    />
                    }
                >
                    Let&apos;s Talk
                </SheetClose>

                </div>
            </div>
            </SheetContent>
        </Sheet>
        </div>
      </nav>
    </header>
  )
}
