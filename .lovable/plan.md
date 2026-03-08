

# MapMind Landing Page

A premium, dark-themed landing page for mapmind.online — inspired by Linear/Notion aesthetics. Fully responsive, standalone page using existing design system.

## Pages & Routes
- New `/landing` page set as the root route, with the current Index moved or kept for logged-in users

## Sections to Build

### 1. Hero (Full viewport)
- Subtle SVG world map outline in background with faint glow animation
- Left: pill badge, bold two-line headline, muted subheadline, two CTA buttons (primary + ghost)
- Right: app screenshot in a browser chrome frame with perspective tilt and drop shadow
- Smooth scroll wired to "See how it works ↓" button

### 2. Social Proof Bar
- Thin strip with muted text + country flag emojis

### 3. Problem / Solution
- Two-column layout with "scattered knowledge" pain points vs "MapMind brings it together" solutions
- Subtle vertical divider, clean typography only

### 4. Who Is This For
- 2×2 card grid with lucide icons, persona titles, descriptions
- Subtle border, hover lift animation, faint gradient backgrounds

### 5. How It Works (Workflow)
- 3 horizontal steps with connecting arrows (stacked on mobile)
- Each step uses an app screenshot in a device frame + caption
- Screenshots from the uploaded reference images

### 6. Features Highlight
- 3×2 grid of feature blocks with lucide icons + one-line descriptions
- Interactive Map, Note Connections, Tags & Filters, Knowledge Graph, Shareable Maps, Streak Tracking

### 7. Testimonials
- 5 review cards — horizontal scroll on mobile, 3-col grid on desktop
- Quote icon accent, italic text, name/role/flag

### 8. Final CTA
- Centered with radial gradient glow, large headline, primary button linking to app

### 9. Footer
- Minimal: logo left, tagline center, email link right

## Design & Animations
- Scroll-triggered fade-up animations via IntersectionObserver (custom hook)
- All sections use existing dark theme CSS variables, py-24+ spacing
- Subtle gradient fades between sections (no hard lines)
- Mobile: single-column collapse, full-width CTAs, scaled screenshots
- No new dependencies — only existing Tailwind, lucide-react, and React Router

## Assets
- Copy the 4 uploaded screenshots into `src/assets/` for use as app preview images in hero and workflow sections

