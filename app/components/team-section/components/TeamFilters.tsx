interface TeamFiltersProps {
    divisions: string[];
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
  }
  
  export default function TeamFilters({ divisions, activeFilter, setActiveFilter }: TeamFiltersProps) {
    return (
      <div className="flex overflow-x-auto pb-4 mb-12 scrollbar-hide w-full px-4">
        <div className="flex flex-nowrap justify-start md:justify-center md:mx-auto gap-3 min-w-min">
          {divisions.map((division) => (
            <button
              key={division}
              onClick={() => setActiveFilter(division)}
              className={`px-5 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm whitespace-nowrap ${
                activeFilter === division
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                  : "bg-white/80 text-emerald-600 border border-emerald-200 hover:bg-emerald-50 hover:shadow-md"
              }`}
            >
              {division}
            </button>
          ))}
        </div>
      </div>
    );
  }