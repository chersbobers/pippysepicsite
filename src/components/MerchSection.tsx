import React, { useState } from 'react';
import { ShoppingCartIcon, FilterIcon } from 'lucide-react';
export const MerchSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  // Roblox-style accessory names for merch items
  const merchItems = [{
    id: 1,
    name: "Legendary Pippy's Pixel Headphones",
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000',
    price: 'Coming Soon',
    rarity: 'Legendary',
    color: 'bg-yellow-400',
    category: 'accessories'
  }, {
    id: 2,
    name: 'Epic Blocky Gamer Hoodie',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000',
    price: 'Coming Soon',
    rarity: 'Epic',
    color: 'bg-purple-500',
    category: 'clothing'
  }, {
    id: 3,
    name: 'Rare Pippy Studios Cap of Fame',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1000',
    price: 'Coming Soon',
    rarity: 'Rare',
    color: 'bg-blue-400',
    category: 'clothing'
  }, {
    id: 4,
    name: 'Uncommon Pixelated Gamer Mug',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=1000',
    price: 'Coming Soon',
    rarity: 'Uncommon',
    color: 'bg-green-400',
    category: 'accessories'
  }, {
    id: 5,
    name: 'Legendary Gaming Mouse Pad',
    image: 'https://images.unsplash.com/photo-1563297007-0686b7003af7?q=80&w=1000',
    price: 'Coming Soon',
    rarity: 'Legendary',
    color: 'bg-yellow-400',
    category: 'accessories'
  }, {
    id: 6,
    name: 'Epic Gamer T-Shirt',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000',
    price: 'Coming Soon',
    rarity: 'Epic',
    color: 'bg-purple-500',
    category: 'clothing'
  }];
  const categories = [{
    id: 'all',
    label: 'All Items'
  }, {
    id: 'clothing',
    label: 'Clothing'
  }, {
    id: 'accessories',
    label: 'Accessories'
  }];
  const filteredItems = activeCategory === 'all' ? merchItems : merchItems.filter(item => item.category === activeCategory);
  return <section id="merch" className="py-16 bg-green-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 pixel-text text-green-800 text-center">
          Future Merch
        </h2>
        <p className="text-green-700 mb-8 max-w-2xl mx-auto pixel-text-body text-center">
          Exclusive Pippy OC merchandise coming soon! These items aren't
          available yet, but check back for updates.
        </p>
        {/* Category tabs */}
        <div className="flex justify-center mb-8 border-b-2 border-black">
          <div className="flex overflow-x-auto no-scrollbar">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-6 py-3 transition-colors relative ${activeCategory === category.id ? 'bg-green-200 font-bold' : 'bg-green-100 hover:bg-green-200'}`}>
                <span className="pixel-text-body">{category.label}</span>
                {activeCategory === category.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-black"></div>}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredItems.map(item => <MerchCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>;
};
const MerchCard = ({
  item
}) => {
  return <div className="bg-white pixel-card overflow-hidden transform transition hover:translate-y-[-5px] mx-auto">
      <div className="relative">
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover border-b-2 border-black pixel-image" />
        <div className={`absolute top-0 right-0 px-3 py-1 ${item.color} text-white font-bold text-xs border-l-2 border-b-2 border-black`}>
          <span className="pixel-text">{item.rarity}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-md font-bold mb-2 line-clamp-2 text-green-800">
          <span className="pixel-text">{item.name}</span>
        </h3>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-green-700 pixel-text-body">
            {item.price}
          </span>
          <button className="bg-green-400 text-white p-2 pixel-button opacity-50 cursor-not-allowed">
            <ShoppingCartIcon size={18} />
          </button>
        </div>
      </div>
    </div>;
};