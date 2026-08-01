import React from 'react';
import { Clock, Users, Camera, Play, CheckCircle } from 'lucide-react';
import { POPULAR_TIMES, RESTAURANT_INFO } from '../data/restaurantData';

export const PopularTimesSection: React.FC = () => {
  return (
    <section className="py-12 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Popular Times Graph */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" />
                  <span>Visitor Traffic</span>
                </div>
                <h3 className="text-xl font-black text-white mt-1">Popular Times</h3>
              </div>

              {/* Live Badge matching prompt */}
              <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Live: Less busy than usual</span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Peak dinner hours are typically 6:00 PM – 8:30 PM. Table booking or pre-ordering recommended for groups.
            </p>

            {/* Popular Times Bar Graph */}
            <div className="pt-4 flex items-end justify-between gap-3 h-36 border-b border-slate-800 pb-2">
              {POPULAR_TIMES.map((pt, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full bg-slate-800/80 rounded-t-md relative flex items-end justify-center h-28">
                    <div
                      className={`w-full rounded-t-md transition-all duration-500 ${
                        pt.isCurrent
                          ? 'bg-gradient-to-t from-red-600 to-amber-500 shadow-lg shadow-amber-500/30'
                          : 'bg-slate-700 group-hover:bg-amber-500/80'
                      }`}
                      style={{ height: `${pt.occupancyPercent}%` }}
                    />
                    {pt.isCurrent && (
                      <span className="absolute -top-6 text-[10px] font-black text-amber-400 bg-slate-950 px-1.5 py-0.5 rounded border border-amber-500/40">
                        NOW
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-extrabold text-slate-400">{pt.hour}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 font-medium pt-1">
              <span>Saturdays & Weekends</span>
              <span className="text-amber-400 font-bold">Fast Service · Zero Wait</span>
            </div>
          </div>

          {/* Restaurant Storefront & Atmosphere Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
                <Camera className="w-3.5 h-3.5" />
                <span>Photos & Atmosphere</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Cozy Nuwara Eliya Dining Experience
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Located on Cross Street Nuwara Eliya. Clean, friendly service with good music & customizable spice preferences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-xl overflow-hidden h-40 bg-slate-900 border border-slate-800 group">
                <img
                  src="/src/assets/images/taste_lab_kottu_1785590413226.jpg"
                  alt="Cheese Kottu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded">
                  Cheese Kottu
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden h-40 bg-slate-900 border border-slate-800 group">
                <img
                  src="/src/assets/images/taste_lab_shawarma_1785590424566.jpg"
                  alt="Shawarma Wrap"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[11px] font-bold text-white bg-slate-950/80 px-2 py-0.5 rounded">
                  Crispy Shawarma
                </span>
              </div>
            </div>

            {/* Storefront Night Banner */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <div className="font-bold text-white">Nuwara Eliya Town Center</div>
                <div className="text-slate-400">Address: 03 1/1, Cross St, Nuwara Eliya 22200</div>
              </div>
              <a
                href={RESTAURANT_INFO.mapsDirectLink}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-[11px] hover:bg-amber-400"
              >
                View on Map
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
