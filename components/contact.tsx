import { CONTACT_EMAIL, HAS_CONTACT_EMAIL, HAS_PHONE_NUMBER, PHONE_NUMBER } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" className="bg-[#111313] py-20 text-white sm:py-28 lg:py-36">
      <div className="page-shell text-center">
        <p className="eyebrow !text-white/40">Prêt à retrouver un intérieur propre ?</p>
        <h2 className="mx-auto mt-5 max-w-5xl text-[clamp(2.8rem,7.5vw,7rem)] font-bold leading-[.88] tracking-[-.075em]">Votre intérieur<br />mérite mieux.</h2>
        <p className="mx-auto mt-7 max-w-lg text-sm leading-6 text-white/55 sm:text-base">Réservez votre nettoyage intérieur à domicile.</p>
        <a href="#reserver" className="inverse-button mt-8 w-full px-7 sm:w-auto">Demander un rendez-vous</a>
        {(HAS_PHONE_NUMBER || HAS_CONTACT_EMAIL) && <div className="mt-8 flex flex-col items-center justify-center gap-2 text-xs font-semibold text-white/48 sm:flex-row sm:gap-5">{HAS_PHONE_NUMBER && <><a className="hover:text-white" href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a><a className="hover:text-white" href={`sms:${PHONE_NUMBER}`}>Envoyer un SMS</a></>}{HAS_CONTACT_EMAIL && <a className="break-all hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>}</div>}
      </div>
    </section>
  );
}
