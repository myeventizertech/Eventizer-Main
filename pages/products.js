import React from "react";
import Head from "next/head";
import Main from "../components/personal-event-product/Main";

const Products = () => {
  return (
    <>
      <Head>
        <title>Eventizer | Products</title>
      </Head>
      <Main />
    </>
  );
};

export const getServerSideProps = async (context) => {
  return {
    redirect: {
      destination: "/products/photography",
      permanent: false,
    },
  };
};

export default Products;
