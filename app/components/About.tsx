import Section from "./common/Section";
import SectionBody from "./common/SectionBody";

type AboutProps = {
  description: string;
};

export default function About({ description }: Readonly<AboutProps>) {
  return (
    <Section title="About">
      <SectionBody text={description} />
    </Section>
  );
}
