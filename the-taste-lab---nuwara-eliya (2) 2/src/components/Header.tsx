import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, ShoppingBag, Star, Clock, Menu, X, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOpenReservation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-md">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-red-700 via-amber-600 to-red-700 text-xs py-1.5 px-3 text-center text-white font-medium flex items-center justify-between sm:justify-center gap-2">
        <div className="flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Open Now · Closes 9:00 PM</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">Nuwara Eliya Hill Country Fast Casual</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-semibold bg-white/10 px-2 py-0.5 rounded-full">
          <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
          <span>4.8 (403 Reviews)</span>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-red-900/30 font-black text-xl tracking-wider">
            TL
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none text-white tracking-wide flex items-center gap-1.5">
              {RESTAURANT_INFO.name}
            </h1>
            <p className="text-[11px] text-amber-400 font-medium tracking-tight mt-0.5">
              {RESTAURANT_INFO.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button onClick={() => scrollToSection('overview')} className="hover:text-amber-400 transition-colors">
            Overview
          </button>
          <button onClick={() => scrollToSection('menu')} className="hover:text-amber-400 transition-colors">
            Menu & Prices
          </button>
          <button onClick={() => scrollToSection('ai-match')} className="hover:text-amber-400 transition-colors flex items-center gap-1 text-amber-400 font-semibold">
            ✨ AI Flavor Match
          </button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-amber-400 transition-colors">
            Reviews (4.8★)
          </button>
          <button onClick={() => scrollToSection('location')} className="hover:text-amber-400 transition-colors">
            Directions
          </button>
        </nav>

        {/* Desktop Call To Actions & Cart */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{RESTAURANT_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenReservation}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-all shadow-md shadow-red-900/20"
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Reserve Table</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-transform active:scale-95"
            aria-label="View Order Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-slate-900 animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-lg bg-amber-500 text-slate-950 font-bold"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-800">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 text-amber-400 font-semibold text-xs border border-slate-700"
            >
              <Phone className="w-4 h-4" />
              Call Restaurant
            </a>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-600 text-white font-semibold text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <div className="flex flex-col gap-2 font-medium text-slate-200 text-sm pt-1">
            <button
              onClick={() => scrollToSection('overview')}
              className="text-left py-2 px-2 hover:bg-slate-800 rounded-md"
            >
              Overview & Vibe
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-left py-2 px-2 hover:bg-slate-800 rounded-md text-amber-400 font-semibold"
            >
              Menu & Pricing (Rs 1,000-2,000)
            </button>
            <button
              onClick={() => scrollToSection('ai-match')}
              className="text-left py-2 px-2 hover:bg-slate-800 rounded-md text-amber-300 font-semibold flex items-center justify-between"
            >
              <span>✨ AI Meal Matcher</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">New</span>
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-left py-2 px-2 hover:bg-slate-800 rounded-md"
            >
              Google Reviews (4.8★)
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-left py-2 px-2 hover:bg-slate-800 rounded-md"
            >
              Directions & Map
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="mt-2 text-center py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg text-sm"
            >
              Reserve a Table / Pre-Order
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
