import { useRouter } from "next/router";
import ButtonLinkOrClick from "../components/reUseComponents/ButtonLinkOrClick";
import placeholder from "../utils/imageBlurLoader";
// import * as queries from '../src/graphql/queries'
// import { API } from "aws-amplify";
const Error = () => {
  const router = useRouter();
// async function check(){
//   const res = await API.graphql({
//     query: queries.listPhotographies,
//   });
//   console.log(res?.data?.listPhotographies?.items)
// }
// check()
  return (
    // <div className="flex justify-center items-center h-screen gap-1  text-center">
    //   <div className="p-4 flex flex-col items-center">
    //     <div className="text-[1.5rem] sm:text-[2rem]">
    //       <h1
    //         className="text-[8rem] sm:text-[10rem] leading-none text-[#1e1d28]"
    //         style={{ textShadow: "10px 7px 3px #000000a1" }}

    //       >
    //         404
    //       </h1>
    //       Oops! Page Not Found
    //     </div>
    //     <button
    //       className="bgcolor2 btn-hover text-white px-5 py-3 mt-5 rounded-lg shadow-[0px_2px_29px_-13px_#06060da6] text-[.8rem] sm:text-[1rem]"
    //       type="button"
    //       onClick={() => router.push("/")}
    //     >
    //       Back To Home
    //     </button>
    //   </div>
    // </div>
    <div className="container m-all min-h-screen  text-center">
      {/* <div className=" max-w-[500px] mx-auto my-3">
   
      </div> */}

      <h1 className="font-22 sm:font-30 md:font-48 color3">
        This site is under construction
      </h1>
      <p className="font-14 sm:font-18 color4 mt-[14px]">
        We are currently building our website in order to provide you with the
        greatest user experience possible. Please bear with us for a few days.
        Register in as a partner if you are a microentrepreneur. Thank you very
        much
      </p>

      <ButtonLinkOrClick
        isLink={true}
        text="Register Now"
        font="font-14 sm:font-16 md:font-22 font-normal "
        goto="/vendor-register"
        radius="rounded-[6px]"
        otherCss="inline-block mt-6"
        px="px-[50px]"
        py=" py-[8px] md:py-[10px]"
      />
    </div>
  );
};

export default Error;
