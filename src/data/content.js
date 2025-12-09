/**
 * Centralized content for the entire application
 */

// Import video assets
import product9Motion from '../assets/product/9-motion.mp4';
import landscapeMotion from '../assets/landscape/landscape-motion.mp4';
import product2Motion from '../assets/product/6-motion.mp4';

export const content = {
  // Brand information
  brand: {
    name: 'Lumenstate',
    tagline: 'Light defines the space.',
  },

  // Hero section
  hero: {
    title: 'Lumenstate',
    subtitle: 'Light defines the space.',
    videos: {
      row1Col2: product9Motion,
      row2Col1: landscapeMotion,
      row2Col2: product2Motion,
    },
    features: [
      {
        id: 'immanence',
        icon: 'CircleHalf',
        title: 'Immanence',
        description: 'Light quietly residing within the space.',
        detailedDescription: 'Our luminaires merge with architecture, emitting indirect, glare-free light that preserves surfaces and sightlines; presence without display, precision without distraction.',
      },
      {
        id: 'continuity',
        icon: 'Repeat',
        title: 'Continuity',
        description: 'Seamless & natural day to night flow.',
        detailedDescription: 'Brightness and spectrum follow the day\'s rhythm, gliding from noon clarity to evening warmth; no jumps or flicker—just steady, restorative light.',
      },
      {
        id: 'flexibility',
        icon: 'WaveSine',
        title: 'Flexibility',
        description: 'Auto by default, precise on demand.',
        detailedDescription: 'Automation handles the routine while instant overrides grant exact control of lux and CCT; minimal sensing, local computation, and efficient defaults respect context.',
      },
    ],
  },

  // Product showcase
  products: {
    sectionTitle: 'Product Showcase',
    sectionSubtitle: 'Explore brightness and color temperature changes throughout the day',
  },

  // Footer (if needed later)
  footer: {
    copyright: '© 2025 Lumenstate. All rights reserved.',
  },
};

export default content;
