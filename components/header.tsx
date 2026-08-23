"use client";

import { useState } from "react";

const links = [
  ["Accueil", "#accueil"], ["Formules", "#formules"], ["Comment ça marche", "#fonctionnement"],
  ["Zone d’intervention", "#zone"], ["Réserver", "#reserver"], ["Contact", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/6 bg-[#fbfaf8]/96 backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center gap-2.5 sm:h-18 sm:gap-5">
        <a href="#accueil" className="mr-auto shrink-0 text-[.78rem] font-extrabold tracking-[.2em] sm:text-[.88rem]" aria-label="RefineAuto — Accueil">
          REFINE<span className="text-steel">AUTO</span>
        </a>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navigation principale">
          {links.slice(0, 4).map(([label, href]) => <a key={href} href={href} className="text-[.76rem] font-semibold text-muted transition-colors hover:text-ink">{label}</a>)}
        </nav>
        <a href="#reserver" className="inline-flex min-h-8 shrink-0 items-center justify-center bg-ink px-3 text-[.67rem] font-extrabold tracking-[.02em] text-white transition-colors hover:bg-[#333] sm:min-h-9 sm:px-3.5 sm:text-[.74rem]">Réserver</a>
        <button type="button" className="grid size-8 shrink-0 place-items-center border border-black/12 bg-transparent sm:size-9 xl:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setOpen(!open)}>
          <span className="relative block size-5" aria-hidden="true">
            <span className={`absolute left-0 top-[5px] h-px w-5 bg-ink transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[10px] h-px w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[15px] h-px w-5 bg-ink transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-line bg-[#fbfaf8] py-2 shadow-[0_18px_35px_rgb(17_19_21/8%)] xl:hidden" aria-label="Navigation mobile">
          <div className="page-shell flex flex-col">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-line/75 text-sm font-semibold last:border-0">{label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}
