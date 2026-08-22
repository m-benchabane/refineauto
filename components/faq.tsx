const faqs = [
  ["Combien de temps dure un nettoyage ?", "La durée dépend de la taille et de l’état du véhicule. Une estimation peut être donnée lors de la prise de rendez-vous."],
  ["Dois-je vous apporter mon véhicule ?", "Non. RefineAuto intervient actuellement directement à votre domicile."],
  ["Comment puis-je payer ?", "Le paiement s’effectue sur place après la prestation."],
  ["Est-ce que toutes les taches disparaissent ?", "Nous faisons le maximum pour améliorer l’état des surfaces, mais certaines taches anciennes, profondes ou déjà fixées peuvent ne pas disparaître totalement."],
  ["Nettoyez-vous les sièges en cuir ou en Alcantara ?", "Ces matières nécessitent une méthode spécifique. Elles sont traitées uniquement lorsqu’un nettoyage adapté peut être réalisé sans risque."],
  ["Intervenez-vous à Chalon-sur-Saône ?", "Oui. Un supplément déplacement de 10 € s’applique actuellement pour Chalon-sur-Saône."],
];

export function FAQ() {
  return (
    <section className="section-pad bg-white"><div className="page-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">Questions fréquentes</p><h2 className="section-title mt-3">Bon à savoir.</h2></div><div className="border-t border-line">{faqs.map(([question, answer]) => <details key={question} className="group border-b border-line"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm font-bold sm:text-base"><span>{question}</span><span className="text-xl font-light text-steel transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-muted">{answer}</p></details>)}</div></div></section>
  );
}
