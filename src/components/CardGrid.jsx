import { Star } from 'lucide-react';

function CardItem({ card }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden ring-1 ring-black/5 hover:ring-indigo-200 transition shadow-sm hover:shadow-md">
      <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
        <img src={card.image} alt={card.name} className="w-full h-full object-contain p-3 group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-gray-900">{card.name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{card.category}</p>
          </div>
          {card.rating && (
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="h-4 w-4 fill-amber-400" />
              <span className="text-xs font-medium">{card.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-bold text-indigo-700">${card.price.toFixed(2)}</div>
          <button className="text-sm px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">Trade / Buy</button>
        </div>
      </div>
    </div>
  );
}

export default function CardGrid({ cards }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Featured cards</h2>
        <p className="text-sm text-gray-500">Showing {cards.length} results</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((c) => (
          <CardItem key={`${c.name}-${c.image}`} card={c} />
        ))}
      </div>
    </section>
  );
}
