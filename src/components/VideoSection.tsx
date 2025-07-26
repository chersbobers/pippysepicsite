import React from 'react';
import { PlayIcon, ThumbsUpIcon, EyeIcon } from 'lucide-react';
export const VideoSection = () => {
  const topVideos = [{
    id: 1,
    title: 'How I Made My Best Roblox Game Yet',
    thumbnail: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=1000',
    views: 124587,
    likes: 14302,
    date: '2 months ago'
  }, {
    id: 2,
    title: 'Secret Roblox Developer Tricks',
    thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000',
    views: 98742,
    likes: 12453,
    date: '3 months ago'
  }, {
    id: 3,
    title: 'Creating Custom Roblox Accessories',
    thumbnail: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1000',
    views: 87321,
    likes: 9876,
    date: '5 months ago'
  }];
  return <section id="videos" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 pixel-text text-green-800">
          Top Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {topVideos.map(video => <div className="flex justify-center" key={video.id}>
              <VideoCard video={video} />
            </div>)}
        </div>
      </div>
    </section>;
};
const VideoCard = ({
  video
}) => {
  return <div className="bg-white pixel-card overflow-hidden transform transition hover:translate-y-[-5px] w-full max-w-sm">
      <div className="relative">
        <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover border-b-2 border-black pixel-image" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="bg-green-500 rounded-none p-3 border-2 border-black transform hover:scale-110 transition">
            <PlayIcon size={24} className="text-white" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-md font-bold mb-2 line-clamp-2 pixel-text text-green-800">
          {video.title}
        </h3>
        <div className="flex justify-between items-center text-xs text-green-700 mt-4 pixel-text-body">
          <div className="flex items-center">
            <EyeIcon size={14} className="mr-1" />
            <span>{video.views.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <ThumbsUpIcon size={14} className="mr-1" />
            <span>{video.likes.toLocaleString()}</span>
          </div>
          <span>{video.date}</span>
        </div>
      </div>
    </div>;
};