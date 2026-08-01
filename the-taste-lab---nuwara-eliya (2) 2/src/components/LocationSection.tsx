import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-12 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 font-bold text-xs uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Nuwara Eliya Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Find Us & Order Direct
          </h2>
          <p className="text-slate-400 text-sm">
            Conveniently situated in the heart of Nuwara Eliya town on Cross Street. Easy parking & fast takeaway service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location Info Box */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              
              {/* Address Card */}
              <div className="space-y-2 pb-4 border-b border-slate-800">
                <div className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                  Address & Plus Code
                </div>
                <p className="text-base font-extrabold text-white leading-snug">
                  {RESTAURANT_INFO.address}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="bg-slate-900 px-2.5 py-1 rounded border border-slate-800 font-mono">
                    {RESTAURANT_INFO.plusCode}
                  </span>
                  <span>(Google Maps Code)</span>
                </div>
              </div>

              {/* Phone & Hotline */}
              <div className="space-y-2 pb-4 border-b border-slate-800">
                <div className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                  Telephone & Delivery Hotlines
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-[10px] text-slate-400">Mobile Call</div>
                      <div>{RESTAURANT_INFO.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:${RESTAURANT_INFO.hotline}`}
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white font-bold flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-[10px] text-slate-400">Landline Hotline</div>
                      <div>{RESTAURANT_INFO.hotline}</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Hours & Service */}
              <div className="space-y-2">
                <div className="text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                  Hours & Service Types
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Clock className="w-4 h-4" />
                      10:00 AM – 9:00 PM Daily
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full">
                      Open Today
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px]">
                    Services: Dine-in · Drive-through · Fast Delivery in Nuwara Eliya town
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={RESTAURANT_INFO.mapsDirectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-lg"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="py-3 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-amber-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Interactive Google Map Preview */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl min-h-[350px] relative">
            <iframe
              title="The Taste Lab Nuwara Eliya Google Map"
              src="https://maps.google.com/maps?q=03%201/1,%20Cross%20St,%20Nuwara%20Eliya%2022200&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[350px] sm:min-h-[450px] border-0 filter grayscale-[20%] contrast-[110%]"
              loading="lazy"
              allowFullScreen
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs shadow-xl space-y-0.5">
              <div className="font-black text-amber-400">The Taste Lab</div>
              <div className="text-white text-[11px]">03 1/1, Cross St, Nuwara Eliya</div>
              <div className="text-emerald-400 text-[10px] font-bold">★ 4.8 (403 reviews)</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
