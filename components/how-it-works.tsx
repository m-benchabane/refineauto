const steps = [
  ["01", "Vous réservez", "Choisissez votre formule et envoyez votre demande."],
  ["02", "Nous venons à domicile", "Le créneau est confirmé avec vous."],
  ["03", "Vous retrouvez un intérieur propre", "Paiement sur place après la prestation."],
];

export function HowItWorks() {
  return (
    <section id="fonctionnement" className="section-pad bg-[#111313] text-white">
      <div className="page-shell">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="eyebrow !text-white/42">Comment ça marche</p><h2 className="section-title mt-4">Simple, du début à la fin.</h2></div>
          <a href="#reserver" className="hidden text-sm font-bold text-white/75 hover:text-white md:inline-flex">Faire une demande →</a>
        </div>
        <div className="mt-10 grid border-t border-white/16 md:mt-14 md:grid-cols-3">{steps.map(([number, title, copy], index) => <article key={number} className={`py-7 md:min-h-60 md:py-8 ${index > 0 ? "border-t border-white/16 md:border-l md:border-t-0 md:pl-8" : "md:pr-8"} ${index === 1 ? "md:pr-8" : ""}`}><p className="text-xs font-extrabold tracking-[.14em] text-white/38">{number}</p><h3 className="mt-12 max-w-xs text-xl font-bold tracking-[-.035em]">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-white/52">{copy}</p></article>)}</div>
      </div>
    </section>
  );
}
