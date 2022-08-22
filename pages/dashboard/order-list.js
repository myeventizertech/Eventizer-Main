import Main from "../../components/dashboard/order-list/Main";
import Layout from "../../components/dashboard/Layout";
import Head from "next/head";
import { vendorProtectRoute } from "../../utils/vendorProtectRoute";

const OrderList = () => {
  return (
    <>
      <Head>
        <title>Eventizer | Order List </title>
      </Head>

      <Layout>
        <Main />
      </Layout>
    </>
  );
};
export const getServerSideProps = vendorProtectRoute((context) => {
  return {
    props: {},
  };
});
export default OrderList;
