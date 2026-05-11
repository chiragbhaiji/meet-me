import Container from "./Container";
import SectionTitle from "./SectionTitle";

type SectionProps = {
  title: string;
  id?: string;
  children: React.ReactNode;
};

export default function Section({ title, id, children }: Readonly<SectionProps>) {
  return (
    <div id={id}>
      <SectionTitle title={title} />
      <Container>{children}</Container>
    </div>
  );
}
