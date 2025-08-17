"use client";

import { useEffect } from "react";

export default function Rise() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        if (isIntersecting) {
          target.classList.remove("rise");
          // Se quiser que o observer pare de observar esse elemento depois que animar:
          observer.unobserve(target);
        }
      });
    });

    const elements = document.querySelectorAll(".rise");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
