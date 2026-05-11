export default function Tags({ titles }: Readonly<{ titles: string[] }>) {
  return (
    <div className="flex flex-wrap gap-1.5 md:gap-2">
      {titles.map((title) => (
        <div
          key={title}
          className="bg-gray-100 dark:bg-white/10 px-2 py-0 md:py-1 rounded-sm md:rounded-md"
        >
          <span className="font-medium text-center text-gray-600 dark:text-gray-300 text-sm">
            {title}
          </span>
        </div>
      ))}
    </div>
  );
}
