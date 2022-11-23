import React from 'react';
import GiftCard from '../../../gift/GiftCard';
import { giftData } from '../../../gift/giftData';

const GiftMyPackage = () => {
    return (
        <div className="container  pt-24 product overflow-hidden-product  md:pb-0 pb-4">
            <section className=' '>
            <h1 className='text-[32px] mb-[10px] font-normal'>Gift Items</h1>
           <div className='grid grid-cols-12 md:gap-8 gap-4'>
                {giftData.map(data=><GiftCard key={data.id} data={data}/>)}
            </div>
           </section>
        </div>
    );
};

export default GiftMyPackage;