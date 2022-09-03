import React, { useState,useEffect } from "react";
import Main from "../components/checkout/Main";
import Head from "next/head";
import * as queries from "../src/graphql/queries"
import { useRouter } from "next/router";
import {API} from "aws-amplify"
import { userProtectRoute } from "../utils/userProtectRoute";

const Checkout = () => {
  const [Data, setData] = useState(null);
  const [boolean, setboolean] = useState(false)
  const [newData, setnewData] = useState({})
  var router = useRouter();
  var {id}= router.query;
  useEffect(() => {
    async function getData(){
      if(id){
        const vendor = await API.graphql({
          query: queries.getOrders,
          variables: { id: id }
        });
        let s = vendor?.data?.getOrders
        setData(s)
        let initialValues = {
          userName: s?.name,
          phoneNumber: s?.phoneNumberUser?.substring(3),
        }
        setnewData(initialValues)
        setboolean(true)
      }}
    getData()
  }, [id])
  return (
    <>
      <Head>
        <title>Eventizer | Checkout</title>
      </Head>
      {
        boolean?  <Main Data={Data} initialValues={newData} />: <div></div>
      }
     
    </>
  );
};
export const getServerSideProps = userProtectRoute((context) => {
  return {
    props: {},
  };
});
export default Checkout;
