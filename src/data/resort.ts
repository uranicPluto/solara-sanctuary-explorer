import villaOcean from "@/assets/villa-ocean.jpg";
import villaBeach from "@/assets/villa-beach.jpg";
import villaSunset from "@/assets/villa-sunset.jpg";
import villaResidence from "@/assets/villa-residence.jpg";
import diningAura from "@/assets/dining-aura.jpg";
import diningTide from "@/assets/dining-tide.jpg";
import diningSol from "@/assets/dining-sol.jpg";
import diningNocturne from "@/assets/dining-nocturne.jpg";
import wellnessSpa from "@/assets/wellness-spa.jpg";
import experienceOcean from "@/assets/experience-ocean.jpg";
import experienceNature from "@/assets/experience-nature.jpg";
import sunsetCta from "@/assets/sunset-cta.jpg";

export type Villa = {
  slug: string;
  name: string;
  category: "Ocean Villas" | "Beach Residences" | "Sunset Suites" | "Private Residences";
  tagline: string;
  description: string;
  image: string;
  price: number;
  guests: number;
  bedrooms: number;
  size: number;
  view: "Ocean" | "Beach" | "Sunset" | "Jungle";
  privatePool: boolean;
  beachAccess: boolean;
  amenities: string[];
  location: { x: number; y: number };
  distanceToBeach: string;
  distanceToDining: string;
};

export const villas: Villa[] = [
  {
    slug: "ocean-villa",
    name: "Ocean Villa",
    category: "Ocean Villas",
    tagline: "Suspended above the reef, open on every side.",
    description:
      "A single-bedroom overwater sanctuary reached by a private timber walkway. Louvred walls fold away completely, leaving nothing between the bed and the water. Steps descend from the deck directly into the lagoon.",
    image: villaOcean,
    price: 1450,
    guests: 2,
    bedrooms: 1,
    size: 165,
    view: "Ocean",
    privatePool: true,
    beachAccess: false,
    amenities: [
      "Private plunge pool",
      "Lagoon access steps",
      "Outdoor rain shower",
      "Personal host",
      "Daybed pavilion",
      "In-villa dining",
    ],
    location: { x: 74, y: 58 },
    distanceToBeach: "3 min walk",
    distanceToDining: "6 min walk",
  },
  {
    slug: "beach-residence",
    name: "Beach Residence",
    category: "Beach Residences",
    tagline: "Your own stretch of sand, and no one else's.",
    description:
      "Set behind a screen of sea almond trees, the Beach Residence opens onto a private length of shoreline. A long pool runs the width of the terrace, ending where the sand begins.",
    image: villaBeach,
    price: 1980,
    guests: 4,
    bedrooms: 2,
    size: 240,
    view: "Beach",
    privatePool: true,
    beachAccess: true,
    amenities: [
      "Private beach frontage",
      "20m lap pool",
      "Outdoor kitchen",
      "Personal host",
      "Bicycles",
      "Sunset cabana",
    ],
    location: { x: 30, y: 46 },
    distanceToBeach: "On the beach",
    distanceToDining: "9 min walk",
  },
  {
    slug: "sunset-suite",
    name: "Sunset Suite",
    category: "Sunset Suites",
    tagline: "Built for the last hour of light.",
    description:
      "Raised into the treeline on the island's western edge, each Sunset Suite is oriented to a single view. The deck is deep enough to lose an evening on, with a soaking tub set at the rail.",
    image: villaSunset,
    price: 1120,
    guests: 2,
    bedrooms: 1,
    size: 130,
    view: "Sunset",
    privatePool: false,
    beachAccess: false,
    amenities: [
      "Elevated sunset deck",
      "Outdoor soaking tub",
      "Hammock terrace",
      "Personal host",
      "Sunset apéritif service",
    ],
    location: { x: 20, y: 66 },
    distanceToBeach: "5 min walk",
    distanceToDining: "4 min walk",
  },
  {
    slug: "private-residence",
    name: "Private Residence",
    category: "Private Residences",
    tagline: "A house on the island, staffed and entirely yours.",
    description:
      "Three bedrooms arranged around a courtyard pool, deep in the jungle interior with its own path to the shore. Comes with a resident chef, house manager and vehicle.",
    image: villaResidence,
    price: 3650,
    guests: 6,
    bedrooms: 3,
    size: 520,
    view: "Jungle",
    privatePool: true,
    beachAccess: true,
    amenities: [
      "Resident chef",
      "House manager",
      "Courtyard pool",
      "Private garden",
      "Cinema pavilion",
      "Electric buggy",
    ],
    location: { x: 52, y: 30 },
    distanceToBeach: "2 min walk",
    distanceToDining: "12 min drive",
  },
];

export type Restaurant = {
  slug: string;
  name: string;
  cuisine: string;
  summary: string;
  description: string;
  image: string;
  hours: string;
  location: string;
  chef: string;
  signatures: string[];
};

export const restaurants: Restaurant[] = [
  {
    slug: "aura",
    name: "AURA",
    cuisine: "Contemporary fine dining",
    summary: "Fine dining overlooking the ocean.",
    description:
      "Twelve tables on a cantilevered deck, a tasting menu that changes with the boats, and a cellar cut into the rock below. Dinner at AURA is a four-hour evening.",
    image: diningAura,
    hours: "19:00 – 23:00, Tuesday to Sunday",
    location: "East Point",
    chef: "Chef Rafael Oduya",
    signatures: ["Line-caught kingfish, green mango", "Coconut and pandan custard", "Reef salt bread"],
  },
  {
    slug: "tide",
    name: "TIDE",
    cuisine: "Coastal seafood",
    summary: "Fresh seafood and coastal cuisine.",
    description:
      "Barefoot, unhurried, and built around whatever the morning boats bring in. Tables sit directly on the sand under woven lanterns.",
    image: diningTide,
    hours: "12:00 – 22:00, daily",
    location: "Main Beach",
    chef: "Chef Amara Silva",
    signatures: ["Whole grilled snapper", "Charred octopus, burnt lime", "Reef prawn broth"],
  },
  {
    slug: "sol",
    name: "SOL",
    cuisine: "Mediterranean",
    summary: "All-day Mediterranean-inspired dining.",
    description:
      "An ivory pavilion of arches and olive trees. Long breakfasts, slow lunches, and a wood oven that runs from morning until late.",
    image: diningSol,
    hours: "06:30 – 22:30, daily",
    location: "Resort Centre",
    chef: "Chef Elias Marchetti",
    signatures: ["Wood-oven flatbreads", "Island citrus salad", "Saffron seafood rice"],
  },
  {
    slug: "nocturne",
    name: "NOCTURNE",
    cuisine: "Cocktails & small plates",
    summary: "Cocktails, music, and sunset evenings.",
    description:
      "Dark timber, bronze light, a vinyl wall and a bartender who remembers. The island's late hours happen here.",
    image: diningNocturne,
    hours: "17:00 – late, daily",
    location: "West Deck",
    chef: "Head Bartender Nia Okonjo",
    signatures: ["Smoked coconut old fashioned", "Sea grape spritz", "Salt-cured tuna toast"],
  },
];

export type Treatment = {
  slug: string;
  name: string;
  category: "Massage" | "Facial" | "Body Ritual" | "Couples" | "Wellness Journey";
  duration: number;
  price: number;
  description: string;
};

export const treatments: Treatment[] = [
  {
    slug: "ocean-massage",
    name: "Ocean Massage",
    category: "Massage",
    duration: 90,
    price: 240,
    description: "Slow deep-tissue work with warm coconut oil, performed to the sound of the reef.",
  },
  {
    slug: "island-facial",
    name: "Island Botanical Facial",
    category: "Facial",
    duration: 60,
    price: 190,
    description: "Cold-pressed island botanicals, lymphatic massage and a marine clay finish.",
  },
  {
    slug: "salt-ritual",
    name: "Reef Salt Body Ritual",
    category: "Body Ritual",
    duration: 120,
    price: 320,
    description: "Hand-harvested salt polish, monsoon shower and a long wrap in the stone pavilion.",
  },
  {
    slug: "two-hands",
    name: "Two Hands, Two Hearts",
    category: "Couples",
    duration: 120,
    price: 520,
    description: "A private couples suite, side-by-side treatment and a bath drawn with frangipani.",
  },
  {
    slug: "restore-journey",
    name: "The Restore Journey",
    category: "Wellness Journey",
    duration: 240,
    price: 780,
    description: "A half-day sequence of breathwork, massage, hydrotherapy and a private lunch.",
  },
];

export const therapists = [
  "No preference",
  "Ines — deep tissue",
  "Malik — therapeutic",
  "Sora — energy & breath",
  "Yuki — facial specialist",
];

export const spaAddOns = [
  { id: "champagne", label: "Champagne service", price: 85 },
  { id: "suite", label: "Private spa suite", price: 140 },
  { id: "couples", label: "Couples upgrade", price: 180 },
  { id: "aroma", label: "Aromatherapy blend", price: 45 },
];

export type Experience = {
  slug: string;
  name: string;
  category: "Ocean" | "Nature" | "Adventure" | "Culture";
  summary: string;
  description: string;
  image: string;
  duration: string;
  difficulty: "Gentle" | "Moderate" | "Active";
  price: number;
  groupSize: string;
  location: string;
  bring: string[];
};

export const experiences: Experience[] = [
  {
    slug: "reef-diving",
    name: "Reef Diving",
    category: "Ocean",
    summary: "Descend into the outer reef with a private divemaster.",
    description:
      "The outer wall drops away eighteen metres from the mooring. Two tanks, one divemaster, a maximum of four guests. Certification available on the island.",
    image: experienceOcean,
    duration: "3 hours",
    difficulty: "Moderate",
    price: 260,
    groupSize: "Up to 4 guests",
    location: "North Reef",
    bring: ["Swimwear", "Certification card", "Reef-safe sunscreen"],
  },
  {
    slug: "sunset-sailing",
    name: "Sunset Sailing",
    category: "Ocean",
    summary: "A traditional rigged yacht, the last hour of light, and nowhere to be.",
    description:
      "We leave the marina ninety minutes before sunset and return under stars. Champagne, oysters, and a crew who stay out of your way.",
    image: sunsetCta,
    duration: "2.5 hours",
    difficulty: "Gentle",
    price: 340,
    groupSize: "Up to 8 guests",
    location: "Marina",
    bring: ["Light layer", "Soft-soled shoes"],
  },
  {
    slug: "jungle-expedition",
    name: "Jungle Expedition",
    category: "Nature",
    summary: "Walk the island's interior with a resident naturalist.",
    description:
      "A guided ascent through the island's oldest growth to the waterfall pools at the ridge, with an hour to swim before the descent.",
    image: experienceNature,
    duration: "4 hours",
    difficulty: "Active",
    price: 180,
    groupSize: "Up to 6 guests",
    location: "Interior Ridge",
    bring: ["Trail shoes", "Swimwear", "Water bottle"],
  },
  {
    slug: "island-kitchen",
    name: "The Island Kitchen",
    category: "Culture",
    summary: "Cook the island's own food with a local family.",
    description:
      "Morning at the mainland market, an afternoon of coconut, chilli and slow fire, and a table shared with the people who taught us.",
    image: diningSol,
    duration: "5 hours",
    difficulty: "Gentle",
    price: 210,
    groupSize: "Up to 8 guests",
    location: "Mainland Village",
    bring: ["Appetite", "Sun hat"],
  },
];

export const experienceCategories = [
  {
    name: "Ocean",
    items: ["Scuba diving", "Snorkelling", "Private yacht", "Sailing", "Sunset cruise"],
    image: experienceOcean,
  },
  {
    name: "Nature",
    items: ["Jungle expedition", "Wildlife tracking", "Ridge hiking", "Botanical tour"],
    image: experienceNature,
  },
  {
    name: "Adventure",
    items: ["Water sports", "Island exploration", "Deep-sea fishing", "Kayaking"],
    image: sunsetCta,
  },
  {
    name: "Culture",
    items: ["Local cuisine", "Island art", "Village markets", "Cultural evenings"],
    image: diningSol,
  },
];

export const bookableExtras = [
  { id: "spa", label: "Ocean Massage", price: 240 },
  { id: "dinner", label: "Private beach dinner", price: 420 },
  { id: "transfer", label: "Seaplane transfer (return)", price: 780 },
  { id: "diving", label: "Reef diving, two tanks", price: 260 },
  { id: "sailing", label: "Sunset sailing", price: 340 },
  { id: "yoga", label: "Private yoga, five sessions", price: 300 },
];

export const offers = [
  {
    slug: "romantic-escape",
    name: "The Romantic Escape",
    nights: 3,
    image: villaSunset,
    includes: ["Private villa", "Couples spa ritual", "Sunset dinner for two", "Late checkout"],
  },
  {
    slug: "wellness-retreat",
    name: "The Wellness Retreat",
    nights: 5,
    image: wellnessSpa,
    includes: ["Daily yoga", "Three spa treatments", "Wellness dining", "Breathwork sessions"],
  },
  {
    slug: "the-explorer",
    name: "The Explorer",
    nights: 7,
    image: experienceOcean,
    includes: ["Reef diving", "Sunset sailing", "Jungle expedition", "Island guide"],
  },
];

export const testimonials = [
  {
    quote: "For five days, the rest of the world simply disappeared.",
    name: "Camille R.",
    country: "France",
    stay: "Ocean Villa",
    rating: 5,
  },
  {
    quote:
      "We have stayed everywhere. Nothing has ever remembered how we take our coffee on the second morning.",
    name: "David & Aiko M.",
    country: "Japan",
    stay: "Beach Residence",
    rating: 5,
  },
  {
    quote: "The sailing crew found us a reef nobody else was on. I still think about that water.",
    name: "Tomás L.",
    country: "Chile",
    stay: "Sunset Suite",
    rating: 5,
  },
  {
    quote: "I arrived exhausted. By the third morning I was waking up before the alarm, happily.",
    name: "Priya N.",
    country: "Singapore",
    stay: "Sunset Suite",
    rating: 5,
  },
  {
    quote: "Six of us, one house, one chef. The best week our family has had in a decade.",
    name: "The Ellinger Family",
    country: "Germany",
    stay: "Private Residence",
    rating: 5,
  },
];

export const dayAtSolara = [
  { time: "06:30", title: "Wake with the ocean.", note: "Light arrives before sound." },
  { time: "07:30", title: "Sunrise yoga.", note: "On the east deck, barefoot." },
  { time: "09:00", title: "Breakfast by the water.", note: "Island fruit, slow coffee." },
  { time: "11:00", title: "Explore the reef.", note: "Twelve minutes out by boat." },
  { time: "14:00", title: "Poolside afternoon.", note: "Nothing scheduled. On purpose." },
  { time: "17:45", title: "Sunset sailing.", note: "Back under the first stars." },
  { time: "20:00", title: "Dinner under the stars.", note: "A table set on the sand." },
];

export const ritualOptions = [
  "Relax",
  "Recharge",
  "Reconnect",
  "Restore",
  "Sleep",
  "Explore",
] as const;

export type RitualIntent = (typeof ritualOptions)[number];

export const rituals: Record<RitualIntent, { time: string; label: string }[]> = {
  Relax: [
    { time: "08:30", label: "Breakfast in the villa" },
    { time: "10:30", label: "Reef salt body ritual" },
    { time: "13:00", label: "Lunch at TIDE" },
    { time: "16:00", label: "Hammock terrace, no plans" },
    { time: "19:30", label: "Dinner at SOL" },
  ],
  Recharge: [
    { time: "06:45", label: "Ocean swim" },
    { time: "07:30", label: "Strength session with a trainer" },
    { time: "09:30", label: "Protein breakfast, west pavilion" },
    { time: "15:00", label: "Deep-tissue massage" },
    { time: "18:00", label: "Sea grape spritz at NOCTURNE" },
  ],
  Reconnect: [
    { time: "09:00", label: "Breakfast on the sand" },
    { time: "11:00", label: "Two Hands, Two Hearts couples ritual" },
    { time: "15:00", label: "Private snorkel with a guide" },
    { time: "17:45", label: "Sunset sailing" },
    { time: "20:30", label: "Private beach dinner" },
  ],
  Restore: [
    { time: "07:30", label: "Sunrise yoga" },
    { time: "09:00", label: "Breakfast" },
    { time: "11:00", label: "Ocean massage" },
    { time: "14:00", label: "Private pool" },
    { time: "18:30", label: "Sunset meditation" },
  ],
  Sleep: [
    { time: "16:00", label: "Restorative yin session" },
    { time: "18:00", label: "Magnesium bath drawn in the villa" },
    { time: "19:00", label: "Light dinner, no caffeine" },
    { time: "21:00", label: "Breathwork for sleep" },
    { time: "21:45", label: "Turndown with island tea" },
  ],
  Explore: [
    { time: "07:00", label: "Breakfast to go" },
    { time: "08:00", label: "Reef diving, two tanks" },
    { time: "12:30", label: "Lunch on the boat" },
    { time: "15:00", label: "Jungle ridge walk" },
    { time: "20:00", label: "Dinner at AURA" },
  ],
};

export const mapLocations = [
  { id: "reception", name: "Arrival Pavilion", x: 48, y: 20, blurb: "Where the boat leaves you." },
  { id: "ocean-villas", name: "Ocean Villas", x: 74, y: 58, blurb: "Overwater, on the reef edge." },
  { id: "beach", name: "Main Beach", x: 40, y: 62, blurb: "Nine hundred metres of white sand." },
  { id: "aura", name: "AURA", x: 80, y: 34, blurb: "Fine dining at East Point." },
  { id: "spa", name: "SOLARA Wellness", x: 58, y: 46, blurb: "Stone pavilions in the palm grove." },
  { id: "marina", name: "Marina", x: 24, y: 30, blurb: "Sailing, diving and the seaplane dock." },
  { id: "pool", name: "Horizon Pool", x: 52, y: 68, blurb: "Fifty metres, facing west." },
  { id: "residences", name: "Private Residences", x: 52, y: 30, blurb: "Deep in the interior." },
];

export const stats = [
  { value: 24, suffix: "", label: "Private Villas" },
  { value: 7, suffix: "", label: "Dining Experiences" },
  { value: 12, suffix: "", label: "Signature Wellness Rituals" },
  { value: 40, suffix: "+", label: "Island Experiences" },
  { value: 365, suffix: "", label: "Days of Summer" },
];

export const images = {
  villaOcean,
  villaBeach,
  villaSunset,
  villaResidence,
  diningAura,
  diningTide,
  diningSol,
  diningNocturne,
  wellnessSpa,
  experienceOcean,
  experienceNature,
  sunsetCta,
};
