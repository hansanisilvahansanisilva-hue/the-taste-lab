import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini AI Client safely
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({ apiKey });
}

// Health Check API
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', restaurant: 'The Taste Lab' });
});

// AI Meal Recommender API
app.post('/api/recommend', async (req, res) => {
  try {
    const { preference, partySize, spiceTolerance, dietary } = req.body;

    const ai = getGeminiClient();
    if (!ai) {
      // Fallback recommendation if no Gemini API key configured
      return res.json({
        recommendation: "Our signature Cheese Kottu (Chicken or Seafood) paired with a Fresh Lime Mojito! It's Nuwara Eliya's favorite comforting hot meal after a long day.",
        suggestedItems: ['kottu-cheese-chicken', 'drink-lime-mojito', 'shawarma-crispy-chicken'],
        spiceNote: "We can cook it mild, medium, or authentic Sri Lankan extra hot!"
      });
    }

    const prompt = `You are the master chef AI assistant at 'The Taste Lab' in Nuwara Eliya, Sri Lanka.
Our restaurant is famous for:
- Cheese Kottu (Chicken/Beef/Seafood) - LKR 1450-1850
- Crispy Chicken Shawarma & Subs - LKR 1250-1800
- Nasi Goreng & Seafood Fried Rice - LKR 1450-1850
- Fresh Fruit Juices (Lime Mojito, Mango, Avocado, Passion Fruit) - LKR 350-550
- Customizable spice levels (Mild, Medium, Spicy, Sri Lankan Extra Hot)
- Fast preparation with zero wait, clean cozy mountain restaurant.

Customer input:
- Cravings / Mood: "${preference || 'Any delicious dish'}"
- Party size: "${partySize || '1 person'}"
- Spice Tolerance: "${spiceTolerance || 'Medium'}"
- Dietary needs: "${dietary || 'None'}"

Provide a warm, appetizing recommendation (2-3 sentences max). Recommend 2 specific menu items with suggested spice customization and drink pairing. Be energetic, friendly, and helpful for travelers & locals in Nuwara Eliya.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const recommendationText = response.text || "Try our Cheese Kottu with Crispy Chicken Shawarma and a Lime Mojito!";

    res.json({
      recommendation: recommendationText,
      suggestedItems: ['kottu-cheese-chicken', 'shawarma-crispy-chicken', 'drink-lime-mojito']
    });
  } catch (error: any) {
    console.error('Error generating AI meal match:', error);
    res.status(500).json({
      error: 'Failed to generate AI recommendation',
      fallback: "Try our famous Cheese Kottu and Crispy Chicken Shawarma paired with Fresh Lime Mojito!"
    });
  }
});

// Table Reservation API (In-Memory mock submission)
const reservations: any[] = [];
app.post('/api/reservation', (req, res) => {
  const { name, phone, date, time, guests, serviceType, specialNotes } = req.body;
  
  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone number are required.' });
  }

  const reservation = {
    id: `RES-${Date.now()}`,
    name,
    phone,
    date,
    time,
    guests,
    serviceType,
    specialNotes,
    status: 'Confirmed',
    createdAt: new Date().toISOString()
  };

  reservations.push(reservation);

  res.json({
    success: true,
    message: `Reservation confirmed for ${name}! We look forward to serving you at The Taste Lab.`,
    reservation
  });
});

// Vite Middleware for development vs production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`The Taste Lab Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
