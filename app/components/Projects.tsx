import SectionBody from "./common/SectionBody";
import Section from "./common/Section";
import Image from "next/image";
import Card from "./common/Card";
import Tags from "./common/Tags";
import AppLinks from "./common/AppLinks";

type ProjectsProps = {
  projects: Array<{
    name: string;
    url: string;
    imgUrl: string;
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
      {projects.map((project) => (
        <Card key={project.name} href={project.url}>
          <div className="w-3/12 mb-2 md:mb-0">
            <Image
              src={project.imgUrl}
              alt={project.name}
              width={200}
              height={200}
              className="p-4 bg-gray-500/10 rounded-lg"
            />
          </div>
          <div className="w-9/12 flex flex-col gap-4">
            <h4 className="text-lg text-gray-300 font-medium group-hover/card:text-green-500">
              {project.name}
            </h4>
            <SectionBody text={project.description} />
            {project.appLinks && <AppLinks appLinks={project.appLinks} />}
            <Tags titles={project.skillsUsed} />
          </div>
        </Card>
      ))}
    </Section>
  );
}
