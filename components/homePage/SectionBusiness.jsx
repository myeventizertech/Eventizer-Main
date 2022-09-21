import React from 'react'
import ButtonLinkOrClick from '../reUseComponents/ButtonLinkOrClick';


const SectionBusiness=()=>{
return(
    <div className="hero container py-8 bg-FAFAFA">
  <div className="hero-content flex-col lg:flex-row">
    <img src="/img/corporate.png" className="max-w-sm rounded-lg " alt='img'/>
    <div>
      <h1 className="text-5xl font-bold">Book a free event consultant </h1>
      <p className="py-6">For your forthcoming events, it is better to talk with an event professional. Hire an event planner to help you arrange a successful event.</p>
      <ButtonLinkOrClick
              isLink={true}
              text="Book Now"
              font="font-14 sm:font-16 md:font-22 font-normal "
              goto="/corporate-event"
              radius="rounded-[6px]"
              otherCss="block md:inline w-full"
              px="px-[50px]"
              py=" py-[8px] md:py-[10px]"
            />
    </div>
  </div>
</div>
)


}

export default SectionBusiness;