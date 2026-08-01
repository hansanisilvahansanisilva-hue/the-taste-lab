import React, { useState } from 'react';
import { Search, Flame, Sparkles, Filter, Plus, ShoppingBag, Leaf, Star, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenCart: () => void;
  cartItemCount: number;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem, onOpenCart, cartItemCount }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterTag, setFilterTag] = useState<string>('all');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesTag = true;
    if (filterTag === 'popular') matchesTag = !!item.popular;
    if (filterTag === 'spicy') matchesTag = !!item.spicy || !!item.customizableSpice;
    if (filterTag === 'veg') matchesTag = !!item.vegetarian;

    return matchesCategory && matchesSearch && matchesTag;
  });

  const categories = [
    { id: 'all', label: 'All Dishes' },
    { id: 'kottu', label: '🧀 Kottu Specials' },
    { id: 'shawarma', label: '🌯 Shawarma & Subs' },
    { id: 'rice', label: '🍚 Fried Rice & Nasi' },
    { id: 'drinks', label: '🍹 Fresh Juices & Drinks' },
  ];

  return (
    <section id="menu" className="py-12 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>Full Restaurant Menu</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Delicious Local Favorites & Prices
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Cooked fresh in Nuwara Eliya. Average price Rs 1,000–2,000 per person.
            </p>
          </div>

          {/* Search & Cart Quick View */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Kottu, Shawarma, Nasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {cartItemCount > 0 && (
              <button
                onClick={onOpenCart}
                className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Order ({cartItemCount})</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`py-2.5 px-4 rounded-xl font-extrabold text-xs whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg shadow-red-950/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick Attribute Filter Pills */}
        <div className="flex items-center gap-2 text-xs flex-wrap">
          <span className="text-slate-500 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
            <Filter className="w-3 h-3" /> Filter:
          </span>

          <button
            onClick={() => setFilterTag('all')}
            className={`px-3 py-1 rounded-lg border font-semibold text-[11px] transition-colors ${
              filterTag === 'all'
                ? 'bg-slate-800 text-white border-amber-400'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            All Items
          </button>

          <button
            onClick={() => setFilterTag('popular')}
            className={`px-3 py-1 rounded-lg border font-semibold text-[11px] transition-colors flex items-center gap-1 ${
              filterTag === 'popular'
                ? 'bg-red-900/60 text-red-300 border-red-500'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            Popular Highlights
          </button>

          <button
            onClick={() => setFilterTag('spicy')}
            className={`px-3 py-1 rounded-lg border font-semibold text-[11px] transition-colors flex items-center gap-1 ${
              filterTag === 'spicy'
                ? 'bg-amber-900/60 text-amber-300 border-amber-500'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Flame className="w-3 h-3 text-red-400" />
            Spicy & Customizable
          </button>

          <button
            onClick={() => setFilterTag('veg')}
            className={`px-3 py-1 rounded-lg border font-semibold text-[11px] transition-colors flex items-center gap-1 ${
              filterTag === 'veg'
                ? 'bg-emerald-900/60 text-emerald-300 border-emerald-500'
                : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <Leaf className="w-3 h-3 text-emerald-400" />
            Vegetarian Options
          </button>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800 space-y-3">
            <p className="text-slate-400 text-sm">No dishes match your search or filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setFilterTag('all');
              }}
              className="text-amber-400 hover:underline text-xs font-bold"
            >
              Reset Filters & View All Items
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all hover:shadow-xl flex flex-col justify-between group"
              >
                {/* Image & Badge Header */}
                <div className="relative h-44 overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  {/* Top Tags */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    {item.popular ? (
                      <span className="bg-red-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        Popular
                      </span>
                    ) : (
                      <span className="bg-slate-900/80 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-700">
                        {item.category.toUpperCase()}
                      </span>
                    )}

                    {item.vegetarian && (
                      <span className="bg-emerald-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Leaf className="w-3 h-3" /> Veg
                      </span>
                    )}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/90 border border-amber-500/50 text-amber-400 px-3 py-1 rounded-xl font-black text-sm shadow-md">
                    LKR {item.price.toLocaleString()}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-white text-base group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-slate-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlights tags */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {item.highlights.map((h, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded-md border border-amber-500/20"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-white font-bold text-xs border border-slate-700 transition-all flex items-center justify-center gap-1.5 group/btn"
                    >
                      <Plus className="w-4 h-4 text-amber-400 group-hover/btn:scale-110" />
                      <span>Customize & Order</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
