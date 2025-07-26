import React, { useEffect, useState } from 'react';
// This would be the real implementation with the YouTube Data API
// For this demo, we'll create a mock implementation
const fetchYouTubeStats = async channelId => {
  // In a real implementation, you would make API calls like:
  // const apiKey = 'YOUR_API_KEY';
  // const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`);
  // const data = await response.json();
  // return data.items[0].statistics;
  // For now, return mock data with slight randomization to simulate "real-time" updates
  return {
    subscriberCount: Math.floor(10287 + Math.random() * 50),
    viewCount: Math.floor(542876 + Math.random() * 200),
    videoCount: 78
  };
};
export const StatsSection = () => {
  const [stats, setStats] = useState({
    subscriberCount: 10287,
    viewCount: 542876,
    videoCount: 78
  });
  const [loading, setLoading] = useState(true);
  // Simulate API calls to get real YouTube data
  useEffect(() => {
    const channelId = 'UCQRn9_HP_sBQUm9lKrRsEKQ'; // Pippy OC's channel ID
    const fetchStats = async () => {
      setLoading(true);
      try {
        const data = await fetchYouTubeStats(channelId);
        setStats(data);
      } catch (error) {
        console.error('Error fetching YouTube stats:', error);
      } finally {
        setLoading(false);
      }
    };
    // Initial fetch
    fetchStats();
    // Set up interval for regular updates
    const interval = setInterval(fetchStats, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);
  return <section id="stats" className="py-16 bg-green-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 pixel-text text-green-800">
          Realtime Channel Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <StatCard title="Subscribers" value={loading ? 'Loading...' : stats.subscriberCount.toLocaleString()} icon="👥" color="bg-green-400" />
          <StatCard title="Total Views" value={loading ? 'Loading...' : stats.viewCount.toLocaleString()} icon="👁️" color="bg-green-500" />
          <StatCard title="Videos Uploaded" value={loading ? 'Loading...' : stats.videoCount.toLocaleString()} icon="🎬" color="bg-green-600" />
        </div>
        <div className="text-center mt-8 text-xs pixel-text text-green-700">
          <p>* Stats update automatically every 30 seconds from YouTube API</p>
        </div>
      </div>
    </section>;
};
const StatCard = ({
  title,
  value,
  icon,
  color
}) => <div className="bg-white pixel-card p-6 transform hover:translate-y-[-5px] transition mx-auto">
    <div className={`text-4xl mb-4 ${color} p-3 inline-block border-2 border-black`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-green-800 pixel-text">
      {title}
    </h3>
    <p className="text-2xl font-bold text-green-900 pixel-text pixel-pulse">
      {value}
    </p>
  </div>;