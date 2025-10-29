import { useState } from 'react';
import { ShoppingCart, Search, ArrowRight, Shuffle, Coins } from 'lucide-react';

export default function Header({ query, onQueryChange, onQuickBrowse }) {
  const [localQuery, setLocalQuery] = useState(query || '');

  const submitSearch = (e) => {
    e.preventDefault();
    onQueryChange(localQuery);
  };

  return (
    <header className="relative bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-400 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center ring-1 ring-white/15">
            <Shuffle className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">PokeTrade Market</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm/6">
          <button className="hover:text-white/90 transition" onClick={() => onQuickBrowse('Legendary')}>Legendary</button>
          <button className="hover:text-white/90 transition" onClick={() => onQuickBrowse('Starter')}>Starter</button>
          <button className="hover:text-white/90 transition" onClick={() => onQuickBrowse('Trainer')}>Trainer</button>
          <button className="hover:text-white/90 transition" onClick={() => onQuickBrowse('Promo')}>Promo</button>
        </div>
        <button className="inline-flex items-center gap-2 bg-white text-indigo-700 px-3.5 py-2 rounded-lg font-medium shadow-sm hover:shadow transition">
          <ShoppingCart className="h-4 w-4" />
          Cart
        </button>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-xs mb-4">
            <Coins className="h-3.5 w-3.5" />
            Fair prices. Verified sellers. Easy trades.
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Buy, sell, and trade Pokémon cards with confidence
          </h1>
          <p className="mt-4 text-white/90 max-w-prose">
            Discover trending cards, compare prices, and browse curated categories. Start your collection or trade duplicates in seconds.
          </p>
          <form onSubmit={submitSearch} className="mt-6 flex items-stretch gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-900/60" />
              <input
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                placeholder="Search cards by name..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/90 text-indigo-900 placeholder:text-indigo-900/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/70"
              />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 bg-indigo-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-indigo-950 transition">
              <Search className="h-4 w-4" />
              Search
            </button>
          </form>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <button onClick={() => onQuickBrowse('Legendary')} className="px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 transition">Legendary picks</button>
            <button onClick={() => onQuickBrowse('Starter')} className="px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 transition">Starter decks</button>
            <button onClick={() => onQuickBrowse('Trainer')} className="px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 transition">Trainer cards</button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-2xl">
            <img
              src="https://images.pokemontcg.io/base1/4.png"
              alt="Charizard Holo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden md:block">
            <a href="#browse" className="inline-flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition">
              Browse cards <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
