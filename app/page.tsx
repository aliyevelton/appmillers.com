import Image from "next/image";
import RotatingHeadline from "../components/RotatingHeadline";

const skoolCommunityUrl = "https://www.skool.com/your-community";

const navLinks = [
  { label: "Courses", href: "#" },
  { label: "Newsletter", href: "#" },
  { label: "Udemy Coupons", href: "#" },
  { label: "Community", href: skoolCommunityUrl },
];

const proofPoints = [
  "Focused community around AI agents, automation, and vibe coding",
  "Clear path from learning concepts to building practical workflows",
  "One place for updates, questions, wins, and useful resources",
];

const communityBenefits = [
  {
    title: "Learn with momentum",
    description:
      "Get a home base that keeps you moving with practical discussions, fresh resources, and clear next steps.",
  },
  {
    title: "Build real automations",
    description:
      "Turn AI ideas into working systems with examples, feedback, and a community that is focused on execution.",
  },
  {
    title: "Stay close to the course",
    description:
      "The community is designed specifically for AI Agents, Automation & Vibe Coding, so everything feels aligned to the course.",
  },
];

const featureCards = [
  {
    eyebrow: "Inside the community",
    title: "Discussion that actually helps you build",
    description:
      "Ask questions, share progress, and learn from other members working on AI workflows and agent-powered ideas.",
  },
  {
    eyebrow: "Practical learning",
    title: "Resources you can use immediately",
    description:
      "Find updates, examples, and useful materials that help you go from watching to implementing faster.",
  },
  {
    eyebrow: "Better accountability",
    title: "A focused place to keep going",
    description:
      "Instead of learning alone, join a space that encourages action, consistency, and visible progress.",
  },
];

const quickStats = [
  { value: "AI", label: "Agents and workflows" },
  { value: "24/7", label: "Community access" },
  { value: "1", label: "Focused place to learn and build" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AppMillers home">
          <span className="brand-logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./appmillers-logo.png"
              alt="AppMillers"
              className="brand-logo"
              width={140}
              height={44}
            />
          </span>
          <div>
            <span>AppMillers</span>
            <strong>AI Agents, Automation & Vibe Coding</strong>
          </div>
        </a>

        <nav className="header-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="button button-secondary" href={skoolCommunityUrl}>
          Join on Skool
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-background" />

        <div className="hero-headline" id="top">
          <RotatingHeadline />
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-text">
              Stop learning in scattered places. Join a focused Skool community
              where builders explore AI agents, practical automations, and modern
              workflows together.
            </p>

            <div className="cta-row">
              <a className="button button-primary" href={skoolCommunityUrl}>
                Enter the Community
              </a>
              <a className="button button-ghost" href="#community">
                See what&apos;s inside
              </a>
            </div>

            <ul className="proof-list">
              {proofPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-panel">
            <div className="hero-card hero-card-primary">
              <span className="mini-label">Built for focused builders</span>
              <h2>Learn faster with one clear place to ask, watch, share, and build.</h2>
              <p>
                The community turns the course into an active environment, not
                just a passive library.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-card-block">
          <div className="hero-card hero-card-stats hero-card-stats-centered">
            {quickStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="community-section" id="community">
        <div className="section-heading">
          <span className="eyebrow">Why join the community</span>
          <h2>A better home for the course experience.</h2>
          <p>
            This is where the course becomes more useful: questions get answered,
            ideas get sharpened, and progress feels easier to maintain.
          </p>
        </div>

        <div className="benefit-grid">
          {communityBenefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>

        <div className="section-cta">
          <a className="button button-primary" href={skoolCommunityUrl}>
            Join the Skool Community
          </a>
        </div>
      </section>

      <section className="inside-section" id="inside">
        <div className="inside-layout">
          <div className="inside-copy">
            <span className="eyebrow">What you&apos;ll find inside</span>
            <h2>A clean, focused community designed around action.</h2>
            <p>
              The experience is built to help members stay engaged with lessons,
              conversations, updates, and practical next steps instead of getting
              lost in clutter.
            </p>

            <div className="feature-stack">
              {featureCards.map((feature) => (
                <article className="feature-card" key={feature.title}>
                  <span>{feature.eyebrow}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="preview-card">
            <div className="preview-frame">
              <Image
                src="/community-preview.png"
                alt="Skool community preview for AI Agents, Automation & Vibe Coding"
                width={1024}
                height={576}
                className="preview-image"
                priority
              />
            </div>
            <div className="preview-caption">
              <strong>Skool community preview</strong>
              <p>
                A focused environment for members to learn, engage, and build
                with more consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-section" id="join">
        <div className="final-cta-card">
          <span className="eyebrow">Ready to join?</span>
          <h2>Step into the community and start building with the right people around you.</h2>
          <p>
            If you want AI Agents, Automation & Vibe Coding to become something
            practical instead of just interesting, this is the place to begin.
          </p>

          <div className="cta-row cta-row-center">
            <a className="button button-primary" href={skoolCommunityUrl}>
              Go to the Community
            </a>
            <a className="button button-ghost" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <nav className="footer-links" aria-label="Footer">
            <a href="#top">Home</a>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} AppMillers. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
