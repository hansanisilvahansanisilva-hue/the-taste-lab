import React from 'react';
import { Phone, MessageCircle, Navigation, Utensils, Star, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface QuickInboundHubProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const QuickInboundHub: React.FC<QuickInboundHubProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section id="overview" className="bg-slate-900 py-6 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Quick Actions Grid for Mobile & Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          
          {/* Call Hotline Action */}
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 transition-all hover:border-red-500/50 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2.5 rounded-lg bg-red-600/20 text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-black text-red-400 tracking-wider">Fast Line</span>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Direct Phone</div>
              <div className="font-extrabold text-white text-sm sm:text-base mt-0.5">{RESTAURANT_INFO.phone}</div>
              <div className="text-[11px] text-slate-400 mt-1">Tap to call hotline immediately</div>
            </div>
          </a>

          {/* WhatsApp Direct Order Action */}
          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20The%20Taste%20Lab,%20I'd%20like%20to%20order%20for%20delivery/takeaway.`}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 transition-all hover:border-emerald-500/50 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2.5 rounded-lg bg-emerald-600/20 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-black text-emerald-400 tracking-wider">WhatsApp</span>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Direct WhatsApp</div>
              <div className="font-extrabold text-white text-sm sm:text-base mt-0.5">Quick Chat Order</div>
              <div className="text-[11px] text-slate-400 mt-1">Send menu choices & delivery address</div>
            </div>
          </a>

          {/* Google Maps Directions Action */}
          <a
            href={RESTAURANT_INFO.mapsDirectLink}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 transition-all hover:border-amber-500/50 group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Navigation className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-black text-amber-400 tracking-wider">Directions</span>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">03 1/1 Cross St</div>
              <div className="font-extrabold text-white text-sm sm:text-base mt-0.5">Nuwara Eliya</div>
              <div className="text-[11px] text-slate-400 mt-1">Open GPS route on Google Maps</div>
            </div>
          </a>

          {/* Table Booking & Pre-Order Action */}
          <button
            onClick={onOpenReservation}
            className="p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 transition-all hover:border-yellow-500/50 group text-left flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-2.5 rounded-lg bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-slate-950 transition-colors">
                <Utensils className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-black text-yellow-400 tracking-wider">Dine-In</span>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Reserve Table</div>
              <div className="font-extrabold text-white text-sm sm:text-base mt-0.5">Book & Pre-order</div>
              <div className="text-[11px] text-slate-400 mt-1">Skip the wait in Nuwara Eliya</div>
            </div>
          </button>

        </div>
      </div>
    </section>
  );
};
