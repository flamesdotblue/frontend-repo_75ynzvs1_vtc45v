export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold text-gray-900">PokeTrade Market</h3>
          <p className="text-gray-500 mt-2">A friendly place to buy, sell, and trade Pokémon cards. Stay safe, verify sellers, and have fun collecting!</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-900">Marketplace</h4>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>Browse categories</li>
            <li>Sell your cards</li>
            <li>Trading guide</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-gray-900">Support</h4>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>Help center</li>
            <li>Buyer protection</li>
            <li>Report a listing</li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} PokeTrade Market. Not affiliated with Nintendo or The Pokémon Company.</div>
    </footer>
  );
}
