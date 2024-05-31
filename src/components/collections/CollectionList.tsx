'use client';
import Link from 'next/link';
import { useState } from 'react';

export interface CollectionItem {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  userName: string;
  userAvatar: string;
  nftAmount: number;
  description: string;
  job:string;
}

export const collections: CollectionItem[] = [
  {
    id: 1,
    name: 'Art Piece 1',
    price: '$100-$780',
    imageUrl: '/assets/images/light_night.jpg', 
    userName: 'User One',
    job:'Artist',
    userAvatar: '/assets/images/male2.jpg',
    nftAmount: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo',},
    {
    id: 2,
    name: 'Art Piece 2',
    price: '$200-$1800',
    imageUrl: '/assets/images/mother_nature.jpg',
    userName: 'User Two',
    job:'Teacher',
    userAvatar: '/assets/images/male1.png',
    nftAmount: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo',},
  {
    id: 3,
    name: 'Art Piece 3',
    price: '$150-$780',
    imageUrl: '/assets/images/future.jpg',
    userName: 'User Three',
    job:'Artist',
    userAvatar: '/assets/images/male2.jpg',
    nftAmount: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo',},
  {
    id: 4,
    name: 'Art Piece 4',
    price: '$120-$865',
    imageUrl: '/assets/images/building.jpg',
    userName: 'User Four',
    job:'Teacher',
    userAvatar: '/assets/images/male3.jpg',
    nftAmount: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo',},
    {
    id: 5,
    name: 'Art Piece 5',
    price: '$300-$1900',
    imageUrl: '/assets/images/green_land.jpg',
    userName: 'User Five',
    job:'Actor',
    userAvatar: '/assets/images/male2.jpg',
    nftAmount: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo',},
    {    
    id: 6,
    name: 'Art Piece 6',
    price: '$250-$950',
    imageUrl: '/assets/images/ocean.jpg',
    userName: 'User Six',
    job:'Artist',
    userAvatar: '/assets/images/male3.jpg',
    nftAmount: 6,
    description: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo',
  },
  {
    id: 7,
    name: 'Art Piece 7',
    price: '$180-$750',
    imageUrl: '/assets/images/storm.jpg',
    userName: 'User Seven',
    job:'Doctor',
    userAvatar:'/assets/images/female2.jpg',
    nftAmount: 7,
    description: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo',},
  {
    id: 8,
    name: 'Art Piece 8',
    price: '$220-$870',
    imageUrl: '/assets/images/discover.jpg',
    userName: 'User Eight',
    job:'Artist',
    userAvatar: '/assets/images/male3.jpg',
    nftAmount: 8,
    description: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo',},
  {
    id: 9,
    name: 'Art Piece 9',
    price: '$270-$1000',
    imageUrl: '/assets/images/ocean.jpg',
    userName: 'User Nine',
    job:'Artist',
    userAvatar: '/assets/images/male1.png',
    nftAmount: 9,
    description: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo',},
  {
    id: 10,
    name: 'Art Piece 10',
    price: '$320-$1450',
    imageUrl: '/assets/images/building.jpg',
    userName: 'User Ten',
    job:'Artist',
    userAvatar:'/assets/images/female2.jpg',
    nftAmount: 10,
    description: 'Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo',},
];

const CollectionList = () => {
  const [purchasedItems, setPurchasedItems] = useState<CollectionItem[]>([]);

  const addToAccount = (item: CollectionItem) => {
    setPurchasedItems([...purchasedItems, item]);
    alert(`${item.name} added to your account!`);
  };

  const trimDescription = (description: string | undefined, maxWords: number) => {
    if (!description) return '';
    const words = description.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {collections.map((item) => (
        <div key={item.id} className="border shadow-lg p-4 rounded-2xl relative">
          <div className="relative">
            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href={`/collection/${item.id}`}>
                <span className="bg-white text-black py-1 px-4 rounded-full block text-center cursor-pointer">
                  See Collection
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-row item-center justify-between">
            <h2 className="text-lg font-bold mt-2">{item.name}</h2>
            <div className="bg-[#E6E9F2] rounded-full w-28 item-center text-center py-2 px-4 mt-2">
              <p className="text-sm text-gray-600">{item.nftAmount} NFTs</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">Price Range: {item.price}</p>
          <p className="text-[16px] text-[#23252B]">{trimDescription(item.description, 10)}</p>
          <div className="flex flex-row items-center mt-2">
            <img src={item.userAvatar} alt={item.userName} className="w-10 h-10 rounded-full mr-2" />
            <div>
              <p className="text-gray-500">{item.job}</p>
              <p className="font-semibold">{item.userName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionList;