export interface DayPlan {
  day: number;
  title: string;
  schedule: Array<{ time: string; activity: string }>;
  inclusions: string[];
}

export interface TourCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
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
  categoryId: string;
  perPersonPrice?: number;
  tierPrices: {
    standard: number;
    value: number;
    premium: number;
    exclusive: number;
  };
  tierDetails?: {
    standard: string[];
    value: string[];
    premium: string[];
    exclusive: string[];
  };
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
export const tourCategories: TourCategory[] = [
  {
    id: "explore",
    title: "Explore All",
    description: "Discover all our travel experiences.",
    icon: "Compass",
  },
  {
    id: "couple-trip",
    title: "Couple Trip",
    description: "Perfect escapes for couples and honeymooners.",
    icon: "Heart",
  },
  {
    id: "family-trip",
    title: "Family Trip",
    description: "Memorable journeys designed for all age groups.",
    icon: "Users",
  },
  {
    id: "school-group",
    title: "School Group",
    description: "Educational and fun group trips for students.",
    icon: "GraduationCap",
  },
  {
    id: "indo-nepal",
    title: "Indo Nepal",
    description: "Explore the beauty of India and Nepal together.",
    icon: "Globe",
  },
  {
    id: "adventure",
    title: "Adventure",
    description: "Feel the thrill of trekking, boating & more.",
    icon: "Zap",
  },
  {
    id: "nature",
    title: "Nature",
    description: "Reconnect with nature in peaceful surroundings.",
    icon: "Mountain",
  },
  {
    id: "sightseeing",
    title: "Sightseeing",
    description: "Visit the most famous landmarks and views.",
    icon: "Camera",
  },
];
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
    categoryId: "nature",
    tierPrices: {
      standard: 1999,
      value: 2499,
      premium: 2999,
      exclusive: 3499
    }
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
    categoryId: "indo-nepal",
    tierPrices: {
      standard: 4999,
      value: 5999,
      premium: 6999,
      exclusive: 7999
    }
  },
  {
    id: "romantic-couple-escape",
    slug: "romantic-couple-escape",
    title: "Valmikinagar Romantic Couple Escape",
    subtitle: "2D/1N 1 Day in Valmikinagar 1 Day Nepal Border Circuit",
    location: "Valmikinagar & Nepal Border",
    duration: "2D/1N",
    minPeople: "maxPeople: 2",
    price: 7499,
    originalPrice: 14999,
    rating: 5.0,
    reviews: 124,
    images: [
      "/images/package/couple.png",
      "/images/destinations/paryatanam-valmikinagar-package.jpeg",
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
      "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/west_champaran/valmiki_tiger_reserve/wildlife_west_champaran_category_a_valmiki_tiger_reserve_pic_02.jpg?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Discover the spiritual and natural charm of Valmikinagar and the nearby Nepal border region, where sacred temples, lush forests, and peaceful river landscapes create a truly enriching experience. Visit revered sites like Valmiki Ashram Dham, Maa Nardevi Temple, and Jatashankar Dham, Kawleshwar Dham followed by spiritual excursions to Triveni Dham and Gajendra Moksha Dham in Nepal. Along with spiritual exploration, enjoy refreshing experiences such as jungle safari, hanging bridge walks, Kawleshwar Jhula, Eco-Park and a calming riverside stroll along the Gandak River. This tour offers a perfect blend of devotion, nature, and relaxation in a short yet memorable journey.",
    highlights: [
      "Transport Included Indo-Nepal",
      "Stay Included",
      "All Meals Included",
      "Singhtseeing Included",
      "Singhtseeing tickets included",
      "Boat Safari Included",
      "Jungle Safari Included",
      "Safe & Secure",
      "Fully Privacy",
      "Private AC Room",
      "Personal Guide"
    ],
    inclusions: [
      "Pickup & drop as per itinerary",
      "Stay Included – Resort / Luxury Hotel (3-Star equivalent standards)",
      "Mild Tea/Coffee as per itinerary",
      "Meals Included – Breakfast, Lunch & Dinner",
      "Transport Included",
      "Sightseeing Included",
      "Spiritual & cultural sightseeing",
      "Boat Safari Included (Subject to local/govt regulations)",
      "Wild Jungle Safari Included (Subject to local/govt regulations)",
      "Kawalsher Jhula",
      "Hanging Bridge Nepal side",
      "Eco-Park visit",
      "Riverside walk along Gandak River"
    ],
    exclusions: [
      "Personal expenses such as shopping, tips, telephone calls, laundry, etc.",
      "Meals not mentioned under the Inclusions section",
      "Camera or video fees at sightseeing places (if applicable)",
      "Travel insurance",
      "GST and applicable taxes",
      "Bonfire expenses (if requested)",
      "Bus stop pickup and drop (only available at common group timing)",
      "Room service and restaurant expenses at the hotel",
      "Adventure activities or optional activities not mentioned in the itinerary",
      "Alcoholic beverages, soft drinks, mineral water, or other beverages",
      "Transport services apart from those mentioned in the itinerary",
      "Any costs arising due to unforeseen circumstances (landslides, bad weather, etc.)",
      "Anything not specifically mentioned under 'Inclusions'"
    ],
    stayDetails: [
      "1 night stay in Resort / Luxury Hotel (3-Star equivalent standards)",
      "Comfortable rooms with modern amenities",
      "Meals (as per selected package)"
    ],
    knowBeforeYouGo: [
      "Prices may vary during peak seasons, long weekends, and festivals.",
      "Valid government ID proof is mandatory for all travelers.",
      "Indian citizens should carry a valid ID for Nepal border visits.",
      "Timely reporting and punctual departures are important.",
      "Please avoid littering and respect nature in forest zones.",
      "Carry comfortable clothing, walking shoes, and sunscreen.",
      "Photography at religious sites may be restricted; follow guidelines.",
      "Maintain silence and decorum at spiritual sites.",
      "Check-in and check-out timings are as per hotel policy.",
      "The itinerary may be modified due to weather or forest regulations."
    ],
    importantNote: "The itinerary may be modified due to weather conditions, forest regulations, or local circumstances for guest safety and a smooth travel experience.",
    itinerary: [
      {
        day: 1,
        title: "Valmikinagar Exploration",
        schedule: [
          { time: "Morning", activity: "Milk Tea / Milk Coffee & Breakfast" },
          { time: "Morning", activity: "Temple visits (Maa Nardevi, Jatashankar, Kawaleshwar, Valmiki Ashram Dham)" },
          { time: "Afternoon", activity: "Hanging Bridge & Lunch" },
          { time: "Evening", activity: "Kawleshwar Jhula & Eco-Park" },
          { time: "Sunset", activity: "Riverside Walk (Gandak River)" },
          { time: "Night", activity: "Check-in at Resort / Luxury Hotel & Dinner" }
        ],
        inclusions: [
          "Spiritual Sightseeing",
          "Eco-Park & Riverside Walk",
          "Stay & Dinner"
        ]
      },
      {
        day: 2,
        title: "Valmikinagar Exploration",
        schedule: [
          { time: "Morning", activity: "Milk Tea / Milk Coffee" },
          { time: "Morning", activity: "Jungle Safari & Breakfast" },
          { time: "Morning", activity: "Triveni Dham visit" },
          { time: "Late Morning", activity: "Gajendra Moksha Dham" },
          { time: "Afternoon", activity: "Shish Mahal exploration & Lunch" },
          { time: "Evening", activity: "Hanging Bridge & sightseeing" },
          { time: "Night", activity: "Return drop" }
        ],
        inclusions: [
          "Jungle Safari",
          "Nepal Border Spiritual Circuit",
          "Return Transfer"
        ]
      }
    ],
    categoryId: "couple-trip",
    tierPrices: {
      standard: 14999,
      value: 19999,
      premium: 21999,
      exclusive: 24999
    }
  },
  {
    id: "valmikinagar-family-escape",
    slug: "valmikinagar-family-escape",
    title: "Valmikinagar Family Escape",
    subtitle: "2D/1N 1 Day in Valmikinagar 1 Day Nepal Border Circuit",
    location: "Valmikinagar & Nepal Border",
    duration: "2D/1N",
    minPeople: "Max. 6 persons",
    price: 33999,
    originalPrice: 38999,
    perPersonPrice: 5999,
    rating: 4.9,
    reviews: 156,
    images: [
      "/images/package/family.png",
      "/images/destinations/paryatanam-indo-nepal-package.jpeg",
      "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop",
      "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/category_a/west_champaran/valmiki_tiger_reserve/wildlife_west_champaran_category_a_valmiki_tiger_reserve_pic_02.jpg?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Discover the spiritual and natural charm of Valmikinagar and the nearby Nepal border region, where sacred temples, lush forests, and peaceful river landscapes create a truly enriching experience. Visit revered sites like Valmiki Ashram Dham, Maa Nardevi Temple, and Jatashankar Dham, Kawleshwar Dham followed by spiritual excursions to Triveni Dham and Gajendra Moksha Dham in Nepal. Along with spiritual exploration, enjoy refreshing experiences such as jungle safari, hanging bridge walks, Kawleshwar Jhula, Eco-Park and a calming riverside stroll along the Gandak River. This tour offers a perfect blend of devotion, nature, and relaxation in a short yet memorable journey.",
    highlights: [
      "Transport Included Indo-Nepal",
      "Stay Included",
      "All Meals Included",
      "Sightseeing Included",
      "Sightseeing tickets included",
      "Boat Safari Included",
      "Jungle Safari Included",
      "Safe & Secure",
      "Fully Privacy",
      "Private AC Room",
      "Personal Guide"
    ],
    inclusions: [
      "Pickup & drop as per itinerary",
      "Stay Included – Resort / Luxury Hotel (3-Star equivalent standards)",
      "Mild Tea/Coffee as per itinerary",
      "Meals Included – Breakfast, Lunch & Dinner",
      "Transport Included",
      "Sightseeing Included",
      "Spiritual & cultural sightseeing including: Maa Nardevi Temple, Jatashankar Dham, Kawaleshwar Dham, Valmiki Ashram Dham, Gandak Dam View Point, Triveni Sangam Dham, Gajendra Moksha Dham, Seesh Mahal, 1+ Hidden Spiritual Location",
      "Boat Safari Included (Subject to local/govt regulations)",
      "Wild Jungle Safari Included (Subject to local/govt regulations)",
      "Kawalsher Jhula",
      "Hanging Bridge Nepal side",
      "Eco-Park visit",
      "Riverside walk along Gandak River"
    ],
    exclusions: [
      "Personal expenses such as shopping, tips, telephone calls, laundry, etc.",
      "Meals not mentioned under the Inclusions section",
      "Camera or video fees at sightseeing places (if applicable)",
      "Travel insurance",
      "GST and applicable taxes",
      "Bonfire expenses (if requested)",
      "Bus stop pickup and drop (only available at common group timing)",
      "Room service and restaurant expenses at the hotel",
      "Adventure activities or optional activities not mentioned in the itinerary",
      "Alcoholic beverages, soft drinks, mineral water, or other beverages",
      "Transport services apart from those mentioned in the itinerary",
      "Any costs arising due to unforeseen circumstances such as landslides, bad weather, etc.",
      "Anything not specifically mentioned under 'Inclusions'"
    ],
    stayDetails: [
      "1 night stay in Resort / Luxury Hotel (3-Star equivalent standards)",
      "Comfortable rooms with modern amenities",
      "Meals (as per selected package)"
    ],
    knowBeforeYouGo: [
      "Prices may vary during peak seasons, long weekends, and festivals.",
      "Valid government ID proof is mandatory for all travelers.",
      "Indian citizens should carry a valid ID for Nepal border visits.",
      "Timely reporting and punctual departures are important.",
      "The tour passes through forest and eco-sensitive zones; please avoid littering.",
      "Carry comfortable clothing, walking shoes, sunscreen, and drinking water.",
      "Photography at religious sites may be restricted; follow guidelines.",
      "Maintain silence and decorum at spiritual sites.",
      "Check-in and check-out timings are as per hotel policy.",
      "The itinerary may be modified due to weather or forest regulations."
    ],
    importantNote: "The itinerary may be modified due to weather conditions, forest regulations, or local circumstances for guest safety and a smooth travel experience.",
    itinerary: [
      {
        day: 1,
        title: "Valmikinagar Exploration",
        schedule: [
          { time: "Morning", activity: "Milk Tea / Milk Coffee & Breakfast" },
          { time: "Morning", activity: "Temple visits (Maa Nardevi, Jatashankar, Kawaleshwar, Valmiki Ashram Dham)" },
          { time: "Afternoon", activity: "Hanging Bridge & Lunch" },
          { time: "Evening", activity: "Kawleshwar Jhula & Eco-Park" },
          { time: "Sunset", activity: "Riverside Walk (Gandak River)" },
          { time: "Night", activity: "Check-in at Resort / Luxury Hotel & Dinner" }
        ],
        inclusions: [
          "Spiritual Sightseeing",
          "Eco-Park & Riverside Walk",
          "Stay & Dinner"
        ]
      },
      {
        day: 2,
        title: "Valmikinagar Exploration",
        schedule: [
          { time: "Morning", activity: "Milk Tea / Milk Coffee" },
          { time: "Morning", activity: "Jungle Safari & Breakfast" },
          { time: "Morning", activity: "Triveni Dham visit" },
          { time: "Late Morning", activity: "Gajendra Moksha Dham" },
          { time: "Afternoon", activity: "Shish Mahal exploration & Lunch" },
          { time: "Evening", activity: "Hanging Bridge & sightseeing" },
          { time: "Night", activity: "Return drop" }
        ],
        inclusions: [
          "Jungle Safari",
          "Nepal Border Spiritual Circuit",
          "Return Transfer"
        ]
      }
    ],
    categoryId: "family-trip",
    tierPrices: {
      standard: 33999,
      value: 34999,
      premium: 38999,
      exclusive: 47999
    }
  },
  {
    id: "educational-nature-trip",
    slug: "educational-nature-trip",
    title: "Valmikinagar Educational Nature Trip",
    subtitle: "1D 1 Day in Valmikinagar & Nepal Border Circuit",
    location: "Valmikinagar & Nepal Border",
    duration: "1 Day",
    minPeople: "Group Booking",
    price: 899,
    originalPrice: 1499,
    perPersonPrice: 899,
    rating: 4.8,
    reviews: 95,
    images: [
      "/images/package/school_group.png",
      "/images/destinations/paryatanam-valmikinagar-package.jpeg",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    ],
    description: "Discover the spiritual and natural charm of Valmikinagar and the nearby Nepal border region, where sacred temples, lush forests, and peaceful river landscapes create a truly enriching experience. Visit revered sites like Valmiki Ashram Dham, Maa Nardevi Temple, and Jatashankar Dham, Kawleshwar Dham followed by spiritual excursions to Triveni Dham and Gajendra Moksha Dham in Nepal. Along with spiritual exploration, enjoy refreshing experiences such as jungle safari, hanging bridge walks, Kawleshwar Jhula, Eco-Park and a calming riverside stroll along the Gandak River. This tour offers a perfect blend of devotion, nature, and relaxation in a short yet memorable journey.",
    highlights: [
      "Food",
      "Transport",
      "Jungle Safari",
      "Guide",
      "Sightseeing"
    ],
    inclusions: [
      "Pickup & drop as per itinerary",
      "Evening Snacks & Refreshments as per itinerary",
      "Meals Included – Lunch as per itinerary",
      "Transport Included",
      "Sightseeing Included",
      "Spiritual & cultural sightseeing: Maa Nardevi, Jatashankar, Kawaleshwar, Valmiki Ashram, Gandak Dam, Triveni Sangam, Gajendra Moksha, Seesh Mahal",
      "Boat Safari Included (Subject to local/govt regulations)",
      "Wild Jungle Safari Included (Subject to local/govt regulations)",
      "Kawalsher Jhula",
      "Hanging Bridge Nepal side",
      "Eco-Park visit",
      "Riverside walk along Gandak River"
    ],
    exclusions: [
      "Personal expenses such as shopping, tips, telephone calls, laundry, etc.",
      "Meals not mentioned under the Inclusions section",
      "Camera or video fees at sightseeing places (if applicable)",
      "Travel insurance",
      "GST and applicable taxes",
      "Bonfire expenses (if requested)",
      "Bus stop pickup and drop (only available at common group timing)",
      "Room service and restaurant expenses at the hotel",
      "Adventure activities or optional activities not mentioned in the itinerary",
      "Alcoholic beverages, soft drinks, mineral water, or other beverages",
      "Transport services apart from those mentioned in the itinerary",
      "Any costs arising due to unforeseen circumstances such as landslides, roadblocks, etc.",
      "Anything not specifically mentioned under 'Inclusions'"
    ],
    knowBeforeYouGo: [
      "Prices may vary during peak seasons, long weekends, and festivals.",
      "Valid government ID proof is mandatory for all travelers.",
      "Indian citizens should carry a valid ID for Nepal border visits.",
      "Timely reporting and punctual departures are important.",
      "Please avoid littering and respect nature in forest zones.",
      "Carry comfortable clothing, walking shoes, and sunscreen.",
      "Photography at religious sites may be restricted; follow guidelines.",
      "The itinerary may be modified due to weather or forest regulations."
    ],
    importantNote: "The itinerary may be modified due to weather conditions, forest regulations, or local circumstances for guest safety and a smooth travel experience.",
    itinerary: [
      {
        day: 1,
        title: "Educational Experience",
        schedule: [
          { time: "Morning", activity: "Pickup and Welcome" },
          { time: "Morning", activity: "Milk Tea / Milk Coffee" },
          { time: "Morning", activity: "Temple visits (Maa Nardevi, Jatashankar, Kawaleshwar, Valmiki Ashram Dham)" },
          { time: "Morning", activity: "Jungle Safari Experience" },
          { time: "Afternoon", activity: "Lunch (Veg/Non-Veg based on tier)" },
          { time: "Afternoon", activity: "Nepal Border Circuit: Triveni Dham, Seesh Mahal" },
          { time: "Evening", activity: "Hanging Bridge & Eco-Park" },
          { time: "Evening", activity: "Evening Snacks & Refreshments" },
          { time: "Sunset", activity: "Riverside Walk (Gandak River)" },
          { time: "Night", activity: "Return Drop" }
        ],
        inclusions: [
          "Transport & Sightseeing",
          "Lunch & Snacks",
          "Safari & Entry Tickets"
        ]
      }
    ],
    categoryId: "school-group",
    tierPrices: {
      standard: 899,
      value: 1099,
      premium: 1599,
      exclusive: 1999
    },
    tierDetails: {
      standard: [
        "Lunch (Veg)",
        "Washroom",
        "Comfortable 3-Wheeler Transport",
        "Local Tour Guide",
        "All Sightseeing Entry Tickets Included",
        "Exploring India (Local Valmikinagar)"
      ],
      value: [
        "Lunch (Veg)",
        "Washroom",
        "Comfortable 3-Wheeler Transport",
        "Local Tour Guide",
        "All Sightseeing Entry Tickets Included",
        "India – Nepal Border Visit Experience"
      ],
      premium: [
        "Lunch (Veg & Non-Veg Options)",
        "1 Rest Room Stop",
        "Comfortable 3-Wheeler Transport",
        "🐅 Valmikinagar Jungle Safari Experience",
        "🧭 Local Tour Guide",
        "🎟 All Sightseeing Entry Tickets Included",
        "🌏 India – Nepal Border Visit Experience"
      ],
      exclusive: [
        "Lunch (Veg & Non-Veg Options)",
        "2 Rest Room Stops",
        "🚙 Comfortable 4-Wheeler Transport",
        "🐅 Valmikinagar Jungle Safari Experience",
        "🧭 Local Tour Guide",
        "🎟 All Sightseeing Entry Tickets Included",
        "🍪 Evening Snacks & Refreshments",
        "🌏 India – Nepal Border Visit Experience"
      ]
    }
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
