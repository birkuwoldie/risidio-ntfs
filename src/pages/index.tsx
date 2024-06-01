import CollectionList from '@/components/collections/CollectionList';
import Header from '@/components/header/Header';
import Head from 'next/head';
// import Header from '../components/Header';
// import ProductList from '../components/ProductList';
import Hero from './../components/hero/Hero';
import Account from '../components/header/account';

const Home = () => {
  return (
    <div>
      <Head>
        <title>My Wallet</title>
      </Head>
      
      {/* <Header /> */}
      <main className="p-4 mt-12">
      <Hero />
        <div className='p-4'>
          <h2 className='text-xl font-bold text-gray-800 mb-0'>Collections</h2>
        </div>
        <CollectionList />
        
      </main>
    </div>
  );
};

export default Home;
