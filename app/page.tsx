import Image from "next/image";
import RotatingHeadline from "../components/RotatingHeadline";
import HeroCtaWithArrow from "../components/HeroCtaWithArrow";
import { BlurRise, BlurRiseList, BlurRiseItem } from "../components/BlurRise";

const skoolCommunityUrl = "https://www.skool.com/your-community";

const navLinks = [
  { label: "Courses", href: "#" },
  { label: "Newsletter", href: "#" },
  { label: "Udemy Coupons", href: "#" },
  { label: "Community", href: skoolCommunityUrl },
];

const communityBenefits = [
  { title: "Learn together", description: "Discussions, resources, and real answers." },
  { title: "Build real things", description: "Go from ideas to working automations." },
  { title: "Stay on track", description: "Accountability and progress in one place." },
];

const featureCards = [
  { title: "Focused discussions", description: "Ask, share, and learn from builders." },
  { title: "Practical resources", description: "Examples and materials you can use now." },
  { title: "Visible progress", description: "Track your growth alongside others." },
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
          <BlurRise>
            <RotatingHeadline />
          </BlurRise>
        </div>

        <div className="hero-sub">
          <BlurRise>
            <p className="hero-text">
              A focused Skool community where builders learn, share, and ship together.
            </p>
          </BlurRise>

          <BlurRise>
            <HeroCtaWithArrow
            primaryHref={skoolCommunityUrl}
            primaryLabel="Enter the Community"
            secondaryHref="#community"
            secondaryLabel="See what's inside"
          />
          </BlurRise>
        </div>

        <div className="hero-card-block">
          <BlurRiseList className="hero-card hero-card-stats hero-card-stats-centered">
            {quickStats.map((stat) => (
              <BlurRiseItem key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </BlurRiseItem>
            ))}
          </BlurRiseList>
        </div>
      </section>

      <section className="community-section" id="community">
        <div className="section-heading">
          <h2>Why this community?</h2>
        </div>

        <BlurRiseList className="benefit-grid">
          {communityBenefits.map((benefit) => (
            <BlurRiseItem as="article" className="benefit-card" key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </BlurRiseItem>
          ))}
        </BlurRiseList>

        <div className="section-cta">
          <a className="button button-primary" href={skoolCommunityUrl}>
            Join on Skool
          </a>
        </div>
      </section>

      <section className="inside-section" id="inside">
        <div className="inside-layout">
          <div className="inside-copy">
            <h2>What&apos;s inside</h2>

            <BlurRiseList className="feature-stack">
              {featureCards.map((feature) => (
                <BlurRiseItem as="article" className="feature-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </BlurRiseItem>
              ))}
            </BlurRiseList>
          </div>

          <div className="preview-card">
            <div className="preview-frame">
              <Image
                src="./community-preview.png"
                alt="Skool community preview"
                width={1024}
                height={576}
                className="preview-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta-section" id="join">
        <div className="final-cta-card">
          <h2>Ready to start building?</h2>

          <div className="cta-row cta-row-center">
            <a className="button button-primary" href={skoolCommunityUrl}>
              Join the Community
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
