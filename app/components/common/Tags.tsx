export default function Tags({ titles }: Readonly<{ titles: string[] }>) {
  return (
    <div className="flex flex-wrap gap-1.5 md:gap-2">
      {titles.map((title) => (
        <div
          key={title}
          className="bg-white/10 px-2 py-0 md:py-1 rounded-sm md:rounded-md"
        >
          <span className="group-hover/card:text-gray-100 font-medium text-center text-gray-400 text-sm">
            {title}
          </span>
        </div>
      ))}
    </div>
  );
}
