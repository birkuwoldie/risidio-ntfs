// src/components/Hero.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component for optimized image handling

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [userAvatarUrl, setUserAvatarUrl] = useState<string>('');
  const [bannerImageUrl, setBannerImageUrl] = useState<string>('');

  useEffect(() => {
    // Simulate fetching user avatar and banner image URLs
    // Replace these with actual API calls or logic to set these URLs
    const fetchImages = async () => {
      const userAvatar = '/assets/images/male1.png'; // Updated with static path
      const bannerImage = '/assets/images/light_night.jpg'; // Updated with static path
      setUserAvatarUrl(userAvatar);
      setBannerImageUrl(bannerImage);
    };

    fetchImages();
  }, []);

  return (
    <div className="relative bg-[#E6E9F2] z-10 flex flex-col md:flex-row items-center justify-center text-center text-black rounded-xl p-4  overflow-hidden mx-auto">
  <div className="flex flex-col items-center md:items-start flex-grow md:ml-16 lg:ml-16">
    <div className="bg-[#FADFE4] text-black p-2 px-8 rounded-full item-center mb-4">
      <h5 className="font-semibold text-lg">Trending Now</h5>
    </div>
    <p className="mt-4 text-lg md:text-2xl text-gray-500">Night Sky Collections</p>
    <h1 className="text-4xl md:text-6xl font-bold mb-4">With The Stars</h1>
    <div className="flex items-center mb-4">
      <Image src={userAvatarUrl} alt="User Avatar" width={128} height={128} className="rounded-full w-32 h-32 object-cover mr-4" />
      <div className="text-left">
        <p className="text-lg text-gray-500">Artist</p>
        <p className="text-xl font-semibold text-black-800">Heran Jon</p>
      </div>
    </div>
    <div className="flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start">
  <button className="bg-black border border-black text-white font-bold py-2 px-4 w-44 md:w-44 rounded-full mb-4 md:mb-0 md:mr-4">
    Buy
  </button>
  <a href="#collections" className="bg-transparent hover:bg-white-700 border border-black text-black font-bold py-2 px-4 w-44 md:w-44 rounded-full">
    See Collections
  </a>
</div>

  </div>
  <div className="flex-shrink-0 mt-8 md:mt-0 ml-0 md:ml-8 md:mr-16 lg:mr-16">
    <div className="rounded-3xl shadow-md overflow-hidden">
      <Image src={bannerImageUrl} alt="Banner Image" width={500} height={300} className="rounded-3xl" />
    </div>
  </div>
</div>
  );
};

export default Hero;
