# S58 Coffee - Official Website

A modern, responsive website for S58 Coffee - a premium artisan coffee shop located in Salwa, Riyadh, Saudi Arabia.

![Next.js](https://img.shields.io/badge/next.js-16.0-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/react-19.2-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-4.1-38B2AC?style=flat-square&logo=tailwind-css)

## 🎯 Features

- **Bilingual Support** - Arabic and English content throughout
- **Responsive Design** - Mobile-first, works on all devices
- **Modern UI** - Beautiful and intuitive user interface
- **Menu Management** - Detailed menu with prices in SR
- **Location Map** - Google Maps integration with real location
- **Contact Form** - Easy way for customers to reach out
- **Gallery** - Showcase coffee shop images
- **About Page** - Tell your story
- **Fast Loading** - Optimized with Next.js Turbopack

## 📋 Pages

- **Home** - Hero section with features and highlights
- **Menu** - Complete menu with drinks and smoothies
- **About** - Story and values of S58 Coffee
- **Location** - Address, hours, contact info, and map
- **Gallery** - Photo gallery of the coffee shop

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/s58-coffee-website.git
cd s58-coffee-website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm run start
# or
pnpm build
pnpm start
```

## 🛠️ Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── gallery/           # Gallery page
│   ├── location/          # Location page
│   ├── menu/              # Menu page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── footer.tsx         # Footer component
│   ├── navigation.tsx     # Navigation bar
│   ├── theme-provider.tsx # Theme provider
│   └── ui/               # UI components
├── public/
│   └── images/           # Static images
├── lib/                  # Utility functions
└── hooks/               # Custom React hooks
```

## 🎨 Customization

### Colors & Theme
Edit the color variables in your CSS or Tailwind configuration.

### Menu Items
Update menu items in `app/menu/page.tsx` in the `menuCategories` array.

### Hours & Location
Modify opening hours and location in `app/location/page.tsx`.

### Content
Update text and images throughout the pages to match your branding.

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Breakpoints** - sm, md, lg, xl responsive sizes
- **Touch Friendly** - Easy navigation on touchscreens

## 🔗 Links & Contact

- **Website**: s58coffee.com (update as needed)
- **Snapchat**: @s58coffee
- **Location**: شارع الكورنيش، سلوى، الرياض 36620
- **Hours**: 12 PM - 5 AM Daily

## 📄 License

This project is private and belongs to S58 Coffee. All rights reserved.

## 👥 Contributing

For contributions or updates, please contact the S58 Coffee team.

---

Made with ☕ and ❤️ by the S58 Coffee team
