# Nova Tech - Enterprise SaaS Landing Page

A futuristic SaaS landing page for Nova Tech, an AI-powered project management tool focused on enterprise solutions. This project showcases modern web development techniques with a focus on high-quality UI/UX design.

![Nova Tech](public/og-image.png)

## Live Demo

Visit the live demo at [https://nova-tech.vercel.app](https://nova-tech.vercel.app)

## Features

- **Enterprise-Grade Design**: Dark futuristic aesthetic with enterprise-focused sections
- **Interactive Elements**: 
  - Animated 3D globe (Three.js)
  - Smooth animations and transitions (Framer Motion)
  - Interactive product interface mockup
  - Custom scrollbar and smooth scrolling
- **Comprehensive Sections**:
  - Enterprise features with product interface preview
  - Industry-specific solutions
  - Client testimonials
  - Enterprise pricing tiers
  - Enterprise ecosystem and compliance
  - FAQ with accordion functionality
- **Responsive Layout**: Optimized for all device sizes from mobile to large desktop
- **Performance Optimized**: Dynamic imports and code splitting for faster load times

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
   git clone https://github.com/osmosisblueAI/Nova.git
   cd Nova
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

## Project Structure

- `src/app/page.tsx` - Homepage with all major sections
- `src/app/contact/page.tsx` - Enterprise consultation form
- `src/app/security/page.tsx` - Security and compliance details
- `src/components/` - Reusable UI components
  - `Globe.tsx` - 3D globe component
  - `Faq.tsx` - FAQ accordion component
  - `FeatureCard.tsx` - Feature highlight cards
  - `Footer.tsx` - Comprehensive site footer
  - `Navbar.tsx` - Navigation header
- `src/app/globals.css` - Global styles and Tailwind directives

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Visit [Vercel](https://vercel.com) and sign in
3. Import your repository
4. Configure the project settings if needed
5. Deploy

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Designed by [Luke Eddy](https://luke-eddy.com) as part of portfolio showcase.
