import Main from "../../components/dashboard/my-booking/Main";
import Layout from "../../components/dashboard/Layout";
import Head from "next/head";
import { userProtectRoute } from "../../utils/userProtectRoute";

const MyBooking = () => {
  return (
    <>
      <Head>
        <title>Eventizer | My Booking</title>
      </Head>
      <Layout>
        <Main />
      </Layout>
    </>
  );
};
export const getServerSideProps = userProtectRoute((context) => {
  return {
    props: {},
  };
});
export default MyBooking;
