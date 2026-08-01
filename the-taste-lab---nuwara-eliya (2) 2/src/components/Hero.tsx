import React from 'react';
import { Star, Phone, MessageCircle, MapPin, Navigation, Clock, ShieldCheck, Flame, Utensils, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenReservation: () => void;
  onOpenAiMatch: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenReservation, onOpenAiMatch }) => {
  return (
    <section id="hero" className="relative bg-slate-950 text-white overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 border-b border-slate-800">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-5">
            {/* Local Google Maps Trust Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-1 font-bold text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.8</span>
              </div>
              <span className="text-slate-500">•</span>
              <span className="font-medium text-slate-300">403 Google Reviews</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Open · Closes 9 PM
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Fresh Street Flavor in <span className="bg-gradient-to-r from-red-500 via-amber-400 to-yellow-400 bg-clip-text text-transparent">Nuwara Eliya</span>
              </h1>
              <p className="mt-2 text-base sm:text-lg text-slate-300 font-normal">
                Famous for Cheesy Kottu, Crispy Chicken Shawarma, Nasi Goreng & Fresh Juices. Cooked hot, mild, or spice-customized to your exact taste with zero wait time.
              </p>
            </div>

            {/* Quick Info Grid Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Cheese Kottu</div>
                  <div className="text-slate-400 text-[11px]">#1 Recommended</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Rs 1,000–2,000</div>
                  <div className="text-slate-400 text-[11px]">Per person avg</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">Dine-in · Takeaway</div>
                  <div className="text-slate-400 text-[11px]">Cross St, Nuwara Eliya</div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-sm shadow-xl shadow-red-950/50 transition-all hover:scale-[1.02] active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Order: {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hello%20The%20Taste%20Lab!%20I%20would%20like%20to%20order%20food.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>

              <button
                onClick={onExploreMenu}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm border border-slate-700 transition-colors"
              >
                <span>Browse Menu</span>
              </button>
            </div>

            {/* Secondary Actions Row */}
            <div className="flex flex-wrap items-center gap-3 text-xs pt-1 text-slate-400">
              <a
                href={RESTAURANT_INFO.mapsDirectLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:underline font-semibold"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>03 1/1 Cross St, Nuwara Eliya</span>
                <Navigation className="w-3 h-3" />
              </a>

              <span className="text-slate-600">•</span>

              <button
                onClick={onOpenAiMatch}
                className="inline-flex items-center gap-1.5 text-yellow-300 font-semibold hover:underline"
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin" />
                <span>Not sure what to eat? Ask AI Matcher</span>
              </button>
            </div>
          </div>

          {/* Hero Visual Card / Photo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/taste_lab_hero_1785590399741.jpg"
                alt="The Taste Lab Signature Dishes"
                className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // fallback to high quality food photography if generated image path is reloaded
                  (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Floating Highlight Banner inside Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-black text-amber-400 uppercase tracking-wider text-[10px]">Customer Favorites</span>
                  <span className="text-emerald-400 font-bold text-[11px]">Fresh & Hot</span>
                </div>
                <p className="text-sm font-bold text-white">
                  Cheese Kottu · Crispy Shawarma · Fresh Juices
                </p>
                <p className="text-xs text-slate-300">
                  "The food was absolutely delicious — cheese kottu was amazing!"
                </p>
              </div>

              {/* Spice Badge Overlay */}
              <div className="absolute top-4 right-4 bg-red-600/95 text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-lg border border-red-400 flex items-center gap-1">
                <Flame className="w-3 h-3 fill-white" />
                Custom Spice Levels
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
