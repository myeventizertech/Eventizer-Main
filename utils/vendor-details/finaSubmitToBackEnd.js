import { API, Storage, Auth } from "aws-amplify";
import { v4 as uuid } from "uuid";
import services from "../services";
import * as mutations from "../../src/graphql/mutations";
import * as queries from "../../src/graphql/queries";
import { useUserOrVendor } from "../../authContext/AuthContext";

function conditionalCheck(check) {
	if (check) return true;
}

let finaSubmitToBackEnd = async (
	values,
	service,
	attributes,
	dispatch,
	serviceAPI,
	vData
) => {
	const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
	let commonspecializedInField = {
		specializedIn: values.specializedIn.map((item) =>
			JSON.stringify({ ...item })
		),
		spealiziedInFIlter: values.specializedIn.map((item) =>item.value),
	};

	let Service_Photograpy_cinematograpy = {
		...commonspecializedInField,
		deviceName: values.deviceName,

	};
	let Service_Decoration_printing_press_gift_items = {
		...commonspecializedInField,
	};
	let Service_Dj_musian = {
		...commonspecializedInField,

		teamMember: JSON.stringify(values.teamMember),
	};
	let Service_MakeUp_MehdiArtist = {
		teamMember: JSON.stringify(values.teamMember),
	};
	let Service_BrandPromote = {
		...commonspecializedInField,
	};
	let Service_Rental = {
		vehicleType: JSON.stringify(values.vehicleType),
		carModelName: values.carModelName,
		maxSeatCapacity: values.maxSeatCapacity,
		drivingLicenseNumber: values.drivingLicenseNumber,
		licenseExpiredDate: values.licenseExpiredDate,
		// licenseFrontSide: "",
		// licenseBackSide: "",
	};
	let pack = storage?.vendor?.packages;
	let vendorDetails = {
		id: attributes.sub,
		title: values.title,
		yearsOfExperience: JSON.stringify(values.yearsOfExp),
		presentLocation: JSON.stringify(values.presentLocation),
		email: attributes.email,
		serviceLocation: values.serviceLocation.map((item) =>
			JSON.stringify({ ...item })
		),
		serviceloactionFIlter: values.serviceLocation.map((item) =>item.value),
		detailsAboutYou: values.detailsAboutYou,
		isConfirmed: true,
		packages: pack || [],
		uploadYourPhoto: "ProfilePicture/Vendor" + attributes.sub + ".png",

		portfolioLink: JSON.stringify(values.portfolioLink),
		status: "Waiting",
		...(conditionalCheck(
			service === services.photography || service === services.cinematography
		) && Service_Photograpy_cinematograpy),

		...(conditionalCheck(
			service === services.decoration ||
				service === services.printingPress ||
				service === services.giftItems
		) && Service_Decoration_printing_press_gift_items),

		...(conditionalCheck(
			service === services.mehediArtist || service === services.makeupArtist
		) && Service_MakeUp_MehdiArtist),

		...(service === services.djMusician && Service_Dj_musian),
		...(service === services.brandPromoter && Service_BrandPromote),
		...(service === services.rental && Service_Rental),
	};
	let vendor = {
		id: attributes.sub,
		firstName: values.firstName,
		lastName: values.lastName,
		nidNumber: values.NIDNumber,
		presentLocation: values.yourAddress,
		service: service,
		phoneNumber: "+88"+values.phone,
		email: attributes.email,
		uploadYourPhoto:  "ProfilePicture/Vendor" + attributes.sub + ".png",
		status: "Waiting",
		nidFrontSide: "VendorNID/Vendor" + attributes.sub + "FrontSide" + ".png",
		nidBackSide: "VendorNID/Vendor" + attributes.sub + "BackSide" + ".png",
	};
	try {
		const userFromCognito = await Auth.currentAuthenticatedUser();
		userFromCognito.Session = userFromCognito.signInUserSession;
		Auth.updateUserAttributes(userFromCognito, {
			"custom:firstName": values.firstName,
			"custom:lastName": values.lastName,
			"custom:phone": values.phone,
		});
		const updatedVendor = await API.graphql({
			query: mutations.updateVendor,
			variables: { input: vendor },
		});
		const updatedVendorDetails = await API.graphql({
			query: serviceAPI,
			variables: { input: vendorDetails },
		});
		const balanceQuery = await API.graphql({
			query: queries.getBalance,
			variables: { id: attributes.sub },
		});
		dispatch({
			type: "UPDATE_SUCCESS",
			payload: {
				vendorDetails: updatedVendor.data.updateVendor,
				vendor: updatedVendorDetails.data[vData],
				balance: balanceQuery.data.getBalance,
				data: "Found",
				profilePicture:
					updatedVendorDetails?.data[vData]?.uploadYourPhoto || "",
			},
		});
	} catch (error) {
		console.log(error);
	}
};

export default finaSubmitToBackEnd;
