import Image from "next/image";

export function CareDetails() {
  return (
    <section className="section-pad border-t border-line bg-[#f5f7f8]">
      <div className="page-shell grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <figure className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#d7d9d7] shadow-[0_18px_55px_rgb(23_26_29/10%)]">
          <Image src="/images/nettoyage-siege-textile.jpg" alt="Nettoyage d’un siège automobile en tissu à l’injecteur-extracteur" fill sizes="(max-width: 1023px) calc(100vw - 2rem), 52vw" className="object-cover" />
          <figcaption className="absolute bottom-3 right-3 rounded bg-black/50 px-2.5 py-1.5 text-[.62rem] font-semibold tracking-wide text-white/90 backdrop-blur-sm">Photo d’illustration</figcaption>
        </figure>
        <div className="lg:pl-8">
          <p className="eyebrow">Le soin dans les détails</p>
          <h2 className="section-title mt-3">Une méthode adaptée à chaque surface.</h2>
          <p className="section-copy mt-6">Aspiration de l’habitacle, entretien des plastiques, tapis, moquettes et vitres : chaque zone est traitée selon la formule choisie.</p>
          <p className="section-copy mt-4">Pour les textiles compatibles, la formule Intérieur Complet inclut un nettoyage approfondi à l’injecteur-extracteur.</p>
          <a href="#formules" className="secondary-button mt-7">Comparer les formules</a>
        </div>
      </div>
    </section>
  );
}
