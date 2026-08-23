const essentialHighlights = ["Habitacle + coffre", "Tapis, moquettes et plastiques", "Tableau de bord, portes et vitres"];
const completeHighlights = ["Tout le contenu Essentiel", "Sièges textile compatibles", "Injecteur-extracteur si adapté"];

const essentialDetails = ["Aspiration complète de l’habitacle", "Aspiration du coffre", "Nettoyage des tapis et moquettes", "Nettoyage du tableau de bord", "Console centrale", "Plastiques intérieurs", "Panneaux de portes", "Vitres intérieures", "Finitions"];
const completeDetails = ["Tout le contenu de la formule Essentiel", "Nettoyage approfondi des sièges en tissu compatibles", "Produit textile adapté", "Travail des taches", "Nettoyage à l’injecteur-extracteur lorsque la matière le permet"];

function Highlights({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="mt-7 space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 text-sm leading-6 ${light ? "text-white/75" : "text-[#4f565b]"}`}>
          <span className={`mt-[.48rem] size-1.5 shrink-0 rounded-full ${light ? "bg-white" : "bg-ink"}`} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Details({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <details className={`group mt-6 border-t pt-4 ${light ? "border-white/15" : "border-line"}`}>
      <summary className={`flex min-h-10 cursor-pointer list-none items-center justify-between text-xs font-bold ${light ? "text-white/65" : "text-muted"}`}>
        Voir les détails
        <span className="text-lg font-light transition-transform group-open:rotate-45" aria-hidden="true">+</span>
      </summary>
      <ul className={`space-y-2 pb-2 pt-3 text-xs leading-5 ${light ? "text-white/58" : "text-muted"}`}>
        {items.map((item) => <li key={item}>— {item}</li>)}
      </ul>
    </details>
  );
}

export function Pricing() {
  return (
    <section id="formules" className="section-pad bg-mist">
      <div className="page-shell">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow">Formules & tarifs</p>
            <h2 className="section-title mt-4">Deux formules.<br />Un choix simple.</h2>
          </div>
          <p className="section-copy md:max-w-xs md:text-right">Le niveau de soin adapté à votre intérieur, sans surprise.</p>
        </div>

        <div className="mt-10 grid border-y border-black/12 md:mt-14 md:grid-cols-2">
          <article className="flex flex-col border-b border-black/12 py-8 md:border-b-0 md:border-r md:py-10 md:pr-10 lg:pr-16">
            <p className="text-5xl font-bold tracking-[-.075em] sm:text-6xl">50 €</p>
            <p className="mt-7 text-[.66rem] font-extrabold uppercase tracking-[.16em] text-muted">Entretien régulier</p>
            <h3 className="mt-2 text-2xl font-bold uppercase tracking-[-.04em] sm:text-3xl">Intérieur Essentiel</h3>
            <Highlights items={essentialHighlights} />
            <Details items={essentialDetails} />
            <p className="mt-5 text-xs leading-5 text-muted">Le nettoyage profond des sièges n’est pas inclus.</p>
            <a href="#reserver" className="secondary-button mt-7 w-full md:mt-auto">Choisir Essentiel</a>
          </article>

          <article className="relative flex flex-col py-8 md:py-10 md:pl-10 lg:pl-16">
            <p className="text-5xl font-bold tracking-[-.075em] sm:text-6xl">70 €</p>
            <p className="mt-7 text-[.66rem] font-extrabold uppercase tracking-[.16em] text-muted">Soin approfondi</p>
            <h3 className="mt-2 text-2xl font-bold uppercase tracking-[-.04em] sm:text-3xl">Intérieur Complet</h3>
            <Highlights items={completeHighlights} />
            <Details items={completeDetails} />
            <p className="mt-5 text-xs leading-5 text-muted">Cuir et Alcantara : méthode adaptée si la matière peut être prise en charge. Certaines taches profondes peuvent rester visibles.</p>
            <a href="#reserver" className="primary-button mt-7 w-full md:mt-auto">Choisir Complet</a>
          </article>
        </div>

        <details className="group border-b border-black/12 px-0">
          <summary className="flex min-h-18 cursor-pointer list-none items-center justify-between gap-5 py-4 text-sm font-bold sm:text-base">
            <span>Véhicule très sale, poils d’animaux ou grand gabarit ?</span>
            <span className="shrink-0 text-xl font-light text-steel transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <div className="max-w-3xl border-t border-black/10 pb-6 pt-5 text-sm leading-6 text-muted">
            <p>Un supplément peut être proposé selon le travail nécessaire. Il vous sera toujours communiqué avant la prestation.</p>
            <p className="mt-3"><strong className="text-ink">Chalon-sur-Saône : +10 € de déplacement.</strong></p>
          </div>
        </details>
      </div>
    </section>
  );
}
