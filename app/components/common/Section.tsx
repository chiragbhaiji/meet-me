import Container from "./Container";
import SectionTitle from "./SectionTitle";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({ title, children }: Readonly<SectionProps>) {
  return (
    <div>
      <SectionTitle title={title} />
      <Container>{children}</Container>
    </div>
  );
}
