export interface DayPlan {
  day: number;
  title: string;
  schedule: Array<{ time: string; activity: string }>;
  inclusions: string[];
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  minPeople: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  stayDetails?: string[];
  knowBeforeYouGo: string[];
  importantNote: string;
  itinerary: DayPlan[];
}

export const brandContent = {
  tagline:
    "Adventure in Every Step, Culture in Every Story, Nature in Every Breath.",
  intro:
    "Explore rich traditions, hidden destinations, and unforgettable journeys.",
  journeyTitle: "India + Nepal — One Journey, Endless Experiences",
  journeyDescription:
    "Discover soulful spiritual trails, lush jungles, and peaceful riversides with Paryatanam’s Indo-Nepal tours, specially curated around Valmikinagar, Nepal border regions, and Hole Nepal.",
  journeyDescription2:
    "From sacred temples to thrilling jungle safaris, every journey is designed to give you culture, nature, and comfort in one unforgettable experience.",
};

export const tourPackages: TourPackage[] = [
  {
    id: "valmikinagar-one-day",
    slug: "valmikinagar-one-day-package",
    title: "Valmikinagar One-Day Package",
    subtitle:
      "A perfect short getaway combining spirituality, nature, and light adventure.",
    location: "Valmikinagar – Nepal Border Circuit",
    duration: "1 Day",
    minPeople: "Min. 4-5 persons",
    price: 1999,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 187,
    images: [
      "/images/destinations/paryatanam-valmikinagar-package.jpeg",
      "https://valmikitigerreserve.com/wp-content/uploads/2022/08/c1-scaled.jpg?q=80&w=2070&auto=format&fit=crop",
      "https://media2.thrillophilia.com/images/photos/000/373/536/original/1622526611_shutterstock_1594833985.jpg?w=753&h=450&dpr=1.5?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "Discover the spiritual and natural charm of Valmikinagar, where sacred temples, lush forests, and peaceful river landscapes create a truly enriching one-day experience.",
    highlights: [
      "Maa Nardevi Temple, Jatashankar Dham, Kawaleshwar Dham, and Valmiki Ashram Dham visits",
      "Jungle Safari inside the Valmiki forest area",
      "Peaceful Gandak river-side experiences with a scenic walk",
      "Hanging Bridge and Kawaleshwar Jhula viewpoints",
      "Eco-Park relaxation with local sightseeing and transfers",
    ],
    inclusions: [
      "Pickup & drop as per itinerary",
      "Meals included",
      "Spiritual and cultural sightseeing",
      "Jungle safari experience",
      "Hanging Bridge visit",
      "Kawaleshwar Jhula and Eco-Park visit",
      "Riverside walk along Gandak River",
      "All local transfers and sightseeing by vehicle",
      "Driver allowance, fuel, and parking charges",
    ],
    exclusions: [
      "Any personal expenses (shopping, tips, laundry, phone calls, etc.)",
      "Any meals not mentioned in inclusions",
      "Entry fees or activity tickets unless specified",
      "Camera fees at sightseeing places (if applicable)",
      "Travel insurance",
      "Anything not mentioned under inclusions",
    ],
    knowBeforeYouGo: [
      "Prices may vary during peak seasons, long weekends, and festivals.",
      "Valid government ID proof is mandatory for all travelers.",
      "Timely reporting and punctual departures are required for full sightseeing coverage.",
      "The route passes through eco-sensitive forest zones; avoid littering.",
      "Carry comfortable clothing, walking shoes, sunscreen, and drinking water.",
      "Photography at religious places or forest areas may be restricted.",
      "Maintain silence and decorum at temples and spiritual sites.",
      "The itinerary may be modified due to weather, forest regulations, or local circumstances.",
    ],
    importantNote:
      "Boat rides on Gandak River are subject to weather and government regulations.",
    itinerary: [
      {
        day: 1,
        title: "Valmikinagar Experience",
        schedule: [
          { time: "Morning", activity: "Pickup, welcome, and breakfast" },
          { time: "Morning", activity: "Visit Maa Nardevi Temple" },
          {
            time: "Late Morning",
            activity: "Jatashankar Dham and Kawaleshwar Dham darshan",
          },
          { time: "Noon", activity: "Valmiki Ashram Dham visit" },
          { time: "Afternoon", activity: "Lunch" },
          { time: "Afternoon", activity: "Jungle Safari experience" },
          { time: "Evening", activity: "Hanging Bridge and Kawaleshwar Jhula" },
          { time: "Evening", activity: "Eco-Park leisure time" },
          { time: "Sunset", activity: "Riverside walk along Gandak River" },
          { time: "Night", activity: "Drop-off" },
        ],
        inclusions: [
          "Temple circuit sightseeing",
          "Jungle safari",
          "Hanging Bridge + Kawaleshwar Jhula",
          "Eco-Park and riverside walk",
          "Transfers, fuel, and parking",
        ],
      },
    ],
  },
  {
    id: "valmikinagar-nepal-two-day",
    slug: "valmikinagar-nepal-two-day-package",
    title: "Valmikinagar – Nepal Two-Day Package",
    subtitle:
      "A thoughtfully designed overnight journey blending spirituality, heritage, comfort, and scenic beauty near the Indo-Nepal border.",
    location: "Valmikinagar – Nepal Border Circuit",
    duration: "2 Days / 1 Night",
    minPeople: "Min. 2 persons",
    price: 4999,
    originalPrice: 5999,
    rating: 4.9,
    reviews: 264,
    images: [
      "/images/destinations/paryatanam-indo-nepal-package.jpeg",
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2070&auto=format&fit=crop",
      "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/west_champaran/valmiki_tiger_reserve/wildlife_west_champaran_category_a_valmiki_tiger_reserve_pic_02.jpg?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop",
    ],
    description:
      "Discover the spiritual and natural charm of Valmikinagar and the nearby Nepal border region, where sacred temples, lush forests, and peaceful riversides create a complete short escape with stay, meals, and guided sightseeing.",
    highlights: [
      "Temple and heritage visits across Valmikinagar and nearby Nepal border regions",
      "Triveni Dham, Gajendra Moksha Dham, and Shish Mahal exploration",
      "Jungle safari and Hanging Bridge experiences",
      "1-night resort/luxury hotel stay with meal plan",
      "Affordable premium package with seamless transport",
    ],
    inclusions: [
      "1 night stay in Resort / Luxury Hotel (3-Star equivalent standards)",
      "Breakfast, lunch, and dinner as per package",
      "Pickup and return drop as per itinerary",
      "Maa Nardevi Temple, Jatashankar Dham, Kawaleshwar Dham, and Valmiki Ashram Dham visits",
      "Triveni Dham, Gajendra Moksha Dham, and Shish Mahal visit (Nepal border region)",
      "Jungle safari experience",
      "Hanging Bridge and local sightseeing",
      "All local transfers and sightseeing by vehicle",
      "Driver allowance, fuel, and parking charges",
    ],
    exclusions: [
      "Any personal expenses (shopping, tips, laundry, phone calls, etc.)",
      "Any meals not mentioned in inclusions",
      "Entry fees or activity tickets unless specified",
      "Camera fees at sightseeing places (if applicable)",
      "Travel insurance",
      "Anything not mentioned under inclusions",
    ],
    stayDetails: [
      "1 night stay in Resort / Luxury Hotel (3-Star equivalent standards)",
      "Comfortable rooms with modern amenities",
      "Dinner included as per selected package",
    ],
    knowBeforeYouGo: [
      "Prices may vary during peak seasons, long weekends, and festivals. Send an enquiry for exact cost.",
      "Valid government ID proof is mandatory at booking and during the tour.",
      "Indian citizens should carry valid ID for Nepal border visits.",
      "Timely reporting and punctual departures are important to cover all sightseeing.",
      "Avoid littering in forest and eco-sensitive zones.",
      "Carry comfortable clothing, walking shoes, sunscreen, and drinking water.",
      "Photography at religious places or forest areas may be restricted by local authorities.",
      "Hotel check-in and check-out timings are as per hotel policy and availability.",
      "Early check-in or late check-out may be chargeable.",
      "The itinerary may be modified due to weather conditions, forest regulations, or local circumstances.",
      "Personal expenses and services not listed in inclusions are excluded.",
    ],
    importantNote:
      "Itinerary flow can change based on weather, forest permissions, and local safety advisories.",
    itinerary: [
      {
        day: 1,
        title: "Valmikinagar Experience",
        schedule: [
          { time: "Morning", activity: "Pickup and breakfast" },
          { time: "Morning", activity: "Milk tea / milk coffee" },
          { time: "Morning", activity: "Jungle safari" },
          {
            time: "Morning",
            activity:
              "Temple visits: Maa Nardevi, Jatashankar, and Kawaleshwar",
          },
          { time: "Noon", activity: "Valmiki Ashram Dham" },
          { time: "Afternoon", activity: "Lunch" },
          { time: "Evening", activity: "Hanging Bridge visit" },
          {
            time: "Night",
            activity:
              "Check-in at Resort / Luxury Hotel (3-Star equivalent) and dinner",
          },
        ],
        inclusions: [
          "Pickup, breakfast, lunch, and dinner",
          "Temple circuit + Valmiki Ashram",
          "Jungle safari and Hanging Bridge",
          "Hotel stay",
          "Transfers, fuel, and parking",
        ],
      },
      {
        day: 2,
        title: "Nepal Border Exploration",
        schedule: [
          { time: "Morning", activity: "Breakfast" },
          { time: "Morning", activity: "Triveni Dham visit" },
          { time: "Late Morning", activity: "Gajendra Moksha Dham" },
          { time: "Afternoon", activity: "Lunch" },
          { time: "Afternoon", activity: "Shish Mahal exploration" },
          { time: "Evening", activity: "Hanging Bridge and sightseeing" },
          { time: "Night", activity: "Return drop" },
        ],
        inclusions: [
          "Breakfast and lunch",
          "Nepal border spiritual and heritage sightseeing",
          "Hanging Bridge experience",
          "Return transfer",
          "Driver allowance, fuel, and parking",
        ],
      },
    ],
  },
];

export const whyChooseParyatanam = [
  "Curated Indo-Nepal spiritual and nature circuits",
  "Comfortable stays with trusted hotel standards",
  "Seamless transport and guided experiences",
  "Affordable pricing with premium experiences",
];

export const testimonials = [
  {
    id: "t1",
    name: "Anjali Sharma",
    location: "Patna, India",
    rating: 5,
    text: "Amazing experience — well planned, comfortable stay, and truly memorable jungle safari. The guides were knowledgeable and friendly.",
    date: "Jan 2025",
  },
  {
    id: "t2",
    name: "Rohit Verma",
    location: "Gorakhpur, India",
    rating: 5,
    text: "A perfect short getaway. The temple visits and riverside walk were highlights. Highly recommended for families.",
    date: "Mar 2025",
  },
  {
    id: "t3",
    name: "Meera K.",
    location: "Lucknow, India",
    rating: 4,
    text: "Great value and friendly staff. Room service could be improved but overall a lovely trip.",
    date: "Nov 2024",
  },
];

export function getTourBySlug(slug: string) {
  return tourPackages.find((tour) => tour.slug === slug);
}
