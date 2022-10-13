import React, { useState } from "react";

const FAQ = ({ title, description }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div
        className={` accordion-title flex justify-between items-center cursor-pointer btn-hover ${
          isOpen ? "open" : ""
        }`}
        onClick={() => setOpen(!isOpen)}
        role="button"
      >
        <h4 className="truncate pr-5"> {title}</h4>
      </div>

      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="p-2 color4">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default FAQ;
