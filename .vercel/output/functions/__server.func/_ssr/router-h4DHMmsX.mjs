import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-dm4ECYnf.mjs";
import { a as require_react, i as require_jsx_runtime, n as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { A as redirect, N as notFound, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Search, n as User, r as Shield, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as __exportAll } from "./server-CMz1GsQX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resort-SkV4dKWp.js
var villa_ocean_default = "/assets/villa-ocean-Yq2tiiQs.jpg";
var villa_beach_default = "/assets/villa-beach-CYpx-qru.jpg";
var villa_sunset_default = "/assets/villa-sunset-B1SWPg4N.jpg";
var villa_residence_default = "/assets/villa-residence-DxZeiBcL.jpg";
var dining_aura_default = "/assets/dining-aura-D0tgfiUD.jpg";
var dining_tide_default = "/assets/dining-tide-CS19YzxA.jpg";
var dining_sol_default = "/assets/dining-sol-CnokM_8M.jpg";
var dining_nocturne_default = "/assets/dining-nocturne-Dip6CtBR.jpg";
var wellness_spa_default = "/assets/wellness-spa-CsfmDXn0.jpg";
var experience_ocean_default = "/assets/experience-ocean-DPIVJ90N.jpg";
var experience_nature_default = "/assets/experience-nature-BxcNY6iS.jpg";
var sunset_cta_default = "/assets/sunset-cta-_mWcsfzd.jpg";
var villas = [
	{
		slug: "ocean-villa",
		name: "Ocean Villa",
		category: "Ocean Villas",
		tagline: "Suspended above the reef, open on every side.",
		description: "A single-bedroom overwater sanctuary reached by a private timber walkway. Louvred walls fold away completely, leaving nothing between the bed and the water. Steps descend from the deck directly into the lagoon.",
		image: villa_ocean_default,
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
			"In-villa dining"
		],
		location: {
			x: 74,
			y: 58
		},
		distanceToBeach: "3 min walk",
		distanceToDining: "6 min walk"
	},
	{
		slug: "beach-residence",
		name: "Beach Residence",
		category: "Beach Residences",
		tagline: "Your own stretch of sand, and no one else's.",
		description: "Set behind a screen of sea almond trees, the Beach Residence opens onto a private length of shoreline. A long pool runs the width of the terrace, ending where the sand begins.",
		image: villa_beach_default,
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
			"Sunset cabana"
		],
		location: {
			x: 30,
			y: 46
		},
		distanceToBeach: "On the beach",
		distanceToDining: "9 min walk"
	},
	{
		slug: "sunset-suite",
		name: "Sunset Suite",
		category: "Sunset Suites",
		tagline: "Built for the last hour of light.",
		description: "Raised into the treeline on the island's western edge, each Sunset Suite is oriented to a single view. The deck is deep enough to lose an evening on, with a soaking tub set at the rail.",
		image: villa_sunset_default,
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
			"Sunset apéritif service"
		],
		location: {
			x: 20,
			y: 66
		},
		distanceToBeach: "5 min walk",
		distanceToDining: "4 min walk"
	},
	{
		slug: "private-residence",
		name: "Private Residence",
		category: "Private Residences",
		tagline: "A house on the island, staffed and entirely yours.",
		description: "Three bedrooms arranged around a courtyard pool, deep in the jungle interior with its own path to the shore. Comes with a resident chef, house manager and vehicle.",
		image: villa_residence_default,
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
			"Electric buggy"
		],
		location: {
			x: 52,
			y: 30
		},
		distanceToBeach: "2 min walk",
		distanceToDining: "12 min drive"
	}
];
var restaurants = [
	{
		slug: "aura",
		name: "AURA",
		cuisine: "Contemporary fine dining",
		summary: "Fine dining overlooking the ocean.",
		description: "Twelve tables on a cantilevered deck, a tasting menu that changes with the boats, and a cellar cut into the rock below. Dinner at AURA is a four-hour evening.",
		image: dining_aura_default,
		hours: "19:00 – 23:00, Tuesday to Sunday",
		location: "East Point",
		chef: "Chef Rafael Oduya",
		signatures: [
			"Line-caught kingfish, green mango",
			"Coconut and pandan custard",
			"Reef salt bread"
		]
	},
	{
		slug: "tide",
		name: "TIDE",
		cuisine: "Coastal seafood",
		summary: "Fresh seafood and coastal cuisine.",
		description: "Barefoot, unhurried, and built around whatever the morning boats bring in. Tables sit directly on the sand under woven lanterns.",
		image: dining_tide_default,
		hours: "12:00 – 22:00, daily",
		location: "Main Beach",
		chef: "Chef Amara Silva",
		signatures: [
			"Whole grilled snapper",
			"Charred octopus, burnt lime",
			"Reef prawn broth"
		]
	},
	{
		slug: "sol",
		name: "SOL",
		cuisine: "Mediterranean",
		summary: "All-day Mediterranean-inspired dining.",
		description: "An ivory pavilion of arches and olive trees. Long breakfasts, slow lunches, and a wood oven that runs from morning until late.",
		image: dining_sol_default,
		hours: "06:30 – 22:30, daily",
		location: "Resort Centre",
		chef: "Chef Elias Marchetti",
		signatures: [
			"Wood-oven flatbreads",
			"Island citrus salad",
			"Saffron seafood rice"
		]
	},
	{
		slug: "nocturne",
		name: "NOCTURNE",
		cuisine: "Cocktails & small plates",
		summary: "Cocktails, music, and sunset evenings.",
		description: "Dark timber, bronze light, a vinyl wall and a bartender who remembers. The island's late hours happen here.",
		image: dining_nocturne_default,
		hours: "17:00 – late, daily",
		location: "West Deck",
		chef: "Head Bartender Nia Okonjo",
		signatures: [
			"Smoked coconut old fashioned",
			"Sea grape spritz",
			"Salt-cured tuna toast"
		]
	}
];
var treatments = [
	{
		slug: "ocean-massage",
		name: "Ocean Massage",
		category: "Massage",
		duration: 90,
		price: 240,
		description: "Slow deep-tissue work with warm coconut oil, performed to the sound of the reef."
	},
	{
		slug: "island-facial",
		name: "Island Botanical Facial",
		category: "Facial",
		duration: 60,
		price: 190,
		description: "Cold-pressed island botanicals, lymphatic massage and a marine clay finish."
	},
	{
		slug: "salt-ritual",
		name: "Reef Salt Body Ritual",
		category: "Body Ritual",
		duration: 120,
		price: 320,
		description: "Hand-harvested salt polish, monsoon shower and a long wrap in the stone pavilion."
	},
	{
		slug: "two-hands",
		name: "Two Hands, Two Hearts",
		category: "Couples",
		duration: 120,
		price: 520,
		description: "A private couples suite, side-by-side treatment and a bath drawn with frangipani."
	},
	{
		slug: "restore-journey",
		name: "The Restore Journey",
		category: "Wellness Journey",
		duration: 240,
		price: 780,
		description: "A half-day sequence of breathwork, massage, hydrotherapy and a private lunch."
	}
];
var therapists = [
	"No preference",
	"Ines — deep tissue",
	"Malik — therapeutic",
	"Sora — energy & breath",
	"Yuki — facial specialist"
];
var spaAddOns = [
	{
		id: "champagne",
		label: "Champagne service",
		price: 85
	},
	{
		id: "suite",
		label: "Private spa suite",
		price: 140
	},
	{
		id: "couples",
		label: "Couples upgrade",
		price: 180
	},
	{
		id: "aroma",
		label: "Aromatherapy blend",
		price: 45
	}
];
var experiences = [
	{
		slug: "reef-diving",
		name: "Reef Diving",
		category: "Ocean",
		summary: "Descend into the outer reef with a private divemaster.",
		description: "The outer wall drops away eighteen metres from the mooring. Two tanks, one divemaster, a maximum of four guests. Certification available on the island.",
		image: experience_ocean_default,
		duration: "3 hours",
		difficulty: "Moderate",
		price: 260,
		groupSize: "Up to 4 guests",
		location: "North Reef",
		bring: [
			"Swimwear",
			"Certification card",
			"Reef-safe sunscreen"
		]
	},
	{
		slug: "sunset-sailing",
		name: "Sunset Sailing",
		category: "Ocean",
		summary: "A traditional rigged yacht, the last hour of light, and nowhere to be.",
		description: "We leave the marina ninety minutes before sunset and return under stars. Champagne, oysters, and a crew who stay out of your way.",
		image: sunset_cta_default,
		duration: "2.5 hours",
		difficulty: "Gentle",
		price: 340,
		groupSize: "Up to 8 guests",
		location: "Marina",
		bring: ["Light layer", "Soft-soled shoes"]
	},
	{
		slug: "jungle-expedition",
		name: "Jungle Expedition",
		category: "Nature",
		summary: "Walk the island's interior with a resident naturalist.",
		description: "A guided ascent through the island's oldest growth to the waterfall pools at the ridge, with an hour to swim before the descent.",
		image: experience_nature_default,
		duration: "4 hours",
		difficulty: "Active",
		price: 180,
		groupSize: "Up to 6 guests",
		location: "Interior Ridge",
		bring: [
			"Trail shoes",
			"Swimwear",
			"Water bottle"
		]
	},
	{
		slug: "island-kitchen",
		name: "The Island Kitchen",
		category: "Culture",
		summary: "Cook the island's own food with a local family.",
		description: "Morning at the mainland market, an afternoon of coconut, chilli and slow fire, and a table shared with the people who taught us.",
		image: dining_sol_default,
		duration: "5 hours",
		difficulty: "Gentle",
		price: 210,
		groupSize: "Up to 8 guests",
		location: "Mainland Village",
		bring: ["Appetite", "Sun hat"]
	}
];
var experienceCategories = [
	{
		name: "Ocean",
		items: [
			"Scuba diving",
			"Snorkelling",
			"Private yacht",
			"Sailing",
			"Sunset cruise"
		],
		image: experience_ocean_default
	},
	{
		name: "Nature",
		items: [
			"Jungle expedition",
			"Wildlife tracking",
			"Ridge hiking",
			"Botanical tour"
		],
		image: experience_nature_default
	},
	{
		name: "Adventure",
		items: [
			"Water sports",
			"Island exploration",
			"Deep-sea fishing",
			"Kayaking"
		],
		image: sunset_cta_default
	},
	{
		name: "Culture",
		items: [
			"Local cuisine",
			"Island art",
			"Village markets",
			"Cultural evenings"
		],
		image: dining_sol_default
	}
];
var bookableExtras = [
	{
		id: "spa",
		label: "Ocean Massage",
		price: 240
	},
	{
		id: "dinner",
		label: "Private beach dinner",
		price: 420
	},
	{
		id: "transfer",
		label: "Seaplane transfer (return)",
		price: 780
	},
	{
		id: "diving",
		label: "Reef diving, two tanks",
		price: 260
	},
	{
		id: "sailing",
		label: "Sunset sailing",
		price: 340
	},
	{
		id: "yoga",
		label: "Private yoga, five sessions",
		price: 300
	}
];
var offers = [
	{
		slug: "romantic-escape",
		name: "The Romantic Escape",
		nights: 3,
		image: villa_sunset_default,
		includes: [
			"Private villa",
			"Couples spa ritual",
			"Sunset dinner for two",
			"Late checkout"
		]
	},
	{
		slug: "wellness-retreat",
		name: "The Wellness Retreat",
		nights: 5,
		image: wellness_spa_default,
		includes: [
			"Daily yoga",
			"Three spa treatments",
			"Wellness dining",
			"Breathwork sessions"
		]
	},
	{
		slug: "the-explorer",
		name: "The Explorer",
		nights: 7,
		image: experience_ocean_default,
		includes: [
			"Reef diving",
			"Sunset sailing",
			"Jungle expedition",
			"Island guide"
		]
	}
];
var testimonials = [
	{
		quote: "For five days, the rest of the world simply disappeared.",
		name: "Camille R.",
		country: "France",
		stay: "Ocean Villa",
		rating: 5
	},
	{
		quote: "We have stayed everywhere. Nothing has ever remembered how we take our coffee on the second morning.",
		name: "David & Aiko M.",
		country: "Japan",
		stay: "Beach Residence",
		rating: 5
	},
	{
		quote: "The sailing crew found us a reef nobody else was on. I still think about that water.",
		name: "Tomás L.",
		country: "Chile",
		stay: "Sunset Suite",
		rating: 5
	},
	{
		quote: "I arrived exhausted. By the third morning I was waking up before the alarm, happily.",
		name: "Priya N.",
		country: "Singapore",
		stay: "Sunset Suite",
		rating: 5
	},
	{
		quote: "Six of us, one house, one chef. The best week our family has had in a decade.",
		name: "The Ellinger Family",
		country: "Germany",
		stay: "Private Residence",
		rating: 5
	}
];
var dayAtSolara = [
	{
		time: "06:30",
		title: "Wake with the ocean.",
		note: "Light arrives before sound."
	},
	{
		time: "07:30",
		title: "Sunrise yoga.",
		note: "On the east deck, barefoot."
	},
	{
		time: "09:00",
		title: "Breakfast by the water.",
		note: "Island fruit, slow coffee."
	},
	{
		time: "11:00",
		title: "Explore the reef.",
		note: "Twelve minutes out by boat."
	},
	{
		time: "14:00",
		title: "Poolside afternoon.",
		note: "Nothing scheduled. On purpose."
	},
	{
		time: "17:45",
		title: "Sunset sailing.",
		note: "Back under the first stars."
	},
	{
		time: "20:00",
		title: "Dinner under the stars.",
		note: "A table set on the sand."
	}
];
var ritualOptions = [
	"Relax",
	"Recharge",
	"Reconnect",
	"Restore",
	"Sleep",
	"Explore"
];
var rituals = {
	Relax: [
		{
			time: "08:30",
			label: "Breakfast in the villa"
		},
		{
			time: "10:30",
			label: "Reef salt body ritual"
		},
		{
			time: "13:00",
			label: "Lunch at TIDE"
		},
		{
			time: "16:00",
			label: "Hammock terrace, no plans"
		},
		{
			time: "19:30",
			label: "Dinner at SOL"
		}
	],
	Recharge: [
		{
			time: "06:45",
			label: "Ocean swim"
		},
		{
			time: "07:30",
			label: "Strength session with a trainer"
		},
		{
			time: "09:30",
			label: "Protein breakfast, west pavilion"
		},
		{
			time: "15:00",
			label: "Deep-tissue massage"
		},
		{
			time: "18:00",
			label: "Sea grape spritz at NOCTURNE"
		}
	],
	Reconnect: [
		{
			time: "09:00",
			label: "Breakfast on the sand"
		},
		{
			time: "11:00",
			label: "Two Hands, Two Hearts couples ritual"
		},
		{
			time: "15:00",
			label: "Private snorkel with a guide"
		},
		{
			time: "17:45",
			label: "Sunset sailing"
		},
		{
			time: "20:30",
			label: "Private beach dinner"
		}
	],
	Restore: [
		{
			time: "07:30",
			label: "Sunrise yoga"
		},
		{
			time: "09:00",
			label: "Breakfast"
		},
		{
			time: "11:00",
			label: "Ocean massage"
		},
		{
			time: "14:00",
			label: "Private pool"
		},
		{
			time: "18:30",
			label: "Sunset meditation"
		}
	],
	Sleep: [
		{
			time: "16:00",
			label: "Restorative yin session"
		},
		{
			time: "18:00",
			label: "Magnesium bath drawn in the villa"
		},
		{
			time: "19:00",
			label: "Light dinner, no caffeine"
		},
		{
			time: "21:00",
			label: "Breathwork for sleep"
		},
		{
			time: "21:45",
			label: "Turndown with island tea"
		}
	],
	Explore: [
		{
			time: "07:00",
			label: "Breakfast to go"
		},
		{
			time: "08:00",
			label: "Reef diving, two tanks"
		},
		{
			time: "12:30",
			label: "Lunch on the boat"
		},
		{
			time: "15:00",
			label: "Jungle ridge walk"
		},
		{
			time: "20:00",
			label: "Dinner at AURA"
		}
	]
};
var mapLocations = [
	{
		id: "reception",
		name: "Arrival Pavilion",
		x: 48,
		y: 20,
		blurb: "Where the boat leaves you."
	},
	{
		id: "ocean-villas",
		name: "Ocean Villas",
		x: 74,
		y: 58,
		blurb: "Overwater, on the reef edge."
	},
	{
		id: "beach",
		name: "Main Beach",
		x: 40,
		y: 62,
		blurb: "Nine hundred metres of white sand."
	},
	{
		id: "aura",
		name: "AURA",
		x: 80,
		y: 34,
		blurb: "Fine dining at East Point."
	},
	{
		id: "spa",
		name: "SOLARA Wellness",
		x: 58,
		y: 46,
		blurb: "Stone pavilions in the palm grove."
	},
	{
		id: "marina",
		name: "Marina",
		x: 24,
		y: 30,
		blurb: "Sailing, diving and the seaplane dock."
	},
	{
		id: "pool",
		name: "Horizon Pool",
		x: 52,
		y: 68,
		blurb: "Fifty metres, facing west."
	},
	{
		id: "residences",
		name: "Private Residences",
		x: 52,
		y: 30,
		blurb: "Deep in the interior."
	}
];
var stats = [
	{
		value: 24,
		suffix: "",
		label: "Private Villas"
	},
	{
		value: 7,
		suffix: "",
		label: "Dining Experiences"
	},
	{
		value: 12,
		suffix: "",
		label: "Signature Wellness Rituals"
	},
	{
		value: 40,
		suffix: "+",
		label: "Island Experiences"
	},
	{
		value: 365,
		suffix: "",
		label: "Days of Summer"
	}
];
var images = {
	villaOcean: villa_ocean_default,
	villaBeach: villa_beach_default,
	villaSunset: villa_sunset_default,
	villaResidence: villa_residence_default,
	diningAura: dining_aura_default,
	diningTide: dining_tide_default,
	diningSol: dining_sol_default,
	diningNocturne: dining_nocturne_default,
	wellnessSpa: wellness_spa_default,
	experienceOcean: experience_ocean_default,
	experienceNature: experience_nature_default,
	sunsetCta: sunset_cta_default
};
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-h4DHMmsX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DEA7yXaa.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function useIsStaff() {
	const [staff, setStaff] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let active = true;
		const check = async () => {
			const { data: userData } = await supabase.auth.getUser();
			if (!userData.user) {
				if (active) setStaff(false);
				return;
			}
			const { data } = await supabase.from("user_roles").select("role").eq("user_id", userData.user.id);
			if (active) setStaff((data ?? []).some((r) => r.role === "admin" || r.role === "staff"));
		};
		check();
		const { data: sub } = supabase.auth.onAuthStateChange(() => void check());
		return () => {
			active = false;
			sub.subscription.unsubscribe();
		};
	}, []);
	return staff;
}
var megaMenu = [
	{
		label: "Stay",
		to: "/stay",
		columns: [
			{
				title: "Villas",
				to: "/stay"
			},
			{
				title: "Suites",
				to: "/stay"
			},
			{
				title: "Residences",
				to: "/stay"
			},
			{
				title: "Private Island",
				to: "/our-story"
			},
			{
				title: "Offers",
				to: "/offers"
			}
		]
	},
	{
		label: "Dine",
		to: "/dining",
		columns: [
			{
				title: "Restaurants",
				to: "/dining"
			},
			{
				title: "Bars",
				to: "/dining"
			},
			{
				title: "Private Dining",
				to: "/dining"
			},
			{
				title: "Wine & Spirits",
				to: "/dining"
			}
		]
	},
	{
		label: "Wellness",
		to: "/wellness",
		columns: [
			{
				title: "Spa",
				to: "/wellness"
			},
			{
				title: "Treatments",
				to: "/wellness"
			},
			{
				title: "Yoga",
				to: "/wellness"
			},
			{
				title: "Fitness",
				to: "/wellness"
			},
			{
				title: "Wellness Retreats",
				to: "/offers"
			}
		]
	},
	{
		label: "Explore",
		to: "/experiences",
		columns: [
			{
				title: "Experiences",
				to: "/experiences"
			},
			{
				title: "Diving",
				to: "/experiences"
			},
			{
				title: "Sailing",
				to: "/experiences"
			},
			{
				title: "Nature",
				to: "/experiences"
			},
			{
				title: "Island Guide",
				to: "/destination-guide"
			}
		]
	},
	{
		label: "Our Story",
		to: "/our-story",
		columns: [
			{
				title: "The Island",
				to: "/our-story"
			},
			{
				title: "Sustainability",
				to: "/sustainability"
			},
			{
				title: "SOLARA Privé",
				to: "/membership"
			}
		]
	}
];
function Nav() {
	const isStaff = useIsStaff();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(null);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-700", scrolled ? "border-b border-border/60 bg-background/80 py-3 shadow-[0_10px_40px_-30px_oklch(0.25_0.01_60)] backdrop-blur-xl" : "py-6"),
		onMouseLeave: () => setOpen(null),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-5 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: cn("display text-2xl tracking-[0.42em] transition-colors duration-500 md:text-[1.6rem]", scrolled ? "text-foreground" : "text-primary-foreground"),
						"aria-label": "SOLARA home",
						children: "SOLARA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: cn("hidden items-center gap-9 lg:flex", scrolled ? "text-foreground" : "text-primary-foreground"),
						"aria-label": "Primary",
						children: megaMenu.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							onMouseEnter: () => setOpen(item.label),
							className: "py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "text-[0.68rem] font-medium tracking-[0.22em] uppercase transition-opacity hover:opacity-60",
								children: item.label
							})
						}, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flex items-center gap-3 md:gap-5", scrolled ? "text-foreground" : "text-primary-foreground"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/book",
								className: cn("hidden border px-6 py-2.5 text-[0.65rem] font-medium tracking-[0.22em] uppercase transition-colors duration-500 md:inline-flex", scrolled ? "border-foreground/25 hover:bg-foreground hover:text-background" : "border-primary-foreground/50 hover:bg-primary-foreground hover:text-foreground"),
								children: "Book Your Stay"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/experiences",
								"aria-label": "Search the island",
								className: "hover:opacity-60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									className: "h-4 w-4",
									strokeWidth: 1.4
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/portal",
								"aria-label": "Your account",
								className: "hover:opacity-60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, {
									className: "h-4 w-4",
									strokeWidth: 1.4
								})
							}),
							isStaff && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin",
								"aria-label": "Admin panel",
								className: "hover:opacity-60",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
									className: "h-4 w-4",
									strokeWidth: 1.4
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "lg:hidden",
								"aria-label": "Open menu",
								onClick: () => setMobileOpen(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									className: "h-5 w-5",
									strokeWidth: 1.4
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute inset-x-0 top-full hidden overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-500 lg:block", open ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1500px] grid-cols-[1fr_2fr] gap-16 px-10 py-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: open
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "display mt-4 text-3xl text-foreground",
						children: [
							open === "Stay" && "Private spaces, island rhythm.",
							open === "Dine" && "Seven ways to end a day.",
							open === "Wellness" && "Return to yourself.",
							open === "Explore" && "The island is yours.",
							open === "Our Story" && "A world away from ordinary."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid grid-cols-3 gap-x-10 gap-y-4",
						children: megaMenu.find((m) => m.label === open)?.columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: col.to,
							onClick: () => setOpen(null),
							className: "group flex items-center justify-between border-b border-border/60 py-3 text-sm text-foreground transition-colors hover:text-accent",
							children: [col.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "opacity-0 transition-opacity group-hover:opacity-100",
								children: "→"
							})]
						}) }, col.title))
					})]
				})
			}),
			mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex flex-col bg-background px-6 py-6 lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "display text-xl tracking-[0.42em] text-foreground",
							children: "SOLARA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Close menu",
							onClick: () => setMobileOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "h-5 w-5",
								strokeWidth: 1.4
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-12 flex flex-col gap-1",
						"aria-label": "Mobile",
						children: megaMenu.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setMobileOpen(false),
							className: "display border-b border-border py-5 text-4xl text-foreground",
							children: item.label
						}, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						onClick: () => setMobileOpen(false),
						className: "mt-auto bg-primary py-4 text-center text-[0.7rem] font-medium tracking-[0.24em] text-primary-foreground uppercase",
						children: "Book Your Stay"
					})
				]
			})
		]
	});
}
var columns = [
	{
		title: "Stay",
		links: [
			{
				label: "Villas",
				to: "/stay"
			},
			{
				label: "Suites",
				to: "/stay"
			},
			{
				label: "Residences",
				to: "/stay"
			},
			{
				label: "Offers",
				to: "/offers"
			}
		]
	},
	{
		title: "Experience",
		links: [
			{
				label: "Dining",
				to: "/dining"
			},
			{
				label: "Wellness",
				to: "/wellness"
			},
			{
				label: "Experiences",
				to: "/experiences"
			},
			{
				label: "Destination Guide",
				to: "/destination-guide"
			}
		]
	},
	{
		title: "About",
		links: [
			{
				label: "Our Story",
				to: "/our-story"
			},
			{
				label: "Sustainability",
				to: "/sustainability"
			},
			{
				label: "SOLARA Privé",
				to: "/membership"
			},
			{
				label: "Press",
				to: "/our-story"
			}
		]
	},
	{
		title: "Guest Services",
		links: [
			{
				label: "Concierge",
				to: "/portal"
			},
			{
				label: "Guest Portal",
				to: "/portal"
			},
			{
				label: "Travel Information",
				to: "/destination-guide"
			},
			{
				label: "Sign In",
				to: "/auth"
			}
		]
	}
];
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-charcoal text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-16 lg:grid-cols-[1.2fr_2fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display text-3xl tracking-[0.42em]",
							children: "SOLARA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/60",
							children: "A private tropical sanctuary in the Indian Ocean, created for extraordinary escapes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/book",
							className: "mt-8 inline-flex border border-primary-foreground/40 px-8 py-3 text-[0.65rem] font-medium tracking-[0.24em] uppercase transition-colors hover:bg-primary-foreground hover:text-charcoal",
							children: "Book Your Stay"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-10 md:grid-cols-4",
						children: columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-primary-foreground/50",
							children: col.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3",
							children: col.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.to,
								className: "text-sm text-primary-foreground/80 transition-colors hover:text-champagne",
								children: link.label
							}) }, link.label))
						})] }, col.title))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid gap-10 border-t border-primary-foreground/15 pt-14 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display text-4xl",
						children: "Stay close to the sun."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm text-primary-foreground/60",
						children: "Private offers, island stories, new experiences and inspiration from SOLARA."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "flex flex-col gap-4 self-end sm:flex-row",
						onSubmit: (e) => {
							e.preventDefault();
							if (!email.includes("@")) {
								toast.error("Please enter a valid email address.");
								return;
							}
							setEmail("");
							toast.success("Welcome to SOLARA. Watch your inbox for island stories.");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "sr-only",
								htmlFor: "newsletter-email",
								children: "Your email address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "newsletter-email",
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "Your email address",
								className: "flex-1 border-b border-primary-foreground/30 bg-transparent py-3 text-sm placeholder:text-primary-foreground/40 focus:border-champagne focus:outline-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "border border-primary-foreground/40 px-8 py-3 text-[0.65rem] font-medium tracking-[0.24em] uppercase transition-colors hover:bg-champagne hover:text-charcoal",
								children: "Join SOLARA"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-[0.7rem] tracking-[0.14em] text-primary-foreground/40 uppercase sm:flex-row sm:items-center sm:justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Private Island · Indian Ocean" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instagram" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pinterest" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "YouTube" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" SOLARA"
						] })
					]
				})
			]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted-foreground",
					children: "The tide is changing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-6 text-5xl text-foreground",
					children: "This path leads nowhere."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "The page you are looking for has drifted. Let us take you back to the island."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-8 inline-flex bg-primary px-8 py-3.5 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase",
					children: "Return to SOLARA"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted-foreground",
					children: "A moment of stillness"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-6 text-4xl text-foreground",
					children: "This page didn't load."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "Something interrupted the connection. Try again, or return to the island."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "bg-primary px-8 py-3.5 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "border border-foreground/25 px-8 py-3.5 text-[0.65rem] font-medium tracking-[0.24em] uppercase",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$18 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SOLARA — A world away from ordinary" },
			{
				name: "description",
				content: "SOLARA is a private tropical sanctuary in the Indian Ocean: 24 villas, seven dining experiences, a wellness island and 40+ experiences."
			},
			{
				name: "author",
				content: "SOLARA"
			},
			{
				property: "og:title",
				content: "SOLARA — A world away from ordinary"
			},
			{
				property: "og:description",
				content: "A private tropical sanctuary created for extraordinary escapes."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Karla:wght@300;400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$18.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "bottom-right" })
		]
	});
}
var $$splitComponentImporter$17 = () => import("./routes-BEvbL4pn.mjs");
var Route$17 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "SOLARA — A world away from ordinary" },
		{
			name: "description",
			content: "A private tropical sanctuary in the Indian Ocean. 24 villas, seven dining experiences, a wellness island and more than forty ways to spend a day."
		},
		{
			property: "og:title",
			content: "SOLARA — A world away from ordinary"
		},
		{
			property: "og:description",
			content: "A private tropical sanctuary created for extraordinary escapes."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./route-Di7iQBCH.mjs");
var Route$16 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({ to: "/auth" });
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./auth-k9__6gYJ.mjs");
var Route$15 = createFileRoute("/auth")({
	head: () => ({ meta: [
		{ title: "Sign in — Guest Portal | SOLARA" },
		{
			name: "description",
			content: "Sign in to your SOLARA guest portal to view reservations, itineraries and concierge messages."
		},
		{
			property: "og:title",
			content: "Guest Portal | SOLARA"
		},
		{
			property: "og:description",
			content: "Your stay, before you arrive."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./book-CBZ4lv6p.mjs");
var Route$14 = createFileRoute("/book")({
	head: () => ({ meta: [
		{ title: "Book Your Stay — Reserve a villa | SOLARA" },
		{
			name: "description",
			content: "Choose your dates, villa and experiences, and reserve your stay at SOLARA in a few quiet steps."
		},
		{
			property: "og:title",
			content: "Book Your Stay | SOLARA"
		},
		{
			property: "og:description",
			content: "Choose your dates. We'll do the rest."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./destination-guide-CAmXk9bx.mjs");
var Route$13 = createFileRoute("/destination-guide")({
	head: () => ({ meta: [
		{ title: "Destination Guide — Beyond the resort | SOLARA" },
		{
			name: "description",
			content: "Beaches, culture, food, adventure, nature and nightlife beyond the island, with travel times and the best months to go."
		},
		{
			property: "og:title",
			content: "Beyond the resort | SOLARA"
		},
		{
			property: "og:description",
			content: "An editorial guide to the archipelago."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./dining-DFrKvKti.mjs");
var Route$12 = createFileRoute("/dining")({
	head: () => ({ meta: [
		{ title: "Dining — AURA, TIDE, SOL & NOCTURNE | SOLARA" },
		{
			name: "description",
			content: "Four island kitchens and a private dining team: contemporary fine dining, coastal seafood, Mediterranean all-day dining and a late-night bar."
		},
		{
			property: "og:title",
			content: "Taste the island | SOLARA"
		},
		{
			property: "og:description",
			content: "Seven kitchens, one shoreline, produce that rarely travels further than the boat."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./experiences-DFkKO_Hq.mjs");
var Route$11 = createFileRoute("/experiences")({
	head: () => ({ meta: [
		{ title: "Experiences — Ocean, Nature, Adventure & Culture | SOLARA" },
		{
			name: "description",
			content: "Reef diving, sunset sailing, jungle expeditions, island cooking and more than forty ways to spend a day at SOLARA."
		},
		{
			property: "og:title",
			content: "The island is yours to discover | SOLARA"
		},
		{
			property: "og:description",
			content: "Forty ways to spend a day, all of them optional."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./membership-Bge9uaSX.mjs");
var Route$10 = createFileRoute("/membership")({
	head: () => ({ meta: [
		{ title: "SOLARA Privé — Private membership | SOLARA" },
		{
			name: "description",
			content: "A private membership for frequent guests: priority reservations, villa upgrades, private experiences, transfers and a personal concierge."
		},
		{
			property: "og:title",
			content: "SOLARA Privé"
		},
		{
			property: "og:description",
			content: "A private membership for frequent guests."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./offers-BV0gKfsF.mjs");
var Route$9 = createFileRoute("/offers")({
	head: () => ({ meta: [
		{ title: "Offers & Packages — Curated escapes | SOLARA" },
		{
			name: "description",
			content: "The Romantic Escape, The Wellness Retreat and The Explorer: multi-night packages combining villas, spa rituals, dining and island experiences."
		},
		{
			property: "og:title",
			content: "Curated escapes | SOLARA"
		},
		{
			property: "og:description",
			content: "Three-, five- and seven-night island journeys."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./our-story-gJqNiBv3.mjs");
var Route$8 = createFileRoute("/our-story")({
	head: () => ({ meta: [
		{ title: "Our Story — A private island in the Indian Ocean | SOLARA" },
		{
			name: "description",
			content: "How SOLARA was built: one island, twenty-four villas, and a belief that luxury means privacy, nature and being known."
		},
		{
			property: "og:title",
			content: "Our Story | SOLARA"
		},
		{
			property: "og:description",
			content: "A world away from ordinary."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./stay-agt7GRWM.mjs");
var Route$7 = createFileRoute("/stay")({
	head: () => ({ meta: [
		{ title: "Stay — Villas, Suites & Residences | SOLARA" },
		{
			name: "description",
			content: "Twenty-four private villas, suites and residences on a private island: ocean villas, beach residences, sunset suites and staffed private houses."
		},
		{
			property: "og:title",
			content: "Stay somewhere extraordinary | SOLARA"
		},
		{
			property: "og:description",
			content: "Private spaces designed around the rhythm of the island."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./sustainability-DqAYgXy6.mjs");
var Route$6 = createFileRoute("/sustainability")({
	head: () => ({ meta: [
		{ title: "Sustainability — Luxury with a lighter footprint | SOLARA" },
		{
			name: "description",
			content: "Solar and storage, a protected reef, island-grown food, closed-loop water and a staff drawn from the islands nearby."
		},
		{
			property: "og:title",
			content: "Luxury that leaves a lighter footprint | SOLARA"
		},
		{
			property: "og:description",
			content: "A reef that is healthier every year we count it."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./wellness-Bihrw3ac.mjs");
var Route$5 = createFileRoute("/wellness")({
	head: () => ({ meta: [
		{ title: "Wellness & Spa — Return to yourself | SOLARA" },
		{
			name: "description",
			content: "SOLARA Wellness: massage, facials, body rituals, yoga, meditation, breathwork and multi-day retreats in stone pavilions above the sea."
		},
		{
			property: "og:title",
			content: "Return to yourself | SOLARA Wellness"
		},
		{
			property: "og:description",
			content: "Twelve signature rituals, sequenced by therapists who ask how you slept."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./admin-q6hdcIEM.mjs");
var Route$4 = createFileRoute("/_authenticated/admin")({
	head: () => ({ meta: [
		{ title: "Admin — Resort management | SOLARA" },
		{
			name: "description",
			content: "Manage reservations, bookings, content and imagery."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./portal-C-WwD9S-.mjs");
var Route$3 = createFileRoute("/_authenticated/portal")({
	head: () => ({ meta: [
		{ title: "Guest Portal — Your stay | SOLARA" },
		{
			name: "description",
			content: "Your reservations, itinerary, saved villas and concierge messages at SOLARA."
		},
		{
			property: "og:title",
			content: "Guest Portal | SOLARA"
		},
		{
			property: "og:description",
			content: "Everything arranged before you arrive."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitNotFoundComponentImporter$2 = () => import("./dining._slug-B6EV5YoS.mjs");
var $$splitComponentImporter$2 = () => import("./dining._slug-DpV1dByQ.mjs");
var Route$2 = createFileRoute("/dining/$slug")({
	loader: ({ params }) => {
		const restaurant = restaurants.find((r) => r.slug === params.slug);
		if (!restaurant) throw notFound();
		return { restaurant };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Restaurant not found | SOLARA" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { restaurant } = loaderData;
		return { meta: [
			{ title: `${restaurant.name} — ${restaurant.cuisine} | SOLARA` },
			{
				name: "description",
				content: restaurant.description
			},
			{
				property: "og:title",
				content: `${restaurant.name} | SOLARA`
			},
			{
				property: "og:description",
				content: restaurant.summary
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent")
});
var $$splitNotFoundComponentImporter$1 = () => import("./experiences._slug-CnbgBQg0.mjs");
var $$splitComponentImporter$1 = () => import("./experiences._slug-CBay3oqX.mjs");
var Route$1 = createFileRoute("/experiences/$slug")({
	loader: ({ params }) => {
		const experience = experiences.find((e) => e.slug === params.slug);
		if (!experience) throw notFound();
		return { experience };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Experience not found | SOLARA" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { experience } = loaderData;
		return { meta: [
			{ title: `${experience.name} — ${experience.duration} | SOLARA` },
			{
				name: "description",
				content: experience.summary
			},
			{
				property: "og:title",
				content: `${experience.name} | SOLARA`
			},
			{
				property: "og:description",
				content: experience.summary
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent")
});
var $$splitNotFoundComponentImporter = () => import("./villas._slug-6MABhRdm.mjs");
var $$splitComponentImporter = () => import("./villas._slug-G0hfTUC4.mjs");
var Route = createFileRoute("/villas/$slug")({
	loader: ({ params }) => {
		const villa = villas.find((v) => v.slug === params.slug);
		if (!villa) throw notFound();
		return { villa };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Villa not found | SOLARA" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { villa } = loaderData;
		return { meta: [
			{ title: `${villa.name} — from $${villa.price} per night | SOLARA` },
			{
				name: "description",
				content: villa.tagline
			},
			{
				property: "og:title",
				content: `${villa.name} | SOLARA`
			},
			{
				property: "og:description",
				content: villa.tagline
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var IndexRoute = Route$17.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var AuthenticatedRouteRoute = Route$16.update({
	id: "/_authenticated",
	getParentRoute: () => Route$18
});
var AuthRoute = Route$15.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$18
});
var BookRoute = Route$14.update({
	id: "/book",
	path: "/book",
	getParentRoute: () => Route$18
});
var DestinationGuideRoute = Route$13.update({
	id: "/destination-guide",
	path: "/destination-guide",
	getParentRoute: () => Route$18
});
var DiningRoute = Route$12.update({
	id: "/dining",
	path: "/dining",
	getParentRoute: () => Route$18
});
var ExperiencesRoute = Route$11.update({
	id: "/experiences",
	path: "/experiences",
	getParentRoute: () => Route$18
});
var MembershipRoute = Route$10.update({
	id: "/membership",
	path: "/membership",
	getParentRoute: () => Route$18
});
var OffersRoute = Route$9.update({
	id: "/offers",
	path: "/offers",
	getParentRoute: () => Route$18
});
var OurStoryRoute = Route$8.update({
	id: "/our-story",
	path: "/our-story",
	getParentRoute: () => Route$18
});
var StayRoute = Route$7.update({
	id: "/stay",
	path: "/stay",
	getParentRoute: () => Route$18
});
var SustainabilityRoute = Route$6.update({
	id: "/sustainability",
	path: "/sustainability",
	getParentRoute: () => Route$18
});
var WellnessRoute = Route$5.update({
	id: "/wellness",
	path: "/wellness",
	getParentRoute: () => Route$18
});
var AuthenticatedAdminRoute = Route$4.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedPortalRoute = Route$3.update({
	id: "/portal",
	path: "/portal",
	getParentRoute: () => AuthenticatedRouteRoute
});
var DiningSlugRoute = Route$2.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => DiningRoute
});
var ExperiencesSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ExperiencesRoute
});
var VillasSlugRoute = Route.update({
	id: "/villas/$slug",
	path: "/villas/$slug",
	getParentRoute: () => Route$18
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedAdminRoute,
	AuthenticatedPortalRoute
};
var AuthenticatedRouteRouteWithChildren = AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren);
var DiningRouteChildren = { DiningSlugRoute };
var DiningRouteWithChildren = DiningRoute._addFileChildren(DiningRouteChildren);
var ExperiencesRouteChildren = { ExperiencesSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
	AuthRoute,
	BookRoute,
	DestinationGuideRoute,
	DiningRoute: DiningRouteWithChildren,
	ExperiencesRoute: ExperiencesRoute._addFileChildren(ExperiencesRouteChildren),
	MembershipRoute,
	OffersRoute,
	OurStoryRoute,
	StayRoute,
	SustainabilityRoute,
	WellnessRoute,
	VillasSlugRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { villas as C, villa_ocean_default as S, stats as _, cn as a, therapists as b, experienceCategories as c, mapLocations as d, offers as f, spaAddOns as g, rituals as h, Route$2 as i, experiences as l, ritualOptions as m, Route as n, bookableExtras as o, restaurants as p, Route$1 as r, dayAtSolara as s, router_exports as t, images as u, sunset_cta_default as v, treatments as x, testimonials as y };
