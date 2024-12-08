export default function Tags({ titles }: Readonly<{ titles: string[] }>) {
  return (
    <div className="flex flex-wrap gap-2">
      {titles.map((title) => (
        <div key={title} className="bg-white/10 rounded-lg px-3 py-1">
          <span className="text-md font-medium text-gray-400">{title}</span>
        </div>
      ))}
    </div>
  );
}
