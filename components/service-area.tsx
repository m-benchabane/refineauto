const cities = ["Le Creusot", "Torcy", "Montchanin", "Montceau-les-Mines", "Saint-Vallier", "Blanzy", "Écuisses", "Saint-Eusèbe", "Communes proches"];

export function ServiceArea() {
  return (
    <section id="zone" className="section-pad border-y border-line bg-[#20262a] text-white"><div className="page-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start"><div><p className="eyebrow !text-[#a9bcc9]">Zone d’intervention</p><h2 className="section-title mt-3">Nous nous déplaçons chez vous.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/65">RefineAuto intervient principalement au Creusot, Montceau-les-Mines et dans les communes proches.</p></div>
      <div><div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/15 bg-white/15 sm:grid-cols-3">{cities.map((city) => <p key={city} className="bg-[#20262a] px-4 py-4 text-sm">{city}</p>)}</div><p className="mt-5 rounded-lg border border-white/20 p-4 text-sm font-bold">Chalon-sur-Saône : +10 € de déplacement</p><p className="mt-5 text-sm leading-6 text-white/65">Vous habitez un peu plus loin ? Envoyez-nous votre demande et nous vous confirmons rapidement si le déplacement est possible.</p></div>
    </div></section>
  );
}
