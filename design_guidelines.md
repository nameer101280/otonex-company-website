# Portfolio Website Design Guidelines

## Design Approach
**Reference-Based Approach** inspired by leading creative portfolio sites (Awwwards winners, Dribbble, Behance showcases) combined with minimalist agency aesthetics. Focus on creating a memorable first impression while maintaining professional credibility.

## Typography
**Font Families:**
- Headlines: Inter or Sora (Bold/Semibold) - Modern, geometric sans-serif
- Body: Inter or System UI (Regular/Medium) - Clean, highly readable
- Accent: Space Grotesk (for project titles) - Distinctive character

**Hierarchy:**
- Hero headline: text-6xl to text-8xl (desktop), text-4xl (mobile)
- Section headers: text-4xl to text-5xl
- Project titles: text-2xl to text-3xl
- Body text: text-base to text-lg
- Captions/metadata: text-sm

## Layout System
**Spacing Framework:** Tailwind units of 4, 8, 12, 16, 20, and 24 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12 for grids
- Content max-width: max-w-7xl with mx-auto

## Core Components

### Hero Section
Full-viewport impact with split layout:
- Left: Large professional photo (60% width) - high-quality headshot or environmental portrait
- Right: Name (extra large), current role/tagline, 3-4 key specialties, primary CTA button ("View Projects")
- Subtle scroll indicator at bottom

### Projects Showcase
Masonry grid layout (2 columns on desktop, 1 on mobile):
- Each project card: Large preview image/mockup, project title, brief description (2-3 lines), technology tags, "View Details" link
- Hover: Subtle lift effect (translate-y-2)
- Cards have varied heights based on content
- 6-8 featured projects displayed

### Experience Timeline
Vertical timeline with alternating content:
- Timeline line running down center on desktop, left-aligned on mobile
- Each entry: Company logo placeholder, role title, duration, 3-4 bullet points of achievements
- Use dots/circles as timeline markers
- 4-5 experience entries

### Skills Section
Multi-category grid (3 columns desktop, 1 mobile):
- Categories: "Languages & Frameworks", "Tools & Platforms", "Soft Skills"
- Each skill as pill/badge with icon
- Group 5-7 skills per category

### About Section
Single-column centered content (max-w-4xl):
- Professional photo (different from hero, casual/workspace setting)
- 3-4 paragraph narrative about background, approach, interests
- Key stats in 3-column grid: "Years Experience", "Projects Completed", "Happy Clients"

### Contact Section
Clean, focused design:
- Large heading "Let's Work Together"
- Email address as prominent link
- Social media icons (LinkedIn, GitHub, Twitter/X, Dribbble) - large, well-spaced
- Optional: Simple contact form (Name, Email, Message fields)
- Footer with copyright and "Back to Top" link

## Images

**Required Images:**
1. **Hero Image**: Professional portrait or environmental shot - high resolution, well-lit, showing personality (right side of split hero, ~800x1000px minimum)
2. **About Section Image**: Casual workspace/lifestyle photo showing you in element (~600x800px)
3. **Project Screenshots**: 6-8 high-quality mockups or screenshots of work (various sizes for masonry, minimum 1200px wide)
4. **Company Logos** (optional): For experience timeline - small, ~100x100px

**Image Treatment:**
- Subtle rounded corners (rounded-lg to rounded-xl)
- All images should have proper aspect ratios maintained
- Project images can include device mockups (laptop/phone frames)

## Navigation
Sticky header with:
- Name/logo (left)
- Links: About, Projects, Experience, Skills, Contact (right, horizontal on desktop)
- Hamburger menu on mobile
- Smooth scroll to sections on click
- Semi-transparent backdrop blur when scrolled

## Additional Elements
- Subtle gradient overlays on hero section for depth
- Micro-interactions: Button hover states, card lifts, smooth transitions
- Section dividers: Generous whitespace, no visible lines
- Loading state: Simple fade-in animations for content sections

**Overall Aesthetic:** Modern, clean, professional with creative touches. Emphasize whitespace and readability while showcasing work prominently. Design should feel sophisticated but approachable.