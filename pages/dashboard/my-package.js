import Main from "../../components/dashboard/my-package/Main";
import Layout from "../../components/dashboard/Layout";
import Head from "next/head";
import { vendorProtectRoute } from "../../utils/vendorProtectRoute";

const MyPackage = () => {
  return (
    <>
    <Head>
        <title>Eventizer | My Package</title>
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
export default MyPackage;
