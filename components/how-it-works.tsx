const steps = [
  ["01", "Vous envoyez votre demande", "Vous choisissez votre formule et indiquez quelques informations sur votre véhicule."],
  ["02", "RefineAuto vous recontacte", "Nous vous recontactons rapidement afin de convenir ensemble du jour et de l’heure."],
  ["03", "Nous intervenons à domicile", "Le nettoyage est réalisé directement chez vous."],
];

export function HowItWorks() {
  return (
    <section id="fonctionnement" className="section-pad border-y border-line bg-mist">
      <div className="page-shell"><p className="eyebrow">Comment ça marche</p><h2 className="section-title mt-3">Simple, du premier message à la prestation.</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">{steps.map(([number, title, copy]) => <article key={number} className="bg-white p-6 sm:p-8"><p className="text-xs font-extrabold tracking-[.14em] text-steel">{number}</p><h3 className="mt-8 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{copy}</p></article>)}</div>
        <p className="mt-6 text-sm font-bold">Paiement sur place après la prestation. <span className="font-normal text-muted">Aucun paiement en ligne.</span></p>
      </div>
    </section>
  );
}
