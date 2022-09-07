import React from "react";
import {
  dashboardlinkUser,
  dashboardlinkVendor,
} from "../../data/dashbordLinks";
import Link from "next/link";
import { Auth } from "aws-amplify";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useUserOrVendor } from "../../authContext/AuthContext";
import placeholder from "../../utils/imageBlurLoader";

const DashboardLinks = ({ userTitle, img, alt, isUser_vendor }) => {
  const { setAuthLoader, setVeifyUser, dispatch } = useUserOrVendor();

  const router = useRouter();

  return (
    <div
      className="dashboardlink bg-white w-[235px] rounded-[8px] absolute top-10 -right-14 sm:-right-5"
      style={{
        boxShadow:
          "0px -4px 4px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className="py-3 gap-2 flex-center px-5 border-b border-[#C4C4C4]">
        <div className="img h-[32px] w-[32px] auth-smallimg relative">
          {img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={img}
              alt={alt}
              className="absolute object-cover w-full h-full rounded-full"
            />
          ) : (
            <h1
              title={alt}
              className="capitalize w-full h-full font-16 sm:font-18 font-medium bg-slate-900 text-center text-white rounded-full flex-center justify-center"
            >
              {userTitle.substring(0, 1)}
            </h1>
          )}
        </div>
        <div>
          <h4
            title={userTitle}
            className="font-medium color4 font-12 sm:font-14 capitalize truncate w-[150px]"
          >
            {userTitle}
          </h4>

          <Link href="/dashboard">
            <a className="color3 hover:opacity-75 font-normal font-14">
              Dashboard
            </a>
          </Link>
        </div>
      </div>

      <div>
        <ul>
          {isUser_vendor === "user" &&
            dashboardlinkUser.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.path}>
                    <a>
                      <div className="flex-center gap-2 hover:bg-[#F3F3F3] color1 font-18 px-5 py-2 font-16 font-normal">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.img}
                          width={18}
                          height={18}
                          alt="icon"
                        />
                        <span>{item.name}</span>
                      </div>
                    </a>
                  </Link>
                </li>
              );
            })}
          {isUser_vendor === "vendor" &&
            dashboardlinkVendor.slice(0, 3).map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.path}>
                    <a>
                      <div className="flex-center gap-2 hover:bg-[#F3F3F3] color1 font-18 px-5 py-2 font-16 font-normal">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.img}
                          width={18}
                          height={18}
                          alt="icon"
                        />
                        <span>{item.name}</span>
                      </div>
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>

      <>
        <button
          onClick={async () => {
            setAuthLoader(true);
            try {
              router.push("/sign-in");
              await Auth.signOut();
              dispatch({
                type: "LOGOUT",
              });
              toast.success("Log Out successful", {
                duration: 2000,
              });
              setVeifyUser({});
              setAuthLoader(false);
            } catch (err) {
              toast.error(err.message, {
                duration: 3000,
              });
            }
          }}
          className="hover:opacity-75 py-2 font-medium border-t px-5 color1 font-18 border-[#C4C4C4] w-full text-left"
        >
          Logout
        </button>
      </>
    </div>
  );
};

export default React.memo(DashboardLinks);
