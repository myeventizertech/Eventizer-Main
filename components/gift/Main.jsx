import Link from 'next/link';
import React from 'react';
import { giftData } from './giftData';
import HamburgerDashboard from '../reUseComponents/icons/HamburgerDashboard'
import GiftCard from './GiftCard';
import { useState } from 'react';
import { useEffect } from 'react';

const Main = ({service}) => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const catagories = [
    {id:1,name:'catagory'},
    {id:2,name:'catagory'},
    {id:3,name:'catagory'}
  ]

  const handleClickNav = () => {
    setToggle(!toggle);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <div className="container  pt-24 product overflow-hidden-product  md:pb-0 pb-4">
     <h1 className="color4 font-18 sm:font-26">Gift</h1>
     <p className="text-[#6F6F6F] font-14"> Home {">"} Personal event {">"}{" "}
     <span className="capitalize">{service}</span>
     </p>
     <hr className="hidden md:block my-3" />
     <div className="flex h-min-screen relative">
     <div
            className={` w-[18%] min-w-[180px] absolute md:sticky left-0 md:left-[unset] bottom-0 md:bottom-[unset] top-0 md:bg-transparent  md:top-[12%] h-screen md:h-[30%] transition-transform duration-300 z-10 ${toggle ? "translate-x-0" : "translate-x-[-110%] md:translate-x-0"
          }
              }`}
          >
            <button
              onClick={handleClickNav}
              className="absolute -right-8 top-[7px] bgcolor1 p-2 block md:hidden"
            >
              <HamburgerDashboard  />
            </button>
            <ul className=" pl-3">
              {catagories.map((item) => {
                return (
                  <li key={item.id} className="mt-1  ">
                    <Link href='/gift'>
                      <a
                        className={`text-[#434343] font-14 font-normal hover:opacity-75 flex items-center gap-2 px-2 py-1 `
                       
                    
                    }
                      >
                        <span>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={"/img/finger_icon.svg"}
                            alt="icon"
                            width={13}
                            height={13}
                          />
                        </span>
                        <span>{item.name}</span>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='w-[1px] h-[655px] hidden md:block  bg-[#D4D4D4]'>

          </div>
           <section className=' md:pl-14 p-0'>
            <h1 className='text-[32px] mb-[10px] font-normal'>Gift Items</h1>
           <div className='grid grid-cols-12 md:gap-8 gap-4'>
                {giftData.map(data=><GiftCard key={data.id} data={data}/>)}
            </div>
           </section>
     </div>
    </div>
  );
};

export default Main;