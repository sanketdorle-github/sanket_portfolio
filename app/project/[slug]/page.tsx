import { Suspense } from "react";
import ProjectDetails from "@/app/components/ProjectDetails";
import { projects } from "@/app/data/projects";
import Navbar from "@/app/components/Navbar";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div className="text-white text-center">Project not found</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <ProjectDetails project={project} />
    </Suspense>
  );
}
