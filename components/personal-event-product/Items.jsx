import React,{useEffect,useState} from "react";
import placeholder from "../../utils/imageBlurLoader";
import Link from "next/link";
import Image from "next/image";
import { Storage } from "aws-amplify";
const Items = ({data,service}) => {

  let datas =data
  let years = JSON.parse(datas?.yearsOfExperience)|| ""
  const [Images, setImages] = useState("")
  const [rating, setrating] = useState(0)
  const [img, setimg] = useState("")
useEffect(() => {
  async function getImages() {
    const signedURL = await Storage.get(datas?.uploadYourPhoto);
    const response = await fetch(signedURL);
    const signedURL1 = datas?.portfolioImage ? await Storage.get(datas?.portfolioImage[0]): "" ;
    const response1 = await fetch(signedURL)

    if (response.status == 200) {
      setImages(signedURL);
    }
    if (response1.status == 200) {
      setimg(signedURL1);
    } else if (response1.status === 404) {
      return;
    }
    else if (response.status === 404) {
      return;
    }
  }
  getImages()
  let r=0
  let k =datas?.Reviews?.items?.length
  const sum = datas?.Reviews?.items?.reduce((accumulator, object) => {
    return accumulator + object.salary;
  }, 0);
  
  r =sum/k ||0
  setrating(r)
}, [])

  return (
    <>
      <div className="shadow-md rounded-md overflow-hidden mt-2">
        <Link href={`/products/${service}/${datas.id}`}>
          <a>
            <div className="relative min-h-[120px] sm:min-h-[200px]">
              <Image
                src={
                  Images||
                  "https://res.cloudinary.com/eventizer-store/image/upload/v1655132241/Eventizer_New_Site/vendor_reg_hwz6i5.png"
                }
                layout="fill"
                objectFit="cover"
                objectPosition="center top"
                alt={"profile-image"}
                quality={100}
                placeholder="blur"
                blurDataURL={placeholder}
              />
              <div className=" bg-slate-300 bg-opacity-10  p-1 rounded-full absolute -bottom-7 sm:-bottom-8 right-7 sm:right-10  border border-gray-500">
                <div className="sm:h-[70px] sm:w-[70px] h-[45px] w-[45px] overflow-hidden relative rounded-full ">
                  <Image
                    src={
                      img||
                      "https://res.cloudinary.com/eventizer-store/image/upload/v1655131467/Eventizer_New_Site/user_reg_img.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt={"profile-image"}
                    quality={100}
                    placeholder="blur"
                    blurDataURL={placeholder}
                  />
                </div>
              </div>
            </div>
          </a>
        </Link>

        <div className="p-2 sm:p-4">
          <span className="color3 font-normal font-12">{rating}</span>
          <h2 className="color4 font-16 sm:font-18 font-normal truncate">
            <Link href={`/products/${service}/${datas.id}`}>
              <a className="btn-hover">{datas.title||""}</a>
            </Link>
          </h2>
          <div className="text-center flex justify-center mt-4">
            <div className="border-r border-slate-300 pr-2">
              <span className="color3 font-normal font-12">{datas.eventsCompleted}</span>
              <p className="text-[#8C8C8C] font-12">Events complete</p>
            </div>
            <div className="pl-2">
              <span className="color3 font-normal font-12">{years.value||"0"}</span>
              <p className="text-[#8C8C8C] font-12">Years experienced</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
