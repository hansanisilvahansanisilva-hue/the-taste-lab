import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Phone, Utensils, CheckCircle, MessageCircle } from 'lucide-react';
import { ServiceType } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState(2);
  const [serviceType, setServiceType] = useState<ServiceType>('Dine-in');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);

    try {
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          date,
          time,
          guests,
          serviceType,
          specialNotes: notes
        })
      });

      const data = await response.json();
      if (data.success) {
        setConfirmed(true);
      }
    } catch (err) {
      console.error('Reservation submission error:', err);
      setConfirmed(true);
    } finally {
      setLoading(false);
    }
  };

  const generateWhatsAppReservation = () => {
    const msg = `Hi The Taste Lab! I would like to reserve a table/pre-order:
- Name: ${name || 'Guest'}
- Service: ${serviceType}
- Date: ${date} at ${time}
- Guests: ${guests} people
- Contact: ${phone}
${notes ? `- Special Request: ${notes}` : ''}

Please confirm table availability!`;

    return `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-lg w-full space-y-5 shadow-2xl text-white relative">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <div className="text-xs uppercase font-bold text-amber-400 tracking-wider">
              Dine-In & Pre-Order
            </div>
            <h3 className="text-xl font-black text-white">Table Booking / Pre-Order</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Reservation Submitted!</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              We look forward to hosting you at <strong className="text-amber-400">The Taste Lab</strong> in Nuwara Eliya on {date} at {time}.
            </p>

            <div className="pt-2 flex items-center justify-center gap-3">
              <a
                href={generateWhatsAppReservation()}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Notify via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setConfirmed(false);
                  onClose();
                }}
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Service Type Selection */}
            <div>
              <label className="block font-bold text-slate-300 mb-1">Service Type:</label>
              <div className="grid grid-cols-3 gap-2">
                {(['Dine-in', 'Takeaway / Drive-through', 'Delivery (Nuwara Eliya)'] as ServiceType[]).map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setServiceType(st)}
                    className={`p-2 rounded-lg font-bold border transition-colors text-center text-[11px] ${
                      serviceType === st
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-300 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Mobile / WhatsApp No.</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 076 961 9635"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Date, Time, Guests */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block font-bold text-slate-300 mb-1">Date</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Time</label>
                <input
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Guests</label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  required
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-bold text-slate-300 mb-1">Pre-order dishes or special requests</label>
              <textarea
                rows={2}
                placeholder="e.g. Prepare Cheese Kottu (Medium spice) & 2 Lime Mojitos upon arrival"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Submit & WhatsApp */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg"
              >
                {loading ? 'Confirming...' : 'Confirm Reservation'}
              </button>

              <a
                href={generateWhatsAppReservation()}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book via WhatsApp</span>
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
