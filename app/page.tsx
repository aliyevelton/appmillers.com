import Image from "next/image";
import RotatingHeadline from "../components/RotatingHeadline";
import HeroCta from "../components/HeroCta";
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

export default function Home() {
  return (
    <main className="page-shell" id="top">
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
          Join Now
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-background" />

        <div className="hero-headline">
          <BlurRise>
            <RotatingHeadline />
          </BlurRise>
        </div>

        <div className="hero-sub">
          <BlurRise>
            <p className="hero-text">
              A practical community for builders, creators, and future-ready professionals.
            </p>
          </BlurRise>

          <HeroCta
            primaryHref={skoolCommunityUrl}
            primaryLabel="Enter the Community"
            secondaryHref="#community"
            secondaryLabel="See what's inside"
          />
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
          <h2 className="inside-title">What&apos;s inside</h2>
          <div className="inside-copy">
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
