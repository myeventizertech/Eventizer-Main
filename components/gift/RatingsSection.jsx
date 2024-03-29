import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { reviews } from './giftData';

const RatingsSection = () => {
    return (
        <div className='mt-5'>
             <div className='bg-[#D9D9D9]'>
              <h2 className='text-lg py-2 font-normal ml-11'>Ratings</h2>
              </div>
              <div className='ml-8'>
                <h2 className='text-[22px] mt-6 font-semibold'>Review for Gift Name</h2>
                <h1 className='text-[32px] font-semibold mt-[10px]'>4.8</h1>
                <p className='text-base font-normal'>Add review</p>
                <div className='ml-7 mt-2 max-w-[575px]'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-base font-normal'>Service</p>
                            <ReactStars
        classNames="mr-2"
        size={20}
        edit={true}
        color={"#adb5bd"}
        activeColor={"#ef0d5e"}
        isHalf={true}
        value={5}
        // onChange={(value) => {
        //   fieldProps.setFieldValue(name, value);
        // }}
      />
                        </div>
                        <div>
                            <p className='text-base font-normal'>Behaviour</p>
                            <ReactStars
        classNames="mr-2"
        size={20}
        edit={true}
        color={"#adb5bd"}
        activeColor={"#ef0d5e"}
        isHalf={true}
        value={5}
        // onChange={(value) => {
        //   fieldProps.setFieldValue(name, value);
        // }}
      />
                        </div>
                        <div>
                            <p className='text-base font-normal'>Value of money</p>
                            <ReactStars
        classNames="mr-2"
        size={20}
        edit={true}
        color={"#adb5bd"}
        activeColor={"#ef0d5e"}
        isHalf={true}
        value={5}
        // onChange={(value) => {
        //   fieldProps.setFieldValue(name, value);
        // }}
      />
                        </div>
                    </div>
                    <div className=' flex flex-col items-end justify-end'>
                       <input type="text" className='pl-3 w-full rounded-[6px] border-[0.5px] border-[#C4C4C4] mt-2 h-[58px] text-[#8C8C8C] hover:border-black' placeholder='Write a review'/>
                       <button className='text-base w-24 text-white rounded bg-[#EF0D5E] py-[6px] mt-[10px] right-0 '>Submit</button>
                    </div>
                    </div>
                    <div>
                       {reviews.map(review=>
                       <div className='flex my-4' key={review.id}>
                        <div className='mr-6'>
                        <img className='' src={review.img} alt="user" />
                        </div>
                        <div className=''>
                            <p className='text-base  text-[#595959] font-normal'>{review.name}</p>
                            <ReactStars
        classNames="mr-2"
        size={20}
        edit={true}
        color={"#adb5bd"}
        activeColor={"#ef0d5e"}
        isHalf={true}
        value={review.rating}
        // onChange={(value) => {
        //   fieldProps.setFieldValue(name, value);
        // }}
      />
                            <div className='max-w-[590px]'>
                            <p className='text-base text-[#595959] font-normal'>{review.review}</p>
                            </div>
                        </div>
                       </div>) }
                    </div>
              </div>
        </div>
    );
};

export default RatingsSection;