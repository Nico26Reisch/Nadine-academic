import { MapPin, Mail, User, GraduationCap, Building } from "lucide-react";
import nadineSecondary from "@/assets/nadine-secondary.jpg";

const Contact = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
      <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8 animate-fade-in">
        Get in Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-16 items-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
        {/* Left — Contact details */}
        <div className="text-body text-foreground space-y-5">
          <div className="flex items-center gap-3">
            <User size={18} className="text-muted-foreground shrink-0" />
            <p>Nadine Planken</p>
          </div>
          <div className="flex items-center gap-3">
            <GraduationCap size={18} className="text-muted-foreground shrink-0" />
            <p>PhD Candidate Work and Organizational Psychology</p>
          </div>
          <div className="flex items-center gap-3">
            <Building size={18} className="text-muted-foreground shrink-0" />
            <p>Erasmus University Rotterdam</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-muted-foreground shrink-0" />
            <p>Burgemeester Oudlaan 50, 3062 PA Rotterdam</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-muted-foreground shrink-0" />
            <a
              href="mailto:planken@essb.eur.nl"
              className="underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              planken@essb.eur.nl
            </a>
          </div>
        </div>

        {/* Right — Image */}
        <div>
          <div className="w-full rounded-sm overflow-hidden shadow-md">
            <img
              src={nadineSecondary}
              alt="Nadine Planken at award ceremony"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
