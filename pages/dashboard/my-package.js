import Main from "../../components/dashboard/my-package/Main";
import Layout from "../../components/dashboard/Layout";
import Head from "next/head";
import GiftMyPackage from "../../components/dashboard/my-package/giftItem/GiftMyPackage";
import { vendorProtectRoute } from "../../utils/vendorProtectRoute";
import { useUserOrVendor } from "../../authContext/AuthContext";
const MyPackage = () => {
	const { verifyUser } = useUserOrVendor();
	let { attributes } = verifyUser?.isUser_vendorAttr || {};
	let serviceCheck = attributes?.["custom:service"];
	return (
		<>
			<Head>
				<title>Eventizer | My Package</title>
			</Head>
			<Layout>
				{serviceCheck === "gift-items" ? <GiftMyPackage /> : <Main />}
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
