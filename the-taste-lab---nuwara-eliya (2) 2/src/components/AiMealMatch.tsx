import React, { useState } from 'react';
import { Sparkles, Utensils, Flame, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';

interface AiMealMatchProps {
  onSelectItem: (item: MenuItem) => void;
}

export const AiMealMatch: React.FC<AiMealMatchProps> = ({ onSelectItem }) => {
  const [preference, setPreference] = useState('');
  const [spiceTolerance, setSpiceTolerance] = useState('Medium');
  const [partySize, setPartySize] = useState('1-2 People');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const presetMoods = [
    '🔥 Cheesy & Spicy Late Dinner',
    '🥗 Non-Spicy / Kid Friendly Meal',
    '🌶️ Authentic Sri Lankan Street Food',
    '🥑 Quick Fresh Juice & Light Wrap',
    '🍱 Huge Platter After Hiking'
  ];

  const handleGetRecommendation = async (customPreference?: string) => {
    const prefToUse = customPreference || preference || 'Comforting local meal';
    setLoading(true);
    setRecommendation(null);

    try {
      const response = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          preference: prefToUse,
          spiceTolerance,
          partySize
        })
      });

      const data = await response.json();
      setRecommendation(data.recommendation || "We recommend trying our signature Cheese Kottu with Crispy Chicken Shawarma and a Fresh Lime Mojito!");
    } catch (err) {
      console.error('Failed to get recommendation:', err);
      setRecommendation("Try our famous Cheese Kottu and Crispy Chicken Shawarma paired with Fresh Lime Mojito — Nuwara Eliya's top rated meal!");
    } finally {
      setLoading(false);
    }
  };

  // Find featured items to quick display
  const featuredKottu = MENU_ITEMS.find((i) => i.id === 'kottu-cheese-chicken') || MENU_ITEMS[0];
  const featuredShawarma = MENU_ITEMS.find((i) => i.id === 'shawarma-crispy-chicken') || MENU_ITEMS[7];
  const featuredMojito = MENU_ITEMS.find((i) => i.id === 'drink-lime-mojito') || MENU_ITEMS[18];

  return (
    <section id="ai-match" className="py-12 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-extrabold text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Flavor Assistant</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Not Sure What to Order in Nuwara Eliya?
          </h2>
          <p className="text-slate-400 text-sm">
            Tell our Taste Lab AI what you're craving, your spice tolerance, or dietary preference for an instant tailored meal pairing!
          </p>
        </div>

        {/* Input Card */}
        <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl space-y-5">
          
          {/* Quick Preset Buttons */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Quick Cravings Selector:
            </label>
            <div className="flex flex-wrap gap-2">
              {presetMoods.map((mood) => (
                <button
                  key={mood}
                  onClick={() => {
                    setPreference(mood);
                    handleGetRecommendation(mood);
                  }}
                  className="py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Craving Input */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="text-xs font-bold text-slate-300 block mb-1">
                What are you in the mood for?
              </label>
              <input
                type="text"
                value={preference}
                onChange={(e) => setPreference(e.target.value)}
                placeholder="e.g. Cheesy, extra spicy seafood or fresh fruity smoothie"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">
                Spice Tolerance:
              </label>
              <select
                value={spiceTolerance}
                onChange={(e) => setSpiceTolerance(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                <option value="Mild">Mild (Non-spicy)</option>
                <option value="Medium">Medium (Balanced)</option>
                <option value="Spicy">Spicy (Sri Lankan Hot)</option>
                <option value="Extra Hot">Extra Hot 🔥</option>
              </select>
            </div>
          </div>

          {/* Action Trigger */}
          <button
            onClick={() => handleGetRecommendation()}
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm transition-all shadow-lg shadow-amber-950/40 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                <span>Crafting AI Recommendation...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
                <span>Get My Meal Match</span>
              </>
            )}
          </button>

          {/* Result Box */}
          {recommendation && (
            <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-amber-500/40 space-y-4 animate-fadeIn">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Chef AI Recommendation:</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed italic">
                "{recommendation}"
              </p>

              {/* Recommended Items Quick Add */}
              <div className="pt-2 border-t border-slate-800">
                <div className="text-xs text-slate-400 font-bold mb-2">Recommended Items to Try:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => onSelectItem(featuredKottu)}
                    className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-left flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-400">Cheese Kottu (Chicken)</div>
                      <div className="text-[10px] text-amber-400 font-semibold">LKR 1,450</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </button>

                  <button
                    onClick={() => onSelectItem(featuredShawarma)}
                    className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-left flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-400">Crispy Chicken Shawarma</div>
                      <div className="text-[10px] text-amber-400 font-semibold">LKR 1,250</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </button>

                  <button
                    onClick={() => onSelectItem(featuredMojito)}
                    className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-left flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-400">Fresh Lime Mojito</div>
                      <div className="text-[10px] text-amber-400 font-semibold">LKR 550</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
