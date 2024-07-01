export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
}

export const NavItem = [
  { title: 'Home',href: '/'  },
  { href: '/about', title: 'About' },
  { href: '/contact', title: 'Contact' },
  { href: '/services', title: 'Services' },
  { href: '/blog', title: 'Blog' },
  { href: '/login', title: 'Login' },
  { href: '/signup', title: 'Signup' },
  { href: '/profile', title: 'Profile' },
  // { href: '/dashboard', title: 'Dashboard' },
  // { href: '/products', title: 'Products' },
  // { href: '/product/:id', title: 'Product Detail' }, // Dynamic route
  // { href: '/cart', title: 'Cart' },
  // { href: '/checkout', title: 'Checkout' },
  // { href: '/help', title: 'Help' },
  // { href: '/news', title: 'News' },
  // { href: '/news/:slug', title: 'News Article' }, // Dynamic route
  // { href: '/events', title: 'Events' },
  // { href: '/events/:id', title: 'Event Detail' }, // Dynamic route
  // { href: '/resources', title: 'Resources' },
  // { href: '/resources/:category', title: 'Resource Category' }, // Dynamic route
  // { href: '/team', title: 'Team' },
];
