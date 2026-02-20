import nadineportait from "@/assets/nadine-portrait.jpg";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-5xl mx-auto">
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="w-72 h-96 md:w-80 md:h-[28rem] overflow-hidden rounded-sm shadow-lg">
            <img src={nadineportait} alt="Nadine Planken" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="order-2 md:order-1 animate-fade-in">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">Erasmus University Rotterdam</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 leading-tight">
            Nadine Planken
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-body leading-relaxed mb-8 max-w-md">
            PhD Candidate in Work &amp; Organisational Psychology at Erasmus University in Rotterdam
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/nadine-planken/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://scholar.google.com/citations?user=goMfWlcAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium tracking-wide"
            >
              Google Scholar
            </a>
            <a
              href="https://orcid.org/0009-0000-2069-4845"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium tracking-wide"
            >
              ORCID
            </a>
          </div>

          <Link
            to="/research"
            className="inline-block mt-6 bg-primary text-primary-foreground px-8 py-2.5 rounded-sm text-sm font-medium tracking-wide uppercase hover:opacity-90 transition-opacity"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Index;
