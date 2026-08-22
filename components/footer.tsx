import { SOCIAL_LINKS } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-[#171a1d] py-10 text-white"><div className="page-shell"><div className="flex flex-col justify-between gap-8 md:flex-row"><div><p className="text-sm font-extrabold tracking-[.16em]">REFINE<span className="text-[#9eb1bd]">AUTO</span></p><p className="mt-3 text-xs leading-5 text-white/55">Nettoyage intérieur automobile à domicile<br />Le Creusot • Montceau-les-Mines • Chalon-sur-Saône & alentours</p></div><nav className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold" aria-label="Liens de pied de page"><a href="#formules">Formules</a><a href="#reserver">Réserver</a><a href="#contact">Contact</a>{SOCIAL_LINKS.map((link) => <a key={link.label} href={link.href} rel="noreferrer">{link.label}</a>)}</nav></div><div className="mt-9 border-t border-white/10 pt-5 text-[.7rem] text-white/40">© {new Date().getFullYear()} RefineAuto. Tous droits réservés.</div></div></footer>
  );
}
