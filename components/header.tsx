"use client";

import { useState } from "react";

const links = [
  ["Accueil", "#accueil"], ["Formules", "#formules"], ["Comment ça marche", "#fonctionnement"],
  ["Zone d’intervention", "#zone"], ["Réserver", "#reserver"], ["Contact", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/95 backdrop-blur-sm">
      <div className="page-shell flex h-18 items-center justify-between">
        <a href="#accueil" className="text-[.92rem] font-extrabold tracking-[.16em]" aria-label="RefineAuto — Accueil">
          REFINE<span className="text-steel">AUTO</span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigation principale">
          {links.map(([label, href]) => <a key={href} href={href} className="text-[.78rem] font-semibold text-muted transition-colors hover:text-ink">{label}</a>)}
        </nav>
        <a href="#reserver" className="primary-button hidden sm:inline-flex">Réserver</a>
        <button type="button" className="grid size-11 place-items-center rounded-md border border-line sm:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setOpen(!open)}>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true"><span className="h-px bg-ink" /><span className="h-px bg-ink" /><span className="h-px bg-ink" /></span>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-line bg-white px-4 py-4 sm:hidden" aria-label="Navigation mobile">
          <div className="mx-auto flex max-w-xl flex-col">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-line/70 py-3 text-sm font-semibold last:border-0">{label}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}
