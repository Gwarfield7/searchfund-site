const cards = [
  {
    title: "Long-Term Ownership",
    copy: "We are not looking to quickly flip a business. We are seeking one company we can operate and grow for years to come.",
  },
  {
    title: "Direct Conversations",
    copy: "You will work directly with us throughout the process — no intermediaries, no pressure.",
  },
  {
    title: "Respect for Your Legacy",
    copy: "We understand that employees, customers, and reputation are often the heart of a business.",
  },
];

export default function Expectations() {
  return (
    <section className="border-t border-border px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-wide">
        <h2 className="mx-auto max-w-content font-serif text-3xl font-medium tracking-tight text-navy md:text-4xl">
          What You Can Expect From Us
        </h2>

        <div className="mx-auto mt-14 grid max-w-wide gap-6 md:grid-cols-3 md:gap-8">
          {cards.map((card) => (
            <article
              key={card.title}
              className="border border-border bg-card p-8 md:p-10"
            >
              <h3 className="font-serif text-xl font-medium text-navy md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink/80">{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
