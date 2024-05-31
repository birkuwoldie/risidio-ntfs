// src/pages/collection/[id].tsx
'use client';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
// import Image from 'next/image';

import Link from 'next/link';
import { useWallet } from '@/components/context/WalletContext';
import { collections } from '@/components/collections/CollectionList';
import Image  from 'next/image';

interface NFTItem {
  id: number;
  name: string;
  imageUrl: string;
  nftAmount: number;
  description: string;
}

const nftItems: NFTItem[] = [
  { id: 1, name: 'Night Is Coming', imageUrl: '/assets/images/dusk.jpeg', nftAmount: 3, description: 'Description of NFT Item 1' },
  { id: 2, name: 'With The Star', imageUrl: '/assets/images/star.jpeg', nftAmount: 5, description: 'Description of NFT Item 2' },
  { id: 3, name: 'Summer', imageUrl: '/assets/images/summer.jpeg', nftAmount: 2, description: 'Description of NFT Item 3' },
  { id: 4, name: 'Quiet', imageUrl: '/assets/images/quite.jpeg', nftAmount: 4, description: 'Description of NFT Item 4' },
  { id: 5, name: 'Travel', imageUrl: '/assets/images/travel.jpeg', nftAmount: 6, description: 'Description of NFT Item 5' },
  { id: 6, name: 'The Rain', imageUrl: '/assets/images/rain.jpeg', nftAmount: 6, description: 'Description of NFT Item 5' },
];

const CollectionDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [purchasedItems, setPurchasedItems] = useState<NFTItem[]>([]);
  const [bannerImageUrl, setBannerImageUrl] = useState<string>('/assets/images/light_night.jpg');
  const [userAvatarUrl, setUserAvatarUrl] = useState<string>('/assets/images/male1.png');

  // const addToAccount = (item: NFTItem) => {
  //   setPurchasedItems([...purchasedItems, item]);
  //   alert(`${item.name} added to your account!`);
  // };
  const { isConnected } = useWallet();
  // const router = useRouter();
  const item = collections.find((collect) => collect.id === Number(id));
  const handleBuyClick = () => {
    if (!isConnected) {
      router.push('/connect-wallet');
    } 
    // else {
    //   addToAccount(item);
    // }
  };
  return (
    <div className='mt-20  mx-4  '>
     <div className="relative bg-[#ffffff] z-10 flex flex-col md:flex-row items-center justify-center text-center text-black rounded-xl p-4  overflow-hidden mx-auto">
  <div className="flex flex-col items-center md:items-start flex-grow md:ml-16 lg:ml-16">
    <div className="bg-[#FADFE4] text-black p-2 px-8 rounded-full item-center mb-4">
      <h5 className="font-semibold text-lg">Trending Now</h5>
    </div>
    <p className="mt-4 text-lg md:text-2xl text-gray-500">Collections</p>
    <h1 className="text-4xl md:text-6xl font-bold mb-4">{item?.name}</h1>
    <p className="my-4 text-sm text-left md:text-2xl text-gray-500">{item?.description}</p>
    <div className="flex items-center mb-4">
      <Image src={item?.userAvatar||''} alt="User Avatar" width={128} height={128} className="rounded-full w-32 h-32 object-cover mr-4" />
      <div className="text-left">
        <p className="text-lg text-gray-500">Artist</p>
        <p className="text-xl font-semibold text-black-800">{item?.userName}</p>
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
      <Image src={item?.imageUrl || ''} alt="Banner Image" width={500} height={200} className="rounded-3xl object-contain" />
    </div>
  </div>
</div>

<div className="mb-4">
  <h1 className="text-2xl font-bold my-8">NFTs</h1>
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
    {nftItems.map((item) => (
      <div key={item.id} className=" border shadow-xl rounded-2xl relative overflow-hidden p-4">
        <div className="relative">
          <Image src={item.imageUrl} alt={item.name} className="w-full h-auto object-cover rounded-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
               onClick={handleBuyClick}
              className="bg-white text-black font-bold py-1 px-4 rounded-full flex items-center"
              style={{ width: '120px' }} // Adjust width as needed
            >
              <span className="flex items-center ml-6">
                Buy
              </span>
              <Image src="/assets/images/arrow-right.svg" alt="Arrow Right" width={14} height={14} className="ml-2" />

            </button>
          </div>
        </div>
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-bold mt-2">{item.name}</h2>
          <div className="rounded-full w-28 py-2 flex justify-center items-center bg-[#E6E9F2]">
            <p className="text-sm text-gray-600 font-bold">{item.nftAmount}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default CollectionDetail;
