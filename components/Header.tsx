"use client";

import { useState } from "react";
import InteractiveHoverButton from "./ui/interactive-hover-button";

type NavLink = { label: string; href: string };

type HeaderProps = {
  navLinks: NavLink[];
  skoolCommunityUrl: string;
};

export default function Header({ navLinks, skoolCommunityUrl }: HeaderProps) {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <header
      className={`site-header ${navOpen ? "nav-open" : ""}`}
      id="site-header"
    >
      <a className="brand" href="#top" aria-label="AppMillers home" onClick={closeNav}>
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

      <button
        type="button"
        className="header-menu-btn"
        onClick={() => setNavOpen((o) => !o)}
        aria-expanded={navOpen}
        aria-controls="header-nav"
        aria-label={navOpen ? "Close menu" : "Open menu"}
      >
        <span className="header-menu-icon" aria-hidden>
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav
        id="header-nav"
        className="header-links"
        aria-label="Primary"
      >
        {navLinks.map((link) => {
          const isExternal = link.href.startsWith("http");
          return (
            <a
              key={link.label}
              href={link.href}
              onClick={closeNav}
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

      <InteractiveHoverButton
        href={skoolCommunityUrl}
        text="Join Now"
        className="header-join"
        external
        onClick={closeNav}
      />
    </header>
  );
}
