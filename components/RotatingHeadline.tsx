"use client";

import { useState, useEffect } from "react";

const ROTATING_HEADLINES = [
  "Learn AI Agents",
  "Master Automation",
  "Start Vibe Coding",
];
const ROTATE_INTERVAL_MS = 1800;

export default function RotatingHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_HEADLINES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <h1>
      <span className="rotating-word" key={index}>
        {ROTATING_HEADLINES[index]}
      </span>
    </h1>
  );
}
