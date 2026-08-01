import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, MessageCircle, Phone, MapPin, CheckCircle } from 'lucide-react';
import { CartItem, ServiceType } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [serviceType, setServiceType] = useState<ServiceType>('Takeaway / Drive-through');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);

  const generateWhatsAppOrderText = () => {
    let orderDetails = cartItems
      .map(
        (ci, idx) =>
          `${idx + 1}. ${ci.menuItem.name} (${ci.quantity}x) - LKR ${(
            ci.menuItem.price * ci.quantity
          ).toLocaleString()}\n   └ Spice: ${ci.spiceLevel || 'Medium'}${
            ci.instructions ? ` | Note: ${ci.instructions}` : ''
          }`
      )
      .join('\n');

    const msg = `🛒 *NEW ORDER - THE TASTE LAB*
----------------------------
*Service:* ${serviceType}
*Total Amount:* LKR ${subtotal.toLocaleString()}

*Items Ordered:*
${orderDetails}

----------------------------
*Customer Phone:* ${customerPhone || 'Not specified'}
*Delivery Address / Notes:* ${customerAddress || 'Nuwara Eliya Town'}

Please confirm prep time & receipt!`;

    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="w-full sm:max-w-md bg-slate-900 border-l border-slate-800 text-white h-full flex flex-col justify-between shadow-2xl">
        
        {/* Cart Header */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-amber-500 text-slate-950 font-black">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">Your Food Order</h3>
              <p className="text-[11px] text-slate-400">The Taste Lab · Nuwara Eliya</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="p-4 overflow-y-auto flex-1 space-y-4 text-xs">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-800/80 text-slate-500 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-slate-400 font-medium">Your order cart is empty.</p>
              <p className="text-[11px] text-slate-500">
                Browse our menu to add Cheese Kottu, Shawarma, or Fresh Juices!
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="font-bold text-slate-300">Order Items ({cartItems.length})</span>
                <button
                  onClick={onClearCart}
                  className="text-red-400 hover:underline text-[11px] font-bold"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-3">
                {cartItems.map((ci) => (
                  <div
                    key={ci.id}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-extrabold text-white text-sm">{ci.menuItem.name}</h4>
                        <div className="text-[11px] text-amber-400 font-semibold mt-0.5">
                          LKR {(ci.menuItem.price * ci.quantity).toLocaleString()}
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(ci.id)}
                        className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Spice & Instructions */}
                    <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-400 bg-slate-900 p-1.5 rounded-lg border border-slate-800">
                      <span>Spice: <strong className="text-red-400">{ci.spiceLevel || 'Medium'}</strong></span>
                      {ci.instructions && (
                        <>
                          <span>•</span>
                          <span className="text-slate-300">{ci.instructions}</span>
                        </>
                      )}
                    </div>

                    {/* Quantity Adjustment */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-slate-400 text-[11px]">Quantity</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(ci.id, -1)}
                          className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 font-bold flex items-center justify-center text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-bold text-white w-4 text-center">{ci.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(ci.id, 1)}
                          className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 font-bold flex items-center justify-center text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Form Fields */}
              <div className="pt-3 space-y-3 border-t border-slate-800">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Service Type:</label>
                  <div className="grid grid-cols-3 gap-1.5 text-[10px]">
                    {(['Dine-in', 'Takeaway / Drive-through', 'Delivery (Nuwara Eliya)'] as ServiceType[]).map((st) => (
                      <button
                        key={st}
                        type="button"
                        onClick={() => setServiceType(st)}
                        className={`p-1.5 rounded-lg font-bold border transition-colors ${
                          serviceType === st
                            ? 'bg-amber-500 text-slate-950 border-amber-400'
                            : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                        {st.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Your Phone / WhatsApp No.</label>
                  <input
                    type="tel"
                    placeholder="e.g. 076 961 9635"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Delivery Address or Hotel Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Grand Hotel Road, Nuwara Eliya"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full p-2 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Totals & Instant Action Triggers */}
        {cartItems.length > 0 && (
          <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-base font-extrabold text-white">
              <span>Order Total:</span>
              <span className="text-amber-400 text-lg">LKR {subtotal.toLocaleString()}</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={generateWhatsAppOrderText()}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="py-3 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
