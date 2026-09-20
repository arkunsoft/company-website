// apps/web/src/app/page.tsx
// Temporary test page — confirms the Sanity connection works end to end
import { client } from "@/lib/sanity/client";
import { allProjectsQuery } from "@/lib/sanity/queries";

type Project = {
  title: string;
  slug: { current: string };
  summary?: string;
  industry?: string;
  priority: number;
};

export default async function Home() {
  const projects = await client.fetch<Project[]>(allProjectsQuery);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Sanity Connection Test</h1>
      <p>{projects.length} project(s) found:</p>
      <ul>
        {projects.map((project) => (
          <li key={project.slug.current}>
            <strong>{project.title}</strong> — priority: {project.priority}
            {project.industry && ` — ${project.industry}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
