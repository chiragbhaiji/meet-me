import SectionBody from "./common/SectionBody";
import Section from "./common/Section";
import Card from "./common/Card";
import Tags from "./common/Tags";
import AppLinks from "./common/AppLinks";

type ProjectsProps = {
  projects: Array<{
    name: string;
    url: string;
    imgUrl?: string;
    description: string;
    skillsUsed: Array<string>;
    appLinks?: Array<{
      name: string;
      url: string;
    }>;
  }>;
};

export default function Projects({ projects }: Readonly<ProjectsProps>) {
  return (
    <Section title="Projects">
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} href={project.url}>
            <div className="flex flex-col gap-1.5 md:gap-4 md:w-9/12">
              <h4 className="group-hover/card:text-green-500 font-medium text-gray-300 text-lg">
                {project.name}
              </h4>
              <SectionBody text={project.description} />
              {project.appLinks && <AppLinks appLinks={project.appLinks} />}
              <Tags titles={project.skillsUsed} />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
