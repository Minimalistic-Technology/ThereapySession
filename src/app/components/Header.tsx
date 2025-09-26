'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'My Services', href: '/services' },
  { name: 'Digital Products', href: '/digital-products' },
  { name: 'About Me', href: '/about' },
  { name: 'Contact Me', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-[#91ADC8] shadow-sm sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-900">
          Your Name
        </Link>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`text-lg font-medium transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}