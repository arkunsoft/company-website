"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ALL_CLIENTS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

interface ReferenceMarqueeProps {
  clients: ALL_CLIENTS_QUERY_RESULT;
}

export function ReferenceMarquee({ clients }: ReferenceMarqueeProps) {
  if (!clients || clients.length === 0) {
    return null;
  }

  // Akıcı döngü için diziyi katlıyoruz
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section
      id="references"
      className="py-16 bg-white overflow-hidden border-b border-slate-200"
    >
      <div className="container mx-auto max-w-7xl px-4 mb-10 text-center">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#38A3E5]">
          Güvenen Markalar
        </h2>
        <p className="text-2xl font-extrabold text-[#0F3866] mt-1">
          Birlikte Değer Ürettiğimiz Referanslarımız
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex">
        <motion.div
          className="flex flex-nowrap gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {duplicatedClients.map((client, idx) => (
            <div
              key={`${client._id}-${idx}`}
              className="group relative shrink-0 flex items-center justify-center p-4 w-44 h-24 bg-slate-50 rounded-lg border border-slate-200/80 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-[#38A3E5]/50"
            >
              <div className="relative h-12 w-32 flex items-center justify-center filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                {client.logoUrl ? (
                  <Image
                    src={client.logoUrl}
                    alt={client.name || "Referans Logo"}
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                ) : (
                  <span className="text-sm font-bold text-slate-700 group-hover:text-[#0F3866]">
                    {client.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
