const features = [
  {
    title: "Risklərin idarə edilməsi",
    desc: "Riskləri kateqoriyalara bölür, təsir və ehtimal göstəricilərini avtomatik hesablayır.",
  },
  {
    title: "Nəzarətlərin izlənməsi",
    desc: "ISO 27001 Annex A nəzarətləri üzrə uyğunluğu real vaxtda göstərir.",
  },
  {
    title: "Sənəd idarəetməsi",
    desc: "Siyasət və prosedurların mərkəzləşdirilmiş şəkildə saxlanmasını təmin edir.",
  },
  {
    title: "Hesabat və ixrac",
    desc: "İstifadəçi məlumatlarını PDF və Excel formatında ixrac edə bilər.",
  },
  {
    title: "Lokal mühitdə işləmə",
    desc: "Bütün məlumatlar yalnız təşkilatın öz infrastrukturunda saxlanılır, kənara ötürülmür.",
  },
];

const ProductSection = () => {
  return (
    <section id="product" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">Məhsulumuz</h2>
        <p className="text-muted-foreground text-lg mb-12">
          Risklərinizi sadələşdirin, nəzarətinizi gücləndirin.
        </p>

        <div className="space-y-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[280px_1fr] gap-4 items-start border border-border rounded-lg overflow-hidden"
            >
              <div className="bg-secondary px-6 py-4 font-display font-semibold text-foreground">
                {f.title}
              </div>
              <div className="px-6 py-4 text-foreground/80 border-t md:border-t-0 md:border-l border-border">
                {f.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-foreground/80 leading-relaxed space-y-3 max-w-4xl">
          <p>
            Tətbiqi <span className="font-semibold text-foreground">"Məhsulu yüklə"</span> düyməsi vasitəsilə endirə bilərsiniz. Lakin istifadə üçün <span className="text-primary font-semibold">ODVION</span> komandası tərəfindən təqdim edilən unikal lisenziya açarı tələb olunur.
          </p>
          <p>
            Lisenziya açarı əldə etmək və ya əlavə məlumat üçün <span className="font-semibold text-foreground">"Əlaqə saxlayın"</span> bölməsindən müraciət edə bilərsiniz.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Məhsulu yükləyin
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-border bg-secondary text-foreground font-medium hover:bg-muted transition-colors"
          >
            Əlaqə saxlayın
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
