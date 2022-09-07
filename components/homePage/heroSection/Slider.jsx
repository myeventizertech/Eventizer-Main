import React from "react";
import Typewriter from "typewriter-effect";

function Slideshow({ slideItem, width = "8", height = "40", isimage = true }) {
  return (
    <div
      className="relative"
      style={{ height: `${height}px`, width: `${width}rem` }}
    >
      <div className="w-full h-full flex items-center gap-3 ">
        {isimage && (
          <div className="flex-center">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={"/img/finger_icon.svg"} width={17} height={17} alt="icon" />
          </div>
        )}
        <h3>
          <Typewriter
            options={{
              strings: slideItem,
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
      </div>
    </div>
  );
}
export default Slideshow;
