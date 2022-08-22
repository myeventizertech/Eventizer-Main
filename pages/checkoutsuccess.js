import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import debounce from "../utils/debounceSubmitHandler";
// import { userProtectRoute } from "../utils/userProtectRoute";

const CheckoutSuccess = () => {
  let router = useRouter();

  useEffect(() => {
    async function callmeRedirect() {
      await debounce(10000);

      router.push("/dashboard/my-booking");
    }

    callmeRedirect();
  }, [router]);

  return (
    <>
      <Head>
        <title>Eventizer | Checkout Success</title>
      </Head>

      <div className="h-[70vh] flex justify-center items-center text-center container m-all">
        <div className="max-w-[55rem] bg-white px-4 md:px-8 py-8 sm:py-14 border-dashed border border-gray-600 rounded-md ">
          <h2 className="font-16 font-22 color3 font-medium">
            Quotation booked
          </h2>
          <h1 className="font-20 md:font-32 text-[#00ff28] font-normal my-2">
            Thanks for booking for quotation
          </h1>
          <p className="font-16 md:font-18 color4 font-normal max-w-[30rem] mx-auto">
            Our expert will contact with you very soo to discuss about your
            order. Be prepare for meeting
          </p>
        </div>
      </div>
    </>
  );
};
// export const getServerSideProps = userProtectRoute((context) => {
//   return {
//     props: {},
//   };
// });
export default CheckoutSuccess;
