import type { ImageMetadata } from 'astro';
import aviPoster from '../assets/posters/aviconseil.png';
import shopPoster from '../assets/posters/ecommerce.png';

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  /** What it is, in a few words. */
  kind: string;
  /** Short tag shown on the card, e.g. "Client project". */
  tag: string;
  summary: string;
  /** One headline number for the card. */
  stat?: { value: string; label: string };
  /** The parts I wrote myself. */
  backend: string[];
  /** The parts the AI wrote. */
  frontend: string[];
  stack: string[];
  frontendStack: string[];
  links: Link[];
  /** Big card with video on the home page. */
  featured: boolean;
  note?: string;
  /** Path under /public, without extension. */
  video?: string;
  poster?: ImageMetadata;
  /** A request line that sums up the API, shown on small cards. */
  endpoint?: string;
}

export const projects: Project[] = [
  {
    slug: 'avi-conseil',
    name: 'AVI-Conseil',
    kind: 'Client portal for a poultry consultancy',
    tag: 'Client project',
    summary:
      'Website and client portal for a firm that advises poultry farmers on technical, economic and sanitary performance. Farmers sign up, send service requests with their files and follow them. The owner runs services, requests and messages from a private dashboard.',
    stat: { value: '3', label: 'languages: French, English and Arabic, right to left included' },
    backend: [
      'REST API for accounts, services, categories, audiences, service requests, messages and notifications.',
      'JWT authentication with separate permissions for clients and the owner.',
      'Private file attachments, served only through short-lived signed download links.',
      'Owner dashboard data: request pipeline, messages and a contact inbox.',
      'Production setup with Docker Compose, Caddy, PostgreSQL and Redis.',
    ],
    frontend: [
      'Public site and service catalogue',
      'Client and owner dashboards',
      'French, English and Arabic translations',
      'Light and dark themes, 3D hero cube',
    ],
    stack: ['Django', 'Django REST Framework', 'JWT', 'PostgreSQL', 'Redis', 'Docker', 'Caddy'],
    frontendStack: ['React 19', 'Vite', 'React Router', 'i18next'],
    links: [{ label: 'Open the live site', href: 'https://aviconseil.onrender.com/' }],
    featured: true,
    video: '/videos/aviconseil',
    poster: aviPoster,
  },
  {
    slug: 'boutique',
    name: 'Boutique',
    kind: 'Cash-on-delivery shop for Algeria',
    tag: 'E-commerce, rebuilt',
    summary:
      'Customers order in a minute without an account and pay the courier on delivery. Managers run the shop from a protected dashboard: orders, stock, delivery fees per wilaya and a full audit log. In French and Arabic.',
    stat: { value: '1,541', label: 'communes across 58 wilayas, each with its own delivery fee' },
    backend: [
      'Stock is reserved inside one transaction with row locks, so the last unit can never be sold twice. Every change is a row in a stock ledger.',
      'Order flow from new to delivered, with cancellations, returns and restocking. Prices and fees are always recomputed on the server.',
      'Delivery to 58 wilayas and 1,541 communes, seeded by migrations, with fees set per wilaya.',
      'Anti-spam without captchas: honeypot, signed form timestamps, rate limits per connection and per phone, no raw IPs stored.',
      'Manager sign-in with mandatory two-factor authentication, three roles, session limits and an audit log of every action.',
      'Photo pipeline that strips metadata and stores WebP at four sizes. Search that ignores accents and tolerates typos.',
    ],
    frontend: [
      'Storefront, product pages, cart and checkout',
      'Manager dashboard screens',
      'Arabic right-to-left layout',
      'HTMX and Alpine.js interactions',
    ],
    stack: ['Django 5.2', 'PostgreSQL 17', 'Docker Compose', 'Caddy', 'pytest'],
    frontendStack: ['Tailwind CSS 4', 'HTMX', 'Alpine.js'],
    links: [{ label: 'Open the live shop', href: 'https://boutique-s0w3.onrender.com/' }],
    featured: true,
    note: 'A much better shop than my first one, TechVault: real stock accounting, two-factor sign-in for managers and Arabic support.',
    video: '/videos/ecommerce',
    poster: shopPoster,
  },
  {
    slug: 'daim',
    name: 'daim',
    kind: 'Full-stack productivity platform',
    tag: 'Still building',
    summary:
      'Habit tracking, progress monitoring, notes and personal learning in one platform. The goal is something practical, fast and well organised.',
    backend: [
      'Habit tracking: create habits, log progress and track streaks.',
      'Analytics: statistics and progress on a dedicated dashboard.',
      'Notes management: create, organise and manage notes and files.',
      'Token authentication, with the refresh token in an HTTP-only cookie instead of localStorage for better security.',
      'Organised into dedicated Django apps: users, habits and notes.',
    ],
    frontend: [
      'React front end built with AI and DeepSeek Harness',
      'Also tried the free Atria ASI model (100 million free tokens)',
      'Responsive design with light and dark mode',
    ],
    stack: ['Django', 'Django REST Framework', 'Token auth', 'HTTP-only cookies', 'REST API'],
    frontendStack: ['React', 'Vite'],
    links: [{ label: 'Source', href: 'https://lnkd.in/daAjxtp5' }],
    featured: false,
    note: 'Still building, improving and learning along the way.',
    endpoint: 'GET /api/habits/streaks/',
  },
  {
    slug: 'techvault',
    name: 'TechVault',
    kind: 'Full-stack e-commerce platform',
    tag: 'First shop',
    summary:
      'A complete online shop with JWT authentication, product catalogue, cart and admin dashboard, deployed live on Render. Boutique is its rebuild.',
    backend: [
      'Full flow: browsing, cart, checkout and order tracking.',
      'Admin dashboard for managing products, orders and users.',
      'Codebase built for customisation or white-labelling.',
    ],
    frontend: ['Django templates for the whole shop'],
    stack: ['Django', 'Django REST Framework', 'JWT', 'Render'],
    frontendStack: ['Django templates'],
    links: [{ label: 'Open the live shop', href: 'https://techvault-c5xs.onrender.com/' }],
    featured: false,
    endpoint: 'POST /api/cart/checkout/',
  },
  {
    slug: 'little-lemon',
    name: 'Little Lemon',
    kind: 'Restaurant management system',
    tag: 'Meta course project',
    summary:
      'A restaurant web application with secure JWT authentication: menu, orders, reservations and user management.',
    backend: [
      'Complete restaurant system: menu, orders, reservations and user management.',
      'Authentication and authorisation with Djoser and JSON Web Tokens.',
      'RESTful API designed for scalability and maintainability.',
    ],
    frontend: ['Restaurant pages and booking forms'],
    stack: ['Django', 'Djoser', 'JWT', 'Django REST Framework', 'PostgreSQL'],
    frontendStack: ['HTML', 'CSS', 'JavaScript'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/yahiaoui-mouaid/Little-Lemon-Version-2' }],
    featured: false,
    endpoint: 'POST /api/bookings/',
  },
];
