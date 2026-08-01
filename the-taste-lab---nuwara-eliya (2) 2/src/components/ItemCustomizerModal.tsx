import React, { useState } from 'react';
import { X, Plus, Minus, Flame, MessageCircle, Phone, ShoppingBag, Check } from 'lucide-react';
import { MenuItem, SpiceLevel } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ItemCustomizerModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, spiceLevel: SpiceLevel, instructions: string) => void;
}

export const ItemCustomizerModal: React.FC<ItemCustomizerModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [spiceLevel, setSpiceLevel] = useState<SpiceLevel>('Medium');
  const [noMayo, setNoMayo] = useState(false);
  const [extraCheese, setExtraCheese] = useState(false);
  const [customText, setCustomText] = useState('');
  const [added, setAdded] = useState(false);

  const totalPrice = (item.price + (extraCheese ? 250 : 0)) * quantity;

  const handleAdd = () => {
    let instructions = customText.trim();
    if (noMayo) instructions = instructions ? `No Mayo. ${instructions}` : 'No Mayo';
    if (extraCheese) instructions = instructions ? `Extra Cheese (+250 LKR). ${instructions}` : 'Extra Cheese (+250 LKR)';

    onAddToCart(item, quantity, spiceLevel, instructions);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 600);
  };

  const generateWhatsAppLink = () => {
    let instructions = customText.trim();
    if (noMayo) instructions += ' [No Mayo]';
    if (extraCheese) instructions += ' [Extra Cheese]';

    const msg = `Hi The Taste Lab! I would like to order:
- Item: ${item.name} (${quantity}x)
- Spice Level: ${spiceLevel}
- Total: LKR ${totalPrice.toLocaleString()}
${instructions ? `- Note: ${instructions}` : ''}

Please confirm my order and prep time!`;

    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="w-full sm:max-w-lg bg-slate-900 border border-slate-800 rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl text-white max-h-[90vh] flex flex-col">
        
        {/* Header Image & Close */}
        <div className="relative h-44 sm:h-52 bg-slate-950 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 right-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                {item.category.toUpperCase()}
              </span>
              {item.popular && (
                <span className="text-[10px] bg-red-600 text-white font-black px-2 py-0.5 rounded-full">
                  ★ Popular Choice
                </span>
              )}
            </div>
            <h3 className="text-xl font-black text-white">{item.name}</h3>
          </div>
        </div>

        {/* Scrollable Form Options */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-5 text-sm flex-1">
          <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
            {item.description}
          </p>

          {/* Spice Customization (Very important according to Google reviews!) */}
          <div className="space-y-2 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
            <label className="font-extrabold text-white text-xs sm:text-sm flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-red-500 fill-red-500" />
                Select Spice Preference
              </span>
              <span className="text-[11px] text-amber-400 font-semibold">Cooked Fresh</span>
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {(['Mild', 'Medium', 'Spicy', 'Sri Lankan Extra Hot'] as SpiceLevel[]).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setSpiceLevel(level)}
                  className={`py-2 px-3 rounded-lg font-bold border transition-all text-left flex items-center justify-between ${
                    spiceLevel === level
                      ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-950/50'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                  }`}
                >
                  <span>{level}</span>
                  {spiceLevel === level && <Check className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </div>

          {/* Special Requests Checkboxes */}
          <div className="space-y-2 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
            <span className="font-bold text-slate-200 text-xs uppercase tracking-wider">Custom Preferences</span>
            <div className="space-y-2 pt-1 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white">
                <input
                  type="checkbox"
                  checked={noMayo}
                  onChange={(e) => setNoMayo(e.target.checked)}
                  className="rounded border-slate-700 text-red-600 focus:ring-0 bg-slate-800"
                />
                <span>No Mayonnaise (Prepared without mayo)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white">
                <input
                  type="checkbox"
                  checked={extraCheese}
                  onChange={(e) => setExtraCheese(e.target.checked)}
                  className="rounded border-slate-700 text-amber-500 focus:ring-0 bg-slate-800"
                />
                <span>Extra Melted Cheese (+LKR 250)</span>
              </label>
            </div>

            <textarea
              placeholder="Any other notes? (e.g. extra chili paste, separate sauce, less salt)"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              rows={2}
              className="w-full mt-2 p-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-xl border border-slate-800">
            <span className="font-bold text-slate-200 text-xs sm:text-sm">Quantity</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center font-bold text-white"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-extrabold text-white text-base w-6 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center font-bold text-white"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-sm font-bold text-white pb-2">
            <span>Total Amount:</span>
            <span className="text-amber-400 text-lg">LKR {totalPrice.toLocaleString()}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAdd}
              disabled={added}
              className={`py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-950/40'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Order Cart</span>
                </>
              )}
            </button>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
