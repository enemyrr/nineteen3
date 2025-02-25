// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-div">
            <Link href="en/projekt">
            <button>Projects</button>
            </Link>
          <img src="/threads.png" alt="threads" />
        </div>
        <div className="hero-div">
            <Link href="en/contact">
            <button>Contact us</button>
            </Link>
          <img src="/orange-fabrics.png" alt="threads" />
        </div>
      </div>
    </>
  );
}
