# Personal Portfolio Website

A modern personal portfolio website built with React, Vite, and Tailwind CSS. This frontend showcases projects, experience, skills, and contact information with a responsive layout and polished UI.

## Features

- React 19 + Vite for fast development and optimized builds
- Tailwind CSS for utility-first styling and responsive design
- Component-based structure for modular UI sections
- Project cards, experience section, technology stack display, contact form, and sidebar navigation
- Clean and accessible layout for a personal branding website

## Folder Structure

- `src/`
  - `App.jsx` — main app container
  - `main.jsx` — entry point for React and Vite
  - `index.css` — global styles and Tailwind imports
  - `theme.jsx` — shared theme or style configuration
  - `components/` — reusable UI components
  - `section/` — page section components like Hero, Projects, Experiences, Contact, and Footer
- `public/` — static assets such as images

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal to view the site.

## Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Linting

Run ESLint across the project:

```bash
npm run lint
```

## Customization

- Update content inside `src/section/` to change the homepage sections
- Edit styling in `src/index.css` or component classes for visual changes
- Add or replace project details in `src/section/Projects.jsx`

## Dependencies

- `react`
- `react-dom`
- `react-icons`
- `tailwindcss`
- `@tailwindcss/vite`

## Development Notes

This project is configured to use Vite for fast refresh and lightweight builds. The folder layout is optimized for a portfolio website with separate section components and reusable UI building blocks.

---

Created for a personal portfolio web frontend project.
