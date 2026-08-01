import React, { useState } from 'react';
import { Star, ThumbsUp, MessageSquare, ShieldCheck, Quote, ExternalLink, Plus } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';
import { CustomerReview } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<CustomerReview[]>(REVIEWS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    const newRev: CustomerReview = {
      id: `rev-custom-${Date.now()}`,
      author: authorName,
      authorInfo: 'Verified Guest',
      rating: userRating,
      timeAgo: 'Just now',
      text: reviewText,
      orderType: 'Dine in',
      mealType: 'Dinner',
      pricePerPerson: 'Rs 1,000–2,000',
      dishRatings: { food: userRating, service: 5, atmosphere: 5 }
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowAddModal(false);
      setAuthorName('');
      setReviewText('');
    }, 1200);
  };

  return (
    <section id="reviews" className="py-12 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Google Maps Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Loved by Travelers & Locals
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Real verified reviews from diners at 03 1/1, Cross St, Nuwara Eliya.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4 text-amber-400" />
              <span>Write a Review</span>
            </button>

            <a
              href={RESTAURANT_INFO.mapsDirectLink}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md"
            >
              <span>Read All 403 Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Rating Breakdown Banner */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800 items-center">
          
          {/* Main Score Display */}
          <div className="md:col-span-4 text-center md:border-r md:border-slate-800 md:pr-6 space-y-1">
            <div className="text-5xl sm:text-6xl font-black text-white flex items-center justify-center gap-2">
              <span>4.8</span>
              <Star className="w-10 h-10 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-sm font-bold text-amber-400">Excellent Rating on Google</div>
            <div className="text-xs text-slate-400">Based on 403 customer reviews</div>
          </div>

          {/* Star Distribution Bars */}
          <div className="md:col-span-8 space-y-2 text-xs font-semibold">
            {[
              { star: 5, pct: 88 },
              { star: 4, pct: 10 },
              { star: 3, pct: 1 },
              { star: 2, pct: 1 },
              { star: 1, pct: 0 },
            ].map((row) => (
              <div key={row.star} className="flex items-center gap-3">
                <span className="w-3 text-right text-slate-400">{row.star}</span>
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="w-8 text-slate-400 text-right">{row.pct}%</span>
              </div>
            ))}
          </div>

        </div>

        {/* Reviews Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Author Info */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-extrabold text-white text-base flex items-center gap-2">
                      {rev.author}
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </h3>
                    <p className="text-[11px] text-slate-400">{rev.authorInfo}</p>
                  </div>

                  <span className="text-[11px] text-slate-500 font-medium">{rev.timeAgo}</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-slate-800 text-slate-700'
                      }`}
                    />
                  ))}
                  {rev.pricePerPerson && (
                    <span className="ml-2 text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 font-medium">
                      {rev.pricePerPerson}
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  "{rev.text}"
                </p>

                {/* Tags */}
                {rev.mealType && (
                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-400 pt-1">
                    <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      Meal: <strong className="text-slate-200">{rev.mealType}</strong>
                    </span>
                    <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      Order: <strong className="text-slate-200">{rev.orderType}</strong>
                    </span>
                  </div>
                )}
              </div>

              {/* Owner Response Box */}
              {rev.ownerResponse && (
                <div className="mt-4 p-3.5 bg-slate-900/90 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between font-bold text-amber-400 text-[11px]">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Response from The Taste Lab
                    </span>
                    <span className="text-slate-500">{rev.ownerResponse.dateAgo}</span>
                  </div>
                  <p className="text-slate-300 text-xs italic">
                    {rev.ownerResponse.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Write a Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl text-white">
            <h3 className="text-xl font-black text-white">Write a Customer Review</h3>
            
            {submitted ? (
              <div className="py-8 text-center space-y-2 text-emerald-400 font-bold">
                <p>Thank you! Your review has been added.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah M. (Traveler)"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setUserRating(star)}
                        className="p-1 text-amber-400"
                      >
                        <Star className={`w-6 h-6 ${star <= userRating ? 'fill-amber-400' : 'text-slate-700'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Review Details</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How was your Cheese Kottu, Shawarma, or fresh juice at The Taste Lab?"
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
