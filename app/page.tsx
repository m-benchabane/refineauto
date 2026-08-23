import { BookingForm } from "@/components/booking-form";
import { CareDetails } from "@/components/care-details";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { ServiceArea } from "@/components/service-area";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "RefineAuto",
  description: "Nettoyage intérieur automobile à domicile.",
  areaServed: ["Le Creusot", "Torcy", "Montchanin", "Montceau-les-Mines", "Saint-Vallier", "Blanzy", "Écuisses", "Saint-Eusèbe", "Chalon-sur-Saône"],
  priceRange: "50 € – 70 €",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pricing />
        <HowItWorks />
        <CareDetails />
        <ServiceArea />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
