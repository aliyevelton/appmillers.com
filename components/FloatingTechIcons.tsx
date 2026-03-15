"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";

export type FloatingTechIcon = {
  src: string;
  alt: string;
  label: string;
  position: { x: string; y: string };
  /** On mobile (≤768px), use these positions instead so icons can sit above headline */
  positionMobile?: { x: string; y: string };
};

const defaultIcons: FloatingTechIcon[] = [
  {
    src: "/openai-transparent.png",
    alt: "OpenAI",
    label: "OpenAI",
    position: { x: "10%", y: "18%" },
    positionMobile: { x: "4%", y: "6%" },
  },
  {
    src: "/crewai-transparent.png",
    alt: "CrewAI",
    label: "CrewAI",
    position: { x: "14%", y: "50%" },
    positionMobile: { x: "30%", y: "6%" },
  },
  {
    src: "/langchain-transparent.png",
    alt: "LangChain",
    label: "LangChain",
    position: { x: "85%", y: "22%" },
    positionMobile: { x: "55%", y: "6%" },
  },
  {
    src: "/n8n-transparent.png",
    alt: "n8n",
    label: "n8n",
    position: { x: "75%", y: "75%" },
    positionMobile: { x: "78%", y: "80%" },
  },
  {
    src: "/Cursor.png",
    alt: "Cursor",
    label: "Cursor",
    position: { x: "25%", y: "75%" },
    positionMobile: { x: "12%", y: "80%" },
  },
  {
    src: "/Claude.svg",
    alt: "Claude Code",
    label: "Claude Code",
    position: { x: "80%", y: "50%" },
    positionMobile: { x: "78%", y: "6%" },
  },
  {
    src: "/openclaw.svg",
    alt: "OpenClaw",
    label: "OpenClaw",
    position: { x: "50%", y: "75%" },
    positionMobile: { x: "45%", y: "78%" },
  },
];

type FloatingTechIconsProps = {
  icons?: FloatingTechIcon[];
  className?: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function FloatingTechIcons({ icons = defaultIcons, className = "" }: FloatingTechIconsProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {icons.map((item, index) => {
        const pos = isMobile && item.positionMobile ? item.positionMobile : item.position;
        const imgSrc = `${basePath}${item.src}`;
        return (
        <motion.div
          key={item.label}
          className={`floating-tech-icon ${className}`}
          style={{
            left: pos.x,
            top: pos.y,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -16, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 0.2 + index * 0.1 },
            scale: { duration: 0.6, delay: 0.2 + index * 0.1 },
            y: {
              duration: 3 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="floating-tech-icon__circle">
            <Image
              src={imgSrc}
              alt={item.alt}
              width={40}
              height={40}
              className="floating-tech-icon__img"
            />
          </div>
          <span className="floating-tech-icon__label">{item.label}</span>
        </motion.div>
      );
      })}
    </>
  );
}
