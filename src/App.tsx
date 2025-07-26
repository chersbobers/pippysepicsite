import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { VideoSection } from './components/VideoSection';
import { MerchSection } from './components/MerchSection';
import { Footer } from './components/Footer';
import { TabNavigation } from './components/TabNavigation';
export function App() {
  const [activeTab, setActiveTab] = useState('home');
  return <div className="min-h-screen bg-green-50 text-gray-800">
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'home' && <HeroSection />}
        {activeTab === 'stats' && <StatsSection />}
        {activeTab === 'videos' && <VideoSection />}
        {activeTab === 'merch' && <MerchSection />}
      </main>
      <Footer />
    </div>;
}