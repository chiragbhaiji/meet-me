export default function Tags({ titles }: Readonly<{ titles: string[] }>) {
  return (
    <div className="flex flex-wrap gap-1.5 md:gap-2">
      {titles.map((title) => (
        <div
          key={title}
          className="bg-green-50 dark:bg-green-500/10 border border-green-100 dark:border-green-500/20 px-2 py-0 md:py-1 rounded-sm md:rounded-md"
        >
          <span className="font-medium text-center text-green-700 dark:text-green-400 text-sm">
            {title}
          </span>
        </div>
      ))}
    </div>
  );
}
