# Simply Fit - Technical Documentation

## 🛠 Tech Stack Overview

### Frontend
- **Framework**: Next.js 14
  - React-based framework
  - Server-side rendering (SSR)
  - Static site generation (SSG)
  - API routes
- **Styling**: Tailwind CSS
  - Utility-first CSS framework
  - Custom configuration
  - Responsive design
- **Type Safety**: TypeScript
  - Static type checking
  - Interface definitions
  - Type safety

### Backend
- **CMS**: Sanity.io
  - Headless CMS
  - Real-time content updates
  - Custom content models
  - Image optimization
- **Authentication**: Clerk.dev
  - User management
  - Social login
  - Session handling
  - Security features

### Deployment
- **Hosting**: Vercel
  - Serverless deployment
  - Automatic builds
  - Edge functions
  - Analytics integration

## 📁 Project Structure

```
simply-fit/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── (auth)/           # Authentication routes
│   ├── blog/             # Blog pages
│   ├── events/           # Event pages
│   └── shop/             # Shop pages (future)
├── components/            # React components
│   ├── ui/               # UI components
│   ├── layout/           # Layout components
│   └── features/         # Feature components
├── lib/                  # Utility functions
├── styles/               # Global styles
├── types/                # TypeScript types
├── public/               # Static assets
└── sanity/               # Sanity CMS configuration
```

## 🔧 Key Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@clerk/nextjs": "^4.0.0",
    "@sanity/client": "^6.0.0",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.0.0"
  }
}
```

## 🗄️ Data Models

### Event Model
```typescript
interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: {
    city: string;
    venue: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  type: 'marathon' | 'half-marathon' | '10k' | '5k';
  distance: number;
  registrationLink: string;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Blog Post Model
```typescript
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: any; // Sanity Portable Text
  author: {
    name: string;
    image: string;
  };
  publishedAt: Date;
  categories: string[];
  tags: string[];
  featuredImage: {
    url: string;
    alt: string;
  };
}
```

## 🔐 Authentication Flow

1. **User Registration**
   - Email/password signup
   - Social login options
   - Email verification

2. **User Session**
   - JWT-based authentication
   - Secure session management
   - Role-based access control

3. **Protected Routes**
   - Authentication middleware
   - Route protection
   - Role verification

## 📱 API Endpoints

### Events API
```typescript
// GET /api/events
// GET /api/events/[id]
// POST /api/events (admin only)
// PUT /api/events/[id] (admin only)
// DELETE /api/events/[id] (admin only)
```

### Blog API
```typescript
// GET /api/blog
// GET /api/blog/[slug]
// POST /api/blog (admin only)
// PUT /api/blog/[slug] (admin only)
// DELETE /api/blog/[slug] (admin only)
```

## 🎨 Styling System

### Tailwind Configuration
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4B2B',
          dark: '#FF3B1B',
          light: '#FF5B3B',
        },
        secondary: {
          DEFAULT: '#2B2B2B',
          dark: '#1B1B1B',
          light: '#3B3B3B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
}
```

## 🔄 State Management

- React Context for global state
- Local state with useState
- Server state with SWR/React Query

## 📊 Performance Optimization

1. **Image Optimization**
   - Next.js Image component
   - Sanity image pipeline
   - Responsive images
   - Lazy loading

2. **Code Splitting**
   - Dynamic imports
   - Route-based splitting
   - Component-level splitting

3. **Caching Strategy**
   - Static page generation
   - Incremental Static Regeneration
   - API response caching

## 🔍 SEO Implementation

1. **Meta Tags**
   - Dynamic title and description
   - Open Graph tags
   - Twitter cards

2. **Structured Data**
   - Event schema
   - Blog post schema
   - Organization schema

## 🧪 Testing Strategy

1. **Unit Tests**
   - Jest for component testing
   - React Testing Library
   - API route testing

2. **Integration Tests**
   - End-to-end testing
   - User flow testing
   - API integration testing

## 📈 Monitoring and Analytics

1. **Error Tracking**
   - Error boundary implementation
   - Error logging
   - Performance monitoring

2. **Analytics**
   - Google Analytics
   - Custom event tracking
   - User behavior analysis

## 🔒 Security Measures

1. **Authentication**
   - JWT token validation
   - CSRF protection
   - Rate limiting

2. **Data Protection**
   - Input sanitization
   - XSS prevention
   - SQL injection protection

## 🚀 Deployment Process

1. **Build Process**
   ```bash
   npm run build
   npm run start
   ```

2. **Environment Variables**
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=
   NEXT_PUBLIC_SANITY_DATASET=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   ```

## 📝 Development Guidelines

1. **Code Style**
   - ESLint configuration
   - Prettier formatting
   - TypeScript strict mode

2. **Git Workflow**
   - Feature branches
   - Pull request reviews
   - Semantic versioning

## 🔧 Troubleshooting

Common issues and solutions:
1. Build errors
2. Authentication issues
3. CMS connection problems
4. Deployment failures

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Clerk.dev Documentation](https://clerk.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

*This technical documentation is a living document and will be updated as the project evolves.* 