import React from "react";
import GiftMyPackage from "../../components/dashboard/my-package/giftItem/GiftMyPackage";
import { vendorProtectRoute } from "../../utils/vendorProtectRoute";
import Layout from "../../components/dashboard/Layout";
import Head from "next/head";
const giftItem = () => {
	return (
		<>
			<Head>
				<title>Eventizer | My Package</title>
			</Head>
			<Layout >
				<GiftMyPackage padding={'p-3'}/>
			</Layout>
		</>
	);
};
export const getServerSideProps = vendorProtectRoute((context) => {
	return {
		props: {},
	};
});
export default giftItem;
