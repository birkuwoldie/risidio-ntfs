// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin, Facebook } from 'react-feather';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E6E9F2] text-white p-4 h-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          {/* Marketplace Section */}
          <h3 className="text-lg text-black font-semibold">Marketplace</h3>
          {/* Placeholder for marketplace items */}
          
        </div>
        <div>
          {/* Social Media Icons */}
          {/* <h3 className="text-lg font-semibold">Follow Us</h3> */}
          <div className="flex space-x-4">
            {/* Instagram Icon */}
            <Link href="https://instagram.com" passHref>
              <span className="text-pink-500 hover:text-pink-600">
                <Instagram />
              </span>
            </Link>
            {/* Twitter Icon */}
            <Link href="https://twitter.com" passHref>
              <span className="text-blue-400 hover:text-blue-500">
                <Twitter />
              </span>
            </Link>
            {/* LinkedIn Icon */}
            <Link href="https://linkedin.com" passHref>
              <span className="text-blue-600 hover:text-blue-700">
                <Linkedin />
              </span>
            </Link>
            {/* Facebook Icon */}
            <Link href="https://facebook.com" passHref>
              <span className="text-blue-800 hover:text-blue-900">
                <Facebook />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
