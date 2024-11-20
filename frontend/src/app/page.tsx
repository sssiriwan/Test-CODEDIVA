"use client";
import Footer from '@/components/Footer';
import ProductList from '@/components/products/ProductList';
import CategoryMenu from '@/components/products/CategoryMenu';
import { use, useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);
  const { user } = useAuth();

  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className='text-2xl w-[90%] font-semibold'>
          <h1>Delivery To:</h1>
        </div>
        <div className='text-4xl font-semibold mt-4 w-[90%]'>Hi, {user?.firstName}</div>
        <div className="mt-4 w-[90%]">
          <img
            src="/swensens/braner.jpg"
            alt="Banner"
            className="w-full rounded-3xl"
          />
        </div>
        <div className=" mt-20  w-[90%] text-4xl font-semibold">
          <h1 className=' mb-4'>Highlight & Promotions</h1>
          <ProductList categoryId={8} /> 
        </div>
        <div className="my-4 w-[90%] ">
          <h1 className='text-4xl font-semibold mb-4'>Delivery Menu</h1>
          <CategoryMenu
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={(categoryId) => setSelectedCategoryId(categoryId)}
          />
          <ProductList categoryId={selectedCategoryId} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
