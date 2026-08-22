const essential = ["Aspiration complète de l’habitacle", "Aspiration du coffre", "Nettoyage des tapis et moquettes", "Nettoyage du tableau de bord", "Console centrale", "Plastiques intérieurs", "Panneaux de portes", "Vitres intérieures", "Finitions"];
const complete = ["Tout le contenu de la formule Essentiel", "Nettoyage approfondi des sièges en tissu compatibles", "Produit textile adapté", "Travail des taches", "Nettoyage à l’injecteur-extracteur lorsque la matière le permet"];

function FeatureList({ items }: { items: string[] }) {
  return <ul className="mt-7 space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-[#40484d]"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-steel" />{item}</li>)}</ul>;
}

export function Pricing() {
  return (
    <section id="formules" className="section-pad bg-white">
      <div className="page-shell">
        <p className="eyebrow">Formules & tarifs</p>
        <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end"><h2 className="section-title">Deux formules, un tarif clair.</h2><p className="section-copy md:max-w-sm">Choisissez le niveau de nettoyage adapté à votre intérieur.</p></div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-[0_8px_30px_rgb(23_26_29/4%)] sm:p-8">
            <div className="flex items-start justify-between gap-4"><div><p className="text-sm font-bold text-steel">Formule 01</p><h3 className="mt-2 text-2xl font-bold tracking-tight">Intérieur Essentiel</h3></div><p className="text-3xl font-bold tracking-tight">50 €</p></div>
            <p className="mt-5 text-sm leading-6 text-muted">Pour retrouver un habitacle propre et soigné au quotidien.</p><FeatureList items={essential} />
            <p className="mt-7 rounded-lg bg-mist p-4 text-xs leading-5 text-muted">Le nettoyage profond des sièges à l’injecteur-extracteur n’est pas inclus dans cette formule.</p>
            <a href="#reserver" className="secondary-button mt-7 w-full">Choisir Essentiel</a>
          </article>
          <article className="flex flex-col rounded-xl border border-[#99a9b4] bg-[#f8fafb] p-6 shadow-[0_12px_40px_rgb(51_65_75/8%)] sm:p-8">
            <div className="flex items-start justify-between gap-4"><div><p className="text-sm font-bold text-steel">Formule 02 · Approfondi</p><h3 className="mt-2 text-2xl font-bold tracking-tight">Intérieur Complet</h3></div><p className="text-3xl font-bold tracking-tight">70 €</p></div>
            <p className="mt-5 text-sm leading-6 text-muted">Pour un nettoyage intérieur plus approfondi.</p><FeatureList items={complete} />
            <div className="mt-7 space-y-3 rounded-lg bg-white p-4 text-xs leading-5 text-muted"><p>Les matières spécifiques comme le cuir ou l’Alcantara sont nettoyées avec une méthode adaptée lorsqu’elles peuvent être prises en charge.</p><p>Certaines taches anciennes ou profondes peuvent ne pas disparaître totalement.</p></div>
            <a href="#reserver" className="primary-button mt-7 w-full">Choisir Complet</a>
          </article>
        </div>
        <aside className="mt-8 grid gap-4 rounded-xl border border-line bg-mist p-6 md:grid-cols-[1fr_1.6fr] md:p-8"><h3 className="text-xl font-bold tracking-tight">Et si mon véhicule est très sale ?</h3><div className="space-y-3 text-sm leading-6 text-muted"><p>Chaque véhicule est différent. En cas de saleté importante, poils d’animaux en grande quantité ou travail exceptionnel, un supplément peut être proposé.</p><p className="font-bold text-ink">Aucun supplément ne sera appliqué sans vous en informer avant la prestation.</p><p>Les véhicules de grande taille ou certaines zones éloignées peuvent également nécessiter un supplément. Chalon-sur-Saône : <strong>+10 € de déplacement</strong>.</p></div></aside>
      </div>
    </section>
  );
}
