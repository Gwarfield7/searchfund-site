import SectionLabel from "./SectionLabel";
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section className="px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
      <div className="mx-auto grid max-w-wide gap-12 lg:grid-cols-[1fr_280px] lg:gap-16 lg:items-start">
        <div>
          <SectionLabel>Entrepreneurs Seeking One Exceptional Business</SectionLabel>

          <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.15] tracking-tight text-navy text-balance md:text-5xl lg:text-[3.25rem]">
            Looking for the Right Home for Your Business?
          </h1>

          <p className="mt-8 max-w-content text-lg leading-relaxed text-ink/85 md:text-xl">
            We&apos;re Matt Haaga and Grant Warfield. We are looking to acquire
            and personally operate one enduring business. If you are considering
            succession, we would welcome a confidential conversation.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CTAButton href="#contact">Schedule a Confidential Call</CTAButton>
            <CTAButton href="#what-matters" variant="secondary">
              What Matters To Us
            </CTAButton>
          </div>

          <p className="mt-8 text-sm tracking-wide text-sage">
            Confidential &nbsp;•&nbsp; No Obligation &nbsp;•&nbsp; Directly With Us
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:pt-8">
          <FounderPortrait initials="MH" name="Matt Haaga" />
          <FounderPortrait initials="GW" name="Grant Warfield" />
        </div>
      </div>
    </section>
  );
}

function FounderPortrait({ initials, name }: { initials: string; name: string }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="flex h-[72px] w-[72px] shrink-0 items-center justify-center border border-border bg-card font-serif text-xl text-navy/70"
        aria-hidden="true"
      >
        {initials}
      </div>
      <p className="text-sm font-medium text-ink/80">{name}</p>
    </div>
  );
}
