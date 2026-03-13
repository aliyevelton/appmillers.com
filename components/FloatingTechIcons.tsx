"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type FloatingTechIcon = {
  src: string;
  alt: string;
  label: string;
  position: { x: string; y: string };
};

const defaultIcons: FloatingTechIcon[] = [
  { src: "./openai-transparent.png", alt: "OpenAI", label: "OpenAI", position: { x: "10%", y: "18%" } },
  { src: "./crewai-transparent.png", alt: "CrewAI", label: "CrewAI", position: { x: "14%", y: "58%" } },
  { src: "./langchain-transparent.png", alt: "LangChain", label: "LangChain", position: { x: "85%", y: "22%" } },
  { src: "./n8n-transparent.png", alt: "n8n", label: "n8n", position: { x: "74%", y: "62%" } },
];

type FloatingTechIconsProps = {
  icons?: FloatingTechIcon[];
  className?: string;
};

export default function FloatingTechIcons({ icons = defaultIcons, className = "" }: FloatingTechIconsProps) {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={item.label}
          className={`floating-tech-icon ${className}`}
          style={{
            left: item.position.x,
            top: item.position.y,
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
              src={item.src}
              alt={item.alt}
              width={40}
              height={40}
              className="floating-tech-icon__img"
            />
          </div>
          <span className="floating-tech-icon__label">{item.label}</span>
        </motion.div>
      ))}
    </>
  );
}
