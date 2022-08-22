import React from "react";
import ReactStars from "react-rating-stars-component";

const FeedbackRatingStar = ({ rating }) => {
  return (
    <>
      <ReactStars
        classNames="mr-2"
        size={25}
        edit={false}
        color={"#adb5bd"}
        activeColor={"#ef0d5e"}
        isHalf={true}
        value={rating}
      />
    </>
  );
};

export default FeedbackRatingStar;
