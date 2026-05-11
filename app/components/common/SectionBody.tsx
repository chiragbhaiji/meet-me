export default function SectionBody({
  text,
}: Readonly<{ text: string | string[] }>) {
  if (Array.isArray(text)) {
    return (
      <ul className="flex flex-col gap-1 list-disc list-outside pl-4 text-md md:text-lg text-gray-700 dark:text-gray-300">
        {text.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="text-md md:text-lg text-gray-700 dark:text-gray-300">{text}</p>
  );
}
