import CTAButton from "./CTAButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream">
      <div className="mx-auto flex max-w-wide items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="font-serif text-xl font-medium tracking-tight text-navy md:text-2xl">
          Haaga &amp; Warfield
        </a>
        <CTAButton href="#contact" className="hidden sm:inline-flex text-xs px-6 py-2.5">
          Schedule a Call
        </CTAButton>
      </div>
    </header>
  );
}
