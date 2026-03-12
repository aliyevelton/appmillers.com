"use client";

/**
 * Interactive Hover Button (link variant)
 * Ported from emerald-ui – hover effect only, works as <a> for navigation.
 * Uses project CSS variables (no Tailwind).
 */
import React, { useState } from "react";
import { motion } from "framer-motion";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export type InteractiveHoverButtonProps = {
  href: string;
  text: string;
  className?: string;
  /** Open in new tab */
  external?: boolean;
  /** Called on click (e.g. close mobile menu) */
  onClick?: () => void;
};

export default function InteractiveHoverButton({
  href,
  text,
  className = "",
  external = false,
  onClick,
}: InteractiveHoverButtonProps) {
  const [hovered, setHovered] = useState(false);

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" as const }
    : {};

  return (
    <motion.a
      href={href}
      className={`interactive-hover-btn ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      layout
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      {...linkProps}
    >
      <span className="interactive-hover-btn__dot" data-hovered={hovered} />
      <span className="interactive-hover-btn__label" data-hovered={hovered}>
        {text}
      </span>
      <span className="interactive-hover-btn__overlay" data-hovered={hovered}>
        <span>{text}</span>
        <ArrowRightIcon />
      </span>
    </motion.a>
  );
}
