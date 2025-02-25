'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header>
      <Link href="/en">
        <Image src="/nineteen-logo-black.svg" className="logo" alt="Logo" width={130} height={50} />
      </Link>
      <div>
        <nav>
          <ul>
            <li className={`header-item ${isActive('/en/projekt') ? 'active' : ''}`}>
              <Link href="/en/projekt" replace>Projects</Link>
            </li>
            <li className={`header-item ${isActive('/en/techniques') ? 'active' : ''}`}>
              <Link href="/en/techniques" replace>Printing Techniques</Link>
            </li>
            <li className={`header-item ${isActive('/en/about') ? 'active' : ''}`}>
              <Link href="/en/about" replace>About Us</Link>
            </li>
            <li className={`header-item ${isActive('/en/contact') ? 'active' : ''}`}>
              <Link href="/en/contact" replace>Contact</Link>
            </li>
          </ul>
        </nav>
        <ul className="social-media">
          <li className='header-item'>
            <a href="https://instagram.com/nineteen.production" target="_blank" rel="noopener noreferrer">
              <span>Instagram</span>
            </a>
          </li>
          <li className='header-item'>
            <a href="https://www.linkedin.com/company/nineteen-production/" target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
            </a>
          </li>
          <div>
          <li className={`header-item ${isActive('/sv') ? 'active' : ''}`}>
            <a href="/sv" rel="noopener noreferrer">
              <span>SE</span>
            </a>
          </li>
          <li>/</li>
          <li className={`header-item ${isActive('/en') ? 'active' : ''}`}>
            <a href="/en" rel="noopener noreferrer">
              <span>EN</span>
            </a>
          </li>
          </div>
        </ul>
      </div>
    </header>
  );
}
