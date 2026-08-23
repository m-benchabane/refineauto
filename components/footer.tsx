import { SOCIAL_LINKS } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111313] py-9 text-white">
      <div className="page-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><a href="#accueil" className="text-sm font-extrabold tracking-[.19em]" aria-label="RefineAuto — Retour en haut">REFINE<span className="text-white/45">AUTO</span></a><p className="mt-3 max-w-sm text-xs leading-5 text-white/42">Nettoyage intérieur automobile à domicile<br />Le Creusot et alentours</p></div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-white/70" aria-label="Liens de pied de page"><a className="hover:text-white" href="#formules">Formules</a><a className="hover:text-white" href="#zone">Zone</a><a className="hover:text-white" href="#reserver">Réserver</a><a className="hover:text-white" href="#contact">Contact</a>{SOCIAL_LINKS.map((link) => <a className="hover:text-white" key={link.label} href={link.href} rel="noreferrer">{link.label}</a>)}</nav>
        </div>
        <div className="mt-9 flex flex-col gap-2 border-t border-white/10 pt-5 text-[.68rem] text-white/35 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} RefineAuto. Tous droits réservés.</p><p>Paiement sur place · Aucun paiement en ligne</p></div>
      </div>
    </footer>
  );
}
