import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import debounce from "../utils/debounceSubmitHandler";
// import { userProtectRoute } from "../utils/userProtectRoute";

const Checkoutfailed = () => {
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
        <div className="max-w-[55rem] bg-white px-4 md:px-8 py-8 sm:py-14 border-dashed border border-gray-600 rounded-md">
          <h2 className=" font-16 md:font-22 text-[#f70505] font-medium">
            Oops! Payment Failed
          </h2>
          <h1 className="font-20 md:font-32 color4 font-normal my-2">
            Something went wrong
          </h1>
          <p className="font-16 md:font-18 color4 font-normal">
            Please contact with our support
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
export default Checkoutfailed;
