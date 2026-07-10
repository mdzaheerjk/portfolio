"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
}

export function TypingAnimation({ texts, className }: TypingAnimationProps) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplay(current.substring(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplay(current.substring(0, display.length - 1));
        if (display.length - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 30 : 60);

    return () => clearTimeout(timeout);
  }, [display, isDeleting, index, texts]);

  return (
    <span className={className}>
      {display}
      <span className="inline-block w-px h-4 bg-primary ml-0.5 align-middle animate-pulse" />
    </span>
  );
}
