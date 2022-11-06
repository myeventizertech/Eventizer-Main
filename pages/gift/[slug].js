import React from 'react';
import { giftData } from '../../components/gift/giftData';
import ImageViewer from "react-simple-image-viewer";
import Slider from 'react-slick';
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/gift.module.css"
import RatingsSection from '../../components/gift/RatingsSection';
import ReactStars from 'react-rating-stars-component';


function SampleNextArrow(props) {
    const { className, onClick } = props;
    
  
    return (
      <div className={`${className} `} onClick={onClick}>
        <svg
          className="w-3"
          viewBox="0 0 8 12 "
          fill="#787878"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z" />
        </svg>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={`${className} ml-1`} onClick={onClick}>
      
       <svg
          className="w-3 ml-1 "
          viewBox="0 0 8 12"
          fill="#787878"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.41003 1.41L2.83003 6L7.41003 10.59L6.00003 12L3.38077e-05 6L6.00003 1.23266e-07L7.41003 1.41Z" />
        </svg>
      </div>
    );
  }


const GiftDetail = () => {
    const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [showMore,setShowMore]= useState(false)
//   const [images, setimages] = useState([])
    const data = giftData.slice(0,1)
    const obj = data[0]

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 639,
            settings: {
              dots: false,
              infinite: false,
              speed: 500,
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      };
    
      const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
      }, []);
    
      const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
      };
    
      useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isViewerOpen);
      }, [isViewerOpen]);
    
      const images = ["https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
      "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
      "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU=",
      "https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
    ]

    return (
        <section className='container  mt-[155px]'>
      
           <div className='flex md:flex-row flex-col  min-h-[300px] h-auto'>
           <div className='w-full md:w-[435px]'>            
                <img src='https://i.ibb.co/gZZVZgt/Rectangle-4499.png' alt="gift" />
           
           <div className='mt-2'>

           
                <div className=" p-0 w-full">
        {/* {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="300"
            key={index}
            style={{ margin: '2px' }}
            alt=""
          />
        ))} */}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>

<div className="w-auto md:w-[95%] mx-auto">
        <Slider {...settings}>
          {images.map((item, i) => {
            return (
              <div key={i} onClick={() => openImageViewer(i)}>
                <div className=" sm:h-[8rem] mx bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item}
                    alt={"profile-image"}
                    className="mx-auto h-full w-[130px]"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      </div>


            </div>

            <div className='md:ml-5 '>
                <h1 className='text-lg mt-5 md:mt-0 md:text-2xl font-normal md:mb-[13px] mb-[11px]'>Gift name of this vendor</h1>
                <div className='text-lg  font-normal flex'>
                <ReactStars
                  classNames="mr-2"
                  size={24}
                  edit={false}
                  color={"#adb5bd"}
                  activeColor={"#ef0d5e"}
                  isHalf={true}
                  value={obj.rating}
                />
                    <p className='md:text-lg text-[15px]'>{obj.rating}</p>
                    <p className='md:text-lg text-[15px] text-[#8C8C8C] mx-2'>(13 ratings)</p>
                    </div>

                    <div className='w-auto md:max-w-[375px]'>
                    <p className='md:text-base text-[13.5px] font-normal my-[12px] md:my-[15px] text-[#6F6F6F] '>{!showMore ? obj.giftDescription.slice(0,150):obj.giftDescription}
                    <button onClick={()=>setShowMore(!showMore)} className='text-xs text-[#EF0D5E] hover:text-[#ef0d60d4]'>{!showMore?'Show more':'Show less'}</button>
                    </p>
                    </div>

                   <div className='mb-[14px]'>
                   <p className='text-sm  text-[#8C8C8C]'>৳{obj.price}</p>
                    <div className='h-[1.2px]  bg-black mt-[-11.5px] w-[40px] mb-3'></div>
                   </div>

                    <h2 className='text-[28px] font-normal text-[#EF0D5E]'>৳ {obj.price}</h2>
                    <div className='flex md:ml-0 ml-[-5px] mt-6 md:mt-7'>
                       <button> 
                        <div className='bg-[#EDEEF5] md:w-9 w-[30px] h-[30px] md:h-9 rounded-[50%] flex justify-center align-middle'>
                            <p className='text-lg font-bold mt-1'>-</p>
                        </div>
                        </button>
                        <p className='md:text-2xl text-[20px] font-medium mx-[10px] mt-1'>2</p>
                        <button>
                        <div className='bg-[#EDEEF5] md:w-9 w-[30px] h-[30px] md:h-9 rounded-[50%] flex justify-center align-middle'>
                            <p className='text-lg font-bold mt-1'>+</p>
                        </div>
                        </button>
                        <button className='ml-3 bg-[#EF0D5E] w-[93px] md:w-28 text-white text-base font-normal md:rounded-[18px] rounded-[15px]'>Buy Now</button>
                    </div>

                    <div className='text-base mt-[30px] mb-[28px] font-normal'>
            <div className='flex'>
            <h3>In box:</h3>
            <h3 className='ml-3'>1. First Item</h3>
            </div>
            <div className='ml-16'>
            <h3>2. Second Item</h3>
            <h3>2. Third Item</h3>
            </div>

            
           </div>

            </div>
            <div className='md:ml-7 md:w-[280px] w-full'>            
                <div className=' bg-[#D9D9D9]'>
                    <h1 className='ml-[18px] py-2 text-lg font-normal '>Customize</h1>
                </div>
                <div className='bg-[#F0F0F0]  h-[112px]'>
                <form className='ml-[18px]'>
                    <div className=' '>
                    <input className='mt-[15px]' type="checkbox" name="First item" id="first-item-checkbox" />
                    <label className='text-base font-normal ml-2' htmlFor="first-item-checkbox">First item</label>
                    </div>
                    <div className=' '>
                    <input className='mt-[10px]' type="checkbox" name="Second item" id="second-item-checkbox" />
                    <label className='text-base font-normal ml-2' htmlFor="second-item-checkbox">Second item</label>
                    </div>
                    <div className=' '>
                    <input className='mt-[10px]' type="checkbox" name="Third item" id="third-item-checkbox" />
                    <label className='text-base font-normal ml-2' htmlFor="third-item-checkbox">Third item</label>
                    </div>
                </form>
                </div>
                <div className='h-[149px] mt-4 bg-[#F0F0F0]'>

                </div>
            </div>
           </div>


          <div className='flex mt-6'>
          

           

           </div>

           {/* More Information section */}
           <div className='mt-5'>
            <div className='bg-[#D9D9D9]'>
              <h2 className='text-lg py-2 font-normal ml-3 md:ml-11'>More information about gift</h2>
            </div>
            <div className='mt-4'>
              <p className='md:text-lg text-base font-normal md:ml-11 md:mr-16'>What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
            popularised in the 1960s with the release of Letraset sheets contai</p>
            </div>
            <RatingsSection/>
           </div>
        </section>
    );
};

export default GiftDetail;