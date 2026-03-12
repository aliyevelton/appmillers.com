import Image from "next/image";
import RotatingHeadline from "../components/RotatingHeadline";
import HeroCta from "../components/HeroCta";
import { BlurRise, BlurRiseList, BlurRiseItem } from "../components/BlurRise";

const skoolCommunityUrl = "https://www.skool.com/ai-agents-automatin-vibecoding";
const skoolClassroomUrl = "https://www.skool.com/ai-agents-automatin-vibecoding/classroom";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Newsletter", href: "#" },
  { label: "Udemy Coupons", href: "#" },
  { label: "Community", href: skoolCommunityUrl },
];

const communityBenefits = [
  { title: "Learn together", description: "Discussions, resources, and real answers." },
  { title: "Build real things", description: "Go from ideas to working automations." },
  { title: "Stay on track", description: "Accountability and progress in one place." },
];

const courses = [
  {
    title: "AI Agents using OpenAI SDK",
    description: "Build agentic AI solutions with Python and the OpenAI SDK.",
    gradient: "linear-gradient(135deg, #0fa47f 0%, #1a1a2e 100%)",
    icon: "✦",
  },
  {
    title: "AI Agents using CrewAI",
    description: "Orchestrate autonomous AI agent crews that collaborate on complex tasks.",
    gradient: "linear-gradient(135deg, #6c3ec1 0%, #1a1a2e 100%)",
    icon: "⚙",
  },
  {
    title: "LangChain",
    description: "Chain LLM calls, tools, and memory into powerful AI applications.",
    gradient: "linear-gradient(135deg, #1e6b3a 0%, #1a1a2e 100%)",
    icon: "🔗",
  },
  {
    title: "LangGraph",
    description: "Design stateful, multi-actor AI workflows with graph-based orchestration.",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1a1a2e 100%)",
    icon: "◈",
  },
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
            Join Now
          </a>
        </div>
      </section>

      <section className="courses-section" id="courses">
        <div className="section-heading">
          <BlurRise>
            <h2>Explore our courses</h2>
          </BlurRise>
          <BlurRise delay={0.1}>
            <p className="courses-subtitle">
              Hands-on, project-driven courses to take you from concept to working AI agent.
            </p>
          </BlurRise>
        </div>

        <BlurRiseList className="courses-grid">
          {courses.map((course) => (
            <BlurRiseItem as="article" className="course-card" key={course.title}>
              <div
                className="course-cover"
                style={{ background: course.gradient }}
              >
                <span className="course-icon">{course.icon}</span>
              </div>
              <div className="course-body">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            </BlurRiseItem>
          ))}
        </BlurRiseList>

        <div className="section-cta">
          <a
            className="button button-primary courses-see-all"
            href={skoolClassroomUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            See All Courses
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
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
