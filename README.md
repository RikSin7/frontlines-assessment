# 🎓 Frontlines Edutech Platform

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BA5?style=for-the-badge&logo=vite&logoColor=FFD62E)

**🔗 Live Demo:** [https://frontline-edutech.netlify.app/](https://frontline-edutech.netlify.app/)  
**📂 Repository:** [https://github.com/RikSin7/frontlines-assessment](https://github.com/RikSin7/frontlines-assessment)

A modern, highly performant educational course browsing platform built as part of the Frontlines Edutech engineering assessment. The application focuses on delivering a premium, accessible user experience while adhering to scalable architecture patterns and clean code principles.

## ✨ Key Features

- **Advanced Data Table & Grid Views**: Seamlessly toggle between a detailed data table and a visual course card grid, maintaining state across views.
- **Dynamic Search & Filtering**: Real-time course filtering with **debounced search** inputs, category selection, and instructor filters.
- **Robust Pagination**: Client-side pagination logic integrated with complex filter states to ensure a smooth browsing experience.
- **Dynamic Theming System**: A fully implemented dark/light mode toggle with native CSS custom properties and smooth, global micro-animations for all color transitions.
- **Performance Optimized**: Built using React 19's latest features alongside memoization techniques (`useMemo`, `useCallback`, `memo`) to prevent unnecessary re-renders.

## 🛠️ Technology Stack

- **Core**: React 19, Vite (for blazing fast HMR and optimized builds)
- **State Management**: Redux Toolkit (predictable state container for complex filtering/pagination logic)
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4 (utilizing the new `@theme` engine for custom design tokens)
- **Utilities**: `clsx` & `tailwind-merge` (for dynamic class name composition), `lucide-react` (for scalable, consistent iconography)

## 📂 Architecture

The application strictly follows a **Feature-Sliced Design (FSD)** inspired architectural pattern. This approach isolates domains into self-contained features, promoting high cohesion and loose coupling.

```text
src/
├── app/
│   ├── Providers.jsx
│   ├── router.jsx
│   └── store.js
├── assets/
├── features/
│   ├── courses/
│   │   ├── components/
│   │   │   ├── CourseCard.jsx
│   │   │   ├── CourseFilters.jsx
│   │   │   ├── CoursePagination.jsx
│   │   │   ├── CoursesEmpty.jsx
│   │   │   ├── CoursesError.jsx
│   │   │   ├── CourseSkeleton.jsx
│   │   │   ├── CourseTable.jsx
│   │   │   ├── FiltersBar.jsx
│   │   │   └── ViewToggle.jsx
│   │   ├── data/
│   │   │   └── courses.json
│   │   ├── hooks/
│   │   │   ├── useCourses.js
│   │   │   └── useDebouncedSearch.js
│   │   ├── store/
│   │   │   ├── coursesSlice.js
│   │   │   └── selectors.js
│   │   ├── utils/
│   │   │   ├── filterCourses.js
│   │   │   ├── paginateCourses.js
│   │   │   └── sortCourses.js
│   │   └── CoursesPage.jsx
│   └── theme/
│       ├── ThemeContext.jsx
│       └── useTheme.js
├── layouts/
│   └── MainLayout.jsx
├── shared/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ThemeToggle.jsx
│   ├── ui/
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Error.jsx
│   │   ├── Input.jsx
│   │   └── Select.jsx
│   └── utils/
│       ├── cn.js
│       └── constants.js
├── App.jsx
├── index.css
└── main.jsx
```

## 🧠 Engineering Decisions & Trade-offs

To demonstrate senior-level engineering practices, several intentional design choices were made:

### 1. Global State vs. Local State
While React Context could handle basic state, **Redux Toolkit** was chosen to manage the `courses` slice. The combination of search queries, multiple select filters, sorting preferences, and pagination creates a highly interdependent state matrix. Redux provides a predictable, centralized store that makes extending these filters trivial and debuggable.

### 2. Feature-based Directory Structure
Instead of grouping files by type (e.g., all hooks together, all components together), the codebase groups files by **feature** (`features/courses`). This makes the codebase vertically scalable. If the platform needs to add a "Users" or "Payments" feature in the future, the boundaries are already well-defined without cluttering the root directories.

### 3. Separation of Concerns in UI Components
The `shared/ui` directory contains pure, reusable foundational components (`Button`, `Card`, `Badge`) that are completely unaware of business logic. They use `clsx` and `tailwind-merge` to accept standard `className` props safely, ensuring styling conflicts do not occur when extending these components.

### 4. Custom Styling & Micro-interactions
Tailwind CSS v4 was configured with a semantic design system (`index.css`). Rather than littering `transition-all duration-300` across every single JSX component, a global `@layer base` CSS rule governs color transitions. This ensures that the dark/light mode toggle feels inherently cohesive across the entire DOM tree while keeping the JSX clean and readable.

### 5. Debouncing Input
To prevent expensive filtering calculations and potential state updates on every keystroke, a custom `useDebouncedSearch` hook is utilized. This improves perceived performance and prevents UI thread blocking.

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RikSin7/frontlines-assessment.git
   cd frontlines-assessment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

---
*Developed for the Frontlines Edutech Assessment.*
