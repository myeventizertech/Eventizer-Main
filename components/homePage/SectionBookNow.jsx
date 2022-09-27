import Script from 'next/script';
import React from 'react'
import ButtonLinkOrClick from '../reUseComponents/ButtonLinkOrClick';


const SectionBusiness = () => {
  return (
    <>
      <Script
        id="setmore_script"
        src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"
      ></Script>

      <div className="hero container py-8 bg-FAFAFA">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/img/corporate.png" className=" rounded-lg " alt='img' />
          <div>
            <h1 className="text-5xl font-bold">Book a free event consultant </h1>
            <p className="py-6">For your forthcoming events, it is better to talk with an event professional. Hire an event planner to help you arrange a successful event.</p>
            <ButtonLinkOrClick
              isLink={true}
              text="Book Now"
              font="font-14 sm:font-16 md:font-22 font-normal "
              goto="https://booking.setmore.com/scheduleappointment/84da232f-ba6c-429b-ba9e-8aa9510db87b"
              radius="rounded-[6px]"
              otherCss="block md:inline w-full"
              px="px-[50px]"
              py=" py-[8px] md:py-[10px]"
            />
          </div>
        </div>
      </div>
    </>
  )


}

export default SectionBusiness;