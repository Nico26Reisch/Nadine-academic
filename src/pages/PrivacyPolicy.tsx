const PrivacyPolicy = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-3xl animate-fade-in">
      <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8">
        Privacy Policy
      </h1>

      <div className="text-body text-foreground space-y-6 leading-relaxed">
        <div>
          <h2 className="font-heading text-xl font-semibold mb-2">1. Overview</h2>
          <p className="text-muted-foreground">
            This website is a personal academic portfolio. The protection of personal data is taken seriously and handled in accordance with the General Data Protection Regulation (GDPR).
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold mb-2">2. Responsible Party</h2>
          <p>Nadine Planken</p>
          <p>Erasmus University Rotterdam</p>
          <p>Burgemeester Oudlaan 50</p>
          <p>3062 PA Rotterdam</p>
          <p>The Netherlands</p>
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
          <h2 className="font-heading text-xl font-semibold mb-2">3. Data Processing</h2>
          <p className="text-muted-foreground">
            This website does not use cookies, analytics tools, or tracking technologies.
          </p>
          <p className="text-muted-foreground mt-2">
            When you visit this website, technical data (such as IP address, date and time of access, and browser information) may be processed automatically by the hosting provider to ensure the security and functionality of the website.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold mb-2">4. Hosting</h2>
          <p className="text-muted-foreground">
            This website is hosted by{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Vercel
            </a>
            . For information on how Vercel processes data, please refer to their privacy policy.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold mb-2">5. External Links</h2>
          <p className="text-muted-foreground">
            This website contains links to external platforms (e.g., LinkedIn, Google Scholar, ORCID). We have no control over the content and privacy practices of these external websites. Please refer to their respective privacy policies.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold mb-2">6. Your Rights</h2>
          <p className="text-muted-foreground mb-2">
            Under the GDPR, you have the right to:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request deletion</li>
            <li>Restrict processing</li>
            <li>Object to processing</li>
            <li>Lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens)</li>
          </ul>
          <p className="text-muted-foreground mt-2">
            For questions regarding data protection, please contact the email address listed above.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
