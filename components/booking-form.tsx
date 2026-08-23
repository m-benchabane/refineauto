"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const vehicleTypes = ["Citadine", "Compacte", "Berline", "Break", "SUV", "Monospace", "Utilitaire léger", "Autre"];

function RadioCard({ name, value, title, detail, required }: { name: string; value: string; title: string; detail?: string; required?: boolean }) {
  return (
    <label className="flex min-h-14 cursor-pointer gap-3 border border-line bg-white p-4 transition-colors hover:border-[#aeb3b6] has-[:checked]:border-ink has-[:checked]:shadow-[inset_0_0_0_1px_#111315]">
      <input className="mt-1 size-4 shrink-0 accent-[#111315]" type="radio" name={name} value={value} required={required} />
      <span><span className="block text-sm font-bold">{title}</span>{detail && <span className="mt-1 block text-xs leading-5 text-muted">{detail}</span>}</span>
    </label>
  );
}

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error("Envoi impossible");
      router.push("/merci");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="reserver" className="section-pad bg-white">
      <div className="page-shell grid gap-10 lg:grid-cols-[.62fr_1.38fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow">Demande de rendez-vous</p>
          <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-[-.055em]">Votre véhicule. Vos disponibilités.</h2>
          <p className="mt-5 text-sm leading-6 text-muted">Remplissez le formulaire. Nous vous recontactons pour confirmer le créneau.</p>
          <div className="mt-8 border-t border-black/12 pt-5 text-xs text-muted">
            <p><strong className="mr-2 text-sm text-ink">Sans acompte</strong>Aucun paiement en ligne</p>
            <p className="mt-3"><strong className="mr-2 text-sm text-ink">Confirmation</strong>Par téléphone ou message</p>
          </div>
        </div>

        <form name="refineauto-booking" method="POST" action="/merci" data-netlify="true" onSubmit={handleSubmit} className="border-y border-black/12 bg-white py-7 sm:py-9 lg:border-l lg:border-t-0 lg:py-0 lg:pl-12">
          <input type="hidden" name="form-name" value="refineauto-booking" />
          <div className="space-y-7 sm:space-y-8">
            <fieldset><legend className="mb-3 text-sm font-bold"><span className="mr-2 text-xs text-steel">01</span> Formule <span aria-hidden="true">*</span></legend><div className="grid gap-3 sm:grid-cols-2"><RadioCard name="formule" value="Interieur Essentiel - 50 EUR" title="Intérieur Essentiel — 50 €" required /><RadioCard name="formule" value="Interieur Complet - 70 EUR" title="Intérieur Complet — 70 €" required /></div></fieldset>
            <div><label htmlFor="vehicle" className="mb-2 block text-sm font-bold"><span className="mr-2 text-xs text-steel">02</span> Type de véhicule <span aria-hidden="true">*</span></label><select id="vehicle" name="type-vehicule" className="field" required defaultValue=""><option value="" disabled>Sélectionnez un type</option>{vehicleTypes.map((type) => <option key={type}>{type}</option>)}</select></div>
            <fieldset><legend className="mb-3 text-sm font-bold"><span className="mr-2 text-xs text-steel">03</span> État du véhicule <span aria-hidden="true">*</span></legend><div className="grid gap-3 sm:grid-cols-3"><RadioCard name="etat-vehicule" value="Entretien courant" title="Entretien courant" required /><RadioCard name="etat-vehicule" value="Sale" title="Sale" required /><RadioCard name="etat-vehicule" value="Tres sale" title="Très sale" detail="Supplément possible, toujours annoncé avant." required /></div></fieldset>
            <div className="border-t border-line pt-7"><p className="mb-5 text-sm font-bold"><span className="mr-2 text-xs text-steel">04</span> Vos coordonnées</p><div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="name" className="mb-2 block text-sm font-bold">Prénom et nom <span aria-hidden="true">*</span></label><input id="name" name="nom" className="field" autoComplete="name" required /></div><div><label htmlFor="phone" className="mb-2 block text-sm font-bold">Numéro de téléphone <span aria-hidden="true">*</span></label><input id="phone" name="telephone" className="field" type="tel" inputMode="tel" autoComplete="tel" required /></div></div>
            <div className="mt-5"><label htmlFor="email" className="mb-2 block text-sm font-bold">Email <span className="font-normal text-muted">(facultatif)</span></label><input id="email" name="email" className="field" type="email" autoComplete="email" /></div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2"><div><label htmlFor="city" className="mb-2 block text-sm font-bold">Ville <span aria-hidden="true">*</span></label><input id="city" name="ville" className="field" autoComplete="address-level2" required /></div><div><label htmlFor="postal" className="mb-2 block text-sm font-bold">Code postal <span aria-hidden="true">*</span></label><input id="postal" name="code-postal" className="field" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{5}" title="Saisissez un code postal à 5 chiffres" required /></div></div></div>
            <fieldset><legend className="mb-3 text-sm font-bold"><span className="mr-2 text-xs text-steel">05</span> Disponibilité préférée <span aria-hidden="true">*</span></legend><div className="grid gap-3 sm:grid-cols-3"><RadioCard name="disponibilite" value="En semaine" title="En semaine" required /><RadioCard name="disponibilite" value="Le week-end" title="Le week-end" required /><RadioCard name="disponibilite" value="Peu importe" title="Peu importe" required /></div></fieldset>
            <div><label htmlFor="message" className="mb-2 block text-sm font-bold">Informations utiles <span className="font-normal text-muted">(facultatif)</span></label><textarea id="message" name="message" className="field min-h-28 resize-y" placeholder="Poils d’animaux, tache particulière…" /></div>
          </div>
          {status === "error" && <p className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">L’envoi n’a pas abouti. Vérifiez votre connexion puis réessayez.</p>}
          <button type="submit" className="primary-button mt-8 w-full disabled:cursor-wait disabled:opacity-60" disabled={status === "loading"}>{status === "loading" ? "Envoi en cours…" : "Envoyer ma demande de rendez-vous"}</button>
          <p className="mt-4 text-center text-xs leading-5 text-muted">Sans paiement en ligne · Confirmation rapide par téléphone ou message</p>
        </form>
      </div>
    </section>
  );
}
