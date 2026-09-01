# SOLARA — Luxury Tropical Resort Digital Ecosystem

A full resort platform: cinematic marketing site, booking engine, guest portal, AI concierge, and role-based admin. Built on Lovable Cloud (Postgres, auth, server logic) with AI-generated cinematic photography and motion in place of stock video.

## Brand & Design System

- Palette: warm ivory, sand, stone, deep forest green, ocean blue, charcoal, warm bronze, champagne. No turquoise/neon.
- Typography: editorial serif (Cormorant Garamond) for headlines, villa names, storytelling; minimalist sans (Karla) for nav, forms, pricing, UI.
- Motion: slow, cinematic reveals, parallax, image masking, text splitting, number counters, magnetic buttons, page transitions. Framer Motion + reduced-motion support.
- Media: AI-generated cinematic stills at each hero and section, animated with slow Ken Burns/parallax so they read as film. Video-ready slots kept for later real footage.

## Phase 1 — Foundation & Cinematic Homepage

- Design tokens, fonts, floating nav with scroll-collapse and mega menus (Stay / Dine / Wellness / Explore / Our Story), Book Your Stay + Search + Account.
- Home: full-bleed hero ("A world away from ordinary."), editorial intro with ARRIVE → EXHALE → DISCOVER → REMEMBER sequence, animated statistics, Stay preview, Dine preview, Wellness preview, Experiences preview, "A Day at SOLARA" horizontal scroll timeline, Why SOLARA comparison, testimonials, UGC grid, offers, sustainability, final sunset CTA, luxury footer with newsletter.
- Mobile-specific UX: drawer nav, swipeable galleries, sticky Book Now bar.

## Phase 2 — Content Pages

- `/stay` with filtering (guests, price, view, beach access, private pool, bedrooms, type) and hover-expanding cards.
- `/villas/$slug` detail: cinematic gallery, floor plan, 360°/panorama viewer, amenities, price, cross-sell "Recommended for your stay".
- `/dining`, `/dining/$slug` (AURA, TIDE, SOL, NOCTURNE), private dining storytelling + custom dinner form.
- `/wellness`, `/wellness/spa`, plus the "Find Your Ritual" personalization tool generating a timed itinerary.
- `/experiences`, `/experiences/$slug` with duration, difficulty, price, group size.
- Interactive illustrated island map, virtual tour hub, `/destination-guide` editorial articles, `/offers`, `/membership`, `/our-story`, `/sustainability`.
- Per-route SEO metadata, Hotel/FAQ/Article schema, sitemap, robots.

## Phase 3 — Backend & Booking

Lovable Cloud enabled. Tables: profiles, user_roles, villas, villa_availability, reservations, reservation_experiences, restaurants, restaurant_tables, restaurant_reservations, spa_treatments, therapists, spa_appointments, experiences, experience_bookings, offers, testimonials, concierge_requests, guest_preferences, content_blocks, payments. RLS on every table with explicit grants; roles in a separate `user_roles` table with a `has_role` security-definer function.

Six-step booking engine: Dates → Guests → Stay → Experiences → Guest Details → Payment, with availability checks, price breakdown (room, taxes, resort fees, experiences, transfers) and a "Your escape begins here" confirmation with journey timeline, add-to-calendar, download.

Restaurant reservations with dynamic time-slot availability; spa booking with treatment, therapist preference, date/time, add-ons.

## Phase 4 — Accounts, Portal, Concierge

- Premium auth (email/password + Google/Apple), redirect to portal.
- Guest portal: your stay, itinerary timeline, quick actions, all reservations, preferences (dietary, pillow, room, occasions, transport, wellness).
- Concierge request system with Received → Assigned → In Progress → Completed status.
- AI concierge chat powered by Lovable AI, grounded in the resort's villas/dining/spa/experiences data, able to recommend and pre-fill bookings.

## Phase 5 — Admin & Analytics

Role-based (guest / staff / manager / admin) admin area:
- Dashboard: revenue, occupancy, reservations, ADR, bookings by channel, satisfaction, recent activity, charts.
- Reservation management in calendar + table view; villa, restaurant, spa, experience, guest (360° profile) management.
- Content management for hero, copy, villas, dining, spa, experiences, guide, testimonials, offers, FAQs.
- Analytics: conversion, most-viewed/booked villas, popular experiences and restaurants, demographics, stay length.

## Payments

Booking checkout is built payment-provider-ready with a full price summary. Real card capture requires connecting Stripe — I'll set that up when you're ready; no raw card data is ever stored.

## Technical Notes

- Stack is fixed to the project's TanStack Start + React + TypeScript + Tailwind v4 setup (equivalent capability to the Next.js in your spec — SSR, server functions, file routing). Not Next.js.
- Postgres via Lovable Cloud (Supabase under the hood) for DB, auth, storage, and server logic.
- Server functions for all data access; RLS enforced per role.
- Performance: route-level code splitting, lazy media, responsive images, poster-first media loading.
- Accessibility: keyboard nav, focus states, alt text, labelled forms, heading hierarchy, prefers-reduced-motion.

## Delivery

Phases ship in order; each is reviewable on its own. Phase 1 lands first so the "I need to go there" impression is in place before deeper systems.
