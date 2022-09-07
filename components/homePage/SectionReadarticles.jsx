import React from "react";
import DrawlineSvg from "../reUseComponents/DrawlineSvg";
import useSWR from "swr";
import Link from "next/link";
import LinkIcon from "../reUseComponents/icons/LinkIcon";
import Loader from "../reUseComponents/Loader";
const SectionReadarticles = () => {
  const url = `https://diary.myeventizer.com/wp-json/api/v1/posts`;
  const fetcher = async (...args) => {
    let response = await fetch(...args);
    const data = await response.json();
    return data;
  };
  const { data } = useSWR(url, fetcher);

  return (
    <>
      <div className="bg-white">
        <div className="container py-all">
          <h1 className="font-22 sm:font-48 color4 text-center font-medium">
            Read our articles
          </h1>
          <DrawlineSvg />
          {!data ? (
            <Loader
              center={true}
              colorDefault={false}
              loaderWidht="w-[44px] h-[44px]"
              bdrWidth="4px"
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 sm:mt-0">
              {data?.slice(0, 3).map((item, i) => {
                return (
                  <div className="flex " key={i}>
                    <div className="bg-white flex flex-col overflow-hidden rounded-[4px] shadow-[0px_0px_10px_0px_#90909040] w-full">
                      <div className="w-full h-[10rem] md:h-[15rem] relative ">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={
                            item?.featured_image?.large ||
                            "https://res.cloudinary.com/eventizer-store/image/upload/v1656771738/Eventizer_New_Site/placeholder-image_bjm2n7.png"
                          }                      
                          alt={item?.title}
                          className="absolute w-full h-full object-cover object-center"
                        />
                      </div>

                      <div className="p-4 flex flex-col gap-3 overflow-hidden">
                        <h1
                          title={item?.title}
                          className="text-[20px] md:text-[24px] font-medium underline hover:opacity-90"
                        >
                          <Link
                            href={`https://diary.myeventizer.com/elephant-guides-of-nepal/${item?.slug}`}
                          >
                            <a target="_blank">
                              {item?.title?.substring(0, 42)}
                              {item?.title?.length > 42 ? "..." : ""}
                            </a>
                          </Link>
                        </h1>

                        <p className="font-12 font-light color1">
                          {item?.content
                            ?.replace(/(<([^>]+)>)/gi, "")
                            .substring(0, 100)}
                          {item?.content?.length > 100 ? "..." : ""}
                        </p>

                        <Link
                          href={`https://diary.myeventizer.com/elephant-guides-of-nepal/${item?.slug}`}
                        >
                          <a target="_blank" className="inline-block hover:opacity-75 hover:underline w-20">
                            <span className="flex items-center gap-2 font-12 font-normal color4">
                              <span>Read Post</span>{" "}
                              <span>
                                <LinkIcon />
                              </span>
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {data && (
            <div className="flex justify-end mt-4">
              <Link href="https://diary.myeventizer.com/">
                <a className="inline-block hover:opacity-75 hover:underline color3 font-18 font-normal">
                  Read All
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionReadarticles;
