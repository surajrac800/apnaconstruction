# Project Structure Guide

## 📁 Complete Folder Structure

```
apna-construction/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── api/                      # API Routes
│   │   │   ├── contact/
│   │   │   │   └── route.ts          # Contact form API endpoint
│   │   │   ├── services/
│   │   │   │   └── route.ts          # Services API endpoint
│   │   │   └── projects/
│   │   │       └── route.ts          # Projects API endpoint
│   │   ├── about/
│   │   │   └── page.tsx              # About page
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact page with form
│   │   ├── projects/
│   │   │   └── page.tsx              # Projects/Portfolio page
│   │   ├── services/
│   │   │   └── page.tsx              # Services listing page
│   │   ├── error.tsx                 # Error boundary (catches errors)
│   │   ├── global-error.tsx          # Global error handler
│   │   ├── not-found.tsx             # 404 page
│   │   ├── layout.tsx                # Root layout with Header/Footer
│   │   ├── page.tsx                  # Home page
│   │   ├── globals.css               # Global styles
│   │   └── favicon.ico               # Site favicon
│   │
│   ├── components/                   # React Components
│   │   ├── features/                 # Feature-specific components
│   │   │   ├── Hero.tsx              # Hero section component
│   │   │   ├── Services.tsx          # Services showcase component
│   │   │   └── ContactForm.tsx       # Contact form component
│   │   ├── layout/                   # Layout components
│   │   │   ├── Header.tsx            # Navigation header
│   │   │   └── Footer.tsx            # Site footer
│   │   └── ui/                       # Reusable UI components
│   │       ├── Button.tsx            # Button component
│   │       ├── Input.tsx             # Input field component
│   │       └── Textarea.tsx          # Textarea component
│   │
│   ├── lib/                          # Utilities & Helpers
│   │   ├── api-client.ts             # API request utilities
│   │   ├── constants.ts              # App constants (company info, services, etc.)
│   │   └── utils.ts                  # Utility functions (cn, validation, etc.)
│   │
│   └── types/                        # TypeScript Types
│       └── index.ts                  # Type definitions
│
├── public/                           # Static assets
│   └── [images, icons, etc.]
│
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript configuration
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── postcss.config.mjs                # PostCSS configuration
├── eslint.config.mjs                 # ESLint configuration
└── README.md                         # Project documentation
```

## 🎯 Component Organization

### Layout Components (`components/layout/`)
- **Header.tsx**: Main navigation with mobile menu
- **Footer.tsx**: Site footer with links and contact info

### Feature Components (`components/features/`)
- **Hero.tsx**: Homepage hero section
- **Services.tsx**: Services showcase grid
- **ContactForm.tsx**: Contact form with validation

### UI Components (`components/ui/`)
- **Button.tsx**: Reusable button with variants
- **Input.tsx**: Form input with label and error handling
- **Textarea.tsx**: Textarea with label and error handling

## 🔌 API Routes

### `/api/contact` (POST)
- Handles contact form submissions
- Validates input data
- Returns success/error responses

### `/api/services` (GET)
- Returns list of available services
- Can be extended to fetch from database

### `/api/projects` (GET)
- Returns list of projects/portfolio items
- Can be extended to fetch from database

## 🛡️ Error Handling

1. **404 Errors**: `app/not-found.tsx` - Custom 404 page
2. **Runtime Errors**: `app/error.tsx` - Error boundary for app errors
3. **Global Errors**: `app/global-error.tsx` - Catches root layout errors

## 📝 Pages

- **Home** (`/`): Hero + Services showcase
- **About** (`/about`): Company information
- **Services** (`/services`): Detailed services listing
- **Projects** (`/projects`): Portfolio/projects gallery
- **Contact** (`/contact`): Contact form and information

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Custom Colors**: Blue theme for construction company

## 🔧 Utilities

- **utils.ts**: Helper functions (cn, validation, formatting)
- **constants.ts**: App-wide constants (company info, navigation, services)
- **api-client.ts**: API request wrapper with error handling

## 📦 Dependencies

- **next**: Next.js framework
- **react**: React library
- **typescript**: Type safety
- **tailwindcss**: CSS framework
- **clsx**: Class name utility
- **tailwind-merge**: Merge Tailwind classes

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Build for production: `npm run build`
4. Start production: `npm start`

## 📋 Next Steps

1. Connect to database (MongoDB, PostgreSQL, etc.)
2. Add authentication if needed
3. Implement email notifications
4. Add image upload functionality
5. Set up environment variables
6. Add analytics
7. Deploy to production

