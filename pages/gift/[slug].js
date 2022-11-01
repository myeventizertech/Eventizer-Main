import React from 'react';
import { giftData } from '../../components/gift/giftData';

const GiftDetail = () => {
    const data = giftData.slice(0,1)
    const obj = data[0]
    return (
        <section className='container  mt-[200px]'>
           <div className='flex h-[290px]'>
           <div className=' w-[435px]'>            
                <img src='https://i.ibb.co/gZZVZgt/Rectangle-4499.png' alt="gift" />
            </div>

            <div className='ml-5 col-span-4'>
                <h1 className='text-2xl font-normal mb-[13px]'>Gift name of this vendor</h1>
                <div className='text-lg font-normal flex'>
                    <p>{obj.rating}</p>
                    <p className='text-[#8C8C8C] mx-2'>(13 ratings)</p>
                    </div>
                    {/* <p className='text-base font-normal my-[15px] text-[#6F6F6F]'>{obj.giftDescription}</p> */}
                    <p className='text-sm text-[#8C8C8C]'>৳{obj.price}</p>
                    <hr className='mt-[-11.5px] w-[40px] mb-3'/>
                    <h2 className='text-3xl font-normal text-[#EF0D5E]'>৳{obj.price}</h2>
                    <div className='flex mt-7'>
                       <button> 
                        <div className='bg-[#EDEEF5] w-9 h-9 rounded-[50%] flex justify-center align-middle'>
                            <p className='text-lg font-bold mt-1'>-</p>
                        </div>
                        </button>
                        <p className='text-2xl font-medium mx-2 mt-1'>2</p>
                        <button>
                        <div className='bg-[#EDEEF5] w-9 h-9 rounded-[50%] flex justify-center align-middle'>
                            <p className='text-lg font-bold mt-1'>+</p>
                        </div>
                        </button>
                        <button className='ml-2 bg-[#EF0D5E] w-28 text-white text-base font-normal rounded-[18px]'>Buy Now</button>
                    </div>
            </div>
           </div>
        </section>
    );
};

export default GiftDetail;