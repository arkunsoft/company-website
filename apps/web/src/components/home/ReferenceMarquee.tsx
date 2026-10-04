"use client";

import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import Image from "next/image";
import type { ALL_CLIENTS_QUERY_RESULT } from "@/lib/sanity/sanity.types";
import { InView } from "../ui/in-view";

interface ReferenceMarqueeProps {
  clients: ALL_CLIENTS_QUERY_RESULT;
}

export function ReferenceMarquee({ clients }: ReferenceMarqueeProps) {
  if (!clients || clients.length === 0) {
    return null;
  }

  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section
      id="references"
      className="py-20 bg-white relative overflow-hidden select-none border-y border-slate-100"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-40 bg-[#38A3E5]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38A3E5]/10 border border-[#38A3E5]/20 text-[#1B75BC] text-xs font-bold uppercase tracking-widest mb-3">
          <Handshake className="w-4 h-4 text-[#1B75BC]" />
          <span>Güvenen Markalar</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F3866] tracking-tight">
          Birlikte Değer Ürettiğimiz Referanslarımız
        </h2>
      </div>

      <InView delay={500}>
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-linear-to-r from-white to-transparent z-20 pointer-events-none" />

          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-linear-to-l from-white to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex flex-nowrap gap-6 w-max py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {duplicatedClients.map((client, idx) => (
              <div
                key={`${client._id}-${idx}`}
                className="group relative cursor-pointer shrink-0 flex items-center justify-center px-6 py-4 w-48 h-20 rounded-2xl bg-slate-50/80 border border-slate-200/80 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:border-[#38A3E5]/50 hover:shadow-xl hover:shadow-[#38A3E5]/10 hover:-translate-y-1"
              >
                <div className="relative h-10 w-32 flex items-center justify-center filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  {client.logoUrl ? (
                    <Image
                      src={client.logoUrl}
                      alt={client.name || "Referans Logo"}
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-sm font-bold text-slate-700 group-hover:text-[#1B75BC] transition-colors">
                      {client.name}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </InView>
    </section>
  );
}
