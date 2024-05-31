// src/pages/_app.tsx

import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { WalletProvider } from '@/components/context/WalletContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider> 
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </WalletProvider>
  );
}

export default MyApp;
