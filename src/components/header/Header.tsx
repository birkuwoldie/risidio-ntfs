'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useWallet } from '../context/WalletContext';
import Image from 'next/image';
import Account from './account'; // Import your Account component

const Header: React.FC = () => {
  const { isConnected, connectWallet } = useWallet();
  const [isAccountOpen, setIsAccountOpen] = useState(false); // State for account popup visibility

  const toggleAccountPopup = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  return (
    <header className="bg-white p-4 fixed w-full z-50 mb-8">
      <nav className="flex justify-between items-center">
        <div className="text-black text-2xl">Marketplace</div>
        {isConnected ? (
          // Use a button to toggle the account popup
          <button onClick={toggleAccountPopup} className="flex items-center">
            <span className="font-bold text-black">Account</span>
          </button>
        ) : (
          <button onClick={connectWallet} className="bg-transparent hover:bg-white-700 border border-black text-black font-bold py-2 px-4 w-44 rounded-full">
            Connect Wallet
          </button>
        )}
      </nav>
      {/* Render the Account component if the account popup is open */}
      {isAccountOpen && <Account onClose={toggleAccountPopup} />}
    </header>
  );
};

export default Header;
