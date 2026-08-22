import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Merci pour votre demande | RefineAuto", robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-mist px-4 py-16"><section className="w-full max-w-2xl rounded-xl border border-line bg-white p-7 text-center shadow-[0_12px_40px_rgb(23_26_29/6%)] sm:p-12"><Link href="/" className="text-sm font-extrabold tracking-[.16em]">REFINE<span className="text-steel">AUTO</span></Link><div className="mx-auto mt-10 grid size-12 place-items-center rounded-full bg-[#e9eff2] text-xl font-bold text-steel" aria-hidden="true">✓</div><h1 className="mt-6 text-3xl font-bold tracking-[-.045em] sm:text-4xl">Merci pour votre demande !</h1><p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted">Votre demande a bien été envoyée. RefineAuto vous recontactera rapidement par téléphone ou message afin de convenir d’un rendez-vous.</p><Link href="/" className="primary-button mt-8">Retour à l’accueil</Link></section></main>
  );
}
