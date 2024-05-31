// pages/account.tsx
import React from 'react';
import { X } from 'react-feather';

interface AccountSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Account: React.FC<AccountSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`relative inset-0 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative w-64 md:w-80 h-full bg-white shadow-xl p-6">
        <button className="absolute top-4 right-4 text-black" onClick={onClose}>
          <X size={24} />
        </button>
        <h2 className="text-2xl font-semibold mb-4">Account</h2>
        <div className="space-y-4">
          <button className="w-full py-2 bg-blue-600 text-white rounded-md">Profile</button>
          <button className="w-full py-2 bg-blue-600 text-white rounded-md">Settings</button>
          <button className="w-full py-2 bg-red-600 text-white rounded-md">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
