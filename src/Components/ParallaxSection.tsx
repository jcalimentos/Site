"use client";

import Image from "next/image";
import { useRef, ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";

interface ParallaxSectionProps {
  src: string;
  title?: string;
  children?: ReactNode;
  height?: string;
  overlayOpacity?: number;
}

export default function ParallaxSection({
  src,
  title,
  children,
  height = "600px",
  overlayOpacity = 0.4,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  const { scrollY } = useScroll();
  // Movimento simétrico: -100 a +100 (não vai muito para baixo)
  const y = useTransform(scrollY, [0, 1000], [-100, 100]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]); // zoom menor

  const ySpring = useSpring(y, { stiffness: 30, damping: 15 });
  const scaleSpring = useSpring(scale, { stiffness: 30, damping: 15 });

  return (
    <section
      ref={ref}
      className="relative w-screen max-w-screen overflow-hidden"
      style={{ height }}
    >
      {/* Imagem de fundo com parallax */}
      <motion.div
        style={{ y: isInView ? ySpring : 0, scale: isInView ? scaleSpring : 1 }}
        className="absolute top-0 left-0 w-full h-[120%]" // altura maior que a seção
      >
        <Image
          loading="eager"
          src={src}
          alt={title || "Parallax image"}
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
        ></div>
      </motion.div>

      {/* Conteúdo */}
      <div className="flex flex-col justify-center relative mx-auto xl:w-[70%] px-4 py-10 text-white h-full">
        {title && (
          <h1 className="text-3xl font-bold drop-shadow-lg">{title}</h1>
        )}
        {children}
      </div>
    </section>
  );
}
