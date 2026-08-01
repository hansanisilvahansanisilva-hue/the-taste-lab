export type SpiceLevel = 'Mild' | 'Medium' | 'Spicy' | 'Sri Lankan Extra Hot';

export type ServiceType = 'Dine-in' | 'Takeaway / Drive-through' | 'Delivery (Nuwara Eliya)';

export interface MenuItem {
  id: string;
  name: string;
  category: 'kottu' | 'shawarma' | 'rice' | 'drinks' | 'specials';
  price: number; // LKR
  description: string;
  image: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  highlights?: string[];
  customizableSpice?: boolean;
}

export interface CartItem {
  id: string; // unique cart item id
  menuItem: MenuItem;
  quantity: number;
  spiceLevel?: SpiceLevel;
  instructions?: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  authorInfo: string; // e.g., "5 reviews · 3 photos" or "Local Guide · 131 reviews"
  rating: number; // 1 to 5
  timeAgo: string;
  text: string;
  orderType?: string;
  mealType?: string;
  pricePerPerson?: string;
  dishRatings?: {
    food: number;
    service: number;
    atmosphere: number;
  };
  ownerResponse?: {
    dateAgo: string;
    text: string;
  };
  photos?: string[];
}

export interface ReservationRequest {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  serviceType: ServiceType;
  specialNotes?: string;
}

export interface PopularTimeHour {
  hour: string; // e.g., "6a", "9a", "12p", "3p", "6p", "9p"
  occupancyPercent: number; // 0-100
  isCurrent?: boolean;
}
