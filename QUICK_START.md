# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd apna-construction
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Key Files to Customize

### Company Information
- **`src/lib/constants.ts`**: Update company name, contact info, services, and navigation links

### Styling
- **`src/app/globals.css`**: Customize global styles and theme colors
- **Tailwind Config**: Modify `tailwind.config.ts` for custom design system

### Pages
- **Home**: `src/app/page.tsx`
- **About**: `src/app/about/page.tsx`
- **Services**: `src/app/services/page.tsx`
- **Contact**: `src/app/contact/page.tsx`
- **Projects**: `src/app/projects/page.tsx`

### Components
- **Header**: `src/components/layout/Header.tsx`
- **Footer**: `src/components/layout/Footer.tsx`
- **Hero**: `src/components/features/Hero.tsx`

## 🔌 API Endpoints

### Contact Form
- **Endpoint**: `POST /api/contact`
- **Body**: `{ name, email, phone, message, service? }`
- **Status**: Currently logs to console (add database/email integration)

### Services
- **Endpoint**: `GET /api/services`
- **Returns**: List of services from constants

### Projects
- **Endpoint**: `GET /api/projects`
- **Returns**: Sample projects (replace with database)

## 🛡️ Error Handling

The project includes three error handlers:

1. **404 Page** (`app/not-found.tsx`): Shows when page not found
2. **Error Boundary** (`app/error.tsx`): Catches runtime errors
3. **Global Error** (`app/global-error.tsx`): Catches root layout errors

## 🎨 Customization Tips

1. **Update Colors**: Modify Tailwind classes in components (blue-600, gray-800, etc.)
2. **Add Images**: Place images in `public/` folder and reference them
3. **Add More Services**: Update `SERVICES` array in `src/lib/constants.ts`
4. **Modify Navigation**: Update `NAVIGATION_LINKS` in `src/lib/constants.ts`

## 📝 Environment Variables

Create `.env.local` for:
- Database connection
- Email service credentials
- API keys
- Site URL

## ✅ What's Included

- ✅ Next.js 16 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Error Handling (404, 500, Error Boundary)
- ✅ Responsive Design
- ✅ Contact Form with Validation
- ✅ API Routes Structure
- ✅ Component Architecture
- ✅ Type Safety

## 🔄 Next Steps

1. Add database connection
2. Implement email notifications
3. Add image upload
4. Connect to CMS (optional)
5. Add analytics
6. Deploy to production

