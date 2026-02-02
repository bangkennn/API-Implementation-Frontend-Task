# Qubic Ball - Frontend Developer Hiring Task

A modern, production-ready dashboard application built with Next.js, TypeScript, and Tailwind CSS, featuring authentication, API integration, and stunning UI/UX.

## 🚀 Live Demo

**Live Deployment**: [Coming Soon - Deploy to Vercel]

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Test Credentials](#test-credentials)
- [API Integration](#api-integration)
- [Assumptions Made](#assumptions-made)
- [Bonus Features](#bonus-features)
- [Screenshots](#screenshots)

## ✨ Features

### Core Features

#### 1. **Authentication (Mock)**
- ✅ Login page with email & password validation
- ✅ Frontend-only credential validation
- ✅ Login state stored in localStorage
- ✅ Protected authenticated routes
- ✅ Basic logout functionality

#### 2. **Dashboard**
- ✅ Fetch data from JSONPlaceholder API (`/posts` endpoint)
- ✅ Display list with pagination (10 items per page)
- ✅ Loading states with skeleton loaders
- ✅ Error handling with user-friendly messages

#### 3. **Detail Page**
- ✅ Navigate to detail view on item click
- ✅ Fetch individual post data by ID
- ✅ Beautiful article-style layout

### Bonus Features Implemented

- ✅ **Search/Filter Feature**: Real-time search by post title or content
- ✅ **Skeleton Loaders**: Beautiful loading animations for better UX
- ✅ **Dark Mode**: Full dark mode support with theme toggle
- ✅ **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- ✅ **Modern Animations**: Smooth transitions and hover effects
- ✅ **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: Fetch API
- **State Management**: React Context API
- **Storage**: localStorage for authentication persistence
- **Fonts**: Inter (Google Fonts)

## 🏁 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend-task-qubic
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
frontend-task-qubic/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   ├── posts/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx       # Post detail page
│   │   │   └── page.tsx               # Dashboard page
│   │   ├── login/
│   │   │   └── page.tsx               # Login page
│   │   ├── layout.tsx                 # Root layout with AuthProvider
│   │   ├── page.tsx                   # Landing page
│   │   └── globals.css                # Global styles
│   ├── components/
│   │   ├── Pagination.tsx             # Pagination component
│   │   ├── PostCard.tsx               # Post card component
│   │   ├── PostCardSkeleton.tsx       # Loading skeleton
│   │   ├── ProtectedRoute.tsx         # Route protection HOC
│   │   └── ThemeToggle.tsx            # Dark mode toggle
│   ├── contexts/
│   │   └── AuthContext.tsx            # Authentication context
│   └── types/
│       └── index.ts                   # TypeScript types
├── public/                            # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🔑 Test Credentials

Use these credentials to login:

- **Email**: `demo@qubicball.com`
- **Password**: `demo123`

> **Note**: This is a mock authentication system. The credentials are hardcoded in `src/contexts/AuthContext.tsx` for demonstration purposes only.

## 🌐 API Integration

This application uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a free fake API for testing and prototyping.

### Endpoints Used:

- **Get all posts**: `GET https://jsonplaceholder.typicode.com/posts`
- **Get single post**: `GET https://jsonplaceholder.typicode.com/posts/{id}`

### Features:
- ✅ Proper error handling for failed requests
- ✅ Loading states during data fetching
- ✅ Clean separation of concerns
- ✅ TypeScript types for API responses

## 🤔 Assumptions Made

1. **Authentication**: 
   - Mock authentication is sufficient (no real backend required)
   - Passwords are not stored in localStorage (only authentication status)
   - Session persists across page refreshes using localStorage

2. **Pagination**:
   - Fixed at 10 items per page
   - Client-side pagination (all posts fetched at once)
   - Page resets to 1 when searching

3. **Data Fetching**:
   - JSONPlaceholder API is always available
   - API responses match the expected TypeScript types
   - No need for request caching or optimization

4. **Routing**:
   - All routes except `/login` require authentication
   - Unauthenticated users are redirected to `/login`
   - Authenticated users on homepage are redirected to dashboard

5. **UI/UX**:
   - Modern design with gradient colors and animations
   - Dark mode is a bonus feature worth implementing
   - Mobile-first responsive design approach

6. **Browser Support**:
   - Modern browsers with ES6+ support
   - localStorage API available
   - CSS Grid and Flexbox support

## 🎨 Design Decisions

### Color Palette
- Primary: Indigo-600 to Purple-600 gradient
- Background: Blue-50 to Purple-50 gradient (light mode)
- Background: Gray-900 to Gray-800 gradient (dark mode)

### Typography
- Font Family: Inter (Google Fonts)
- Headings: Bold, large sizes for hierarchy
- Body: Regular weight, comfortable reading size

### Spacing & Layout
- Consistent padding/margin using Tailwind's spacing scale
- Grid layouts for responsive design
- Maximum width containers for readability

## 🎯 Evaluation Criteria Compliance

### ✅ UI Quality and Responsiveness
- Fully responsive design (mobile, tablet, desktop)
- Clean, modern interface with consistent styling
- Smooth animations and transitions

### ✅ State Management Correctness
- React Context API for authentication state
- Proper state updates and side effects
- localStorage persistence

### ✅ Code Cleanliness
- TypeScript for type safety
- Component-based architecture
- Clear separation of concerns
- Consistent code formatting

### ✅ API Integration Quality
- Proper error handling
- Loading states
- TypeScript types for API responses
- Clean async/await usage

## 📱 Screenshots

### Landing Page
![Landing Page](screenshots/landing.png)

### Login Page
![Login Page](screenshots/login.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Post Detail
![Post Detail](screenshots/detail.png)

### Dark Mode
![Dark Mode](screenshots/dark-mode.png)

## 🚀 Deployment

This project is ready to be deployed on:

- **Vercel** (Recommended)
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify**
  ```bash
  npm run build
  # Deploy the .next folder
  ```

- **Other platforms**
  - Build the project: `npm run build`
  - Start the server: `npm start`

## 📝 License

This project is created for a hiring assignment and is not licensed for commercial use.

## 👨‍💻 Author

Created as part of the Qubic Ball Frontend Developer Hiring Task.

---

**Note**: This is a demonstration project built according to the specifications provided in the hiring task briefing.
