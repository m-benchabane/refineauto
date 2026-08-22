import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const title = "RefineAuto | Nettoyage intérieur automobile Le Creusot & Montceau";
const description = "Nettoyage intérieur automobile à domicile au Creusot, Montceau-les-Mines, Chalon-sur-Saône et alentours. Formules à partir de 50 €.";

export const metadata: Metadata = {
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
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${manrope.variable} scroll-smooth antialiased`}>
      <body>{children}</body>
    </html>
  );
}
