// apps/web/src/components/sanity/CustomPortableText.tsx

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-white mt-6 mb-3 border-b border-white/10 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-amber-300 mt-5 mb-2">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-slate-300 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#38A3E5] pl-4 my-4 italic text-slate-200 bg-white/5 py-2 pr-2 rounded-r">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-slate-300 my-4 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-slate-300 my-4 pl-2">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          target={rel ? "_blank" : undefined}
          className="text-[#38A3E5] underline underline-offset-4 hover:text-amber-300 transition-colors"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="bg-white/10 text-amber-300 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="relative aspect-video w-full my-6 rounded-xl overflow-hidden border border-white/10">
          <Image
            src={urlFor(value).width(1000).height(600).url()}
            alt={value.alt || "Case study image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
};

export function CustomPortableText({ value }: { value: unknown }) {
  return <PortableText value={value} components={components} />;
}
