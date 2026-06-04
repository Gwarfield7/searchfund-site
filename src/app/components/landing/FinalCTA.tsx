import CTAButton from "./CTAButton";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="border-t border-border px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-content text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-navy md:text-4xl">
          Open to a Confidential Conversation?
        </h2>
        <p className="mx-auto mt-6 max-w-[540px] text-lg leading-relaxed text-ink/85 md:text-xl">
          Reaching out does not commit you to anything. We&apos;re happy to learn
          more about your situation and explore whether there may be a thoughtful
          path forward.
        </p>

        <div className="mt-10">
          <CTAButton href="mailto:hello@example.com">
            Schedule a Confidential Call
          </CTAButton>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 text-sm text-ink/60">
          <a
            href="mailto:hello@example.com"
            className="transition-colors hover:text-navy"
          >
            hello@example.com
          </a>
          <a
            href="tel:+15555550100"
            className="transition-colors hover:text-navy"
          >
            (555) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}
