import React from 'react';
export const HeroSection = () => {
  return (
    <section className="fixed inset-0 min-h-screen py-20 bg-green-100 overflow-hidden flex items-center justify-center">
      {/* Pixel grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      ></div>
      {/* Pixel art decorations */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-green-400 border-2 border-black transform rotate-45"></div>
      <div className="absolute bottom-10 right-10 w-12 h-12 bg-green-500 border-2 border-black"></div>
      <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-green-300 border-2 border-black"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="inline-block mb-6 pixel-borders bg-green-300 p-2 transform -rotate-2">
            <h1 className="text-3xl md:text-5xl font-extrabold pixel-text text-green-800">
              PippyOC
            </h1>
          </div>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto pixel-text text-green-800 bg-green-200 inline-block p-4 pixel-borders">
            Obby Creator Addict
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.youtube.com/@PippyOC"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white font-bold py-3 px-6 pixel-button pixel-text text-xs"
            >
              View my channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
