# Luke Liu React Website

A React-based recreation of the Luke Liu personal website, built with modern tools while preserving the exact visual design and layout of the original Hugo site.

## Features

- **Pixel-perfect recreation** of the original Hugo site design
- **Dark mode support** with theme toggle
- **Responsive design** matching the original layout
- **Modern React stack** with TypeScript and Tailwind CSS
- **Markdown support** for blog posts with syntax highlighting
- **Scroll-to-top functionality** with fade-in animation
- **PDF resume embedding** with consistent header layout

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling (with custom CSS for exact Hugo replication)
- **React Router** for client-side routing
- **React Markdown** with GitHub Flavored Markdown support
- **Rehype Highlight** for code syntax highlighting

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Site header with navigation and theme toggle
│   ├── Footer.tsx      # Site footer
│   ├── Profile.tsx     # Profile section with avatar and bio
│   ├── PostsList.tsx   # List of blog posts
│   └── ScrollToTop.tsx # Scroll-to-top button
├── pages/              # Page components
│   ├── Home.tsx       # Homepage with profile and posts
│   ├── Post.tsx       # Individual blog post page
│   ├── Resume.tsx     # Resume page with PDF embed
│   └── Projects.tsx   # Projects page
├── data/              # Migrated content from Hugo
└── styles/            # Custom CSS matching Hugo styles
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lukeliu-react
```

2. Install dependencies:
```bash
npm install
```

3. Migrate content from Hugo site:
```bash
npm run migrate:hugo
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) to view the site

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run migrate:hugo` - Migrate content from Hugo site
- `npm run check:parity` - Start dev server for visual parity testing
- `npm run lint` - Run ESLint

## Content Migration

The project includes a migration script (`scripts/migrate-hugo.js`) that:

1. Extracts blog posts from Hugo HTML files
2. Copies images and assets
3. Generates a JSON file with post data
4. Preserves the original content structure

To migrate content from the Hugo site:

```bash
npm run migrate:hugo
```

This will create `src/data/posts.json` with all the blog post data and copy images to `src/data/images/`.

## Design Fidelity

This React implementation maintains pixel-perfect fidelity to the original Hugo site:

- **Typography**: Exact font families (Pixelify Sans, Open Sans) and sizing
- **Layout**: Identical spacing, margins, and responsive behavior
- **Colors**: Same color palette and dark mode implementation
- **Components**: Header layout, profile section, posts list, and footer
- **Interactions**: Theme toggle, scroll-to-top, and hover effects
- **Assets**: All SVG icons, images, and PDF files

## Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to GitHub Pages

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

## Browser Support

- Modern browsers with ES6+ support
- Responsive design works on mobile and desktop
- Dark mode respects system preferences

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test visual parity with the original Hugo site
5. Submit a pull request

## License

This project maintains the same license as the original Hugo site.