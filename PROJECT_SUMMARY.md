# SciLearn - Modern E-Learning Platform for Grade 6 Science

## Project Overview

SciLearn is a comprehensive, modern E-learning platform designed for Grade 6 students to learn about "Matter and Its Changes" (Chất và sự biến đổi của chất). Built with Next.js 16, Tailwind CSS, and shadcn/ui components, it features an interactive learning experience with an AI-powered chatbot tutor.

## Features

### 1. **Landing Page** (`/`)
- Eye-catching hero section with clear value proposition
- Feature highlights showcasing Interactive Lessons, AI Chatbot Support, and Progress Tracking
- Call-to-action buttons linking to dashboard
- Professional footer with company information
- Responsive design optimized for all devices

### 2. **Student Dashboard** (`/dashboard`)
- Welcome header with personalized greeting
- **Statistics Cards** showing:
  - Total Progress (45%)
  - Lessons Completed (2/5)
  - Learning Streak (5 days)
- **Course Card** displaying:
  - Visual representation with gradient background
  - Course title and Vietnamese description
  - Progress bar with percentage
  - Total and completed lesson counts
  - "Continue Learning" button
- **Recent Activity** section tracking student progress
  - Completed and in-progress lessons
  - Activity timestamps
  - Status badges

### 3. **Course Overview** (`/course/[id]`)
- **Lesson Navigation** sidebar showing all 5 lessons:
  1. Physical Properties of Matter (15 min, Beginner, Completed)
  2. States of Matter (18 min, Beginner, Completed)
  3. Physical Changes (20 min, Intermediate, Locked)
  4. Chemical Changes (22 min, Intermediate, Locked)
  5. Matter Quiz & Review (25 min, Intermediate, Locked)
- Visual indicators for completed lessons (checkmarks), in-progress (circles), and locked lessons
- Difficulty badges and time estimates
- **Progress Sidebar** showing:
  - Course completion percentage
  - Completed vs. remaining lesson counts
  - Course details (Grade 6, Science, Vietnamese language)
  - Course features checklist

### 4. **Interactive Lesson Page** (`/lesson/[id]`)
- **Lesson Content** with:
  - Comprehensive text explanations
  - Highlighted key examples in callout boxes
  - Information cards for important concepts
  - Interactive quick quiz sections
- **Learning Objectives** listed at the bottom
- **Navigation buttons** for previous/next lessons
- **AI Chatbot Sidebar** featuring:
  - ChatGPT-style interface fixed on the right
  - Message history display with auto-scrolling
  - Suggested example questions for new conversations
  - Text input field with send button
  - Simulated AI responses for interactive learning

### 5. **Interactive Quiz Page** (`/quiz/[id]`)
- **Quiz Header** showing question progress (e.g., "Question 1 of 5")
- **Progress bar** indicating quiz completion
- **Multiple-choice questions** with 4 options each:
  - Visual radio button selection
  - Instant feedback on correct/incorrect answers
  - Green highlighting for correct answers
  - Explanation cards for educational value
- **Navigation** with Previous/Next buttons
- **Results Page** showing:
  - Overall score with percentage
  - Pass/fail status with encouraging message
  - Detailed review of all answered questions
  - Correct answer indicators
  - Explanation for each question
  - Option to retake quiz or return to dashboard

## Design System

### Blue & White Educational Theme
- **Primary Color**: Blue (#7c8dd6) - Trust, knowledge, learning
- **Secondary Color**: Light blue (#a8c5e0) - Supporting elements
- **Accent Color**: Purple-blue (#7d85de) - Interactive elements
- **Background**: Off-white with subtle blue tint (#f9fafb)
- **Text**: Dark gray (#1f2937) for maximum readability

### Typography
- **Headings**: Geist Sans (Bold, various sizes)
- **Body Text**: Geist Sans (Regular, 16px, line-height 1.6)
- **Monospace**: Geist Mono (for code/technical content)

### Component Library
- shadcn/ui components with Tailwind CSS
- Card system for content organization
- Button variants (primary, secondary, outline)
- Progress bars for tracking
- Badge system for status indicators
- Input fields for forms
- Scroll area for long content

## Technical Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React hooks (useState, useRef, useEffect)
- **HTTP Client**: Built-in fetch API

### Backend
- **API Route**: `/api/chat` for AI chatbot (configured for OpenAI via AI SDK)
- **Server Components**: Next.js 16 Server Components for optimal performance

### Dependencies
- `ai`: AI SDK for streaming responses (v6.0.205)
- `@ai-sdk/openai`: OpenAI integration
- `@radix-ui/react-progress`: Progress bar component
- `@radix-ui/react-scroll-area`: Scrollable content areas
- `class-variance-authority`: Component variant management
- `clsx`: Conditional class names

## File Structure

```
/vercel/share/v0-project/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css             # Blue/white theme design tokens
│   ├── page.tsx                # Landing page
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        # AI chatbot API endpoint
│   ├── dashboard/
│   │   └── page.tsx            # Student dashboard
│   ├── course/
│   │   └── [id]/
│   │       └── page.tsx        # Course overview with lesson list
│   ├── lesson/
│   │   └── [id]/
│   │       └── page.tsx        # Interactive lesson with AI chatbot
│   └── quiz/
│       └── [id]/
│           └── page.tsx        # Interactive quiz with results
├── components/
│   └── ui/
│       ├── button.tsx          # Button component
│       ├── card.tsx            # Card component
│       ├── input.tsx           # Input field
│       ├── badge.tsx           # Badge component
│       ├── progress.tsx        # Progress bar
│       └── scroll-area.tsx     # Scrollable area
├── lib/
│   └── utils.ts               # Utility functions (cn for class merging)
└── package.json
```

## Sample Content

### Course: "Matter and Its Changes"
**Vietnamese Title**: Chất và sự biến đổi của chất

**Lessons**:
1. **Physical Properties of Matter** - Learn about observable characteristics like color, shape, density, and solubility
2. **States of Matter** - Explore solid, liquid, and gas states
3. **Physical Changes** - Understand melting, freezing, boiling, evaporation, condensation
4. **Chemical Changes** - Discover burning, rusting, and chemical reactions
5. **Matter Quiz & Review** - Test knowledge with 5 interactive questions

### Quiz Questions Sample
- "Which of the following is a physical property?" (Answer: Color)
- "What is density?" (Answer: The amount of matter in a specific volume)
- "Which material is most soluble in water?" (Answer: Sugar)
- "What state of matter has a definite shape and volume?" (Answer: Solid)
- "Which is NOT a physical property?" (Answer: Ability to rust)

## AI Chatbot Features

The lesson page includes a ChatGPT-style AI tutor that:
- Provides instant answers to student questions
- Suggests example questions when chat is empty
- Displays conversation history in a scrollable interface
- Simulates realistic AI responses
- Focuses on Grade 6-level explanations
- Provides real-world examples and analogies

## Responsive Design

- **Mobile First** approach with breakpoints for tablets and desktops
- **Flexible Layouts** using Tailwind CSS grid and flex utilities
- **Touch-friendly** buttons and interactive elements
- **Readable Typography** that scales across devices
- **Optimized Navigation** for all screen sizes

## Performance Optimizations

- Next.js 16 Turbopack for fast builds
- Server Components for reduced client-side JavaScript
- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Efficient state management with React hooks

## Getting Started

### Installation
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Environment Variables
To enable the AI chatbot with real OpenAI responses:
```
OPENAI_API_KEY=your_api_key_here
```

### Access URLs
- Landing Page: `http://localhost:3000`
- Dashboard: `http://localhost:3000/dashboard`
- Course: `http://localhost:3000/course/1`
- Lesson 1: `http://localhost:3000/lesson/1`
- Quiz: `http://localhost:3000/quiz/1`

## Future Enhancements

- User authentication and profile system
- Database integration for progress persistence
- More courses and lessons
- Video content integration
- Certificate generation
- Mobile app version
- Gamification features (badges, leaderboards)
- Real-time AI chatbot with OpenAI integration
- Teacher dashboard for monitoring student progress
- Multilingual support beyond Vietnamese

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for educational purposes as a modern Grade 6 Science learning platform.
