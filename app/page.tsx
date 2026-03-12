import Image from "next/image";
import RotatingHeadline from "../components/RotatingHeadline";
import HeroCta from "../components/HeroCta";
import Header from "../components/Header";
import InteractiveHoverButton from "../components/ui/interactive-hover-button";
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
    image: "./openai.png",
  },
  {
    title: "AI Agents using CrewAI",
    description: "Orchestrate autonomous AI agent crews that collaborate on complex tasks.",
    image: "./crewai.png",
  },
  {
    title: "LangChain",
    description: "Chain LLM calls, tools, and memory into powerful AI applications.",
    image: "./langchain.png",
  },
  {
    title: "LangGraph",
    description: "Design stateful, multi-actor AI workflows with graph-based orchestration.",
    image: "./langgraph.png",
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
      <Header navLinks={navLinks} skoolCommunityUrl={skoolCommunityUrl} />

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

          <BlurRise>
            <HeroCta
              primaryHref={skoolCommunityUrl}
              primaryLabel="Enter the Community"
              secondaryHref="#community"
              secondaryLabel="See what's inside"
            />
          </BlurRise>
        </div>
      </section>

      <section className="community-section" id="community">
        <BlurRise className="section-heading">
          <h2>Why this community?</h2>
        </BlurRise>

        <BlurRiseList className="benefit-grid">
          {communityBenefits.map((benefit) => (
            <BlurRiseItem as="article" className="benefit-card" key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </BlurRiseItem>
          ))}
        </BlurRiseList>

        <BlurRise>
          <div className="section-cta">
            <InteractiveHoverButton
              href={skoolCommunityUrl}
              text="Join Now"
              external
            />
          </div>
        </BlurRise>
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
              <a href={skoolClassroomUrl} target="_blank" rel="noopener noreferrer" className="course-link">
                <div className="course-cover">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 25vw"
                    className="course-cover-img"
                  />
                </div>
                <div className="course-body">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              </a>
            </BlurRiseItem>
          ))}
        </BlurRiseList>

        <BlurRise>
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
        </BlurRise>
      </section>

      <section className="inside-section" id="inside">
        <div className="inside-layout">
          <BlurRise className="inside-title-wrap">
            <h2 className="inside-title">What&apos;s inside</h2>
          </BlurRise>
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
          <BlurRise className="preview-card">
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
          </BlurRise>
        </div>
      </section>

      <section className="final-cta-section" id="join">
        <BlurRise className="final-cta-card">
          <h2>Ready to start building?</h2>

          <div className="cta-row cta-row-center">
            <a className="button button-primary" href={skoolCommunityUrl}>
              Join the Community
            </a>
          </div>
        </BlurRise>
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
