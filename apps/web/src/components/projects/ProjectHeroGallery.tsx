"use client";

import type { SanityImageSource } from "@sanity/image-url";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/lib/sanity/image";

interface ProjectHeroGalleryProps {
  gallery: SanityImageSource[];
  title: string;
}

export function ProjectHeroGallery({
  gallery,
  title,
}: ProjectHeroGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!gallery || gallery.length === 0) {
    return (
      <div className="w-full h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-200 text-xs">
        Ekran görüntüsü bulunamadı.
      </div>
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full flex flex-col items-center select-none">
      <div
        className="relative w-full max-w-md h-85 sm:h-100 flex items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {gallery.map((img, idx) => {
          const imgUrl = urlFor(img as SanityImageSource)
            .width(600)
            .height(900)
            .quality(90)
            .url();

          const total = gallery.length;
          const offset = (idx - currentIndex + total) % total;

          let transformClass =
            "scale-100 z-30 translate-x-0 rotate-y-0 shadow-2xl opacity-100";

          if (
            offset === 1 ||
            (total === 2 && offset === 1 && currentIndex === 0)
          ) {
            transformClass =
              "translate-x-16 sm:translate-x-24 scale-85 rotate-y-12 z-20 opacity-75 blur-[0.3px]";
          } else if (
            offset === total - 1 ||
            (total === 2 && offset === 1 && currentIndex === 1)
          ) {
            transformClass =
              "-translate-x-16 sm:-translate-x-24 scale-85 -rotate-y-12 z-10 opacity-75 blur-[0.3px]";
          } else if (offset !== 0) {
            transformClass = "scale-75 opacity-0 z-0 pointer-events-none";
          }

          const imageKey =
            (img as { _key?: string })._key ||
            (img as { _ref?: string })._ref ||
            `hero-gallery-${idx}`;

          return (
            <div
              key={imageKey}
              className={`absolute w-44 sm:w-52 aspect-9/16 rounded-2xl overflow-hidden border-2 border-white/25 bg-slate-900 transition-all duration-500 ease-out ${transformClass}`}
            >
              <Image
                src={imgUrl}
                alt={`${title} Ekranı ${idx + 1}`}
                fill
                sizes="208px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-white/10 pointer-events-none" />
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-4 mt-4 z-40">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Önceki Görsel"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-[#00F2FE]" />
        </button>

        <div className="flex items-center gap-1.5">
          {gallery.map((img, idx) => {
            const dotKey = (img as { _key?: string })._key || `dot-${idx}`;
            return (
              <button
                type="button"
                key={dotKey}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Görsel ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "w-6 bg-[#00F2FE]"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Sonraki Görsel"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-[#00F2FE]" />
        </button>
      </div>
    </div>
  );
}
