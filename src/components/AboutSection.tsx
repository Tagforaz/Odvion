const AboutSection = () => {
  const advantages = [
    "Bütün məlumatlar yalnız sizin infrastrukturda qalır",
    "ISO 27001 nəzarətlərinin azərbaycanca izahları",
    "Sadə və şəffaf idarəetmə mühiti",
    "Hesabatların ixrac imkanı",
    "Doğma dildə tam dəstək",
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Biz kimik?</h2>
        <div className="h-1 w-16 bg-primary rounded mb-12" />

        <div className="space-y-6 text-foreground/85 text-base md:text-lg leading-relaxed max-w-4xl">
          <p>
            <span className="text-primary font-semibold">ODVION</span> – ISO 27001 standartına əsaslanan, risk və uyğunluğun idarə edilməsini sadələşdirən ilk yerli platformadır.
          </p>
          <p>
            Biz şirkətlərin informasiya təhlükəsizliyi üzrə riskləri, nəzarətləri və sənədləri asanlıqla izləməsinə, idarə etməsinə və sənədləşdirməsinə kömək edirik.
          </p>
          <p>
            <span className="text-primary font-semibold">ODVION</span> bulud üzərində deyil, tamamilə təşkilatın daxili mühitində qurulur və işləyir.
          </p>
          <p>
            Bütün məlumatlar yalnız istifadəçinin öz infrastrukturunda saxlanılır, kənara ötürülmür və tam nəzarət sizdə olur. İstifadəçilər istədikləri zaman məlumatları hesabat və ya arxiv məqsədi ilə ixrac edə bilərlər.
          </p>
          <p>
            Platforma ISO 27001-in nəzarət maddələri (Əlavə A) üzrə qısa, sadə və başa düşülən izahlar təqdim edir. Bu izahlar sayəsində şirkətlər öz fəaliyyətlərinə uyğun nəzarətləri seçə, tətbiq edə və izləyə bilirlər.
          </p>
          <p>
            <span className="text-primary font-semibold">ODVION</span> tamamilə doğma dildə hazırlanıb və azərbaycanca, anlaşılan idarəetmə mühiti təqdim edir.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-8">Bizim üstünlüklərimiz:</h3>
          <ul className="space-y-4 text-foreground/80 text-base md:text-lg">
            {advantages.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="#product"
              className="px-8 py-3 rounded-full border border-border bg-secondary text-foreground font-medium hover:bg-muted transition-colors"
            >
              Məhsula baxın
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-border bg-secondary text-foreground font-medium hover:bg-muted transition-colors"
            >
              Əlaqə saxlayın
            </a>
          </div>
        </div>

        <p className="mt-16 text-muted-foreground text-sm md:text-base border-t border-border pt-6">
          <span className="text-primary font-semibold">ODVION</span> — təhlükəsizliyi sadələşdirən və doğma dildə təqdim olunan ilk yerli risk və uyğunluq idarəetmə platforması.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
