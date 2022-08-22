import VendorProfile from "../../components/dashboard/profile/VendorProfile";
import Layout from "../../components/dashboard/Layout";
import Head from "next/head";
import { checkProtectRoute } from "../../utils/checkProtectRoute";
import { useUserOrVendor } from "../../authContext/AuthContext";
import Loader from "../../components/reUseComponents/Loader";
import UserProfile from "../../components/dashboard/profile/UserProfile";
const Profile = () => {
  const { verifyUser } = useUserOrVendor();
  let { attributes } = verifyUser?.isUser_vendorAttr || {};
  let service = attributes?.["custom:service"];
  return (
    <>
      <Head>
        <title>Eventizer | Profile </title>
      </Head>
      <Layout>
        <>
          {verifyUser?.isUser_vendor === "vendor" && (
            <VendorProfile service={service} attributes={attributes} />
          )}
          {verifyUser?.isUser_vendor === "user" && (
            <UserProfile attributes={attributes} />
          )}
        </>
      </Layout>
    </>
  );
};

export const getServerSideProps = checkProtectRoute((context) => {
  return {
    props: {},
  };
});
export default Profile;
