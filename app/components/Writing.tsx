import Section from "./common/Section";
import Card from "./common/Card";

type WritingProps = {
  writings: Array<{
    title: string;
    url: string;
    publishedOn: string;
    date: string;
    description: string;
  }>;
};

export default function Writing({ writings }: Readonly<WritingProps>) {
  return (
    <Section title="Writing" id="writing">
      {writings.map((item) => (
        <Card key={item.title} href={item.url}>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{item.publishedOn}</span>
              <span>·</span>
              <span>{item.date}</span>
            </div>
            <h4 className="group-hover/card:text-green-600 dark:group-hover/card:text-green-400 font-semibold text-gray-800 dark:text-gray-200 text-lg">
              {item.title}
            </h4>
            <p className="text-md text-gray-700 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </Card>
      ))}
    </Section>
  );
}
