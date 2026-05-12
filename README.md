# Fasonly Project Documentation

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
- [Features](#features)
- [Components Architecture](#components-architecture)
- [Pages Overview](#pages-overview)
- [Styling & Design](#styling--design)
- [Contributing Guidelines](#contributing-guidelines)

---

## Overview

**Fasonly** is a modern web application built with **Next.js 16** and **React 19** that serves as a digital presence for a manufacturing and production company. The platform showcases professional manufacturing services including CNC machining, sheet metal production, 3D printing, and specialized manufacturing solutions for various industries.

### Key Information

- **Company Name:** Fasonly
- **Tagline:** "New Generation Production"
- **Version:** 0.1.0
- **Main Purpose:** Manufacturing services showcase and client engagement platform

---

## Project Structure

```
fasonly/
├── app/
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── (landing)/               # Landing page group (file-based routing)
│       ├── layout.tsx           # Landing layout
│       ├── page.tsx             # Home/landing page
│       ├── about/
│       │   └── page.tsx         # About page
│       ├── contact/
│       │   └── page.tsx         # Contact page
│       ├── gallery/
│       │   └── page.tsx         # Gallery page
│       ├── mission/
│       │   └── page.tsx         # Mission page
│       ├── pricing/
│       │   └── page.tsx         # Pricing page
│       ├── reviews/
│       │   └── page.tsx         # Reviews/testimonials page
│       └── services/
│           └── page.tsx         # Services page
├── component/
│   ├── Portal.tsx               # Portal component (likely for modals/portals)
│   ├── dashboard/               # Dashboard components
│   ├── landing/
│   │   ├── Footer.tsx           # Footer component
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Hero.tsx             # Hero section
│   │   └── License.tsx          # License section
│   └── UI/
│       └── Buttons.tsx          # Reusable button components
├── public/
│   └── Assets/
│       ├── Fonts/               # Custom fonts
│       └── Images/
│           ├── brands/          # Brand logos
│           ├── gallery/         # Gallery images and icons
│           ├── members/         # Team member photos
│           ├── parts/           # Product/parts images
│           ├── pricing/         # Pricing section images
│           ├── reviews/         # Review/testimonial images
│           ├── samples/         # Sample images
│           ├── sectors/         # Industry sector images
│           └── services/        # Service icons/images
├── package.json                 # Project dependencies
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
├── eslint.config.mjs           # ESLint configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # Project readme
```

---

## Technology Stack

### Core Framework

- **Next.js 16.2.4** - React framework with built-in SSR, SSG, and API routes
- **React 19.2.4** - UI library
- **React DOM 19.2.4** - DOM rendering

### Styling

- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS 4** - CSS processing
- **Geist Fonts** - Custom fonts (Geist Sans & Geist Mono)

### UI Components & Icons

- **Lucide React 1.14.0** - Lightweight icon library
- **React Icons 5.6.0** - Additional icon sets

### Development Tools

- **TypeScript 5** - Static type checking
- **ESLint 9** - Code linting
- **Node 20+** - Runtime environment

---

## Installation & Setup

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Steps

1. **Clone the repository** (if applicable)

   ```bash
   git clone <repository-url>
   cd fasonly
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables** (if needed)
   Create a `.env.local` file in the root directory with any required environment variables.

4. **Verify Setup**
   ```bash
   npm run lint
   ```

---

## Running the Project

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Linting

```bash
npm run lint
```

---

## Features

### 1. **Service Showcase**

- CNC Machining (CNC İşleme)
- Sheet Metal Production (Sac Metal Üretim)
- 3D Printing (3D Baskı)
- Assembly and Finishing (Montaj ve Bitirme)
- Functional Prototyping (Fonksiyonel Prototipler)

### 2. **Industry Solutions**

- Aerospace & Defense (Havacılık & Savunma)
- Automotive (Otomotiv)
- Consumer Electronics (Tüketici Elektroniği)
- Medical Technologies (Medikal Teknolojiler)

### 3. **Interactive Components**

- Accordion-based FAQ/process flow
- Brand carousel/slider (infinite scroll)
- Service cards with hover effects
- Mobile-responsive navigation header
- Contact form in footer
- Testimonials/reviews section

### 4. **Multi-language Support**

- Content is primarily in Turkish (target market)
- Structure supports English translations

### 5. **Performance Features**

- Next.js Image optimization
- Server-side rendering (SSR)
- Static site generation (SSG)
- Responsive design
- Scroll-aware header (hides on scroll down, shows on scroll up)

---

## Components Architecture

### Page Structure (App Router)

```
RootLayout (app/layout.tsx)
    └── LandingLayout (app/(landing)/layout.tsx)
            ├── Home Page (/)
            ├── About Page (/about)
            ├── Services Page (/services)
            ├── Pricing Page (/pricing)
            ├── Gallery Page (/gallery)
            ├── Reviews Page (/reviews)
            ├── Mission Page (/mission)
            └── Contact Page (/contact)
```

### Key Components

#### **Header.tsx**

- Sticky navigation with scroll-based visibility
- Mobile hamburger menu
- Dropdown navigation for services
- Responsive design for mobile/desktop
- Features:
  - Toggle menu state
  - Dropdown state management
  - Scroll event listener
  - Brand logo display

#### **Hero.tsx**

- Main landing section with featured content
- Service cards carousel
- Brand logos infinite slider
- Hover state management
- Features:
  - Draggable carousel
  - Multiple slides
  - Dynamic hover effects
  - Brand logos rotation

#### **Footer.tsx**

- Contact information section
- Contact form with validation
- Multiple form fields
- Blue gradient background effect
- Features:
  - Email and name input fields
  - Message textarea
  - Form submission (structure ready)
  - Responsive layout

#### **License.tsx**

- License information component

#### **Buttons.tsx**

- Reusable button component with themes
- Props:
  - `title` (string) - Button text
  - `url` (string) - Link destination
  - `theme` (enum) - "GreenToBlue" or "BlueToGreen"
  - `style` (optional string) - Additional CSS classes
- Two color themes:
  - Green to Blue gradient on hover
  - Blue to Green gradient on hover

### UI Library Components

Located in `component/UI/` - Reusable UI elements following React best practices.

---

## Pages Overview

### Home Page (`/`)

**Content:**

- Hero section with featured services
- 4-step process visualization
- Industry sectors showcase
- Accordion FAQ section
- Brand logos slider
- Services overview

**Turkish Content Highlights:**

- "Ürün Yaşam Döngüsünün Tamamında Destek" (Full product lifecycle support)
- Hızlı Prototipleme (Fast Prototyping)
- Kısa Süreli ve Esnek Üretim (Short-term and Flexible Production)

### About Page (`/about`)

**Content:**

- Company features and advantages
- Team/capabilities showcase
- Process workflows
- Production capabilities overview
- Feature cards with icons

### Services Page (`/services`)

**Content:**

- Detailed service offerings
- Service card layout with descriptions
- Industry applications
- Service features and benefits

### Pricing Page (`/pricing`)

**Purpose:** Pricing information and package options

### Gallery Page (`/gallery`)

**Purpose:** Portfolio and project showcase

### Reviews Page (`/reviews`)

**Purpose:** Client testimonials and case studies

### Mission Page (`/mission`)

**Purpose:** Company mission and values

### Contact Page (`/contact`)

**Purpose:** Contact information and inquiry form

---

## Styling & Design

### Color Scheme

- **Primary Green:** `#96E92A` - Accent color for CTAs
- **Primary Blue:** `#0099ff` - Main color for interactive elements
- **Dark Background:** `#0B1221` - Primary background color
- **Light Background:** `#F0F8FF` - Section backgrounds
- **Grays:** Various opacity levels for text and borders

### Typography

- **Font Family:** Geist (Sans & Mono variants)
- **Font Scales:** Responsive sizing for different screen sizes

### Layout System

- **Container:** `container mx-auto` with responsive padding
- **Grid System:** Tailwind CSS grid utilities
- **Breakpoints:**
  - Mobile: base styles
  - Tablet: `md:` (768px)
  - Desktop: `lg:` (1024px)

### Responsive Design

- Mobile-first approach
- Flex layouts for alignment
- Hamburger menu for mobile navigation
- Responsive text sizing
- Responsive padding/margins

---

## Key Development Patterns

### State Management

- React hooks (`useState`, `useRef`, `useEffect`)
- Local component state for UI interactions
- Custom scroll behavior handling

### Client-Side Interactivity

```tsx
"use client"; // Enable client-side rendering for interactive components
```

### Conditional Rendering

- Accordion items toggled by state
- Dropdown menus based on hover/click
- Responsive layouts (mobile vs desktop)

### Event Handling

- Mouse events (hover, click)
- Scroll events (header visibility)
- Drag events (carousel navigation)

---

## Asset Organization

### Images Folder Structure

```
public/Assets/Images/
├── brands/          # Client/partner logos (mechanimix, antgroup, ANTEK, etc.)
├── gallery/
│   └── icons/       # Icon assets
├── members/         # Team member photos
├── parts/           # CNC.png, metal.png, 3d.png, etc.
├── pricing/         # Pricing section imagery
├── reviews/         # Testimonial images
├── samples/         # Sample work images
├── sectors/         # Industry sector images (1-4.png for different industries)
└── services/        # Service icons and illustrations
```

---

## Code Quality

### ESLint Configuration

- Linting setup using ESLint 9
- Next.js recommended rules

### TypeScript Configuration

- Strict mode enabled
- Path aliases configured (`@/*` maps to root directory)
- Proper type definitions for React 19

---

## Contributing Guidelines

### Code Style

1. Use TypeScript for type safety
2. Follow Tailwind CSS utility patterns
3. Use React hooks for state management
4. Implement `"use client"` only where needed for interactivity
5. Maintain component modularity

### Component Creation

1. Create new components in appropriate folders (`component/landing/`, `component/UI/`, etc.)
2. Export components as named or default exports
3. Use TypeScript interfaces for props
4. Document component props and usage

### Best Practices

- Keep components focused and single-responsibility
- Reuse existing components and utilities
- Use semantic HTML
- Optimize images with Next.js Image component
- Implement proper accessibility (ARIA labels, semantic markup)

---

## Deployment

The project is ready for deployment on platforms that support Next.js:

- **Vercel** (recommended - built by Next.js creators)
- **Netlify**
- **Traditional Node.js servers**
- **Docker containers**

### Build Output

```bash
npm run build
# Creates: .next/ directory with optimized production build
```

---

## Future Enhancement Opportunities

1. Add CMS integration for content management
2. Implement customer inquiry/order system
3. Add payment processing
4. Integrate analytics (Google Analytics, Mixpanel)
5. Add email notification system
6. Implement user authentication
7. Create admin dashboard
8. Add real-time production tracking
9. Internationalization (i18n) setup
10. API routes for backend functionality

---

## Support & Maintenance

For questions or issues:

1. Check existing code patterns
2. Review TypeScript types
3. Verify Tailwind CSS utilities
4. Test responsive design on multiple devices
5. Run linter before committing

---

**Last Updated:** May 2026
**Version:** 0.1.0
**Status:** Active Development
**Developer:** uixreza.ir
