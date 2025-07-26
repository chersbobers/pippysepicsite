import React from 'react';
interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
export const TabNavigation = ({
  activeTab,
  setActiveTab
}: TabNavigationProps) => {
  const tabs = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'stats',
    label: 'Stats'
  }, {
    id: 'videos',
    label: 'Videos'
  }, {
    id: 'merch',
    label: 'Merch'
  }];
  return <div className="bg-green-300 border-b-2 border-black sticky top-0 z-40">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-green-800 pixel-text cursor-pointer mr-8" onClick={() => setActiveTab('home')}>
            Pippy OC
          </span>
        </div>
        <div className="flex overflow-x-auto no-scrollbar">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 transition-colors relative ${activeTab === tab.id ? 'bg-green-100 font-bold' : 'bg-green-300 hover:bg-green-200'}`}>
              <span className="pixel-text-body">{tab.label}</span>
              {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>}
            </button>)}
        </div>
      </div>
    </div>;
};