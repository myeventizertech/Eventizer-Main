import React from 'react';
import GiftCard2 from '../../../gift/GiftCard2';
import { giftData } from '../../../gift/giftData';

const GiftMyPackage = () => {
    return (
        <div className=" overflow-hidden-product  md:pb-0 pb-4">
           
            
           <div className='grid grid-cols-12 md:gap-8 gap-4'>
                {giftData.map(data=><GiftCard2 key={data.id} data={data}/>)}
            </div>
          
        </div>
    );
}

export default GiftMyPackage;