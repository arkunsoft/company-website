// packages/schema/lib/slugify.ts
// Custom slugify that properly transliterates Turkish characters
// before falling back to the standard slug format
const turkishCharMap: Record<string, string> = {
  ç: "c",
  Ç: "c",
  ğ: "g",
  Ğ: "g",
  ı: "i",
  İ: "i",
  ö: "o",
  Ö: "o",
  ş: "s",
  Ş: "s",
  ü: "u",
  Ü: "u",
};

export function slugifyTurkish(input: string): string {
  return input
    .split("")
    .map((char) => turkishCharMap[char] ?? char)
    .join("")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 96);
}
