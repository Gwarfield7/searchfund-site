const values = [
  "Preserving what you've built",
  "Supporting employees",
  "Protecting customer relationships",
  "Honoring the company's reputation",
  "Taking a long-term ownership approach",
  "Providing a respectful, confidential process",
];

export default function WhatMatters() {
  return (
    <section
      id="what-matters"
      className="border-t border-border bg-card px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-wide">
        <div className="mx-auto max-w-content">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-navy md:text-4xl">
            What Matters To Us
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-[1.8] text-ink/85 md:text-xl">
            <p>
              We care about businesses that have been built with patience, care,
              and integrity.
            </p>
            <p>
              For many owners, a business is more than a financial asset. It
              represents years of sacrifice, relationships with employees and
              customers, and a reputation earned over time.
            </p>
            <p>
              Our goal is to provide a thoughtful succession path for owners who
              want to see their company continue in good hands.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-wide gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {values.map((value) => (
            <article
              key={value}
              className="border border-border bg-cream p-8 md:p-10"
            >
              <p className="font-serif text-lg font-medium leading-snug text-navy md:text-xl">
                {value}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
