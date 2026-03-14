import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Bizimlə əlaqə saxlayın</h2>
        <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-2xl">
          Sualınız, təklifiniz və ya lisenziya sorğunuz varsa, bizimlə əlaqə saxlayın. Komandamız ən qısa zamanda cavab verəcək.
        </p>

        <div className="grid md:grid-cols-[1fr_400px] gap-12">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Adınız, soyadınız*"
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="E-poçt ünvanınız*"
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Şirkətin adı*"
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Mesajınız*"
                rows={6}
                maxLength={2000}
                className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              <span className="absolute bottom-3 right-4 text-xs text-muted-foreground">
                {form.message.length}/2000
              </span>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Göndər
            </button>
          </form>

          <div className="bg-card border border-border rounded-xl p-8 h-fit">
            <h3 className="font-display text-xl font-semibold mb-6 border-b border-border pb-4">
              Əlaqə məlumatlarımız
            </h3>
            <div className="space-y-5 text-foreground/80">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">E-poçt:</span> info@odvion.az
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Telefon:</span> +994 12 510 49 65
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Ünvan:</span> Bakı, Azərbaycan
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">İş saatları:</span> Bazar ertəsi – Cümə, 09:00–18:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
