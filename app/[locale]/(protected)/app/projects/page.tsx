import { redirect } from "@/i18n/navigation";

const ProjectPage = () => {
  redirect({ href: "/app/projects/grid", locale: "en" });
  return null;
};

export default ProjectPage;
