import Link from 'next/link';
import React from 'react';
import { giftData } from './giftData';
import HamburgerDashboard from '../reUseComponents/icons/HamburgerDashboard'
import GiftCard from './GiftCard';

const Main = ({service}) => {
  return (
    <div className="container pt-24 product overflow-hidden-product  md:pb-0 pb-4">
     <h1 className="color4 font-18 sm:font-26">Gift</h1>
     <p className="text-[#6F6F6F] font-14"> Home {">"} Personal event {">"}{" "}
     <span className="capitalize">{service}</span>
     </p>
     <hr className="my-3" />
     <div className="flex h-min-screen relative">
     <div
            className={` w-[18%] min-w-[180px] absolute md:sticky left-0 md:left-[unset] bottom-0 md:bottom-[unset] top-0 md:bg-transparent  md:top-[12%] h-screen md:h-[30%] transition-transform duration-300 z-10 
              }`}
          >
            <button
            //   onClick={handleClickNav}
              className="absolute -right-8 top-[7px] bgcolor1 p-2 block md:hidden"
            >
              <HamburgerDashboard  />
            </button>
            <ul className=" pl-3">
              <li>Catagory</li>
              <li>Catagory</li>
              <li>Catagory</li>
            </ul>
          </div>
          <div className='w-[1px] h-[655px]  bg-[#D4D4D4]'>

          </div>
           <section className='pl-14'>
            <h1 className='text-[32px] mb-[10px] font-normal'>Gift Items</h1>
           <div className='grid grid-cols-12 gap-8 '>
                {giftData.map(data=><GiftCard key={data.id} data={data}/>)}
            </div>
           </section>
     </div>
    </div>
  );
};

export default Main;