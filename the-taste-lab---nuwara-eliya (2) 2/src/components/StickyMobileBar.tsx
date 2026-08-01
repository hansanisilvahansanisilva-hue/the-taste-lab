import React from 'react';
import { Phone, MessageCircle, Navigation, ShoppingBag, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface StickyMobileBarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-1 text-[10px] font-bold text-center">
        
        {/* Direct Call */}
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="py-2 px-1 rounded-xl bg-slate-900 hover:bg-slate-800 text-red-400 border border-slate-800 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-red-500" />
          <span>Call</span>
        </a>

        {/* Direct WhatsApp */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20The%20Taste%20Lab,%20I'd%20like%20to%20order.`}
          target="_blank"
          rel="noreferrer"
          className="py-2 px-1 rounded-xl bg-emerald-600 text-white flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-transform shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Directions */}
        <a
          href={RESTAURANT_INFO.mapsDirectLink}
          target="_blank"
          rel="noreferrer"
          className="py-2 px-1 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 text-amber-400" />
          <span>Directions</span>
        </a>

        {/* Cart View */}
        <button
          onClick={onOpenCart}
          className="relative py-2 px-1 rounded-xl bg-amber-500 text-slate-950 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition-transform shadow-md font-black"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center border border-slate-950">
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
};
