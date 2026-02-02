# Development Guide

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun
- Git
- A code editor (VS Code recommended)

### Initial Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd frontend-task-qubic
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   
   Visit [http://localhost:3000](http://localhost:3000)

## Project Architecture

### Folder Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard routes
│   │   ├── posts/[id]/   # Dynamic post detail route
│   │   └── page.tsx      # Dashboard page
│   ├── login/            # Login page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles
├── components/           # Reusable React components
├── contexts/            # React Context providers
└── types/              # TypeScript type definitions
```

### Key Technologies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **React Context**: State management

## Authentication Flow

```
1. User visits app → Check localStorage for auth status
2. If not authenticated → Redirect to /login
3. User enters credentials → Validate against mock user
4. If valid → Store in localStorage + Context
5. Redirect to /dashboard
6. Protected routes check context before rendering
```

### Mock Credentials

Located in `src/contexts/AuthContext.tsx`:

```typescript
const MOCK_USER: User = {
  email: 'demo@qubicball.com',
  password: 'demo123'
};
```

## Data Flow

### Posts List (Dashboard)

```
1. Component mounts → useEffect triggers
2. Fetch all posts from JSONPlaceholder API
3. Store in state
4. Apply search filter if active
5. Paginate results (10 per page)
6. Render PostCard components
```

### Post Detail

```
1. User clicks "Read More"
2. Navigate to /dashboard/posts/[id]
3. Extract ID from URL params
4. Fetch single post by ID
5. Display in detail view
```

## State Management

### Authentication State

Managed by `AuthContext`:
- `isAuthenticated`: boolean
- `user`: User object or null
- `login()`: Validation function
- `logout()`: Clear state function

### Local State

Each page manages its own:
- Loading states
- Error states
- Data from API
- Search/filter values
- Current page number

## Styling Guide

### Color System

```css
/* Primary Colors */
--indigo-600: #4f46e5
--purple-600: #9333ea

/* Background (Light) */
--blue-50: #eff6ff
--indigo-50: #eef2ff
--purple-50: #faf5ff

/* Background (Dark) */
--gray-900: #111827
--gray-800: #1f2937
```

### Component Patterns

1. **Cards**: White bg, rounded-xl, shadow-lg
2. **Buttons**: Gradient bg, hover effects, shadows
3. **Inputs**: Border focus ring, transitions
4. **Skeletons**: Animated pulse effect

## Adding New Features

### Adding a New Page

1. Create file in `src/app/[route]/page.tsx`
2. Add ProtectedRoute wrapper if auth required
3. Import necessary components
4. Fetch data if needed
5. Handle loading/error states

### Adding a New Component

1. Create file in `src/components/ComponentName.tsx`
2. Define TypeScript interfaces for props
3. Export as default function
4. Use Tailwind classes for styling
5. Add proper documentation

### Adding API Integration

1. Define TypeScript types in `src/types/index.ts`
2. Create fetch function with try/catch
3. Handle loading state
4. Handle error state
5. Update UI with data

## Testing Locally

### Test Checklist

- [ ] Landing page loads correctly
- [ ] Login with valid credentials works
- [ ] Login with invalid credentials shows error
- [ ] Dashboard loads and shows posts
- [ ] Search functionality works
- [ ] Pagination works correctly
- [ ] Post detail page loads
- [ ] Theme toggle switches modes
- [ ] Logout clears session
- [ ] Protected routes redirect when not logged in
- [ ] Responsive on mobile/tablet
- [ ] No console errors

### Manual Testing Steps

1. **Authentication**
   ```
   → Try logging in without credentials
   → Try invalid credentials
   → Try valid credentials
   → Refresh page (should stay logged in)
   → Logout
   ```

2. **Dashboard**
   ```
   → Wait for posts to load
   → Check skeleton loaders appear
   → Try search feature
   → Navigate between pages
   → Click on a post
   ```

3. **Dark Mode**
   ```
   → Toggle dark mode on
   → Navigate between pages
   → Refresh (theme should persist)
   → Toggle back to light
   ```

## Common Issues

### Build Errors

**Issue**: TypeScript errors during build

**Solution**: 
```bash
# Check for type errors
npm run build

# Fix types in the reported files
```

### Runtime Errors

**Issue**: "window is not defined"

**Solution**: Use `'use client'` directive for client components

**Issue**: localStorage errors

**Solution**: Check if code runs only in browser (useEffect)

### Styling Issues

**Issue**: Tailwind classes not working

**Solution**: 
1. Check `tailwind.config.ts` includes correct paths
2. Restart dev server
3. Clear `.next` folder

## Code Quality

### TypeScript

- Always define types for props
- Use interfaces over types when possible
- Avoid `any` type
- Use proper return types

### React Best Practices

- Use functional components
- Implement proper error boundaries
- Handle loading states
- Avoid prop drilling (use Context)
- Clean up effects properly

### Tailwind CSS

- Use design system colors
- Maintain consistent spacing
- Mobile-first approach
- Group related classes
- Use @apply sparingly

## Performance Optimization

### Current Optimizations

- ✅ Skeleton loaders for better perceived performance
- ✅ Client-side pagination (no excess API calls)
- ✅ Proper React key props
- ✅ Optimized bundle with Next.js

### Future Improvements

- Add React.memo for expensive components
- Implement API response caching
- Add image optimization
- Implement virtual scrolling for large lists

## Environment Setup

### VS Code Extensions (Recommended)

- ESLint
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)
- Prettier

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Git Workflow

1. **Feature Branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. **Push**
   ```bash
   git push origin feature/new-feature
   ```

4. **Create Pull Request**

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

Happy coding! 🚀
