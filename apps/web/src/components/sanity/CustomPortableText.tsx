import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { CheckCircle2 } from "lucide-react";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F3866] mt-10 mb-4 pb-3 border-b border-slate-200 flex items-center gap-3">
        <span className="w-2 h-6 bg-[#00F2FE] rounded-full inline-block" />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3 pl-3 border-l-2 border-blue-500">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5 font-normal">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 p-5 rounded-2xl bg-blue-50/60 border-l-4 border-[#1E56A0] text-slate-800 italic text-sm font-medium">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 my-6 font-medium text-slate-700 text-sm sm:text-base">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 my-6 text-slate-700 font-semibold text-sm sm:text-base">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <span>{children}</span>
      </li>
    ),
  },
};

export function CustomPortableText({ value }: { value: unknown }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
