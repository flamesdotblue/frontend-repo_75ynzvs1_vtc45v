import { Filter } from 'lucide-react';

const categories = ['All', 'Legendary', 'Starter', 'Trainer', 'Energy', 'Promo'];

export default function CategoryFilter({ selected, onChange }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10" id="browse">
      <div className="bg-white rounded-2xl shadow/50 shadow-lg ring-1 ring-black/5 p-4 sm:p-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-indigo-700 font-semibold">
            <Filter className="h-4 w-4" />
            Browse by category
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = selected === c || (selected === 'All' && c === 'All');
              return (
                <button
                  key={c}
                  onClick={() => onChange(c)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition ${
                    active
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-indigo-700 border-indigo-200 hover:bg-indigo-50'
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
