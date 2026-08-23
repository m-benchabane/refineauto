const nearbyCities = ["Torcy", "Montchanin", "Montceau-les-Mines", "Saint-Vallier", "Blanzy", "Écuisses", "Saint-Eusèbe"];

export function ServiceArea() {
  return (
    <section id="zone" className="section-pad bg-[#f7f6f2]">
      <div className="page-shell grid gap-10 lg:grid-cols-[.62fr_1.38fr] lg:items-start lg:gap-20">
        <div>
          <p className="eyebrow">Zone d’intervention</p>
          <h2 className="section-title mt-4">Nous venons<br />à domicile.</h2>
        </div>
        <div className="border-t border-black/12 pt-7 lg:pt-8">
          <p className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold uppercase leading-none tracking-[-.065em]">Le Creusot</p>
          <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 tracking-[-.025em] text-[#4e5251] sm:text-xl sm:leading-9">{nearbyCities.map((city, index) => <span key={city}>{index > 0 && <span className="mx-2 text-black/20" aria-hidden="true">·</span>}{city}</span>)}</p>
          <div className="mt-9 grid gap-4 border-t border-black/12 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <div><p className="text-sm font-bold">Chalon-sur-Saône</p><p className="mt-1 text-sm text-muted">+10 € de déplacement</p></div>
            <p className="text-sm text-muted">Vous êtes ailleurs ? <a href="#reserver" className="font-bold text-ink underline decoration-black/25 underline-offset-4 hover:decoration-black">Contactez-nous.</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
