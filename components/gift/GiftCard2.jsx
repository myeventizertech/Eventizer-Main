import React from 'react';

const GiftCard2 = ({data}) => {
    return (
        <section className='rounded-lg max-w-[280px] bg-base-100 col-span-6 min-w-full   lg:min-w-full  md:col-span-6 mdx:col-span-3 shadow-md w-[100%] '>
            <div className=' '>
            <img className='w-[100%] rounded-tl-lg rounded-tr-lg min-h-[113px] md:min-h-[210px] max-h-[210px]' src={data.giftPhoto} alt="gift" />

             <div className='flex justify-end'>
                                                               
            <div className="mt-[-17.5px] mr-5 md:mt-[-32.5px] absolute ml-[95px] bg-slate-300 bg-opacity-10 rounded-[50%] w-[35px] md:w-[63px]    border border-gray-500">
                <div className="overflow-hidden relative rounded-full ">
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
            <div className='flex justify-center gap-5 mt-3 '>
            <button className='rounded text-white bg-[#ef0d33] md:p-1 text-[8px] md:text-xs w-[45px] md:w-[82px] h-[15px] md:h-[28px] font-normal hover:opacity-75'>Delete</button>
            
              <button className='rounded text-white bg-[#2ac9a1] md:p-1 text-[8px] md:text-xs w-[45px] md:w-[82px] h-[15px] md:h-[28px] font-normal hover:opacity-75'>Edit</button>
            </div>
            </div>
        </section>
    );
};

export default GiftCard2;