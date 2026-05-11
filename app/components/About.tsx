import Section from "./common/Section";

type AboutProps = {
  description: string[];
};

export default function About({ description }: Readonly<AboutProps>) {
  return (
    <Section title="About" id="about">
      <div className="flex flex-col gap-4">
        {description.map((para, i) => (
          <p key={i} className="text-md md:text-lg text-gray-700 dark:text-gray-300">
            {para}
          </p>
        ))}
      </div>
    </Section>
  );
}
