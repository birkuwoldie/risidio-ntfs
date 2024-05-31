// Header.tsx
'use client';

import Link from 'next/link';
import { useWallet } from '../context/WalletContext';
import Image from 'next/image';


const Header: React.FC = () => {
  const { isConnected, accountDetails } = useWallet();

  return (
    <header className="bg-white p-4 fixed w-full z-50 mb-8">
      <nav className="flex justify-between items-center">
        <div className="text-black text-2xl">Marketplace</div>
        {isConnected && accountDetails ? (
          <Link href="/account" className="flex items-center">
            <Image
              src={accountDetails.avatarUrl}
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-2"
            />
            <span className="font-bold">{accountDetails.username}</span>
          </Link>
        ) : (
          <Link href="/connect-wallet">
            <span className="bg-transparent hover:bg-white-700 border border-black text-black font-bold py-2 px-4 w-44 rounded-full">
              Connect Wallet
            </span>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
