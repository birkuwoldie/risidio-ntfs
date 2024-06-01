import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface AccountDetails {
  username: string;
  avatarUrl: string;
}

interface WalletContextType {
  isConnected: boolean;
  accountDetails: AccountDetails | null;
  connectWallet: () => void;
  isBuy: boolean; // Add isBuy to the context state
  setIsBuy: (isBuy: boolean) => void; // Add setter for isBuy
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [accountDetails, setAccountDetails] = useState<AccountDetails | null>(null);
  const [isBuy, setIsBuy] = useState<boolean>(false); // Initialize isBuy state

  const connectWallet = () => {
    setIsConnected(true);
    // setAccountDetails(account);
  };

  return (
    <WalletContext.Provider value={{ isConnected, accountDetails, connectWallet, isBuy, setIsBuy }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
