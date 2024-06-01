'use client';
import React from 'react';
import { ChevronRight, Circle } from 'react-feather'; 
import { useWallet } from '../context/WalletContext';
import Image  from 'next/image';
import Link from 'next/link';
interface AccountProps {
  onClose: () => void;
}

const Account: React.FC<AccountProps> = ({ onClose }) => {
  const { isConnected, isBuy } = useWallet();

  return (
    <div className="fixed inset-y-0 right-0 z-50 flex items-center justify-end m-6 mb-20 rounded-3xl overflow-hidden">
      <div className="absolute inset-y-0 right-0 bg-transparent" onClick={onClose}></div>
      <div className="bg-white w-80 h-full shadow-lg p-4 border border-black rounded-3xl">
        <div className="flex justify-between items-center">
          <Circle size={24} className="text-black bg-gray-500 rounded-full p-2" /> {/* Circled right arrow icon */}
          <p className="text-xs">555crgb745n876v...9676</p>
          <button onClick={onClose} className="text-black font-bold">
            <ChevronRight size={24} /> {/* Use the right arrow icon */}
          </button>
        </div>
        <div className="mt-12">
          {/* Conditionally render content based on isBuy */}
          <p className="ml-4 text-sm">In your wallet</p>
          <h5 className="text-2xl font-bold text-black ml-4 mt-4">0.129 BTC</h5>
          <h2 className="text-2xl font-bold text-black mt-16">Your NFTs</h2>
          {isBuy ? (
            <>
            <Image src='/assets/images/dusk.jpeg' alt='your NTFs' width={500} height={300} className="w-full h-auto object-cover mt-10 rounded-2xl" />
            </>
          ) : (
            <>
            <div className="flex flex-col item-center justify-center mt-20">
              <p className="ml-4 text-md text-center text-gray-500">You don’t own any NFTs yet.</p>
              
<Link href='/collection/1'>
  <span className="bg-black w-40 ml-16 text-white rounded-full px-4 py-2 mt-4 inline-block">Start Shopping</span>
</Link>
            </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
