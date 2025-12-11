# Apna Construction

A modern Next.js application for a construction and service company.

## Project Structure

```
apna-construction/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/                # API routes
│   │   │   ├── contact/        # Contact form API
│   │   │   ├── services/       # Services API
│   │   │   └── projects/       # Projects API
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact page
│   │   ├── projects/           # Projects page
│   │   ├── services/           # Services page
│   │   ├── error.tsx           # Error boundary
│   │   ├── global-error.tsx    # Global error handler
│   │   ├── not-found.tsx       # 404 page
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/
│   │   ├── features/           # Feature components
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   └── ContactForm.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/                 # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       └── Textarea.tsx
│   ├── lib/                    # Utilities and helpers
│   │   ├── api-client.ts       # API client utilities
│   │   ├── constants.ts        # App constants
│   │   └── utils.ts            # Utility functions
│   └── types/                  # TypeScript types
│       └── index.ts
├── public/                     # Static assets
└── package.json
```

## Features

- ✅ Next.js 16 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Error Handling (404, 500, Error Boundary)
- ✅ Responsive Design
- ✅ Contact Form with Validation
- ✅ API Routes Structure
- ✅ Component-based Architecture

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Error Handling

The project includes comprehensive error handling:

- **404 Page** (`not-found.tsx`) - Handles page not found errors
- **Error Boundary** (`error.tsx`) - Catches runtime errors in the app
- **Global Error Handler** (`global-error.tsx`) - Catches errors in the root layout

## API Routes

- `/api/contact` - POST endpoint for contact form submissions
- `/api/services` - GET endpoint for services list
- `/api/projects` - GET endpoint for projects list

## Next Steps

1. Connect to a database (MongoDB, PostgreSQL, etc.)
2. Add authentication if needed
3. Implement email notifications for contact form
4. Add image upload functionality
5. Integrate with payment gateway if needed
6. Add analytics and tracking
7. Set up environment variables for sensitive data

## Environment Variables

Create a `.env.local` file for environment variables:

```env
# Database
DATABASE_URL=your_database_url

# Email
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# Other
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
