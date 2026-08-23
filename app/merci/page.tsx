import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Merci pour votre demande | RefineAuto", robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#17191b] px-3 py-12 sm:px-6"><section className="w-full max-w-2xl rounded-2xl bg-white p-6 text-center shadow-[0_20px_70px_rgb(0_0_0/24%)] sm:p-12"><Link href="/" className="text-sm font-extrabold tracking-[.17em]">REFINE<span className="text-steel">AUTO</span></Link><div className="mx-auto mt-9 grid size-12 place-items-center rounded-full bg-ink text-lg font-bold text-white" aria-hidden="true">✓</div><h1 className="mt-6 text-3xl font-bold tracking-[-.055em] sm:text-5xl">Demande bien envoyée.</h1><p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted">RefineAuto vous recontactera rapidement par téléphone ou message afin de convenir d’un rendez-vous.</p><Link href="/" className="primary-button mt-8 w-full sm:w-auto">Retour à l’accueil</Link></section></main>
  );
}
