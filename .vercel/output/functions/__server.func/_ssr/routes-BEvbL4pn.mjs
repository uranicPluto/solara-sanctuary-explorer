import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useContent } from "./use-content-DIKlyNrP.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as villas, _ as stats, f as offers, p as restaurants, s as dayAtSolara, u as images, v as sunset_cta_default, y as testimonials } from "./router-h4DHMmsX.mjs";
import { i as useScroll, n as useReducedMotion, r as useTransform, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as SectionHeading, i as RevealWords, o as Shell, r as Reveal, t as CtaLink } from "./Primitives-DSzuTSi2.mjs";
import { t as IslandMap } from "./IslandMap-BM2pm-Lu.mjs";
import { n as hero_island_default, t as ParallaxImage } from "./ParallaxImage-CUdQ3jvV.mjs";
import { t as VillaCard } from "./VillaCard-zhzXIcGO.mjs";
import { t as RitualFinder } from "./RitualFinder-B-fRuIpp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BEvbL4pn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CountUp({ value, suffix = "", duration = 1800 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		amount: .5
	});
	const reduced = useReducedMotion();
	const [display, setDisplay] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		if (reduced) {
			setDisplay(value);
			return;
		}
		let frame = 0;
		const start = performance.now();
		const tick = (now) => {
			const progress = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			setDisplay(Math.round(eased * value));
			if (progress < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [
		inView,
		value,
		duration,
		reduced
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [display, suffix]
	});
}
var themeClass = {
	light: "bg-background text-foreground",
	sand: "bg-sand/30 text-foreground border-y border-border",
	dark: "bg-charcoal text-primary-foreground"
};
function Cta({ label, href }) {
	if (!label) return null;
	const className = "mt-8 inline-block border-b border-current pb-1 text-[0.68rem] tracking-[0.24em] uppercase";
	if (href.startsWith("http")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className,
		children: label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: href || "/",
		className,
		children: label
	});
}
function SectionBlock({ section }) {
	const text = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		section.eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow opacity-70",
			children: section.eyebrow
		}),
		section.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "display mt-4 text-4xl md:text-5xl",
			children: section.title
		}),
		section.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 max-w-xl text-base leading-relaxed opacity-80 whitespace-pre-line",
			children: section.body
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {
			label: section.ctaLabel,
			href: section.ctaHref
		})
	] });
	if (section.layout === "banner" && section.image) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[60vh] items-center justify-center overflow-hidden text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: section.image,
				alt: section.title,
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-charcoal/45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-2xl text-primary-foreground",
				children: text
			}) })
		]
	});
	if (section.layout === "text" || !section.image) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `py-24 md:py-32 ${themeClass[section.theme]}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-3xl",
			children: text
		}) }) })
	});
	const imageFirst = section.layout === "image-left";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: `py-24 md:py-32 ${themeClass[section.theme]}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: imageFirst ? "md:order-1" : "md:order-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: section.image,
					alt: section.title,
					className: "aspect-[4/3] w-full object-cover",
					loading: "lazy"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: imageFirst ? "md:order-2" : "md:order-1",
				children: text
			})]
		}) }) })
	});
}
/** Renders every admin-created section, in order. */
function CustomSections() {
	const { sections } = useContent();
	if (!sections.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionBlock, { section: s }, s.slug)) });
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
	const opacity = useTransform(scrollYProgress, [0, .9], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative h-screen min-h-[620px] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: hero_island_default,
				alt: "Aerial view of the SOLARA private island at golden hour",
				width: 1920,
				height: 1088,
				style: reduced ? {} : { scale },
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/20 to-charcoal/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: reduced ? {} : { opacity },
				className: "relative mx-auto flex h-full max-w-[1500px] flex-col justify-end px-5 pb-16 md:px-10 md:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display max-w-4xl text-[3rem] leading-[0.98] text-primary-foreground sm:text-7xl md:text-[6.5rem]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealWords, { text: "A world away from ordinary." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .5,
						className: "mt-8 max-w-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base text-primary-foreground/80 md:text-lg",
							children: "Welcome to SOLARA — a private tropical sanctuary created for extraordinary escapes."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: .7,
						className: "mt-10 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							to: "/book",
							children: "Book Your Stay"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							to: "/our-story",
							variant: "light",
							children: "Explore SOLARA"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: .9,
						className: "mt-14 flex flex-col gap-4 border-t border-primary-foreground/20 pt-6 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-primary-foreground/60",
							children: "Private Island · Indian Ocean"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							animate: reduced ? {} : { y: [
								0,
								8,
								0
							] },
							transition: {
								duration: 3.2,
								repeat: Infinity,
								ease: "easeInOut"
							},
							className: "eyebrow text-primary-foreground/60",
							children: "Discover SOLARA ↓"
						})]
					})
				]
			})
		]
	});
}
var sequence = [
	"Arrive",
	"Exhale",
	"Discover",
	"Remember"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-28 md:py-40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-4xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted-foreground",
					children: "What is SOLARA?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display mt-8 text-4xl leading-[1.05] text-foreground md:text-7xl",
					children: ["Some places are visited.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-muted-foreground italic",
						children: "Others are experienced."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImage, {
					src: images.villaOcean,
					alt: "An open-air villa at dawn, looking out to the ocean",
					className: "aspect-[5/4]",
					width: 1600,
					height: 1100
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg leading-relaxed text-foreground",
							children: "SOLARA is built around slowing down. Around reconnecting with something older than a schedule. Around extraordinary experiences, and hospitality without compromise."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground",
							children: "Twenty-four villas on a private island, staffed by people who learn how you take your coffee on the first morning and never ask again."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 flex flex-wrap gap-x-10 gap-y-4",
							children: sequence.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * .14,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "display text-3xl text-foreground/25 transition-colors hover:text-accent md:text-4xl",
									children: word
								})
							}, word))
						})
					]
				})]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-sand/30 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-y-12 md:grid-cols-5",
				children: stats.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .08,
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-5xl text-foreground md:text-6xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
							value: stat.value,
							suffix: stat.suffix
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase",
						children: stat.label
					})]
				}, stat.label))
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28 md:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Stay",
					title: "Stay somewhere extraordinary.",
					intro: "Private spaces designed around the rhythm of the island."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
					to: "/stay",
					variant: "outline",
					children: "All Accommodation"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4",
				children: villas.map((villa, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VillaCard, { villa })
				}, villa.slug))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-charcoal py-28 text-primary-foreground md:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-primary-foreground/50",
							children: "Dine"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display mt-5 text-4xl md:text-6xl",
							children: "Taste the island."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-primary-foreground/60",
							children: "Seven kitchens, one shoreline, and produce that rarely travels further than the boat."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2",
					children: restaurants.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dining/$slug",
							params: { slug: r.slug },
							className: "group block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[16/10] overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: r.image,
										alt: r.name,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-baseline justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "display text-4xl tracking-[0.1em]",
										children: r.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.65rem] tracking-[0.24em] text-primary-foreground/50 uppercase",
										children: r.cuisine
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-primary-foreground/60",
									children: r.summary
								})
							]
						})
					}, r.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/dining",
						variant: "light",
						children: "Reserve a Table"
					})
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28 md:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "Wellness"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-5 text-4xl text-foreground md:text-6xl",
						children: "Return to yourself."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-muted-foreground",
						children: "Stone pavilions in a palm grove. Massage, breathwork, movement and long silences — sequenced by therapists who ask how you slept before they begin."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/wellness",
						variant: "outline",
						className: "mt-10",
						children: "Enter SOLARA Wellness"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImage, {
					src: images.wellnessSpa,
					alt: "A stone spa pavilion open to the jungle",
					className: "aspect-[4/3]",
					width: 1600,
					height: 1100
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-28 border-t border-border pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RitualFinder, {})
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-y border-border bg-sand/25 py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "A day at SOLARA",
				title: "From first light to last."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hide-scrollbar mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto px-5 pb-6 md:px-10",
				children: dayAtSolara.map((moment, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					className: "w-[76vw] shrink-0 snap-start sm:w-[44vw] lg:w-[27vw]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full border-t border-foreground/25 pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display text-5xl text-accent",
								children: moment.time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display mt-5 text-3xl text-foreground",
								children: moment.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: moment.note
							})
						]
					})
				}, moment.time))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28 md:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Explore",
					title: "The island is yours to discover.",
					intro: "Reef, ridge, open water and the villages beyond. Forty ways to spend a day, all of them optional."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
					to: "/experiences",
					variant: "outline",
					children: "All Experiences"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IslandMap, {})
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-forest py-28 text-primary-foreground md:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-primary-foreground/50",
				children: "Why SOLARA"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display mt-5 text-4xl md:text-6xl",
				children: "Not another resort."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-px overflow-hidden border border-primary-foreground/15 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-forest p-10 md:p-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary-foreground/40",
						children: "Ordinary luxury"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-5",
						children: [
							"Crowded",
							"Predictable",
							"One-size-fits-all",
							"Tourist experiences",
							"Standard rooms"
						].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "display text-3xl text-primary-foreground/30 line-through decoration-1",
								children: item
							})
						}, item))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-charcoal p-10 md:p-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-champagne",
						children: "SOLARA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-5",
						children: [
							"Private",
							"Personal",
							"Curated",
							"Immersive",
							"Designed around you"
						].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "display text-3xl text-primary-foreground",
								children: item
							})
						}, item))
					})]
				})]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-28 md:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Guests",
				title: "The memories speak for themselves."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 columns-1 gap-8 md:columns-2 lg:columns-3",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					className: "mb-8 break-inside-avoid",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "border border-border bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.7rem] tracking-[0.2em] text-accent",
								children: "★".repeat(t.rating)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "display mt-5 text-2xl leading-snug text-foreground",
								children: [
									"“",
									t.quote,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-6 text-xs tracking-[0.16em] text-muted-foreground uppercase",
								children: [
									t.name,
									" · ",
									t.country,
									" · ",
									t.stay
								]
							})
						]
					})
				}, t.name))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border py-28 md:py-36",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Offers",
					title: "Curated escapes."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
					to: "/offers",
					variant: "outline",
					children: "All Packages"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-10 md:grid-cols-3",
				children: offers.map((offer, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .09,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group h-full border border-border bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[3/2] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: offer.image,
								alt: offer.name,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "eyebrow text-muted-foreground",
									children: [offer.nights, " nights"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display mt-3 text-3xl text-foreground",
									children: offer.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-2 text-sm text-muted-foreground",
									children: offer.includes.map((inc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", inc] }, inc))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
									to: "/offers",
									variant: "outline",
									className: "mt-8",
									children: "Explore Package"
								})
							]
						})]
					})
				}, offer.slug))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomSections, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex h-[86vh] min-h-[520px] items-center justify-center overflow-hidden text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: sunset_cta_default,
					alt: "A yacht on a still ocean at sunset",
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-charcoal/45" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display text-5xl text-primary-foreground md:text-8xl",
							children: "Your island is waiting."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-primary-foreground/75",
							children: "Leave ordinary behind."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
								to: "/book",
								children: "Plan Your Escape"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
								to: "/our-story",
								variant: "light",
								children: "Explore SOLARA"
							})]
						})
					] })
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
