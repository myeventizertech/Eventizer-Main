import React, { useEffect, useState } from "react";
import OrderList from "../../dashboard/OrderList";
import BookingItem from "./BookingItem";
import * as queries from "../../../src/graphql/queries";
import { API } from "aws-amplify";
import { useUserOrVendor } from "../../../authContext/AuthContext";
let orderListForUser = [
  { id: 1, value: "All Booking" },
  { id: 2, value: "Pending" },
  { id: 3, value: "pendingPayment" },
  { id: 4, value: "Accepted" },
  { id: 5, value: "Completed" },
  { id: 6, value: "Rejected" },
];

const Main = () => {
  let { dispatch } = useUserOrVendor();
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
  const id = storage?.user?.id;
  const [Data, setData] = useState([]);
  const [bookingData, setBookingData] = useState([]);

  async function getData() {
    const user = await API.graphql({
      query: queries.getUser,
      variables: { id: id },
    });
    setData(user?.data?.getUser?.Orders?.items);
    dispatch({
      type: "UPDATE_SUCCESS",
      payload: {
        user: user.data.getUser,
        data: "Found",
        profilePicture: "ProfilePicture/User" + id + ".png",
      },
    });
  }
  useEffect(() => {
    getData();
  }, []);

  let [currOrderList, setCurrOrderList] = useState(orderListForUser[0].id);
  let handleFilterOrder = (id, orderstatus) => {
    setCurrOrderList(id);
    if (orderstatus === "All Booking") {
      setBookingData(Data);
      return;
    }
    const filteredData = Data.filter((item) => item?.status === orderstatus);
    setBookingData(filteredData);
  };
  useEffect(()=>{
    setBookingData(Data)
  },[Data])
  return (
    <>
      <OrderList
        orderList={orderListForUser}
        handleFilterOrder={handleFilterOrder}
        currOrderList={currOrderList}
      />
      {bookingData?.length == 0 && (
        <h1 className="color4 font-16 md:font-18 px-3 text-center mt-5">
          You have no Booking
        </h1>
      )}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-10">
        {bookingData?.map((e, i) => {
          return <BookingItem data={e} getData={getData} key={i} />;
        })}
      </div>
    </>
  );
};

export default Main;
