import React from 'react';
import ButtonClick from '../reUseComponents/ButtonClick';
import p1 from '../../public/img/Rectangle 42.png'

const GiftCard = ({data}) => {
    return (
        <section className='w-[280px] rounded-lg col-span-4 border '>
            <div>
            <img src={data.giftPhoto} alt="gift" />

           <div className='mt-[-30px] border-[#252836] border w-[63px] h-[63px] ml-[195px] rounded-[50%] z-10'>
           <div className='mb-[-3px]'>
           <img src={data.sellerPhoto} alt="seller" />
           </div>
           </div>
            </div>
            <div className='px-7 py-[10px]'>
            <div>
                <p className='text-xs font-normal text-[#EF0D5E]'>{data.rating}</p>
                <h1 className='text-lg font-normal'>{data.name}</h1>
                <p className='text-[10px] font-normal mb-[18px]'>{data.store}</p>
            </div>
            <div>
                <hr />
            </div>
            <div className='flex justify-between mt-3 '>
                <h3 className='text-sm text-[#EF0D5E] font-normal'>৳{data.price}</h3>
              <button className='rounded text-white bg-[#EF0D5E] p-1 text-xs w-[82px] font-normal'>Buy Now</button>
            </div>
            </div>
        </section>
    );
};

export default GiftCard;