import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ContactSection />
      <footer className="border-t border-border py-8 px-6 md:px-12 text-center text-muted-foreground text-sm">
        © 2025 ODVION. Bütün hüquqlar qorunur.
      </footer>
    </div>
  );
};

export default Index;
