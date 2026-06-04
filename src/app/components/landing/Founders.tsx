const founders = [
  {
    name: "Matt Haaga",
    bio: "Partner bio placeholder. Background in operations, leadership, and business development with a commitment to long-term stewardship.",
    initials: "MH",
  },
  {
    name: "Grant Warfield",
    bio: "Former Deloitte professional, MBA graduate, CPA candidate, and business educator focused on accounting, finance, and business analysis.",
    initials: "GW",
  },
];

export default function Founders() {
  return (
    <section className="border-t border-border px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-wide">
        <h2 className="mx-auto max-w-content font-serif text-3xl font-medium tracking-tight text-navy md:text-4xl">
          Meet the Founders
        </h2>

        <div className="mx-auto mt-14 grid max-w-wide gap-10 md:grid-cols-2 md:gap-12">
          {founders.map((founder) => (
            <article key={founder.name} className="flex gap-6">
              <div
                className="flex h-20 w-20 shrink-0 items-center justify-center border border-border bg-card font-serif text-2xl text-navy/70"
                aria-hidden="true"
              >
                {founder.initials}
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-navy md:text-2xl">
                  {founder.name}
                </h3>
                <p className="mt-3 leading-relaxed text-ink/80">{founder.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
