"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

interface InViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function InView({ children, className = "", delay = 0 }: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsInView(true), delay);
          } else {
            setIsInView(true);
          }
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.15,
      },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isInView ? "animate-fade-in-up" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
