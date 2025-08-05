import React from 'react';

export const HeroSection = () => {
  return (
    <section className="fixed inset-0 min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 overflow-hidden flex items-center justify-center">
      {/* Pixel grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#1a3a1a 1px, transparent 1px), linear-gradient(90deg, #1a3a1a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      ></div>
      {/* Pixel art decorations */}
      <div className="absolute top-8 left-8 w-10 h-10 bg-green-400 border-4 border-black rounded-lg shadow-lg animate-bounce"></div>
      <div className="absolute bottom-8 right-8 w-14 h-14 bg-green-500 border-4 border-black rounded-lg shadow-lg animate-spin-slow"></div>
      <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-green-300 border-4 border-black rounded-lg shadow-lg"></div>
      {/* Glassmorphism content box */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="bg-white/70 backdrop-blur-lg rounded-xl shadow-2xl px-8 py-10 border-4 border-green-300 flex flex-col items-center">
          <div className="inline-block mb-6 pixel-borders bg-green-300 p-2 transform -rotate-2 shadow-md">
            <h1 className="text-4xl md:text-6xl font-extrabold pixel-text text-green-800 drop-shadow-lg">
              PippyOC
            </h1>
          </div>
          <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto pixel-text text-green-800 bg-green-200 inline-block p-4 pixel-borders rounded-lg shadow">
            Obby Creator Addict
          </p>
          <a
            href="https://www.youtube.com/@PippyOC"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 transition text-white font-bold py-3 px-8 rounded-lg pixel-button pixel-text text-base shadow-lg"
          >
            View my channel
          </a>
        </div>
      </div>
      {/* Custom keyframes for slow spin */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 6s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </section>
  );
};
