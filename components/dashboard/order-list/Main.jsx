import React from "react";
import OrderList from "../../dashboard/OrderList";
import OrderItem from "./OrderItem";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import * as mutations from "../../../src/graphql/mutations";
import * as queries from "../../../src/graphql/queries";
import { useUserOrVendor } from "../../../authContext/AuthContext";
let orderListForVendor = [
  { id: 1, value: "All Booking" },
  { id: 2, value: "Pending" },
  { id: 3, value: "pendingPayment" },
  { id: 4, value: "Accepted" },
  { id: 5, value: "Completed" },
  { id: 6, value: "Rejected" },
];



const Main = () => {
  const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
  const service = storage?.vendorDetails?.service;
  let id = storage?.vendorDetails?.id;
  let order = storage?.vendorDetails?.Orders?.items;
  const [orderData, setOrderData] = useState([]);
  let { dispatch } = useUserOrVendor();
  async function getUser() {
    let serviceAPI = null;
    let vData = null;
    if (service === "photography") {
      serviceAPI = queries.getPhotography;
      vData = "getPhotography";
    }
    if (service === "cinematography") {
      serviceAPI = queries.getCinematography;
      vData = "getCinematography";
    }
    if (service === "dj-musician") {
      serviceAPI = queries.getDJMusician;
      vData = "getDJMusician";
    }
    if (service === "mehedi-artist") {
      serviceAPI = queries.getMehediArtist;
      vData = "getMehediArtist";
    }
    if (service === "makeup-artist") {
      serviceAPI = queries.getMakeupArtist;
      vData = "getMakeupArtist";
    }
    const vendor = await API.graphql({
      query: queries.getVendor,
      variables: { id: id },
    });
    const vendorDetails = await API.graphql({
      query: serviceAPI,
      variables: { id: id },
    });
    const balance = await API.graphql({
      query: queries.getBalance,
      variables: { id: id },
    });
    let orders =vendor?.data?.getVendor.Orders?.items
    setOrderData(orders)
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        vendorDetails: vendor?.data?.getVendor,
        vendor: vendorDetails?.data[vData],
        balance: balance?.data?.getBalance,
        data: "Found",
        profilePicture: vendorDetails?.data[vData]?.uploadYourPhoto,
      },
    });
  }

  





  let [currOrderList, setCurrOrderList] = useState(orderListForVendor[0].id);
  let handleFilterOrder = (id, orderstatus) => {
    setCurrOrderList(id);
    if (orderstatus === "All Booking") {
      setOrderData(order);
      return;
    }
    const filteredData = order.filter((item) => item?.status === orderstatus);
    setOrderData(filteredData);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <OrderList
        orderList={orderListForVendor}
        handleFilterOrder={handleFilterOrder}
        currOrderList={currOrderList}
      />
      {orderData?.length == 0 && (
        <h1 className="color4 font-16 md:font-18 px-3 text-center mt-5">
          You have no Order
        </h1>
      )}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-10">
        {orderData.map((e, i) => {
          return <OrderItem key={i} data={e} getData={getUser} />;
        })}
      </div>
    </>
  );
};

export default Main;
