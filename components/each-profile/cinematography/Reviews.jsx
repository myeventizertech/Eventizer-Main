import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Storage } from "aws-amplify";
const Reviews = ({ name, rate, review, userImg }) => {
  let [updateImage, setUpdateImage] = useState("");
  useEffect(() => {
    async function fetchme() {
      try {
        const imageKey = await Storage.get(userImg);

        const response = await fetch(imageKey);
        if (response.status == 200) {
          setUpdateImage(imageKey);
        } else if (response.status === 404) { 
          setUpdateImage("");
        }
      } catch (error) {
      }
    }
    fetchme();
  }, [userImg]);
  return (
    <div className="mt-3 flex gap-3">
      <div className="min-w-9 pt-1">
        <div className="img h-[32px] w-[32px] auth-smallimg cursor-pointer select-none relative overflow-hidden rounded-full ">
          {updateImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={updateImage}
              alt="image"
              className={`h-[32px] w-[32px] object-cover object-center`}
            />
          ) : (
            <h1 className="capitalize w-full h-full font-16 sm:font-18 font-medium bg-slate-900 text-center text-white rounded-full flex-center justify-center">
              {name.substring(0, 1)}
            </h1>
          )}
        </div>
      </div>
      <div>
        <h1 className="color4 font-medium">{name}</h1>
        <div>
          <ReactStars
            classNames="mr-2"
            size={18}
            edit={false}
            color={"#adb5bd"}
            activeColor={"#ef0d5e"}
            isHalf={true}
            value={rate}
          />
        </div>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Reviews;
