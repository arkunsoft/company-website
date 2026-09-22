// apps/web/src/app/page.tsx
import { sanityFetch } from "@/lib/sanity/fetch";
import { ALL_PROJECTS_QUERY } from "@/lib/sanity/queries";
import type { ALL_PROJECTS_QUERY_RESULT } from "@/lib/sanity/sanity.types";

export default async function Home() {
  const projects = await sanityFetch<ALL_PROJECTS_QUERY_RESULT>({
    query: ALL_PROJECTS_QUERY,
    tags: ["project"],
  });

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Sanity & Next.js Entegrasyon Testi</h1>
      <p>Toplam {projects.length} adet proje bulundu:</p>

      {projects.length === 0 ? (
        <p style={{ color: "#666" }}>
          Henüz Sanity Studio üzerinden proje eklenmemiş. Studio'ya gidip bir
          proje yayınlayın!
        </p>
      ) : (
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {projects.map((project) => (
            <li key={project._id}>
              <strong>{project.title}</strong>
              {project.priority !== null && ` — Öncelik: ${project.priority}`}
              {project.industry && ` — Sektör: ${project.industry}`}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
