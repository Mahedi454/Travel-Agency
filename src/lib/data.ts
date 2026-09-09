export type Destination = {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  tourCount: number;
  priceFrom: number;
};

export type Tour = {
  id: string;
  title: string;
  destination: string;
  destinationId: string;
  country: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  duration: number;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  difficulty: "Easy" | "Moderate" | "Challenging";
  category: string;
  includes: string[];
  startLocations: string[];
};

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  tourCount: number;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  trip: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
};

export type Offer = {
  id: string;
  title: string;
  destination: string;
  image: string;
  oldPrice: number;
  price: number;
  discount: number;
  deadline: string;
};

export const destinations: Destination[] = [
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    description: "White-washed villages perched on volcanic cliffs above the Aegean.",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1200&q=80",
    tourCount: 24,
    priceFrom: 1290,
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    description: "Emerald rice terraces, temple rituals and tropical beaches.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    tourCount: 31,
    priceFrom: 980,
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Indian Ocean",
    description: "Overwater villas and crystal lagoons made for pure escape.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    tourCount: 18,
    priceFrom: 2490,
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    description: "The romance of the Seine, museums and café culture.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    tourCount: 27,
    priceFrom: 840,
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    description: "Ancient shrines, tea houses and seasonal gardens.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    tourCount: 22,
    priceFrom: 1780,
  },
  {
    id: "interlaken",
    name: "Interlaken",
    country: "Switzerland",
    description: "Alpine peaks, turquoise lakes and adventure trails.",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    tourCount: 16,
    priceFrom: 1450,
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    description: "Futuristic skylines, desert safaris and luxury living.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    tourCount: 19,
    priceFrom: 1100,
  },
  {
    id: "banff",
    name: "Banff",
    country: "Canada",
    description: "Glacier-fed lakes and dramatic mountain wilderness.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    tourCount: 14,
    priceFrom: 1620,
  },
];

export const categories: Category[] = [
  {
    id: "adventure",
    name: "Adventure",
    description: "Hiking, rafting, climbing and adrenaline.",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80",
    icon: "mountain",
    tourCount: 128,
  },
  {
    id: "family",
    name: "Family",
    description: "Kid-approved itineraries for all ages.",
    image:
      "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=900&q=80",
    icon: "users",
    tourCount: 96,
  },
  {
    id: "honeymoon",
    name: "Honeymoon",
    description: "Romantic escapes for two.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80",
    icon: "heart",
    tourCount: 74,
  },
  {
    id: "beach",
    name: "Beach",
    description: "Sun, sand and slow living.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80",
    icon: "waves",
    tourCount: 152,
  },
  {
    id: "cultural",
    name: "Cultural",
    description: "History, heritage and local traditions.",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=900&q=80",
    icon: "landmark",
    tourCount: 110,
  },
  {
    id: "luxury",
    name: "Luxury",
    description: "Five-star stays and private experiences.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
    icon: "gem",
    tourCount: 62,
  },
];

export const tours: Tour[] = [
  {
    id: "santorini-sunset",
    title: "Santorini Sunset Escape",
    destination: "Santorini",
    destinationId: "santorini",
    country: "Greece",
    description:
      "Sail the caldera, wander Oia's cliffs and watch the famous Aegean sunset from a private terrace.",
    longDescription:
      "Begin your Greek island story aboard a private catamaran cruising the volcanic caldera, swim in the hot springs, then settle into Oia as the sky turns gold. Dine cliffside with caldera views and explore traditional villages away from the crowds.",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    ],
    duration: 7,
    price: 1290,
    oldPrice: 1590,
    rating: 4.9,
    reviews: 342,
    difficulty: "Easy",
    category: "Honeymoon",
    includes: ["Flights", "5-star hotels", "Private catamaran", "Breakfast daily"],
    startLocations: ["Athens", "Santorini"],
  },
  {
    id: "bali-temple-trail",
    title: "Bali Temple & Rice Terrace Trail",
    destination: "Bali",
    destinationId: "bali",
    country: "Indonesia",
    description:
      "From Ubud's jungles to Uluwatu's cliffs, experience the island of gods in perfect balance.",
    longDescription:
      "Wake to the sound of gamelan in Ubud, trek emerald rice terraces at sunrise, and visit centuries-old water temples. End each day with beachfront dining on the Bukit Peninsula.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
    ],
    duration: 9,
    price: 980,
    oldPrice: 1180,
    rating: 4.8,
    reviews: 287,
    difficulty: "Moderate",
    category: "Cultural",
    includes: ["Flights", "Resort stays", "Temple guides", "Daily breakfast"],
    startLocations: ["Denpasar"],
  },
  {
    id: "maldives-overwater",
    title: "Maldives Overwater Romance",
    destination: "Maldives",
    destinationId: "maldives",
    country: "Indian Ocean",
    description:
      "Wake to the lagoon in your own overwater villa. Snorkel house reefs and dine by starlight.",
    longDescription:
      "Step off your private deck straight into warm turquoise water. Snorkel house reefs teeming with life, enjoy spa rituals over the lagoon, and toast the sunset from your jetty.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1200&q=80",
    ],
    duration: 6,
    price: 2490,
    rating: 4.9,
    reviews: 198,
    difficulty: "Easy",
    category: "Luxury",
    includes: ["Seaplane transfer", "Overwater villa", "All-inclusive dining", "Spa credit"],
    startLocations: ["Male"],
  },
  {
    id: "paris-cultural",
    title: "Paris Art & Culture Week",
    destination: "Paris",
    destinationId: "paris",
    country: "France",
    description:
      "Skip-the-line Louvre, Seine dinner cruise, Montmartre strolls and a day in Versailles.",
    longDescription:
      "Live like a Parisian with guided museum mornings, neighbourhood food walks and an evening cruise beneath the Seine's bridges. Includes a full day at the palace of Versailles.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
    ],
    duration: 5,
    price: 840,
    oldPrice: 940,
    rating: 4.7,
    reviews: 421,
    difficulty: "Easy",
    category: "Cultural",
    includes: ["Flights", "Central hotel", "Museum passes", "Seine cruise"],
    startLocations: ["Paris"],
  },
  {
    id: "kyoto-heritage",
    title: "Kyoto Heritage & Gardens",
    destination: "Kyoto",
    destinationId: "kyoto",
    country: "Japan",
    description:
      "Golden Pavilion, Fushimi Inari's gates, tea ceremony and a stay in a traditional ryokan.",
    longDescription:
      "Immerse yourself in the soul of old Japan — moss gardens, geisha districts and 10,000 torii gates. Experience an authentic tea ceremony led by a local master.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1200&q=80",
    ],
    duration: 8,
    price: 1780,
    rating: 4.8,
    reviews: 264,
    difficulty: "Moderate",
    category: "Cultural",
    includes: ["Flights", "Ryokan stays", "Rail pass", "Tea ceremony"],
    startLocations: ["Osaka", "Kyoto"],
  },
  {
    id: "alpine-adventure",
    title: "Swiss Alps Adventure",
    destination: "Interlaken",
    destinationId: "interlaken",
    country: "Switzerland",
    description:
      "Paragliding over the valley, train to Jungfraujoch and hiking the Eiger trail.",
    longDescription:
      "Feel the rush of the Alps with white-water rafting, parasailing over turquoise lakes and the journey to the Top of Europe aboard the Bernese Oberland railway.",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    ],
    duration: 7,
    price: 1450,
    oldPrice: 1790,
    rating: 4.9,
    reviews: 156,
    difficulty: "Challenging",
    category: "Adventure",
    includes: ["Flights", "Alpine hotels", "Adventure passes", "Train transfers"],
    startLocations: ["Zurich", "Geneva"],
  },
  {
    id: "dubai-luxury",
    title: "Dubai Desert & Skyline",
    destination: "Dubai",
    destinationId: "dubai",
    country: "UAE",
    description:
      "Burj Khalifa at dusk, dune safari, private yacht cruise and souk discoveries.",
    longDescription:
      "Glide past the Marina on a private yacht, camp beneath desert stars with a safari dinner, and take in the skyline from the world's tallest building.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80",
    ],
    duration: 5,
    price: 1100,
    rating: 4.7,
    reviews: 189,
    difficulty: "Easy",
    category: "Luxury",
    includes: ["Flights", "5-star hotel", "Desert safari", "Yacht cruise"],
    startLocations: ["Dubai"],
  },
  {
    id: "banff-wilderness",
    title: "Banff Wilderness Explorer",
    destination: "Banff",
    destinationId: "banff",
    country: "Canada",
    description:
      "Lake Louise canoe, Icefields Parkway drive and mountain lodge stays.",
    longDescription:
      "Canoe the mirror-still waters of Lake Louise, drive the Icefields Parkway past glaciers and keep an eye out for wildlife on guided forest walks.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    ],
    duration: 6,
    price: 1620,
    rating: 4.8,
    reviews: 143,
    difficulty: "Moderate",
    category: "Adventure",
    includes: ["Flights", "Mountain lodges", "Icefield coach", "Park passes"],
    startLocations: ["Calgary"],
  },
  {
    id: "rome-antico",
    title: "Rome Antico Immersion",
    destination: "Rome",
    destinationId: "rome",
    country: "Italy",
    description:
      "Colosseum, Vatican, Trastevere food tour and a day trip to Tivoli.",
    longDescription:
      "Walk 2,000 years of history — from gladiator arenas to Renaissance masterpieces — then taste your way through the eternal city on a curated food tour.",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    ],
    duration: 5,
    price: 920,
    oldPrice: 1080,
    rating: 4.8,
    reviews: 378,
    difficulty: "Easy",
    category: "Cultural",
    includes: ["Flights", "Historic hotel", "Guided skip-the-line", "Food tour"],
    startLocations: ["Rome"],
  },
  {
    id: "iceland-northern-lights",
    title: "Iceland Northern Lights",
    destination: "Reykjavík",
    destinationId: "iceland",
    country: "Iceland",
    description:
      "Golden Circle, glacial lagoons, waterfalls and aurora-chasing nights.",
    longDescription:
      "Chase the aurora from hot springs and black-sand beaches, explore the Golden Circle's geysers and waterfalls, and walk between tectonic plates.",
    image:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
    ],
    duration: 6,
    price: 1980,
    rating: 4.7,
    reviews: 121,
    difficulty: "Challenging",
    category: "Adventure",
    includes: ["Flights", "Lodge stays", "Northern lights tour", "4x4 transfers"],
    startLocations: ["Reykjavík"],
  },
  {
    id: "machu-picchu",
    title: "Machu Picchu Expedition",
    destination: "Sacred Valley",
    destinationId: "peru",
    country: "Peru",
    description:
      "Cusco, the Inca Trail highlights and sunrise at the Lost City.",
    longDescription:
      "Acclimatise in Cusco, explore the Sacred Valley's Inca fortresses, then arrive at Machu Picchu as the morning mist clears over the ancient citadel.",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    ],
    duration: 8,
    price: 1890,
    rating: 4.9,
    reviews: 214,
    difficulty: "Challenging",
    category: "Adventure",
    includes: ["Flights", "Hotel + lodge", "Train tickets", "Guided tours"],
    startLocations: ["Lima", "Cusco"],
  },
  {
    id: "morocco-sahara",
    title: "Morocco Sahara Caravan",
    destination: "Marrakech",
    destinationId: "morocco",
    country: "Morocco",
    description:
      "Marrakech medina, Atlas Mountains, camel trek and desert camp nights.",
    longDescription:
      "Lose yourself in the souks of Marrakech, cross the High Atlas, and ride camels into the golden Sahara for a night under the stars in a Berber camp.",
    image:
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1200&q=80",
    ],
    duration: 7,
    price: 860,
    oldPrice: 990,
    rating: 4.7,
    reviews: 167,
    difficulty: "Moderate",
    category: "Adventure",
    includes: ["Flights", "Riads + desert camp", "Camel trek", "4x4 transfers"],
    startLocations: ["Marrakech"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sophie Laurent",
    role: "Marketing Director",
    location: "Paris, France",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "Travelia handled every detail flawlessly. Our Santorini honeymoon felt effortless — every transfer, every reservation was perfect. We simply showed up and lived the dream.",
    trip: "Santorini Honeymoon",
  },
  {
    id: "t2",
    name: "James Whitfield",
    role: "Product Manager",
    location: "London, UK",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "The Bali itinerary was brilliantly balanced — adventure in the morning, temple culture by noon, beach relaxation in the afternoon. Our guide made the whole island come alive.",
    trip: "Bali Temple Trail",
  },
  {
    id: "t3",
    name: "Amara Osei",
    role: "Freelance Designer",
    location: "Berlin, Germany",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 4.5,
    text: "Booking was genuinely enjoyable. Clear pricing, honest recommendations, and a support team that answered my late-night questions before our Kyoto trip. Highly recommended.",
    trip: "Kyoto Heritage",
  },
  {
    id: "t4",
    name: "Carlos Mendes",
    role: "Entrepreneur",
    location: "Lisbon, Portugal",
    avatar: "https://i.pravatar.cc/150?img=68",
    rating: 5,
    text: "We've travelled on four continents with Travelia. The consistency is what keeps us coming back — premium hotels, smart local guides and itineraries that just make sense.",
    trip: "Swiss Alps Adventure",
  },
  {
    id: "t5",
    name: "Yuki Tanaka",
    role: "Photographer",
    location: "Tokyo, Japan",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 4.5,
    text: "The Maldives overwater villa exceeded every photo I'd seen. Transfers were seamless, staff remembered our names, and the house reef snorkelling was unreal.",
    trip: "Maldives Overwater",
  },
  {
    id: "t6",
    name: "Emma Richardson",
    role: "Teacher",
    location: "Melbourne, Australia",
    avatar: "https://i.pravatar.cc/150?img=25",
    rating: 5,
    text: "Travelling as a family is never easy, but Travelia's children's activities and flexible pace meant my kids are still talking about the rice paddies in Bali a year later.",
    trip: "Bali Family Adventure",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "The Perfect Week in Santorini: A Local's Itinerary",
    excerpt:
      "From caldera sunrise hikes to hidden wine villages, here's how to spend seven unforgettable days on the Greek island's cliff-lined coast.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    category: "Destination guides",
    date: "March 12, 2026",
    readTime: "8 min read",
    author: "Elena Papadakis",
  },
  {
    id: "b2",
    title: "10 Hidden Gems in Bali Most Tourists Miss",
    excerpt:
      "Skip the crowded viewpoints. These secret beaches, waterfalls and temple trails reward the travellers who venture just a little further.",
    image:
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    category: "Travel tips",
    date: "February 28, 2026",
    readTime: "6 min read",
    author: "Made Wijaya",
  },
  {
    id: "b3",
    title: "How to Chase the Northern Lights in 2026",
    excerpt:
      "Aurora season is here. We break down when to go, where to stay and how to photograph the sky's most dazzling natural show.",
    image:
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
    category: "Guides",
    date: "February 10, 2026",
    readTime: "10 min read",
    author: "Hannes Lindqvist",
  },
  {
    id: "b4",
    title: "Luxury on a Budget: Where Your Money Goes Furthest",
    excerpt:
      "You don't need a seven-figure budget for a five-star escape. These destinations deliver world-class stays for a fraction of the price.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    category: "Travel tips",
    date: "January 24, 2026",
    readTime: "7 min read",
    author: "Sofia Marchetti",
  },
];

export const offers: Offer[] = [
  {
    id: "o1",
    title: "Tuscany Harvest Escape",
    destination: "Florence, Italy",
    image:
      "https://images.unsplash.com/photo-1559666126-84f389727d9a?auto=format&fit=crop&w=1200&q=80",
    oldPrice: 2450,
    price: 1690,
    discount: 31,
    deadline: "Book by March 31",
  },
  {
    id: "o2",
    title: "Machu Picchu Sunrise Trek",
    destination: "Cusco, Peru",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    oldPrice: 2190,
    price: 1590,
    discount: 27,
    deadline: "Book by April 10",
  },
  {
    id: "o3",
    title: "Safari Serengeti Journey",
    destination: "Serengeti, Tanzania",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    oldPrice: 3200,
    price: 2390,
    discount: 25,
    deadline: "Book by April 30",
  },
];

export const stats = [
  { value: "120K+", label: "Happy travelers", icon: "users" },
  { value: "480+", label: "Destinations", icon: "map" },
  { value: "35", label: "Countries", icon: "globe" },
  { value: "4.9/5", label: "Average rating", icon: "star" },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    alt: "The Eiffel Tower at golden hour in Paris",
    location: "Paris, France",
  },
  {
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    alt: "Sacred monkey forest of Bali at sunrise",
    location: "Bali, Indonesia",
  },
  {
    src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    alt: "Turquoise lagoon of the Maldives",
    location: "Maldives",
  },
  {
    src: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    alt: "Snow-capped peaks above Interlaken",
    location: "Interlaken, Switzerland",
  },
  {
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    alt: "Autumn foliage at the Golden Pavilion",
    location: "Kyoto, Japan",
  },
  {
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    alt: "The Colosseum glowing in Roman sunlight",
    location: "Rome, Italy",
  },
  {
    src: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1200&q=80",
    alt: "Whitewashed streets of Oia at dusk",
    location: "Santorini, Greece",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    alt: "Emerald Lake Louise in the Canadian Rockies",
    location: "Banff, Canada",
  },
  {
    src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
    alt: "Aurora borealis rippling over Iceland",
    location: "Iceland",
  },
];

export function formatPrice(value: number): string {
  return `$${value.toLocaleString("en-US")}`;
}