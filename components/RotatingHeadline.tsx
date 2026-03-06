"use client";

import { useState, useEffect } from "react";

const ROTATING_WORDS = ["AI Agents", "Automation", "Vibe Coding"];
const ROTATE_INTERVAL_MS = 1800;

export default function RotatingHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <h1>
      Join the community built for{" "}
      <span className="rotating-word" key={index}>
        {ROTATING_WORDS[index]}
      </span>
      .
    </h1>
  );
}
