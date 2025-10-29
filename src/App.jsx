import { useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import CategoryFilter from './components/CategoryFilter.jsx';
import CardGrid from './components/CardGrid.jsx';
import Footer from './components/Footer.jsx';

const ALL_CARDS = [
  { name: 'Charizard (Holo)', category: 'Legendary', price: 349.99, rating: 4.9, image: 'https://images.pokemontcg.io/base1/4.png' },
  { name: 'Blastoise', category: 'Legendary', price: 189.0, rating: 4.7, image: 'https://images.pokemontcg.io/base1/2.png' },
  { name: 'Venusaur', category: 'Legendary', price: 165.5, rating: 4.6, image: 'https://images.pokemontcg.io/base1/15.png' },
  { name: 'Pikachu', category: 'Starter', price: 24.99, rating: 4.8, image: 'https://images.pokemontcg.io/base1/58.png' },
  { name: 'Bulbasaur', category: 'Starter', price: 14.5, rating: 4.5, image: 'https://images.pokemontcg.io/base1/44.png' },
  { name: 'Squirtle', category: 'Starter', price: 16.0, rating: 4.6, image: 'https://images.pokemontcg.io/base1/63.png' },
  { name: 'Potion', category: 'Trainer', price: 3.25, rating: 4.2, image: 'https://images.pokemontcg.io/base1/94.png' },
  { name: 'Energy Retrieval', category: 'Trainer', price: 2.1, rating: 4.0, image: 'https://images.pokemontcg.io/base1/81.png' },
  { name: 'Double Colorless Energy', category: 'Energy', price: 7.99, rating: 4.1, image: 'https://images.pokemontcg.io/base1/96.png' },
  { name: 'Fire Energy', category: 'Energy', price: 1.2, rating: 3.9, image: 'https://images.pokemontcg.io/base1/98.png' },
  { name: 'Ancient Mew', category: 'Promo', price: 59.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTcXVpcnRsZXxlbnwwfDB8fHwxNzYxNzI4NDg5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Dragonite', category: 'Legendary', price: 129.99, rating: 4.7, image: 'https://images.pokemontcg.io/base2/19.png' },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return ALL_CARDS.filter((c) => {
      const matchCategory = selectedCategory === 'All' || c.category === selectedCategory;
      const matchQuery = !query || c.name.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, query]);

  const handleQuickBrowse = (category) => {
    setSelectedCategory(category);
    setQuery('');
    window.location.hash = 'browse';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <Header query={query} onQueryChange={setQuery} onQuickBrowse={handleQuickBrowse} />
      <main>
        <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />
        <CardGrid cards={filtered} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
