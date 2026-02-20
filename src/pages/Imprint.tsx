const Imprint = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-3xl animate-fade-in">
      <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8">Imprint</h1>

      <div className="text-body text-foreground space-y-6 leading-relaxed">
        <div>
          <h2 className="font-heading text-xl font-semibold mb-2">Information</h2>
          <p>Nadine Planken</p>
          <p>Erasmus University Rotterdam</p>
          <p>Burgemeester Oudlaan 50</p>
          <p>3062 PA Rotterdam, The Netherlands</p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold mb-2">Contact</h2>
          <p>Phone: +49(0)15784006025</p>
          <p>
            Email:{" "}
            <a
              href="mailto:planken@essb.eur.nl"
              className="underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              planken@essb.eur.nl
            </a>
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold mb-2">Responsible for content</h2>
          <p>Nadine Planken</p>
          <p>Burgemeester Oudlaan 50</p>
          <p>3062 PA Rotterdam, The Netherlands</p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold mb-2">Disclaimer</h2>
          <p className="text-muted-foreground">
            Despite careful content control, we assume no liability for the content of external links. The operators of
            the linked pages are solely responsible for their content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Imprint;
