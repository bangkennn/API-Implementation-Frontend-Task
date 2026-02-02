# Qubic Ball - Frontend Developer Hiring Task

A modern, elegant, and professional dashboard application built with Next.js, TypeScript, and Tailwind CSS v3. This project showcases best practices in frontend development with a focus on user experience, clean code, and responsive design.

---

## ✨ Features

### Core Features
- **Authentication System**: Mock authentication with protected routes
- **Dashboard**: Data fetching from JSONPlaceholder API with posts list
- **Post Details**: Individual post view with detailed information
- **Search Functionality**: Real-time search across posts
- **Pagination**: Navigate through posts with elegant pagination controls
- **Dark Mode**: Fully functional theme toggle with localStorage persistence
- **Responsive Design**: Mobile-first approach, works on all devices

### UI/UX Features
- **Elegant Design**: Sophisticated slate color palette with gradient accents
- **Smooth Animations**: Fade-in, slide-up, and scale-in animations
- **Loading States**: Skeleton loaders for better perceived performance
- **Error Handling**: Comprehensive error messages and empty states
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation

---

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** 18.x or later
- **npm** or **yarn** package manager
- **Git** for version control

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/bangkennn/API-Implementation-Frontend-Task.git
   cd frontend-task-qubic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The application will automatically reload when you make changes

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

### Test Credentials

For accessing the dashboard, use these demo credentials:

- **Email**: `demo@qubicball.com`
- **Password**: `demo123`

---

## 🛠️ Tech Stack Used

### Core Technologies
- **[Next.js 16.1.6](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 3.4.19](https://tailwindcss.com/)** - Utility-first CSS framework

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing

### API & Data
- **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)** - Fake REST API for testing
- **Context API** - State management for authentication

### Styling Approach
- **Mobile-first responsive design**
- **Dark mode support** with class-based theme switching
- **Custom animations** using CSS keyframes
- **Gradient accents** (Indigo → Purple)
- **Sophisticated color palette** (Slate tones)

---

## 📋 Assumptions Made

### Authentication
1. **Mock Authentication**: 
   - No backend API for authentication
   - Credentials are validated client-side only
   - Session persists in `localStorage`
   - Password is NOT stored in localStorage for security

2. **User Session**:
   - Session remains active until user logs out
   - Browser refresh maintains authentication state
   - No token expiration implemented (mock only)

### API Integration
1. **JSONPlaceholder API**:
   - Used as the data source for posts
   - No authentication required for API calls
   - API is always available (no offline handling)
   - Data is fetched client-side using `fetch` API

2. **Data Structure**:
   - Posts have: `id`, `userId`, `title`, `body`
   - All posts are publicly accessible
   - No create/update/delete operations (read-only)

### UI/UX Decisions
1. **Design Philosophy**:
   - Elegant and professional aesthetic prioritized
   - Generous whitespace for readability
   - Smooth animations for better UX (300ms transitions)
   - Dark mode as a core feature, not an afterthought

2. **Responsive Breakpoints**:
   - **Mobile**: < 640px
   - **Tablet**: 640px - 1024px
   - **Desktop**: > 1024px

3. **Pagination**:
   - 10 posts per page
   - Client-side pagination (all data fetched at once)
   - Scroll to top on page change

4. **Search**:
   - Real-time filtering (no debounce)
   - Searches in both title and body
   - Case-insensitive search
   - Resets to page 1 when searching

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features assumed to be supported
- No polyfills for older browsers
- WebP support for images (if used)

### Performance
1. **Optimization**:
   - Next.js automatic code splitting
   - Images optimized with Next.js Image component (if used)
   - CSS purged in production build
   - Minimal JavaScript bundle size

2. **Loading Strategy**:
   - Skeleton loaders during data fetching
   - No server-side rendering for posts (client-side fetch)
   - localStorage check on initial load

### Security
1. **Client-Side Only**:
   - No sensitive data stored
   - Mock credentials hardcoded (for demo purposes only)
   - No HTTPS requirement (development)
   - No CSRF protection needed (no backend)

2. **Best Practices**:
   - Password not stored in localStorage
   - Protected routes redirect unauthenticated users
   - Input validation on forms

---

## 📁 Project Structure

```
frontend-task-qubic/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   ├── posts/[id]/
│   │   │   │   └── page.tsx          # Post detail page
│   │   │   └── page.tsx               # Dashboard page
│   │   ├── login/
│   │   │   └── page.tsx               # Login page
│   │   ├── globals.css                # Global styles
│   │   ├── layout.tsx                 # Root layout
│   │   └── page.tsx                   # Landing page
│   ├── components/
│   │   ├── Pagination.tsx             # Pagination component
│   │   ├── PostCard.tsx               # Post card component
│   │   ├── PostCardSkeleton.tsx       # Loading skeleton
│   │   ├── ProtectedRoute.tsx         # Route protection
│   │   └── ThemeToggle.tsx            # Dark mode toggle
│   ├── contexts/
│   │   └── AuthContext.tsx            # Authentication context
│   └── types/
│       └── index.ts                   # TypeScript types
├── public/                            # Static assets
├── tailwind.config.ts                 # Tailwind configuration
├── tsconfig.json                      # TypeScript configuration
├── postcss.config.mjs                 # PostCSS configuration
├── next.config.ts                     # Next.js configuration
├── package.json                       # Dependencies
└── README.md                          # This file
```

---

## 🎨 Design System

### Color Palette

**Light Mode:**
- Background: Slate-50 → White gradient
- Text: Slate-900 (primary), Slate-600 (secondary)
- Cards: White with subtle shadows
- Borders: Slate-200
- Accent: Indigo-600 → Purple-600 gradient

**Dark Mode:**
- Background: Slate-950 → Slate-900 gradient
- Text: Slate-50 (primary), Slate-400 (secondary)
- Cards: Slate-900 with refined borders
- Borders: Slate-800
- Accent: Indigo-500 → Purple-500 gradient

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, tight tracking
- **Body**: Regular, optimized line height
- **Font Smoothing**: Antialiased

### Spacing
- Consistent spacing scale (4px base)
- Generous whitespace for readability
- Balanced padding and margins

---

## 🧪 Testing Instructions

### Manual Testing Checklist

1. **Landing Page** (`/`)
   - [ ] Page loads correctly
   - [ ] Features section displays
   - [ ] "Get Started" button works
   - [ ] "View Dashboard" button works
   - [ ] Authenticated users redirect to dashboard

2. **Login Page** (`/login`)
   - [ ] Form validates input
   - [ ] Demo credentials work
   - [ ] Invalid credentials show error
   - [ ] Loading state shows during login
   - [ ] Successful login redirects to dashboard
   - [ ] "Back to Home" button works

3. **Dashboard** (`/dashboard`)
   - [ ] Protected route (redirects if not authenticated)
   - [ ] Posts load correctly
   - [ ] Search filters posts in real-time
   - [ ] Pagination works correctly
   - [ ] Post cards display properly
   - [ ] "Read Full Article" links work
   - [ ] Logout button works
   - [ ] Theme toggle works

4. **Post Detail** (`/dashboard/posts/[id]`)
   - [ ] Post details load correctly
   - [ ] "Back to Dashboard" button works
   - [ ] Loading skeleton displays during fetch
   - [ ] Error handling works for invalid IDs

5. **Dark Mode**
   - [ ] Toggle switches theme instantly
   - [ ] All colors update correctly
   - [ ] Preference persists on refresh
   - [ ] Works on all pages

6. **Responsive Design**
   - [ ] Mobile view (< 640px)
   - [ ] Tablet view (640px - 1024px)
   - [ ] Desktop view (> 1024px)

---

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 📝 Notes

- This is a **frontend-only** application (no backend)
- Authentication is **mock** and for demonstration purposes only
- Data is fetched from **JSONPlaceholder** API
- **Dark mode** requires Tailwind CSS v3.x to function properly
- All dependencies are up-to-date as of January 2026

---

## 📄 License

This project is created for a hiring task and is not licensed for public use.

---

## 👨‍💻 Author

**Davian Putra Swardana**  
Frontend Developer  

**Contact**: [bangkennn29@gmail.com](mailto:bangkennn29@gmail.com)  
**GitHub**: [bangkennn](https://github.com/bangkennn)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [React Documentation](https://react.dev/)

---

**Built with ❤️ for Qubic Ball Hiring Task**
