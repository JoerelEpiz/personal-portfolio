export function Contact() {
    return(
        <section id="contact" className="py-16 sm:py-20">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
                {/* Contact introduction */}
                <div>
                <span className="inline-flex items-center gap-2 rounded-md border border-border/70 px-3 py-1 text-sm">
                    <span aria-hidden="true" className="text-violet-600">✉</span>
                    Contact
                </span>

                <h2 className="mt-6 max-w-lg text-4xl font-semibold tracking-tight sm:text-5xl">
                    Let’s work together.
                </h2>

                <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
                    Have a question or a project in mind? Send me a message and I’ll get
                    back to you.
                </p>

                <div className="mt-8 space-y-5">
                    <div className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-600 dark:text-violet-400" aria-hidden="true">
                        ✉
                    </span>
                    <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                        href="mailto:your.email@example.com"
                        className="font-medium hover:text-violet-600"
                        >
                        your.email@example.com
                        </a>
                    </div>
                    </div>

                    <div className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-violet-500/10 text-xl text-violet-600 dark:text-violet-400" aria-hidden="true">
                        ◎
                    </span>
                    <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">Philippines</p>
                    </div>
                    </div>
                </div>
                </div>

                {/* Contact form */}
                <form
                action="mailto:your.email@example.com"
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
                        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
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
                        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                        placeholder="Your last name"
                    />
                    </div>
                </div>

                <div className="mt-5">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Work email <span aria-hidden="true">*</span>
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
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
                    className="w-full resize-y rounded-lg border border-border bg-background px-3 py-2.5 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                    placeholder="Tell me how I can help..."
                    />
                </div>

                <button
                    type="submit"
                    className="mt-6 rounded-lg bg-violet-600 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                >
                    Send message
                </button>
                </form>
            </div>
            </section>
    )
}