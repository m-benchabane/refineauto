import Image from "next/image";

const services = ["Aspiration complète", "Plastiques et surfaces intérieures", "Tapis et moquettes", "Vitres intérieures", "Coffre", "Nettoyage approfondi des sièges en tissu disponible"];

export function Hero() {
  return (
    <section id="accueil" className="overflow-hidden border-b border-line bg-[#fafbfb]">
      <div className="page-shell grid gap-12 py-16 lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:py-24">
        <div>
          <p className="eyebrow mb-5">Nettoyage intérieur automobile à domicile</p>
          <h1 className="max-w-3xl text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[.96] tracking-[-.06em]">Un intérieur propre, <span className="text-steel">sans vous déplacer.</span></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">RefineAuto intervient directement à votre domicile au Creusot, Montceau-les-Mines, Chalon-sur-Saône et alentours.</p>
          <div className="mt-7 grid gap-2 sm:grid-cols-2">
            {services.map((service) => <p key={service} className="flex gap-2 text-sm text-[#394147]"><span className="font-bold text-steel" aria-hidden="true">✓</span>{service}</p>)}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#reserver" className="primary-button">Demander un rendez-vous</a>
            <a href="#formules" className="secondary-button">Découvrir les tarifs</a>
          </div>
        </div>
        <figure className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#20262a] shadow-[0_24px_70px_rgb(23_26_29/18%)] lg:aspect-[4/5]">
          <Image src="/images/habitacle-moderne-hero.jpg" alt="Habitacle moderne et propre d’une voiture du quotidien" fill preload sizes="(max-width: 1023px) calc(100vw - 2rem), 46vw" className="object-cover object-center" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <figcaption className="absolute bottom-3 right-3 rounded bg-black/45 px-2.5 py-1.5 text-[.62rem] font-semibold tracking-wide text-white/90 backdrop-blur-sm">Photo d’illustration</figcaption>
        </figure>
      </div>
    </section>
  );
}
