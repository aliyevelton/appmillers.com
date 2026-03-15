import Image from "next/image";
import RotatingHeadline from "../components/RotatingHeadline";
import HeroCta from "../components/HeroCta";
import Header from "../components/Header";
import FloatingTechIcons from "../components/FloatingTechIcons";
import InteractiveHoverButton from "../components/ui/interactive-hover-button";
import CoursesSection from "../components/CoursesSection";
import { BlurRise, BlurRiseList, BlurRiseItem } from "../components/BlurRise";

const skoolCommunityUrl = "https://www.skool.com/ai-agents-automatin-vibecoding";
const skoolAboutUrl = "https://www.skool.com/ai-agents-automatin-vibecoding/about";
const skoolClassroomUrl = "https://www.skool.com/ai-agents-automatin-vibecoding/classroom";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Newsletter", href: "https://elshadk.substack.com/" },
  { label: "Community", href: skoolAboutUrl },
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
  {
    title: "n8n",
    description: "Build and automate workflows with the open-source n8n platform.",
    image: "./n8n.png",
  },
  {
    title: "Prompt Engineering",
    description: "Master prompts that get the best results from LLMs and AI tools.",
    image: "./prompt-engineering.png",
  },
  {
    title: "Vibe Coding",
    description: "Code with AI assistance and ship faster with modern workflows.",
    image: "./vibe-coding.png",
  },
  {
    title: "AI For Leaders and Founders",
    description: "Strategic AI adoption and decision-making for leadership.",
    image: "./ai-for-leaders.png",
  },
  {
    title: "AutoGen",
    description: "Build multi-agent conversations and workflows with Microsoft AutoGen.",
    image: "./AutoGen.png",
  },
  {
    title: "MCP",
    description: "Model Context Protocol: connect AI to tools and data sources.",
    image: "./mcp.png",
  },
  {
    title: "How to Succeed In the Era of AI",
    description: "Thrive in the age of AI with the right skills and mindset.",
    image: "./success.png",
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
      <Header navLinks={navLinks} skoolCommunityUrl={skoolAboutUrl} />

      <section className="hero-section">
        <div className="hero-background" />
        <FloatingTechIcons />

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
              secondaryHref="#courses"
              secondaryLabel="See what's inside"
            />
          </BlurRise>
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

        <CoursesSection
          courses={courses}
          skoolCommunityUrl={skoolCommunityUrl}
          skoolClassroomUrl={skoolClassroomUrl}
        />
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
            <a className="button button-primary" href={skoolAboutUrl}>
              Join the Community
            </a>
          </div>
        </BlurRise>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <nav className="footer-links" aria-label="Footer">
            <a href="#top">Home</a>
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} AppMillers. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
