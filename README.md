# Nova Tech - SaaS Landing Page Demo

A futuristic SaaS landing page for Nova Tech, an AI-powered project management tool. This demo showcases modern web development techniques and best practices.

## Features

- **Modern Design**: Dark futuristic aesthetic with Tailwind CSS
- **Interactive Elements**: Animated 3D globe (Three.js) and smooth transitions (Framer Motion)
- **Responsive Layout**: Optimized for all device sizes
- **Performance Optimized**: Dynamic imports and code splitting

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4
- **3D Rendering**: Three.js
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nova-tech
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Visit [Vercel](https://vercel.com) and sign in

3. Import your repository

4. Configure the project settings if needed

5. Deploy

   Alternatively, you can use the Vercel CLI:
   ```
   npm install -g vercel
   vercel login
   vercel --prod
   ```

## Project Structure

- `src/app/page.tsx` - Homepage with hero section, features, and pricing
- `src/app/contact/page.tsx` - Contact form
- `src/components/` - Reusable UI components
- `src/app/globals.css` - Global styles and Tailwind directives

## Credits

Designed by [Luke Eddy](https://luke-eddy.com) as part of portfolio showcase.
