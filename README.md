# Marshall Strength Coaching - Funnel Page

A high-converting funnel page for an online gym/bodybuilding coaching business built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Dark, Premium Design**: Pure black, white, and neutral greys with bold typography
- **Fully Responsive**: Mobile-first design optimized for 390px width and up
- **7 Key Sections**:
  1. Sticky Navigation with smooth backdrop blur
  2. Hero with two-column layout and quick application form
  3. Social Proof with client results and stats
  4. Program Breakdown with feature cards
  5. Pricing Section with detailed offer
  6. FAQ Accordion
  7. Final Application Form CTA
- **Smooth Interactions**: Scroll-to-section navigation, hover effects, transitions
- **shadcn/ui Components**: Button, Card, Input, Select, Accordion, Badge

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui components**
- **Radix UI primitives**
- **Lucide React icons**

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
gym/
├── app/
│   ├── globals.css          # Global styles with dark theme variables
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main funnel page
├── components/
│   └── ui/                   # shadcn/ui components
│       ├── accordion.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── select.tsx
├── lib/
│   └── utils.ts              # Utility functions
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Customization

### Colors

The dark theme is configured in `app/globals.css` using CSS variables. All colors use the neutral/black/white palette.

### Content

Edit `app/page.tsx` to customize:
- Brand name ("Marshall Strength Coaching")
- Pricing (£299/month)
- Client testimonials
- FAQ content
- Program features

### Components

All UI components are in `components/ui/` and can be customized with Tailwind classes or by modifying the component variants.

## Mobile Optimization

The design is mobile-first with responsive breakpoints:
- **Base**: 390px+ (mobile)
- **sm**: 640px+ (tablet)
- **md**: 768px+ (small desktop)
- **lg**: 1024px+ (desktop)
- **xl**: 1280px+ (large desktop)

All text sizes, spacing, and layouts adapt to ensure readability and usability across devices.

## License

This project is for demonstration purposes.
