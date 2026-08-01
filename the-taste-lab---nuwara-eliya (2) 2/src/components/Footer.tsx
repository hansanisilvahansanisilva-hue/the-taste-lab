import React from 'react';
import { Star, Phone, MessageCircle, MapPin, Clock, Utensils, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white font-black text-sm">
                TL
              </div>
              <span className="font-extrabold text-white text-lg tracking-wide">
                {RESTAURANT_INFO.name}
              </span>
            </div>
            <p className="text-amber-400 font-semibold text-xs">
              "{RESTAURANT_INFO.tagline}"
            </p>
            <p className="text-slate-400 leading-relaxed text-xs">
              Nuwara Eliya's top-rated fast casual spot for Cheesy Kottu, Crispy Shawarma, Nasi Goreng & Fresh Juices.
            </p>
            <div className="flex items-center gap-1 text-amber-400 font-bold text-xs">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.8 Rating (403 Google Reviews)</span>
            </div>
          </div>

          {/* Quick Contact & Inbound Lines */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Contact & Inbound
            </h4>
            <div className="space-y-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {RESTAURANT_INFO.whatsappDisplay}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Hours & Services
            </h4>
            <div className="space-y-1.5 text-slate-300">
              <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
                <Clock className="w-4 h-4" />
                <span>10:00 AM – 9:00 PM Daily</span>
              </div>
              <p className="text-[11px] text-slate-400">
                • Dine-in Service<br />
                • Takeaway & Drive-through<br />
                • Fast Delivery in Nuwara Eliya
              </p>
            </div>
          </div>

          {/* Reserve / Action */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">
              Dine-In Booking
            </h4>
            <p className="text-slate-400 text-xs">
              Traveling in Nuwara Eliya? Reserve your table or pre-order to skip the wait.
            </p>
            <button
              onClick={onOpenReservation}
              className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-lg shadow-red-950/40"
            >
              Reserve a Table Now
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} The Taste Lab. All rights reserved. Nuwara Eliya 22200, Sri Lanka.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted for great food lovers in</span>
            <span className="text-amber-400 font-bold">Nuwara Eliya ⛰️</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
