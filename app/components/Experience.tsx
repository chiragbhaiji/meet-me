import SectionBody from "./common/SectionBody";
import Card from "./common/Card";
import Tags from "./common/Tags";
import Section from "./common/Section";
import AppLinks from "./common/AppLinks";

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
    description: string[];
    skillsUsed: Array<string>;
    appLinks?: Array<{
      name: string;
      url: string;
    }>;
  }>;
};

export default function Experience({ experiences }: Readonly<ExperienceProps>) {
  return (
    <Section title="Experience" id="experience">
      {experiences.map((experience) => (
        <Card key={experience.company.name} href={experience.company.url}>
          <div className="mb-0 md:mb-0 w-full md:w-3/12">
            <h4 className="font-bold text-gray-500 dark:text-gray-500 text-xs md:text-sm leading-8">
              {getDisplayDuration(experience.duration).toUpperCase()}
            </h4>
          </div>
          <div className="flex flex-col gap-1.5 md:gap-4 md:w-9/12">
            <div className="flex flex-col gap-0.5">
              <h4 className="font-medium text-gray-600 dark:text-gray-400 text-lg">
                {experience.role}
              </h4>
              <h4 className="group-hover/card:text-green-600 dark:group-hover/card:text-green-400 font-semibold text-gray-800 dark:text-gray-200 text-lg">
                {experience.company.name}
              </h4>
            </div>
            <SectionBody text={experience.description} />
            {experience.appLinks && <AppLinks appLinks={experience.appLinks} />}
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

  if (startYear === endYear) {
    return `${startMonth} - ${endMonth} ${startYear}`;
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
};
