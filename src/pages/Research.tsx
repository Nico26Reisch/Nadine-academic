import nadinePresenting from "@/assets/nadine-presenting.jpg";
import nadineAward from "@/assets/nadine-award.jpg";
import eurCampus from "@/assets/eur-campus.webp";

const Research = () => {
  const interests = ["Job crafting", "Proactivity", "Well-being and performance", "Interpersonal dynamics"];

  const methods = ["Daily diary studies", "Meta-analyses", "RStudio, MPlus, SPSS"];

  return (
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
      <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-16 animate-fade-in">
        Research
      </h1>

      {/* Recent Publications */}
      <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <h2 className="uppercase tracking-wide text-sm font-medium text-muted-foreground mb-6">Recent Publications</h2>
        <div className="border-l-2 border-accent pl-6">
          <p className="font-heading text-lg font-medium text-foreground">
            Strengths-based leadership: A critical review to guide future research
          </p>
          <p className="text-body text-muted-foreground mt-1">
            Breevaart, K., van Woerkom, M., Wang, J., &amp; Planken, N. (2025)
          </p>
          <p className="text-body text-muted-foreground italic">Journal of Leadership &amp; Organizational Studies</p>
          <a
            href="https://doi.org/10.1177/15480518251342658"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-2 inline-block underline underline-offset-4"
          >
            https://doi.org/10.1177/15480518251342658
          </a>
        </div>
      </div>

      {/* Upcoming Talks */}
      <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <h2 className="uppercase tracking-wide text-sm font-medium text-muted-foreground mb-6">Upcoming Talks</h2>
        <div className="bg-card rounded-sm p-6 border border-border">
          <p className="font-heading text-lg font-medium text-foreground mb-2">
            Let's be Proactive together: Examining Job Crafting Synchrony and its Relation with Daily Resources, Work
            Engagement, and Performance in Coworker Dyads
          </p>
          <p className="text-body text-muted-foreground">European Academy of Occupational Health Psychology (EAOHP)</p>
          <p className="text-body text-muted-foreground">15–17th June 2026 in Helsinki, Finland</p>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.25s" }}>
        <div className="h-56 md:h-64 overflow-hidden rounded-sm shadow-md">
          <img src={nadinePresenting} alt="Nadine presenting at a conference" className="w-full h-full object-cover" />
        </div>
        <div className="h-56 md:h-64 overflow-hidden rounded-sm shadow-md">
          <img src={eurCampus} alt="Erasmus University Rotterdam campus" className="w-full h-full object-cover" />
        </div>
        <div className="h-56 md:h-64 overflow-hidden rounded-sm shadow-md">
          <img src={nadineAward} alt="Nadine receiving an award" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Research Profile */}
      <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h2 className="uppercase tracking-wide text-sm font-medium text-muted-foreground mb-6">My Research Profile</h2>
        <div className="space-y-4 text-body text-foreground leading-relaxed">
          <p>
            Employees spend as much time working alone as in collaboration with others. To establish high performing
            teams and foster a healthy, sustainable workforce, we need to understand how team members interact and
            collaborate effectively.
          </p>
          <p>
            As a PhD candidate at the Erasmus University Rotterdam, I work with Dr. Melissa Twemlow, Dr. Jan Luca
            Pletzer, and Prof. Dr. Arnold Bakker to explore how employees and teams can proactively shape their work
            environment to contribute to an engaging and meaningful work experience.
          </p>
          <p>
            To foster real-world impact, I collaborate with companies in the Netherlands and Germany. I am always open
            to expand my network and apply evidence-based approaches to improve work design, team functioning, and
            employee well-being.
          </p>
        </div>
      </div>

      {/* Interests & Methodology */}
      <div className="grid md:grid-cols-2 gap-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div>
          <h2 className="uppercase tracking-wide text-sm font-medium text-muted-foreground mb-6">
            My Research Interests
          </h2>
          <ul className="space-y-3">
            {interests.map((item) => (
              <li key={item} className="text-body text-foreground pl-4 border-l border-accent">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="uppercase tracking-wide text-sm font-medium text-muted-foreground mb-6">My Methodology</h2>
          <ul className="space-y-3">
            {methods.map((item) => (
              <li key={item} className="text-body text-foreground pl-4 border-l border-accent">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Research;
