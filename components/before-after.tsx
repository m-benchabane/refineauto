import Image from "next/image";

type ResultPhoto = { before: string; after: string; alt: string };

// Ajoutez ici uniquement de vraies photos de prestations RefineAuto.
const resultPhotos: ResultPhoto[] = [];

export function BeforeAfter() {
  if (resultPhotos.length === 0) return null;

  return (
    <section className="section-pad bg-white">
      <div className="page-shell">
        <p className="eyebrow">Réalisations RefineAuto</p>
        <h2 className="section-title mt-3">Avant / Après</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {resultPhotos.map((photo) => (
            <article key={photo.before} className="grid grid-cols-2 overflow-hidden rounded-xl border border-line">
              <div className="relative aspect-[3/4]"><Image src={photo.before} alt={`Avant — ${photo.alt}`} fill sizes="(max-width: 767px) 50vw, 17vw" className="object-cover" /></div>
              <div className="relative aspect-[3/4]"><Image src={photo.after} alt={`Après — ${photo.alt}`} fill sizes="(max-width: 767px) 50vw, 17vw" className="object-cover" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
