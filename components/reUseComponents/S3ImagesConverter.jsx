import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";

let S3ImagesConverter = ({ imgCode }) => {
  const [images, setImages] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    async function fetchme() {
      try {
        const imageKey = await Storage.get(imgCode);
        setImages(imageKey);
        setLoader(false);
      } catch (error) {}
    }
    fetchme();
  }, [imgCode]);

  return (
    <>
      {loader ? (
        "...."
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={images} alt="image" className="w-full" />
      )}
    </>
  );
};
export default S3ImagesConverter;
