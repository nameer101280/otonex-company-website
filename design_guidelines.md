# CloudForge Solutions - Design Guidelines

## Design Philosophy
**Minimal • Modern • Professional**

A clean, minimal aesthetic that emphasizes clarity and professionalism. Inspired by contemporary SaaS and B2B tech companies with focus on readability, generous whitespace, and subtle visual hierarchy.

## Typography
**Font Families:**
- Headlines: Space Grotesk (Bold/Semibold) - Modern, technical aesthetic
- Body: Inter (Regular/Medium) - Clean, highly readable
- Code/Technical: Fira Code (for technical references)

**Hierarchy:**
- Hero headline: text-5xl to text-7xl (desktop), text-4xl (mobile)
- Section headers: text-4xl to text-5xl
- Service titles: text-2xl to text-3xl
- Body text: text-base to text-lg
- Captions: text-sm

**Character:**
- Tight letter spacing for headlines (tracking-tight)
- Medium weight for emphasis without heaviness
- Generous line height for readability (leading-relaxed)

## Color Palette
**Neutral Foundation:**
- Light mode: Clean whites and soft grays
- Dark mode: Deep slate with subtle blue undertones
- Minimal use of color - only for primary actions and key highlights

**Accent Usage:**
- Primary: Used sparingly for CTAs and key metrics
- Muted backgrounds for cards and sections
- High contrast for accessibility
- Subtle gradients only in hero section

## Layout System
**Spacing Philosophy:** Generous whitespace, breathing room between elements
- Section padding: py-20 to py-32 (ample vertical space)
- Max-width: max-w-7xl for content, max-w-4xl for text-heavy sections
- Grid gaps: gap-8 to gap-12 for comfortable separation
- Component internal padding: Consistent across all cards/sections

**Responsive Breakpoints:**
- Mobile-first approach
- Single column on mobile, 2-3 columns on desktop
- Flexible grids that adapt gracefully

## Core Components

### Hero Section
Centered, text-focused design:
- Large, bold headline with gradient accent on key words
- Concise value proposition (1-2 sentences)
- Service tags as pills/badges
- Dual CTAs (primary + outline)
- Key statistics grid (3 columns)
- Minimal decorative elements - focus on typography

### Services Section
Grid of service cards (3 columns desktop, 1 mobile):
- Icon in subtle background circle
- Service name and description
- Feature list with checkmarks
- Small badge highlighting key benefit
- Subtle hover effect (lift/shadow)
- No heavy borders - rely on background contrast

### About Section
Two-column layout (image + content):
- Clean image presentation with subtle rounding
- Mission/expertise/approach in 3-card grid
- Icons to represent each pillar
- Text-focused with ample spacing

### Team Section
Featured team member card:
- Split layout: image + bio/achievements
- Professional photo
- Achievement highlights with bullet points
- Contact links (LinkedIn, email)
- Credentials section

### Projects Section
Grid showcase (2-3 columns):
- Large project images
- Minimal text overlay or below
- Technology tags
- Clean, consistent card structure

### Contact Section
Centered, organized information:
- Contact methods in 2-column grid
- Icons for each contact method
- Primary CTA for consultation
- Footer with copyright

## Navigation
Minimal sticky header:
- Company name (left)
- Nav links (right) - horizontal spacing
- Theme toggle
- Semi-transparent backdrop with blur on scroll
- No visible border - use subtle shadow or background

## Visual Elements
**Minimalism Guidelines:**
- Avoid heavy shadows - use subtle elevation only
- Rounded corners: rounded-lg (consistent)
- Icons: Outline style, not filled
- No busy patterns or textures
- Generous negative space
- Subtle hover states (slight lift, no color change)

**What NOT to do:**
- Heavy drop shadows
- Multiple bright colors
- Dense layouts
- Decorative illustrations
- Busy backgrounds
- Excessive gradients

## Images
- High-quality professional photos
- Consistent treatment (rounded corners)
- Proper aspect ratios
- No filters or heavy processing
- Clean, professional aesthetic

## Overall Aesthetic
Clean, minimal, professional with modern sophistication. Think: Linear, Vercel, Stripe - companies that use whitespace effectively and let content breathe. Every element should have a purpose. Remove anything that doesn't add value.
