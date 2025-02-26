// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-div">
            <Link href="/sv/projekt">
            <button>Tidigare projekt</button>
            </Link>
          <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/threads.png" alt="threads" />
        </div>
        <div className="hero-div">
            <Link href="/sv/contact">
            <button>Kontakta oss</button>
            </Link>
          <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/orange-fabrics.png" alt="threads" />
        </div>
      </div>
    </>
  );
}
