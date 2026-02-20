const About = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
      <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-16 animate-fade-in">
        About Me
      </h1>

      {/* Publications */}
      <div className="mb-14 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <h2 className="uppercase tracking-wide text-sm font-medium text-muted-foreground mb-6">
          Publications
        </h2>
        <div className="border-l-2 border-accent pl-6">
          <p className="font-heading text-lg font-medium text-foreground">
            Strengths-based leadership: A critical review to guide future research
          </p>
          <p className="text-body text-muted-foreground mt-1">
            Breevaart, K., van Woerkom, M., Wang, J., &amp; Planken, N. (2025).
          </p>
          <p className="text-body text-muted-foreground italic">
            Journal of Leadership &amp; Organizational Studies
          </p>
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

      {/* Conference Talks */}
      <div className="mb-14 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <h2 className="uppercase tracking-wide text-sm font-medium text-muted-foreground mb-6">
          Conference Talks
        </h2>

        {/* Upcoming */}
        <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">Upcoming</h3>
        <div className="border-l-2 border-accent pl-6 mb-8">
          <p className="font-heading text-base font-medium text-foreground">
            Let's be proactive together: Examining job crafting synchrony and its relation with daily resources, work engagement, and performance in coworker dyads
          </p>
          <p className="text-body text-muted-foreground mt-1">
            European Academy of Occupational Health Psychology (EAOHP)
          </p>
          <p className="text-body text-muted-foreground">
            15–17th June 2026 in Helsinki, Finland
          </p>
        </div>

        {/* Past */}
        <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wide">Past</h3>
        <div className="space-y-6">
          <div className="border-l-2 border-accent pl-6">
            <p className="font-heading text-base font-medium text-foreground">
              Let's be proactive together: Examining the intra- and interpersonal dynamics of daily proactive behaviors in coworker dyads
            </p>
            <p className="text-body text-muted-foreground mt-1">
              Werkgemeenschap Arbeids- &amp; Organisatie Psychologie (WAOP)
            </p>
            <p className="text-body text-muted-foreground">
              presented 21st November 2025 in Nijmegen, Netherlands
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <p className="font-heading text-base font-medium text-foreground">
              Job crafting and flourishing in coworker dyads: A daily resource-based approach
            </p>
            <p className="text-body text-muted-foreground mt-1">
              Interdisciplinary Network for Group Research (INGRoup)
            </p>
            <p className="text-body text-muted-foreground">
              presented 19th July 2025 in Rotterdam, Netherlands
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <p className="font-heading text-base font-medium text-foreground">
              Job crafting and flourishing in coworker dyads: A daily resource-based approach
            </p>
            <p className="text-body text-muted-foreground mt-1">
              European Association of Work and Organizational Psychology (EAWOP)
            </p>
            <p className="text-body text-muted-foreground">
              presented 22nd May 2025 in Prague, Czech Republic
            </p>
          </div>
        </div>
      </div>

      {/* Honors & Awards */}
      <div className="mb-14 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h2 className="uppercase tracking-wide text-sm font-medium text-muted-foreground mb-6">
          Honors &amp; Awards
        </h2>
        <div className="border-l-2 border-accent pl-6">
          <p className="font-heading text-lg font-medium text-foreground">
            David van Lennep Scriptieprijs 2025
          </p>
          <p className="text-body text-muted-foreground mt-1">
            Best master thesis in the Netherlands (people, work, and organizations)
          </p>
          <p className="text-body text-muted-foreground mt-2">
            <a href="https://www.innovatiefinwerk.nl/kennis/dit-zijn-de-winnaars-david-van-lennep-scriptieprijs-2025/" className="underline underline-offset-4 hover:text-foreground transition-colors">
              Read more about the award here
            </a>
            {" and "}
            <a href="https://www.hrpraktijk.nl/organisatie/leiderschapsontwikkeling/potentieel-leiderschap-herkennen-en-stimuleren/" className="underline underline-offset-4 hover:text-foreground transition-colors">
              click for the interview with HR Praktijk here
            </a>
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="mb-14 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <h2 className="uppercase tracking-wide text-sm font-medium text-muted-foreground mb-6">
          Education
        </h2>
        <div className="space-y-8">
          <TimelineItem
            period="2024 — Present"
            title="PhD Candidate"
            institution="Erasmus University Rotterdam"
            detail="Topic: Team job crafting"
          />
          <TimelineItem
            period="2023 — 2024"
            title="MSc. Psychology: Consultancy & Organisational Development"
            institution="University of Amsterdam"
            detail="Graduated with cum laude"
          />
          <TimelineItem
            period="2020 — 2023"
            title="International BSc. Psychology"
            institution="Erasmus University Rotterdam"
            detail="Graduated with summa cum laude"
          />
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-14 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <h2 className="uppercase tracking-wide text-sm font-medium text-muted-foreground mb-6">
          Work Experience
        </h2>
        <div className="border-l-2 border-accent pl-6">
          <p className="font-heading text-lg font-medium text-foreground">
            Kessels &amp; Smit, The Learning Company
          </p>
          <p className="text-body text-muted-foreground mt-1">
            Internship, 2024 (Netherlands &amp; Germany)
          </p>
          <p className="text-body text-muted-foreground mt-1">
            Designed &amp; facilitated global female leadership development program for international organization (~100.000 employees worldwide)
          </p>
        </div>
      </div>

      {/* Experience Abroad */}
      <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
        <h2 className="uppercase tracking-wide text-sm font-medium text-muted-foreground mb-6">
          Experience Abroad
        </h2>
        <div className="border-l-2 border-accent pl-6">
          <p className="font-heading text-lg font-medium text-foreground">
            Monterrey, Mexico
          </p>
          <p className="text-body text-muted-foreground mt-1">
            Exchange semester at Universidad de Monterrey, 2022
          </p>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({
  period,
  title,
  institution,
  detail,
}: {
  period: string;
  title: string;
  institution: string;
  detail: string;
}) => (
  <div className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4 items-start">
    <span className="text-sm text-muted-foreground font-medium">{period}</span>
    <div>
      <p className="font-heading text-lg font-medium text-foreground">{title}</p>
      <p className="text-body text-muted-foreground mt-0.5">{institution}</p>
      <p className="text-body text-muted-foreground text-sm mt-0.5">{detail}</p>
    </div>
  </div>
);

export default About;
