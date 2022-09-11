import React from "react";
import GiveReview from "./GiveReview";
import { useState, useEffect } from "react";
import * as mutations from "../../../src/graphql/mutations";
import { useRouter } from "next/router";
import * as queries from "../../../src/graphql/queries";
import conditionalRendar from "../../../utils/conditionalRendar"
const BookingItem = ({ data, getData }) => {
  const router = useRouter();
  const [modalReviewIsOpen, setReviewIsOpen] = React.useState(false);
  let obj = JSON.parse(data.package);
  let service = obj.service;
  let id = obj.vendorID;
  const [rev, setrev] = useState(false);
  const [pay, setpay] = useState(false);
  const [number, setnumber] = useState(true);

  useEffect(() => {
    function check1() {
      if (data?.reviewID !== null) {
        setrev(true);
      }
    }
    function check2() {
      if (data?.status !== "Completed") {
        setrev(true);
      }
    }
    function check3() {
      if (data?.status !== "pendingPayment") {
        setpay(true);
      }
    }
    check1();
    check2();
    check3();
  }, [data?.reviewID, data?.status]);

  // data.status = "Accepted";

  return (
    <>
      <div className="orderItems">
        <div className="flex justify-between gap-x-5">
          <div>
            <h3>{data?.title}</h3>
            <h4>{data?.packageName}</h4>
          </div>
          <div>
            <p
              className={`font-14 font-normal bg-rose-600 text-white py-1 px-2 rounded-sm capitalize           
            ${data?.status === "Accepted" && "bg-[#33ae10]"}
            ${data?.status === "Completed" && "bg-[#A4DD74]"}
            ${data?.status === "Pending" && "bg-[#ff8400]"}
            ${data?.status === "pendingPayment" && "bg-[#5454E8]"}
            ${data?.status === "Rejected" && "bg-[#eb311b]"}
            `}
            >
              {" "}
              {data?.status}
            </p>
          </div>
        </div>
        <ul className="order-items-list">
          <li>
            <span className="order-items-name">Name</span>
            {": "}
            <span>{data?.name}</span>
          </li>

          <li>
            <span className="order-items-name">Mobile</span>
            {": "}
            <span>
              {number === true
                ? data?.phoneNumberUser
                : "Not available right now"}
            </span>
          </li>

          <li>
            <span className="order-items-name">Event location</span>
            {": "}
            <span>{data?.city + "," + data.address}</span>
          </li>

          <li>
            <span className="order-items-name">Event time</span>
            {": "}
            <span>
              {" "}
              {data.bookedDay === null
                ? data.start + "-" + data?.end
                : data?.bookedDay + "," + data.start + "-" + data?.end}
            </span>
          </li>
          <li>
            <span className="order-items-name">Total time</span>
            {": "}
            <span> {data?.total}</span>
          </li>
          <li>
            <span className="order-items-name">Total Price</span>
            {": "}
            <span>{data?.totalPayment} BDT</span>
          </li>
          {data?.status !== "Completed" && 

          <li>
            <span className="order-items-name">Advance Payment</span>
            {": "}
            <span className="text-[#EF0D0D]">{data?.initialPayment} BDT</span>
          </li>
}

{data?.status !== "Completed" && 
          <li>
            <span className="order-items-name">Due Payment</span>
            {": "}
            <span className="text-[#FF8310]">
              {conditionalRendar(data?.status === "Pending" || data?.status === "pendingPayment" || data?.status === "Accepted")
                ? data?.totalPayment
                : data?.totalPayment / 2}{" "}
              BDT
            </span>
          </li>
}
          {conditionalRendar(data?.status !== "Completed" && data?.status !== "Accepted") && (
            <li>
              <span className="order-items-name">Payment Now</span>
              {": "}
              <span>{data?.totalPayment / 2}</span>
            </li>
          )}
        </ul>
        {data?.notes ? (
          <div>
            <h3 className="order-items-name">Notes</h3>
            <p className="break-all">{data?.notes}</p>
          </div>
        ) : (
          <div></div>
        )}

        <div className="flex mt-4">
          <div className="ml-auto flex flex-wrap gap-4">
            {rev ? (
              <div></div>
            ) : (
              <button
                className="bgcolor2 orderBtn"
                onClick={() => setReviewIsOpen(true)}
              >
                Review
              </button>
            )}
            {pay ? (
              <div></div>
            ) : (
              <button
                className="bg-[#14A333] orderBtn "
                onClick={() =>
                  router.push({
                    pathname: "/checkout",
                    query: { id: data.id },
                  })
                }
              >
                Pay
              </button>
            )}
          </div>
        </div>
      </div>

      {modalReviewIsOpen && (
        <div className="modal-cover flex-center ">
          <div className="max-w-[800px] mx-auto">
            <GiveReview
              service={service}
              id={id}
              oid={data.id}
              setReviewIsOpen={setReviewIsOpen}
              getData={getData}
            />
          </div>
          <button
            onClick={() => setReviewIsOpen(false)}
            className="text-white bgcolor1 btn-hover px-4 py-1 font-20 rounded-[4px] font-light absolute top-5 right-5"
          >
            close
          </button>
        </div>
      )}
    </>
  );
};

export default BookingItem;
