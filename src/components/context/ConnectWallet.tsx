// ConnectWallet.tsx

import { useRouter } from 'next/router';
import { useWallet } from './WalletContext';

const ConnectWallet: React.FC = () => {
  const { connectWallet } = useWallet();
  const router = useRouter();

  const handleConnectWallet = () => {
    const account = {
      username: 'Heran Jon',
      avatarUrl: '/path/to/avatar.jpg',
    };
    connectWallet(account);
    router.push('/'); // Redirect to home page after connecting wallet
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={handleConnectWallet}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectWallet;
