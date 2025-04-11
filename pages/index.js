import { useState, useEffect } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Countdown from "react-countdown";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Set the launch date (72 hours from now)
const launchDate = new Date();
launchDate.setHours(launchDate.getHours() + 72);

// Countdown renderer
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span className="text-4xl font-bold gold-text">We are live!</span>;
  } else {
    return (
      <div className="grid grid-cols-4 gap-4 md:gap-6">
        {[
          { value: days, label: "Days" },
          { value: hours, label: "Hours" },
          { value: minutes, label: "Minutes" },
          { value: seconds, label: "Seconds" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-black/80 border-2 gold-border rounded-lg">
              <span className="text-2xl md:text-4xl font-bold gold-text">
                {item.value}
              </span>
            </div>
            <span className="mt-2 text-sm md:text-base gold-text">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    );
  }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Ensure we only render the countdown client-side to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen flex flex-col items-center justify-center py-12 px-4 text-center`}
      style={{
        background: "linear-gradient(to bottom, #0a0a0a 0%, #28231d 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="max-w-4xl w-full flex flex-col items-center justify-center gap-12">
        {/* Chess piece decoration */}
        <div className="absolute opacity-10 top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute left-5 top-20" style={{ transform: "rotate(15deg)" }}>
            <div className="text-[200px] gold-text">♚</div>
          </div>
          <div className="absolute right-10 bottom-20" style={{ transform: "rotate(-10deg)" }}>
            <div className="text-[180px] gold-text">♞</div>
          </div>
        </div>
        
        <div className="z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 gold-text">
            Copperbelt Chess Academy
          </h1>
          
          <div className="h-1 w-32 mx-auto gold-bg mb-6 rounded-full"></div>
          
          <h2 className="text-xl md:text-2xl mb-8 text-white">
            <span className="gold-text">Excellence</span> in Chess Training
          </h2>
          
          <div className="mb-12 p-6 rounded-lg backdrop-blur-sm bg-black/30 border gold-border">
            <h3 className="text-xl md:text-2xl mb-6 gold-text">Coming Live In</h3>
            {mounted && <Countdown date={launchDate} renderer={renderer} />}
          </div>

          <div className="mt-10">
            <p className="text-lg mb-8">
              Join us for world-class chess training, tournaments, and a vibrant community of chess enthusiasts.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="#notify" 
                className="gold-bg text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all"
              >
                Notify Me
              </a>
              <a 
                href="#about" 
                className="bg-transparent border-2 gold-border gold-text font-bold py-3 px-8 rounded-full hover:bg-black/30 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Copperbelt Chess Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
