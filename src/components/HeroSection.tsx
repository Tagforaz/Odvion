import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Simplify risk.
            <br />
            <span className="text-primary">Amplify</span> control.
          </h1>
          <p className="mt-8 text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
            <span className="text-primary font-semibold">ODVION</span> — ISO 27001-ə əsaslanan sadə, şəffaf və təhlükəsiz idarəetmə ilk yerli platforma.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={heroBg}
              alt="Kibertəhlükəsizlik"
              className="w-full h-[300px] md:h-[450px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
