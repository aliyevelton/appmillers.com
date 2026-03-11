"use client";

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
      <a className="button button-primary" href={primaryHref}>
        {primaryLabel}
      </a>
      <a className="button button-ghost" href={secondaryHref}>
        {secondaryLabel}
      </a>
    </div>
  );
}
