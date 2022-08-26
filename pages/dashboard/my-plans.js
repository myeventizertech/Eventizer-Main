import Main from "../../components/dashboard/MyPlans/Main";
import Layout from "../../components/dashboard/Layout";
import Head from "next/head";
import { userProtectRoute } from "../../utils/userProtectRoute";

const MyPlans = () => {
  return (
    <>
      <Head>
        <title>Eventizer | My Plans</title>
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
export default MyPlans;
