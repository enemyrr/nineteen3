// src/app/projekt/page.tsx

import Link from 'next/link';


export default function ProjectPage() {
    return (
      <>
        <div className="tekniker">
            <div>
                <h1>Trycktekniker</h1>
                <p>
                Det finns mängder av olika trycktekniker, alla
                med olika fördelar. Vilken teknik som lämpar
                sig bäst för ditt projekt avgörs av antal,
                material och önskad känsla!
                <br />
                <br />
                Kontakta oss så hjälper vi dig med ditt projekt!
                </p>
                <Link href="/sv/contact">
                    <button>Kontakta oss</button>
                </Link>
            </div>
            <div className="grid-item-techniques">
                <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/Screentryck.jpg" alt="Screentryck"/>
                <span>Screentryck</span>
            </div>
        </div>
        <div className="tekniker"> 
            <div className="grid-item-techniques">
                    <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/High-Density-Print.jpg" alt="High Density Print"/>
                    <span>High Density Print</span>
            </div>
            <div className="grid-item-techniques">
                <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/brodyr2.jpg" alt="Brodyr"/>
                <span>Brodyr</span>
            </div>
        </div>
        <div className="tekniker2"> 
            <div className="grid-item-techniques">
                    <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/3D-brodyr.jpg" alt="3D-brodyr"/>
                    <span>3D-brodyr</span>
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
                <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/Sublimerat.jpg" alt="sublimering"/>
                <span>Sublimering</span>
            </div>
            <div className="grid-item-techniques">
                    <img src="https://pub-3635b466c9684646a3ba1cf1ed544c70.r2.dev/vavd.jpg" alt="Värd"/>
                    <span>Vävd</span>
            </div>
        </div>
      </>
    );
  }
  