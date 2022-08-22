import Main from "../../components/dashboard/my-booking/Main";
import Layout from "../../components/dashboard/Layout";
import Head from "next/head";
import { userProtectRoute } from "../../utils/userProtectRoute";

const Wishlist = () => {
  return (
    <>
      <Head>
        <title>Eventizer | Wishlist</title>
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
export default Wishlist;
