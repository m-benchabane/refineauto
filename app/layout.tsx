import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const title = "RefineAuto | Nettoyage intérieur automobile Le Creusot & Montceau";
const description = "Nettoyage intérieur automobile à domicile au Creusot, Montceau-les-Mines, Chalon-sur-Saône et alentours. Formules à partir de 50 €.";
const deploymentUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(deploymentUrl),
  title,
  description,
  applicationName: "RefineAuto",
  keywords: [
    "nettoyage voiture Le Creusot",
    "nettoyage intérieur voiture Le Creusot",
    "nettoyage automobile Montceau-les-Mines",
    "nettoyage voiture Chalon-sur-Saône",
  ],
  openGraph: { title, description, type: "website", locale: "fr_FR", siteName: "RefineAuto" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${manrope.variable} scroll-smooth antialiased`}>
      <body>{children}</body>
    </html>
  );
}
