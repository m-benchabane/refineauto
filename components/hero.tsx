export function Hero() {
  return (
    <section id="accueil" className="bg-[#f7f6f2]">
      <div className="page-shell grid min-h-[calc(100svh-4rem)] grid-rows-[auto_1fr_auto] py-7 sm:min-h-[calc(100svh-4.5rem)] sm:py-10 lg:py-12">
        <div className="flex items-center justify-between text-[.62rem] font-extrabold uppercase tracking-[.2em] text-muted sm:text-[.68rem]">
          <p>RefineAuto · Le Creusot</p>
          <p className="hidden sm:block">Nettoyage intérieur à domicile</p>
        </div>

        <div className="flex items-center py-8 sm:py-12">
          <h1 className="w-full text-[clamp(3.15rem,8.5vw,7.5rem)] font-bold leading-[.87] tracking-[-.078em] text-ink">
            <span className="block">Votre voiture.</span>
            <span className="mt-2 block font-[480] text-[#343635] sm:mt-3">Impeccable à l’intérieur.</span>
          </h1>
        </div>

        <div className="grid gap-7 border-t border-black/12 pt-6 sm:pt-7 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
          <div>
            <p className="max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7">Nettoyage intérieur automobile à domicile au Creusot et alentours. Formules à partir de 50 €.</p>
            <p className="mt-3 text-[.68rem] font-semibold uppercase tracking-[.12em] text-steel">Demande simple · Paiement sur place</p>
          </div>
          <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-6">
            <a href="#reserver" className="primary-button w-full px-6 sm:w-auto">Demander un rendez-vous</a>
            <a href="#formules" className="group inline-flex min-h-11 items-center text-sm font-bold text-ink">Voir les tarifs <span className="ml-2 transition-transform group-hover:translate-y-0.5" aria-hidden="true">↓</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
