"use client";

import InteractiveHoverButton from "./ui/interactive-hover-button";

type HeroCtaProps = {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export default function HeroCta({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroCtaProps) {
  return (
    <div className="cta-row cta-row-center">
      <InteractiveHoverButton
        href={primaryHref}
        text={primaryLabel}
        external
      />
      <a className="button button-ghost" href={secondaryHref}>
        {secondaryLabel}
      </a>
    </div>
  );
}
