import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickInboundHub } from './components/QuickInboundHub';
import { MenuSection } from './components/MenuSection';
import { ItemCustomizerModal } from './components/ItemCustomizerModal';
import { AiMealMatch } from './components/AiMealMatch';
import { ReviewsSection } from './components/ReviewsSection';
import { PopularTimesSection } from './components/PopularTimesSection';
import { LocationSection } from './components/LocationSection';
import { ReservationModal } from './components/ReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Footer } from './components/Footer';

import { MenuItem, CartItem, SpiceLevel } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectedCustomItem, setSelectedCustomItem] = useState<MenuItem | null>(null);

  // Cart total items count
  const cartItemCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  // Add Item to Cart from Customizer
  const handleAddToCart = (
    menuItem: MenuItem,
    quantity: number,
    spiceLevel: SpiceLevel,
    instructions: string
  ) => {
    const newItem: CartItem = {
      id: `cart-${menuItem.id}-${Date.now()}`,
      menuItem,
      quantity,
      spiceLevel,
      instructions
    };

    setCartItems((prev) => [...prev, newItem]);
  };

  // Update Item Quantity in Cart
  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.id === cartItemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  // Remove Item from Cart
  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.id !== cartItemId));
  };

  // Clear Cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Header Bar */}
      <Header
        cartCount={cartItemCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenReservation={() => setReservationOpen(true)}
      />

      {/* Hero Showcase */}
      <Hero
        onExploreMenu={() => scrollToSection('menu')}
        onOpenReservation={() => setReservationOpen(true)}
        onOpenAiMatch={() => scrollToSection('ai-match')}
      />

      {/* Quick Inbound Action Hub */}
      <QuickInboundHub
        onOpenReservation={() => setReservationOpen(true)}
        onExploreMenu={() => scrollToSection('menu')}
      />

      {/* Interactive Menu & Customizer */}
      <MenuSection
        onSelectItem={(item) => setSelectedCustomItem(item)}
        onOpenCart={() => setCartOpen(true)}
        cartItemCount={cartItemCount}
      />

      {/* AI Meal & Spice Matcher */}
      <AiMealMatch
        onSelectItem={(item) => setSelectedCustomItem(item)}
      />

      {/* Google Maps Reviews (4.8 Stars, 403 Reviews) */}
      <ReviewsSection />

      {/* Popular Times & Photos */}
      <PopularTimesSection />

      {/* Location, Map & Directions */}
      <LocationSection />

      {/* Footer */}
      <Footer onOpenReservation={() => setReservationOpen(true)} />

      {/* Item Customizer Modal */}
      <ItemCustomizerModal
        item={selectedCustomItem}
        onClose={() => setSelectedCustomItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Table Reservation / Pre-order Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Order Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Fixed Sticky Mobile Inbound Bar */}
      <StickyMobileBar
        cartCount={cartItemCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenReservation={() => setReservationOpen(true)}
      />
    </div>
  );
}
