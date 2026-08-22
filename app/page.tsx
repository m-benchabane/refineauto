import { BookingForm } from "@/components/booking-form";
import { CareDetails } from "@/components/care-details";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
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
  areaServed: ["Le Creusot", "Montceau-les-Mines", "Chalon-sur-Saône"],
  priceRange: "50 € – 70 €",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pricing />
        <CareDetails />
        <HowItWorks />
        <ServiceArea />
        <BookingForm />
        <FAQ />
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
