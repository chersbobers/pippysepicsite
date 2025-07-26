import React from 'react';
import { YoutubeIcon, UsersIcon } from 'lucide-react';
export const Footer = () => {
  return <footer id="socials" className="bg-green-200 pt-16 pb-8 border-t-2 border-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center">
          <div className="mx-auto max-w-xs">
            <h3 className="text-lg font-bold mb-4 text-green-800 pixel-text">
              Pippy OC
            </h3>
            <p className="text-green-700 pixel-text-body">
              Roblox developer, content creator, and gaming enthusiast bringing
              you the best gaming content.
            </p>
          </div>
          <div className="mx-auto">
            <h3 className="text-lg font-bold mb-4 text-green-800 pixel-text">
              Quick Links
            </h3>
            <ul className="space-y-2 text-green-700">
              {['Home', 'Stats', 'Videos', 'Merch'].map(item => <li key={item} className="pixel-text-body">
                  <a href={`#${item.toLowerCase()}`} className="hover:text-green-600 transition block">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          <div className="mx-auto">
            <h3 className="text-lg font-bold mb-4 text-green-800 pixel-text">
              Social Media
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="https://www.youtube.com/@PippyOC" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-green-700 hover:text-red-500 transition pixel-text-body">
                  <YoutubeIcon size={16} className="mr-2" />
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://discord.gg/q7BaM3DQ" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-green-700 hover:text-indigo-400 transition pixel-text-body">
                  <div className="w-4 h-4 mr-2 bg-indigo-400 border-2 border-black"></div>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://www.roblox.com/users/1135678407/profile" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-green-700 hover:text-gray-800 transition pixel-text-body">
                  <UsersIcon size={16} className="mr-2" />
                  Roblox Profile
                </a>
              </li>
              <li>
                <a href="https://www.roblox.com/communities/14247370/Pippy-Studios#!/about" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-green-700 hover:text-gray-800 transition pixel-text-body">
                  <UsersIcon size={16} className="mr-2" />
                  Roblox Group
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto max-w-xs">
            <h3 className="text-lg font-bold mb-4 text-green-800 pixel-text">
              Newsletter
            </h3>
            <p className="text-green-700 mb-4 pixel-text-body">
              Subscribe for updates on new merch and videos!
            </p>
            <div className="flex max-w-xs mx-auto">
              <input type="email" placeholder="Your email" className="bg-white text-green-800 px-4 py-2 border-2 border-black focus:outline-none w-full pixel-text-body" />
              <button className="bg-green-500 text-white px-4 py-2 border-2 border-black transition pixel-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-black pt-8 text-center text-green-700">
          <p className="pixel-text-body">
            &copy; {new Date().getFullYear()} Pippy OC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};