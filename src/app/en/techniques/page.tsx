// src/app/projekt/page.tsx

import Link from 'next/link';

export default function ProjectPage() {
    return (
      <>
        <div className="tekniker">
            <div>
                <h1>Printing techniques</h1>
                <p>
                There are many different printing techniques, each
                with its own advantages. Which technique is most
                suitable for your project depends on quantity,
                material, and the desired look and feel!
                <br />
                <br />
                Contact us and we will help you with your project!
                </p>
                <Link href="/en/contact">
                    <button>Contact Us</button>
                </Link>
            </div>
            <div className="grid-item-techniques">
                <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/Screentryck.jpg" alt="Screen Print"/>
                <span>Screen Print</span>
            </div>
        </div>
        <div className="tekniker"> 
            <div className="grid-item-techniques">
                    <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/High-Density-Print.jpg" alt="High Density Print"/>
                    <span>High Density Print</span>
            </div>
            <div className="grid-item-techniques">
                <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/brodyr2.jpg" alt="Embroidery"/>
                <span>Embroidery</span>
            </div>
        </div>
        <div className="tekniker2"> 
            <div className="grid-item-techniques">
                    <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/3D-brodyr.jpg" alt="3D Embroidery"/>
                    <span>3D Embroidery</span>
            </div>
            <div className="grid-item-techniques">
                <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/DTG1.jpg" alt="DTG"/>
                <span>DTG</span>
            </div>
            <div className="grid-item-techniques">
                <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/DTF.jpg" alt="DTF"/>
                <span>DTF</span>
            </div>
        </div>
        <div className="tekniker last"> 
        <div className="grid-item-techniques">
                <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/Sublimerat.jpg" alt="Sublimation"/>
                <span>Sublimation</span>
            </div>
            <div className="grid-item-techniques">
                    <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/vavd.jpg" alt="Woven"/>
                    <span>Woven</span>
            </div>
        </div>
      </>
    );
}