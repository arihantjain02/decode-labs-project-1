# PrepPortal — AI Placement Preparation Portal

A production-grade, SaaS-style AI-powered placement preparation platform built for engineering students targeting top tech companies. Designed with portfolio-worthy UI/UX that impresses recruiters within 30 seconds.



## Features

### 11 Complete Modules

| Module | Route | Description |
|---|---|---|
| Landing Page | `/` | Animated hero, features grid, pricing, social proof |
| Login | `/login` | Email/password auth UI, Google sign-in button |
| Signup | `/signup` | Registration form with validation |
| Dashboard | `/dashboard` | Stats overview, weekly chart, activity feed |
| AI Resume Analyzer | `/resume` | ATS score, section feedback, keyword analysis |
| AI Mock Interview | `/interview` | Question cards, timer, AI feedback panel |
| DSA Progress Tracker | `/dsa` | Topic grid, streak heatmap, difficulty filters |
| Aptitude Practice | `/aptitude` | MCQ questions, timer, score tracker |
| Company-wise Prep | `/companies` | Google, Microsoft, Amazon, Meta, Apple, Netflix |
| Roadmap Generator | `/roadmap` | Personalized weekly milestones timeline |
| Daily Study Planner | `/planner` | Weekly calendar, task blocks, streak counter |
| Profile & Settings | `/profile` | Skills, history, dark/light toggle, preferences |

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + Vite 7 |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 |
| UI Components | Shadcn/UI |
| Routing | Wouter |
| Charts | Recharts |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons |
| State | React useState / Context |
| Theme | CSS Custom Properties (HSL) |
| Font | Inter + JetBrains Mono (Google Fonts) |
| Package Manager | pnpm |

---

## Project Structure

```
artifacts/placement-portal/
├── src/
│   ├── App.tsx                          # Router setup + ThemeProvider wrapper
│   ├── main.tsx                         # Entry point
│   ├── index.css                        # Global styles + CSS theme variables
│   │
│   ├── data/
│   │   └── dummy.ts                     # All static/dummy data (swap for API later)
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx               # Mobile breakpoint detection
│   │   └── use-toast.ts                 # Toast notification hook
│   │
│   ├── lib/
│   │   └── utils.ts                     # Tailwind class merging utility (cn)
│   │
│   ├── components/
│   │   ├── ThemeProvider.tsx            # Dark/light mode context + localStorage sync
│   │   │
│   │   ├── layout/
│   │   │   ├── AppLayout.tsx            # Main shell: sidebar + content area
│   │   │   ├── Sidebar.tsx              # Collapsible sidebar navigation
│   │   │   └── MobileNav.tsx            # Mobile hamburger menu (Sheet-based)
│   │   │
│   │   └── ui/                          # 50+ Shadcn/UI primitive components
│   │       ├── CircularProgress.tsx     # Custom SVG circular progress meter
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── chart.tsx
│   │       ├── dialog.tsx
│   │       ├── progress.tsx
│   │       ├── sheet.tsx
│   │       ├── tabs.tsx
│   │       └── ... (45 more)
│   │
│   └── pages/
│       ├── Landing.tsx                  # Public marketing page
│       ├── Login.tsx                    # Login form
│       ├── Signup.tsx                   # Registration form
│       ├── Dashboard.tsx                # Main dashboard
│       ├── ResumeAnalyzer.tsx           # AI resume analysis
│       ├── MockInterview.tsx            # Mock interview simulator
│       ├── DSATracker.tsx               # DSA progress + heatmap
│       ├── Aptitude.tsx                 # Aptitude practice
│       ├── Companies.tsx                # Company-wise preparation
│       ├── Roadmap.tsx                  # Personalized roadmap
│       ├── Planner.tsx                  # Daily study planner
│       ├── Profile.tsx                  # Profile & settings
│       └── not-found.tsx               # 404 page
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── tailwind.config.ts
```

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (`npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-placement-portal.git
cd ai-placement-portal

# Install dependencies
pnpm install

# Start the development server
pnpm --filter @workspace/placement-portal run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm --filter @workspace/placement-portal run build
```

---

## Dummy Data

All data is currently static and lives in `src/data/dummy.ts`. The structure is designed to be easily swapped with real API calls:

```typescript
// User Profile
export const dummyUser = {
  name: 'Arjun Sharma',
  email: 'arjun.sharma@iitk.ac.in',
  college: 'IIT Kanpur',
  branch: 'Computer Science',
  graduationYear: 2025,
  streak: 14,
  rank: 342,
  totalUsers: 12847,
};

// Stats
export const dummyStats = {
  problemsSolved: 287,
  totalProblems: 600,
  interviewsDone: 12,
  resumeScore: 78,
  aptitudeScore: 82,
  readinessScore: 74,
};
```

---

## Design System

### Color Palette

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--primary` | `252 87% 67%` | `252 87% 67%` | Violet/Indigo brand color |
| `--background` | `0 0% 99%` | `222 47% 6%` | Page background |
| `--card` | `0 0% 100%` | `222 47% 9%` | Card surfaces |
| `--muted` | `220 14% 96%` | `222 47% 12%` | Subtle backgrounds |
| `--chart-1` | `252 87% 67%` | `252 87% 67%` | Primary chart color |
| `--chart-2` | `172 66% 50%` | `172 66% 50%` | Teal chart color |

### Typography

- **Sans**: Inter (300, 400, 500, 600, 700, 800)
- **Mono**: JetBrains Mono (400, 500) — used for code, scores, numbers

### Difficulty Badges

| Level | Color |
|---|---|
| Easy | Green background |
| Medium | Amber background |
| Hard | Red background |
| Very Hard | Red background (darker) |

---

## UI Patterns

### Stat Cards
Border + subtle gradient background, icon badge, large number, trend indicator with percentage change arrow.

### Circular Progress
Custom SVG component for ATS score and readiness score meters. Located at `components/ui/CircularProgress.tsx`.

### GitHub-style Heatmap
12-week × 7-day activity grid on the DSA Tracker page. Colored cells from muted (no activity) to primary (high activity).

### Charts Used
- **AreaChart** — Weekly activity (problems solved + hours)
- **BarChart** — DSA topic comparison
- **RadialBarChart** — Category breakdown
- All charts use Recharts with custom tooltips and gradients

---

## Backend Integration Guide

This project is frontend-only with dummy data. To connect a real backend:

1. **Replace dummy data** — swap exports in `src/data/dummy.ts` with API calls
2. **Add authentication** — implement JWT or session auth in `ThemeProvider` / a new `AuthProvider`
3. **API hooks** — use TanStack Query (already installed) for data fetching:

```typescript
// Example: replace dummy user with real API call
const { data: user } = useQuery({
  queryKey: ['user'],
  queryFn: () => fetch('/api/user').then(r => r.json())
});
```

4. **Environment variables** — add `VITE_API_URL` to `.env`
5. **Protected routes** — wrap `<AppLayout>` with an auth check

---

## Modules Detail

### Dashboard
- Readiness score circular meter (out of 100)
- 6 stat cards: Problems Solved, Interviews Done, Resume Score, Aptitude Score, Current Streak, Global Rank
- Weekly activity area chart (recharts)
- Recent activity feed
- Upcoming interviews list
- Today's task checklist

### AI Resume Analyzer
- Drag-and-drop file upload zone
- ATS score circular meter (78/100)
- Section-by-section feedback: Contact (95), Summary (72), Experience (68), Skills (85), Education (90)
- Keyword match bar chart
- Improvement suggestions list

### AI Mock Interview
- Company selector (Google, Microsoft, Amazon, Meta, Apple)
- Role selector (SDE, SRE, PM, etc.)
- Difficulty selector (Easy / Medium / Hard)
- Question card with countdown timer
- Multi-line textarea for answer
- AI feedback panel (Strengths + Areas to Improve)
- Previous sessions list with scores

### DSA Progress Tracker
- 12 topic cards: Arrays, Strings, Linked Lists, Trees, Graphs, DP, Stacks, Heaps, Tries, Backtracking, Sliding Window, Binary Search
- Progress bar per topic (solved/total)
- Difficulty filter (Easy / Medium / Hard)
- GitHub-style streak heatmap (12 weeks)
- Total solved counter

### Company-wise Preparation
- Company cards: Google, Microsoft, Amazon, Meta, Apple, Netflix, Flipkart, Infosys
- Real company logos via react-icons/si
- Difficulty badge, average package, open roles
- Click to expand: interview rounds, frequently asked topics, tips

### Personalized Roadmap Generator
- Target company selector
- Current skill level selector
- Available weeks slider
- Generated vertical timeline with weekly milestones
- Checkbox completion per milestone

---

## Roadmap (Future Features)

- [ ] Real backend with Node.js / Express API
- [ ] User authentication (JWT)
- [ ] PostgreSQL database with Drizzle ORM
- [ ] AI integration (OpenAI API) for real resume analysis
- [ ] Real mock interview with AI feedback
- [ ] LeetCode API integration for DSA sync
- [ ] Email notifications and reminders
- [ ] Collaborative study rooms
- [ ] Mobile app (React Native / Expo)
- [ ] Admin dashboard for analytics

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

MIT License — free to use, modify, and distribute.

---

## Author

Built with precision using React, TypeScript, Tailwind CSS, and Shadcn/UI.

> Inspired by the design philosophy of Linear, Vercel, and Notion.

---

## Acknowledgements

- [Shadcn/UI](https://ui.shadcn.com/) — Component library
- [Recharts](https://recharts.org/) — Chart components
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Lucide React](https://lucide.dev/) — Icons
- [React Icons](https://react-icons.github.io/react-icons/) — Brand logos
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Wouter](https://github.com/molefrog/wouter) — Lightweight routing
