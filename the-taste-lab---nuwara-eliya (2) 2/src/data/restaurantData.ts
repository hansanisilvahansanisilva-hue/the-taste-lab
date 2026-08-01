import { MenuItem, CustomerReview, PopularTimeHour } from '../types';

export const RESTAURANT_INFO = {
  name: 'The Taste Lab',
  tagline: 'Every Flavor Tells a Story',
  rating: 4.8,
  reviewCount: 403,
  priceRange: 'Rs 1,000–2,000 per person',
  category: 'Restaurant · Fast Casual & Sri Lankan Fusion',
  address: '03 1/1, Cross St, Nuwara Eliya 22200, Sri Lanka',
  plusCode: 'XQG7+CR Nuwara Eliya',
  phone: '076 961 9635',
  hotline: '+94 77 551 2991',
  whatsappNumber: '94769619635',
  whatsappDisplay: '+94 76 961 9635',
  hours: 'Open Daily · 10:00 AM – 9:00 PM',
  closeTime: '9:00 PM',
  services: ['Dine-in', 'Drive-through', 'Delivery'],
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.316885234125!2d80.7654!3d6.9701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38053c8b4c06b%3A0x6a05f0ff0b9d5c80!2sNuwara%20Eliya!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk',
  mapsDirectLink: 'https://maps.google.com/?q=The+Taste+Lab+Cross+St+Nuwara+Eliya',
  landmarks: ['Nuwara Eliya Town Center (2 mins)', 'Victoria Park (5 mins)', 'Gregory Lake (8 mins)'],
};

export const MENU_ITEMS: MenuItem[] = [
  // Kottu Category
  {
    id: 'kottu-cheese-chicken',
    name: 'Cheese Kottu (Chicken)',
    category: 'kottu',
    price: 1450,
    description: 'Fresh chopped roti tossed with spiced chicken, egg, fresh milk, rich creamy melted cheese, carrots, onions & capsicum.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800',
    popular: true,
    customizableSpice: true,
    highlights: ['Must-Try Dish', 'Extra Cheesy', 'Customer Favorite']
  },
  {
    id: 'kottu-cheese-beef',
    name: 'Cheese Kottu (Beef)',
    category: 'kottu',
    price: 1650,
    description: 'Tender spiced beef pieces chopped with roti, cream, generous melted cheese, fresh cabbage, carrots & aromatic spices.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    popular: true,
    customizableSpice: true,
    highlights: ['Rich & Savory', 'Loaded Cheese']
  },
  {
    id: 'kottu-cheese-seafood',
    name: 'Cheese Kottu (Seafood)',
    category: 'kottu',
    price: 1850,
    description: 'Fresh prawns & cuttlefish chopped with artisan kottu roti, creamy milk sauce, melted cheese and capsicum.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=800',
    popular: true,
    customizableSpice: true,
    highlights: ['Fresh Seafood', 'Signature Cheese']
  },
  {
    id: 'kottu-chicken',
    name: 'Traditional Chicken Kottu',
    category: 'kottu',
    price: 1150,
    description: 'Classic Nuwara Eliya style street kottu with shredded chicken, egg, carrot, onion, leeks & red cabbage.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
    popular: true,
    customizableSpice: true,
  },
  {
    id: 'kottu-beef',
    name: 'Spiced Beef Kottu',
    category: 'kottu',
    price: 1250,
    description: 'Juicy spiced beef fry tossed with crispy chopped flatbread, eggs, and shredded vegetables.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    customizableSpice: true,
  },
  {
    id: 'kottu-seafood',
    name: 'Seafood Kottu Special',
    category: 'kottu',
    price: 1450,
    description: 'Wild prawns, squid, eggs, onions, and carrots wok-chopped with signature spice blend.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
    customizableSpice: true,
  },
  {
    id: 'kottu-egg',
    name: 'Egg Kottu',
    category: 'kottu',
    price: 950,
    description: 'Double fried egg kottu with crisp fresh leeks, carrots, red cabbage, and green chili.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800',
    vegetarian: true,
    customizableSpice: true,
  },

  // Shawarma & Subs
  {
    id: 'shawarma-crispy-chicken',
    name: 'Crispy Chicken Shawarma',
    category: 'shawarma',
    price: 1250,
    description: 'Crispy golden fried chicken strips wrapped in pita flatbread with special fresh salad and Taste Lab secret garlic sauce.',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=800',
    popular: true,
    highlights: ['Crispy Texture', 'Garlic Sauce']
  },
  {
    id: 'shawarma-falafel',
    name: 'Falafel Shawarma (Vegetarian)',
    category: 'shawarma',
    price: 1100,
    description: 'House-made chickpea falafel patties, pickled turnip, tomato, fresh lettuce, and tahini garlic spread.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=800',
    vegetarian: true,
  },
  {
    id: 'shawarma-beef',
    name: 'Beef Shawarma',
    category: 'shawarma',
    price: 1350,
    description: 'Slow-grilled spiced beef strips, sliced pickles, onions, tomatoes, and house smoked garlic sauce.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'shawarma-mixed-special',
    name: 'Taste Lab Mixed Shawarma',
    category: 'shawarma',
    price: 1650,
    description: 'Loaded combination of roasted chicken, beef, fresh salad, extra sauce, and double wrap flatbread.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800',
    popular: true,
  },
  {
    id: 'sub-crispy-chicken',
    name: 'Crispy Chicken Sub Sandwich',
    category: 'shawarma',
    price: 1400,
    description: 'Warm submarine bread filled with crunchy chicken, melted cheese slice, lettuce, cucumber, and spicy garlic sauce.',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'sub-mega',
    name: 'Taste Lab Mega Sub',
    category: 'shawarma',
    price: 1800,
    description: 'Giant toasted submarine bread packed with double chicken, beef, fried egg, cheese, and signature sauce.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
    popular: true,
  },

  // Fried Rice & Nasi Goreng
  {
    id: 'rice-nasi-goreng',
    name: 'Nasi Goreng Special',
    category: 'rice',
    price: 1650,
    description: 'Indonesian style fragrant chili fried rice with chicken, prawn, topped with sunny-side up fried egg and chili paste.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800',
    popular: true,
    spicy: true,
    highlights: ['Highly Rated', 'Sunny Egg Top']
  },
  {
    id: 'rice-mixed-special',
    name: 'Taste Lab Special Mixed Rice',
    category: 'rice',
    price: 1850,
    description: 'Generous platter of wok-fried basmati with chicken, beef, prawns, eggs, spring onions & fresh salad garnish.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800',
    popular: true,
    highlights: ['Huge Portion', 'Seafood + Meat']
  },
  {
    id: 'rice-seafood',
    name: 'Seafood Fried Rice',
    category: 'rice',
    price: 1450,
    description: 'Generous serving of fried rice tossed with juicy prawns, calamari, fresh carrots, leeks & cucumber salad.',
    image: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'rice-beef',
    name: 'Beef Fried Rice',
    category: 'rice',
    price: 1350,
    description: 'Aromatic wok-tossed rice with seasoned beef strips, egg, onions, capsicum & soy sauce glaze.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'rice-chicken',
    name: 'Chicken Fried Rice',
    category: 'rice',
    price: 1150,
    description: 'Classic wok fried rice with shredded tender chicken breast, egg, carrots & spring onion.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'rice-egg',
    name: 'Egg Fried Rice',
    category: 'rice',
    price: 850,
    description: 'Light wok-fried rice with double scrambled egg, fresh garden vegetables & garlic butter.',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800',
    vegetarian: true,
  },

  // Juices & Beverages
  {
    id: 'drink-lime-mojito',
    name: 'Fresh Lime Mojito',
    category: 'drinks',
    price: 550,
    description: 'Chilled refreshing lime juice crushed with fresh mint leaves, sparkling soda, and crushed ice.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    popular: true,
    vegetarian: true,
  },
  {
    id: 'drink-mango',
    name: 'Fresh Mango Juice',
    category: 'drinks',
    price: 450,
    description: 'Pure thick fresh mango nectar blended to order from tropical Nuwara Eliya market fruit.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=800',
    vegetarian: true,
  },
  {
    id: 'drink-avocado',
    name: 'Creamy Avocado Smoothie',
    category: 'drinks',
    price: 450,
    description: 'Rich highland fresh avocado blended with milk and subtle blossom honey.',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=800',
    vegetarian: true,
  },
  {
    id: 'drink-passion',
    name: 'Passion Fruit Juice',
    category: 'drinks',
    price: 400,
    description: 'Tangy and sweet fresh passion fruit pulp served over ice.',
    image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&q=80&w=800',
    vegetarian: true,
  },
  {
    id: 'drink-watermelon',
    name: 'Fresh Watermelon Cooler',
    category: 'drinks',
    price: 400,
    description: 'Hydrating fresh crushed watermelon with a dash of lime juice.',
    image: 'https://images.unsplash.com/photo-1587883012610-e3df17d41270?auto=format&fit=crop&q=80&w=800',
    vegetarian: true,
  },
  {
    id: 'drink-lime',
    name: 'Classic Lime Juice',
    category: 'drinks',
    price: 350,
    description: 'Freshly squeezed sweet & sour lime drink to quench mountain thirst.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    vegetarian: true,
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Elisa A.',
    authorInfo: '5 reviews · 3 photos',
    rating: 5,
    timeAgo: '6 months ago',
    text: 'We discovered this restaurant by pure chance in Nuwara Eliya and it turned out to be a fantastic surprise. The food was absolutely delicious — the cheese kottu was amazing, the crispy chicken shawarma was perfectly cooked, and the nasi goreng was full of flavor. Everything tasted fresh and well prepared. On top of that, the service was very friendly and attentive, which made the experience even better. We would definitely recommend this place to anyone visiting Nuwara Eliya.',
    orderType: 'Dine in',
    mealType: 'Dinner',
    pricePerPerson: 'Rs 2,000–3,000',
    dishRatings: { food: 5, service: 5, atmosphere: 5 },
    ownerResponse: {
      dateAgo: '6 months ago',
      text: 'Thank you for taking the time to leave us a review! We are so glad to hear that you enjoyed your experience with us and we would love to have you back soon! #TheTasteLab #Restaurant #Nuwaraeliya'
    }
  },
  {
    id: 'rev-2',
    author: 'Jo Chambers',
    authorInfo: 'Local Guide · 11 reviews · 5 photos',
    rating: 5,
    timeAgo: '5 months ago',
    text: 'Came across this place by accident. Food is fabulous. We are travelling and this is the best food so far. They will cook it as hot or mild as you want. Good music. Recommend. Jo and Rob London.',
    orderType: 'Dine in',
    mealType: 'Dinner',
    pricePerPerson: 'Rs 1,000–2,000',
    dishRatings: { food: 5, service: 5, atmosphere: 5 },
    ownerResponse: {
      dateAgo: '5 months ago',
      text: 'Thank you for taking the time to leave us a review! We are so glad to hear that you enjoyed your experience with us and we would love to have you back soon! #TheTasteLab #Restaurant #Nuwaraeliya'
    }
  },
  {
    id: 'rev-3',
    author: 'Eric Dufey',
    authorInfo: 'Local Guide · 131 reviews · 904 photos',
    rating: 4,
    timeAgo: '5 months ago',
    text: 'A good place to eat something quick and tasty. They’re flexible and accommodate your preferences, in my case, I asked for no mayo, and they prepared it without any issues. The food is good, and the place is generally clean.',
    orderType: 'Takeaway',
    mealType: 'Lunch',
    pricePerPerson: 'Rs 2,000–3,000',
    dishRatings: { food: 4, service: 5, atmosphere: 4 },
    ownerResponse: {
      dateAgo: '5 months ago',
      text: 'Thank you for taking the time to leave us a review! We are so glad to hear that you enjoyed your experience with us and we would love to have you back soon! #TheTasteLab #Restaurant #Nuwaraeliya'
    }
  },
  {
    id: 'rev-4',
    author: 'Visitor Review (Google Maps)',
    authorInfo: 'Verified Google Visitor',
    rating: 5,
    timeAgo: '11 months ago',
    text: '超级好吃，分量十足。海鲜炒饭一定要点 (Super delicious, full of portion size. Seafood fried rice is a must order!)',
    orderType: 'Dine in',
    mealType: 'Dinner',
    pricePerPerson: 'Rs 1,000–2,000',
    dishRatings: { food: 5, service: 5, atmosphere: 5 }
  }
];

export const POPULAR_TIMES: PopularTimeHour[] = [
  { hour: '6a', occupancyPercent: 10 },
  { hour: '9a', occupancyPercent: 25 },
  { hour: '12p', occupancyPercent: 65 },
  { hour: '3p', occupancyPercent: 40 },
  { hour: '6p', occupancyPercent: 90, isCurrent: true },
  { hour: '9p', occupancyPercent: 75 }
];
