import React, { useState } from "react";

let OrderList = ({ orderList,handleFilterOrder,currOrderList }) => {


  return (
    <>
      <ul className="flex flex-wrap text-[#636363] font-14 sm:font-16 font-normal gap-2 sm:gap-4 ">
        {orderList.map((item, i) => {
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => handleFilterOrder(item.id, item.value)}
                className={`${item.id === currOrderList && "color3"} btn-hover capitalize`}
              >
                {item.value}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default OrderList;
