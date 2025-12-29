# Guildify Landing Page

Modern landing page for Guildify - The Future of Guild Management

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Context API** - State management

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── FeaturesSection.tsx
│   ├── AudienceSection.tsx
│   ├── AboutSection.tsx
│   ├── RoadmapSection.tsx
│   ├── WaitlistSection.tsx
│   └── Footer.tsx
├── context/               # Context API providers
│   └── AppContext.tsx
└── public/               # Static assets
```

## Features

- ✅ Server-side rendering with Next.js
- ✅ Responsive design with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ State management with Context API
- ✅ TypeScript for type safety
- ✅ Dark mode optimized

## Build

```bash
npm run build
```

## Deploy

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
npm run start
```

## License

ISC
