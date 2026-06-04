export default function FounderVideo() {
  return (
    <section className="border-t border-border bg-card px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-wide">
        <div className="mx-auto max-w-content">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-navy md:text-4xl">
            A Short Message From Us
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/85 md:text-xl">
            Before asking for a conversation, we wanted to introduce ourselves,
            share why we are pursuing long-term ownership, and explain how we
            think about a respectful transition.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[880px]">
          <div
            className="relative aspect-video w-full border border-border bg-cream"
            role="img"
            aria-label="Founder introduction video placeholder"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center border border-navy/20 bg-navy/5">
                <svg
                  className="ml-1 h-6 w-6 text-navy"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm tracking-wide text-ink/50">
                Video embed placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
