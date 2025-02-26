'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <header>
      <Link href="/">
        <Image src="/nineteen-logo-black.svg" className="logo" alt="Logo" width={130} height={50} />
      </Link>
      <div>
        <nav>
          <ul>
            <li className={`header-item ${isActive('/sv/projekt') ? 'active' : ''}`}>
              <Link href="/sv/projekt" replace>Projekt</Link>
            </li>
            <li className={`header-item ${isActive('/sv/techniques') ? 'active' : ''}`}>
              <Link href="/sv/techniques" replace>Trycktekniker</Link>
            </li>
            <li className={`header-item ${isActive('/sv/about') ? 'active' : ''}`}>
              <Link href="/sv/about" replace>Om Oss</Link>
            </li>
            <li className={`header-item ${isActive('/sv/contact') ? 'active' : ''}`}>
              <Link href="/sv/contact" replace>Kontakt</Link>
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
