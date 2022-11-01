import React from 'react';
import ButtonClick from '../reUseComponents/ButtonClick';

const GiftCard = ({data}) => {
    return (
        <section className='w-[280px] rounded-lg col-span-4'>
            <img src="" alt="gift" />
            <img src="" alt="seller" />
            <div>
                <p>{data.ratings}</p>
                <h1>{data.name}</h1>
                <p>{data.store}</p>
            </div>
            <div>
                <hr />
            </div>
            <div>
                <h3>{data.price}</h3>
               <ButtonClick/>
            </div>
        </section>
    );
};

export default GiftCard;