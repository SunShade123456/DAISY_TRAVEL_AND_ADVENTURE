# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Daisy Travel & Adventure is a React-based travel agency website for Nepal tourism. It features guide-based tour packages, a travel gear shop, blog content, testimonials, and an AI-powered chat assistant using Google Gemini.

## Development Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server on port 3000
npm run build      # Production build
npm run preview    # Preview production build
```

## Environment Setup

Create `.env.local` with your Gemini API key:
```
GEMINI_API_KEY=your_api_key_here
```

The `@` path alias resolves to the project root for imports.

## Architecture

### Entry Point
[index.tsx](index.tsx) renders the App into the DOM.

### Main App
[App.tsx](App.tsx) contains all page sections as inline components:
- **Navbar** - Fixed nav with scroll-based transparency, orange gradient branding
- **Hero** - Full-screen parallax with animated text reveal
- **TrustIndicators** - Stats bar (travelers, years, destinations, rating)
- **GuidesSection** - Guide cards with click-to-filter packages
- **PackagesSection** - Guide-filterable package grid with difficulty badges
- **TestimonialsSection** - Auto-rotating customer review carousel
- **ShopSection** - Filterable product grid
- **BlogSection** - Blog post previews
- **AboutSection** - Company info with guide highlights
- **ContactSection** - Form with guide/package selection dropdowns
- **Footer** - Links, newsletter, certifications

Page navigation uses React state (`Page` enum) via `currentPage` and `renderPage()` switch.

### Data Layer
- [types.ts](types.ts) - TypeScript interfaces: `Guide`, `Package`, `Product`, `TeamMember`, `BlogPost`, `Testimonial`, `Page` enum
- [constants.ts](constants.ts) - Static data arrays: `GUIDES`, `PACKAGES`, `PRODUCTS`, `TEAM`, `BLOGS`, `TESTIMONIALS`

### Guide-Based Package System
Packages are linked to guides via `guideId`. The `GuidesSection` and `PackagesSection` work together:
- Clicking a guide card sets `selectedGuideId` state and navigates to Packages page
- PackagesSection has filter tabs showing guide avatars for filtering

### AI Chat Feature
- [components/ChatWidget.tsx](components/ChatWidget.tsx) - Floating chat widget with orange gradient theme
- [services/geminiService.ts](services/geminiService.ts) - Gemini API integration with Google Maps grounding tool

### Styling
Tailwind CSS via CDN in [index.html](index.html) with:
- Brand colors: orange gradient (#F97316 → #FBBF24), deep blue accent (#1E3A8A)
- Custom animations: float, fade-in-up, slide-in-right, bounce-soft
- Utility classes: `.gradient-text`, `.bg-brand-gradient`, `.hero-gradient`, `.glass`, `.card-hover`, `.img-zoom`, `.floating-label`

## Key Patterns

- All components defined inline in App.tsx for simplicity
- Guide selection state (`selectedGuideId`) passed between GuidesSection and PackagesSection
- Card hover effects use `.card-hover` and `.img-zoom` CSS classes
- Forms use `.floating-label` pattern for animated labels
- Chat widget uses loading dots animation during API calls
