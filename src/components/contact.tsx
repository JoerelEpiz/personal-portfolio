import Link from "next/link"
import {
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react"

import {
  FaInstagram,
  FaFacebookF,
  //FaYoutube,
  FaTiktok,
} from "react-icons/fa"

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/brunz_mark/", icon: FaInstagram },
  { name: "Facebook", href: "https://www.facebook.com/Brunz.Mark", icon: FaFacebookF },
  { name: "WhatsApp", href:"tel:+639940939130", icon: MessageCircle },
  //{ name: "YouTube", href: "#", icon: FaYoutube },
  { name: "TikTok", href: "https://www.tiktok.com/@brunz_mark", icon: FaTiktok },
]
export function Contact() {
    return(
        <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
                {/* Contact introduction */}
                <div>
                    <h2 className="text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.95] tracking-tighter">
                    Message
                    <span className="ml-3 text-muted-foreground/50">
                        Me.
                    </span>
                    </h2>

                    <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
                        Have a question or a project in mind? Send me a message and I’ll get
                        back to you.
                    </p>

                    <div className="mt-8 space-y-5">
                        <div className="flex items-center gap-4">
                        <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
                            <Mail size={20} strokeWidth={1.8} />
                        </span>
                        <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <a
                            href="mailto:joerelzipe@gmail.com"
                            className="font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                            >
                            Joerelzipe@gmail.com
                            </a>
                        </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary" aria-hidden="true">
                                <MapPin size={20} strokeWidth={1.8} />
                            </span>
                            <div>
                                <a
                                href="https://maps.app.goo.gl/4yHNdzUk7iju6WqW6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                                >
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-medium transition-colors group-hover:text-primary">
                                        Purok 3, Brgy. Mahayahay, Maasin City, Southern Leyte, 6600, Philippines
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Social Links */}
                        <p className="mt-7 flex justify-center text-sm text-muted-foreground">
                            Follow me on social media:
                        </p>
                        <div className="mt-2 flex justify-center gap-3">

                            {socials.map((social) => {
                            const Icon = social.icon

                            return (
                                <Link
                                key={social.name}
                                href={social.href}
                                aria-label={social.name}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                                >
                                <Icon size={17} />
                                </Link>
                            )
                            })}
                        </div>
                </div>

                {/* Contact form */}
                <form
                action="mailto:Joerelzipe@gmail.com"
                method="post"
                encType="text/plain"
                className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm sm:p-8"
                >
                <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                    <label htmlFor="first-name" className="mb-2 block text-sm font-medium">
                        First name <span aria-hidden="true">*</span>
                    </label>
                    <input
                        id="first-name"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        required
                        className="h-11 w-full rounded-lg border border-input bg-background px-3 outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
                        placeholder="Your first name"
                    />
                    </div>

                    <div>
                    <label htmlFor="last-name" className="mb-2 block text-sm font-medium">
                        Last name <span aria-hidden="true">*</span>
                    </label>
                    <input
                        id="last-name"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        required
                        className="h-11 w-full rounded-lg border border-input bg-background px-3 outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
                        placeholder="Your last name"
                    />
                    </div>
                </div>

                <div className="mt-5">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email address <span aria-hidden="true">*</span>
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
                    placeholder="you@example.com"
                    />
                </div>

                <div className="mt-5">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="min-h-32 w-full resize-y rounded-lg border border-input bg-background px-3 py-3 outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
                    placeholder="Tell me how I can help..."
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-5 font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                    Send message
                </button>
                </form>
            </div>
            </section>
    )
}
