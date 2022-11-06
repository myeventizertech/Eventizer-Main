import React from 'react';
import ButtonClick from '../reUseComponents/ButtonClick';
import p1 from '../../public/img/Rectangle 42.png'

const GiftCard = ({data}) => {
    return (
        <section className='rounded  bg-base-100 col-span-6 min-w-full   lg:min-w-full  md:col-span-6 mdx:col-span-4 shadow-md w-[100%] '>
            <div className=' w-[100%]'>
            <img src={data.giftPhoto} alt="gift" />

             <div>
                                                               
            <div className="mt-[-17.5px] md:mt-[-32.5px] ml-[95px] md:ml-[197px] absolute bg-slate-300 bg-opacity-10 rounded-[50%] w-[35px] md:w-[63px]    border border-gray-500">
                <div className=" overflow-hidden relative rounded-full ">
                  {  (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={data.sellerPhoto?data.sellerPhoto :
                            "/img/placeholder-image.png"}
                      className=" object-cover  mx-auto mt-[4px] md:mt-[6px] w-[30px] md:w-[55px] "
                      alt={"profile-image"}
                    />
                  )}
                </div>
              </div>
             </div> 
            </div>
            <div className='md:px-7 px-3 md:py-[10px] py-[8px]'>
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
              <button className='rounded text-white bg-[#EF0D5E] md:p-1 text-[8px] md:text-xs w-[45px] md:w-[82px] h-[15px] md:h-[28px] font-normal'>Buy Now</button>
            </div>
            </div>
        </section>
    );
};

export default GiftCard;