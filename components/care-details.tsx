export function CareDetails() {
  return (
    <section className="section-pad bg-white">
      <div className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr] lg:items-end lg:gap-20">
          <div>
            <p className="eyebrow">Pourquoi RefineAuto</p>
            <h2 className="section-title mt-4">Le nécessaire.<br />Bien fait.</h2>
          </div>
          <p className="section-copy lg:max-w-lg">Un service simple, pensé pour entretenir tout l’habitacle sans immobiliser votre journée.</p>
        </div>
        <div className="mt-10 grid border-y border-black/12 sm:grid-cols-3 lg:mt-14">
          <article className="py-6 sm:pr-6 lg:py-8 lg:pr-10">
            <p className="text-[.65rem] font-extrabold uppercase tracking-[.16em] text-steel">À domicile</p>
            <h3 className="mt-6 text-xl font-bold tracking-[-.04em]">Nous venons à vous.</h3>
            <p className="mt-3 text-sm leading-6 text-muted">Au Creusot et dans les communes alentours.</p>
          </article>
          <article className="border-t border-black/12 py-6 sm:border-l sm:border-t-0 sm:px-6 lg:px-10 lg:py-8">
            <p className="text-[.65rem] font-extrabold uppercase tracking-[.16em] text-steel">Habitacle complet</p>
            <h3 className="mt-6 text-xl font-bold tracking-[-.04em]">Les zones qui comptent.</h3>
            <p className="mt-3 text-sm leading-6 text-muted">Sièges, sols, coffre, plastiques et vitres.</p>
          </article>
          <article className="border-t border-black/12 py-6 sm:border-l sm:border-t-0 sm:pl-6 lg:py-8 lg:pl-10">
            <p className="text-[.65rem] font-extrabold uppercase tracking-[.16em] text-steel">Tarifs clairs</p>
            <h3 className="mt-6 text-xl font-bold tracking-[-.04em]">Toujours annoncé avant.</h3>
            <p className="mt-3 text-sm leading-6 text-muted">Aucun supplément sans votre accord.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
