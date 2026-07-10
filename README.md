# Zaheer JK — AI/ML Engineer Portfolio

A modern, premium portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animations
- **Lucide Icons**
- **Radix UI** — accessible primitives
- **EmailJS** — contact form
- **React Markdown** — blog posts

## Features

- Dark/Light mode (dark default)
- Responsive mobile-first design
- Animated hero with typing effect & particle background
- 18+ project pages with detailed case studies
- Skills page with progress bars & circular charts
- GitHub API integration
- Blog with Markdown support
- Command palette (`Ctrl+K` / `Cmd+K`)
- SEO optimized (sitemap, robots.txt, structured data)
- Accessible (ARIA labels, keyboard navigation, focus indicators)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and add your EmailJS credentials for the contact form:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Content Management

All content is stored in TypeScript data files under `src/data/`:

| File | Content |
|------|---------|
| `site.ts` | Site config, nav links, social links, stats |
| `about.ts` | Biography, education, timeline |
| `skills.ts` | Skill categories and levels |
| `projects.ts` | All project data |
| `experience.ts` | Work experience |
| `certifications.ts` | Certificates |
| `blog.ts` | Blog posts |
| `misc.ts` | Achievements, gallery, FAQs, testimonials |

Update these files to customize content without touching UI components.

## Deploy on Vercel

```bash
npm run build
```

Push to GitHub and import the repo in [Vercel](https://vercel.com).

## Project Structure

```
src/
├── app/           # Pages (App Router)
├── components/    # Reusable UI & layout components
├── data/          # Content data files
├── hooks/         # Custom React hooks
├── lib/           # Utilities & API helpers
├── types/         # TypeScript interfaces
└── utils/         # Helper functions
public/
├── images/        # Static images & placeholders
└── robots.txt
```

## License

MIT
