import SectionBody from "./common/SectionBody";
import Card from "./common/Card";
import Tags from "./common/Tags";
import Section from "./common/Section";

type ExperienceProps = {
  experiences: Array<{
    company: {
      name: string;
      url: string;
    };
    role: string;
    duration: {
      start: string;
      end?: string;
    };
    description: string;
    skillsUsed: Array<string>;
    appLinks?: Array<{
      name: string;
      url: string;
    }>;
  }>;
};

export default function Experience({ experiences }: Readonly<ExperienceProps>) {
  return (
    <Section title="Experience">
      {experiences.map((experience) => (
        <Card key={experience.company.name} href={experience.company.url}>
          <div className="w-3/12 mb-2 md:mb-0">
            <h4 className="text-sm text-gray-500 font-bold leading-8 group-hover/card:text-gray-300">
              {getDisplayDuration(experience.duration).toUpperCase()}
            </h4>
          </div>
          <div className="w-9/12 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-lg text-gray-500 font-bold group-hover/card:text-gray-300">
                {experience.role}
              </h4>
              <span className="text-gray-600">⁃</span>
              <h4 className="text-lg text-gray-300 font-bold group-hover/card:text-green-500">
                {experience.company.name}
              </h4>
            </div>
            <SectionBody text={experience.description} />
            <Tags titles={experience.skillsUsed} />
          </div>
        </Card>
      ))}
    </Section>
  );
}

const getDisplayDuration = ({
  start,
  end,
}: {
  start: string;
  end?: string;
}) => {
  const startDate = new Date(start);
  const startYear = startDate.getFullYear();
  const startMonth = startDate.toLocaleString("default", { month: "short" });

  if (!end) {
    return `${startMonth} ${startYear} - Present`;
  }

  const endDate = new Date(end);
  const endYear = endDate.getFullYear();
  const endMonth = endDate.toLocaleString("default", { month: "short" });

  const isSameYear = startYear === endYear;

  if (!isSameYear) {
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  }

  return `${startMonth} - ${endMonth} ${startYear}`;
};
