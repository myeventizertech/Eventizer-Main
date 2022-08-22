import React, { useState } from "react";
import Input from "../reUseComponents/Input";
import ButtonClick from "../reUseComponents/ButtonClick";
import SelectInput from "../reUseComponents/SelectInput";
import { useFormik } from "formik";
import validationSchema from "../../utils/RegisterVendorValidationSchema";
import { Auth } from "aws-amplify";
import Loader from "../reUseComponents/Loader";
import OTPInput from "../reUseComponents/OTPInput";
import { useRouter } from "next/router";
import CongratsVendor from "../reUseComponents/CongratsVendor";
import toast from "react-hot-toast";
import debounce from "../../utils/debounceSubmitHandler";
import useShowPass from "../../utils/useShowPass";
import ShowPass from "../reUseComponents/ShowPass";
import Link from "next/link";
import InputError from "../reUseComponents/InputError";
import { API } from "aws-amplify";
import * as mutations from "../../src/graphql/mutations";
import { useUserOrVendor } from "../../authContext/AuthContext";
const options = [
	{ id: 1, value: "photography", label: "Photography" },
	{ id: 2, value: "cinematography", label: "Cinematography" },
	// { id: 3, value: "decoration", label: "Decoration" },
	// { id: 4, value: "printing-press", label: "Printing & Press" },
	// { id: 5, value: "gift-items", label: "Gift Items" },
	{ id: 3, value: "dj-musician", label: "DJ/Musician" },
	{ id: 4, value: "mehedi-artist", label: "Mehedi Artist" },
	{ id: 5, value: "makeup-artist", label: "Makeup Artist" },
	// { id: 9, value: "brand-promoter", label: "Brand Promoter" },
	// { id: 10, value: "rental", label: "Rental" },
];

const RegForm = () => {
	let { isShow, handleShowClick } = useShowPass();
	let { dispatch } = useUserOrVendor();
	const router = useRouter();
	const [userData, setuserData] = useState({});
	const [serviceData, setserviceData] = useState({});
	const [uiLoading, setUiLoading] = useState(false);
	const [formState, setFormState] = useState({
		email: "",
		password: "",
		uistate: "signIn",
	});

	const formik = useFormik({
		initialValues: {
			service: "",
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			password: "",
			confirmPassword: "",
			agreeCondition: false,
		},
		validateOnBlur: true,
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			let { email } = values;
			setUiLoading(true);
			try {
				await debounce(500);
				await Auth.signUp({
					username: email,
					password: values.password,
					attributes: {
						email,
						"custom:phone": values.phone,
						"custom:service": values.service.value,
						"custom:firstName": values.firstName,
						"custom:lastName": values.lastName,
						"custom:userOrvendor": "vendor",
					},
				}).then(
					setuserData({
						email: email,
						status: "Pending",
						phoneNumber: "+88" + values.phone,
						service: values.service.value,
						firstName: values.firstName,
						lastName:values.lastName
					})
				);
				setserviceData({
					status: "Pending",
					phoneNumber: "+88" + values.phone,
				});
				setFormState((prev) => ({
					...prev,
					email,
					password: values.password,
					uistate: "confirmSignUp",
				}));
				setUiLoading(false);
				router.push("/vendor-register");
			} catch (err) {
				setUiLoading(false);
				toast.error(err.message, {
					duration: 2000,
				});
			}
		},
	});
	async function confirmSignUp(event, OTP) {
		let serviceAPI = null;
		let vData =null
		if ((userData.service === "photography")) {
			serviceAPI = mutations.createPhotography;
			vData="createPhotography"
		}
		if ((userData.service === "cinematography")) {
			serviceAPI = mutations.createCinematography;
			vData="createCinematography"
		}

		if ((userData.service === "dj-musician")) {
			serviceAPI = mutations.createDJMusician;
			vData="createDJMusician"
		}
		
		if ((userData.service === "mehedi-artist")) {
			serviceAPI = mutations.createMehediArtist;
			vData="createMehediArtist"
		}
		if ((userData.service === "makeup-artist")) {
			serviceAPI = mutations.createMakeupArtist;
			vData="createMakeupArtist"
		}

		event.preventDefault();

		if (OTP.length !== 6) {
			setUiLoading(true);
			await debounce(500);
			toast.error("OTP Required");
			setUiLoading(false);
			return;
		}
		setUiLoading(true);
		try {
			await debounce(500);
			await Auth.confirmSignUp(formState.email, OTP);
			setFormState((prev) => ({
				...prev,
				uistate: "congratsVendor",
			}));

			const query = await Auth.signIn(formState.email, formState.password).then(
				() => Auth.currentUserInfo()
			);

			const vendor = await API.graphql({
				query: mutations.createVendor,
				variables: {
					input: {
						...userData,
						id: query.attributes.sub,
						balanceID: query.attributes.sub,
						status: "Pending",
					},
				},
			});
			const balanceQuery = await API.graphql({
				query: mutations.createBalance,
				variables: {
					input: { balance: 0, withdrawAmount: 0, id: query.attributes.sub},
				},
			});
			const result = await API.graphql({
				query: serviceAPI,
				variables: { input: { ...serviceData,email:userData.email, id: query.attributes.sub ,status: "Pending",uploadYourPhoto:"ProfilePicture/Vendor" + query.attributes.sub + ".png",eventsCompleted:0} },
			});
			dispatch({
				type: "UPDATE_SUCCESS",
				payload: {
						vendorDetails: vendor.data.createVendor,
						vendor: result.data[vData],
						balance: balanceQuery.data.createBalance,
						data:"Found",
						profilePicture: "ProfilePicture/Vendor" + query.attributes.sub + ".png"
					
				},
			});
			await fetch('https://ouorw5sokfjhv44dyacow5acju0ucjeg.lambda-url.ap-southeast-1.on.aws/', {
				method: 'POST',
				mode: 'no-cors',
				headers: {
				  'Accept': 'application/json',
				  'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				  email:userData?.email,
				  subject:"Complete Your Profile",
				  body: "Please Complete your profile. Upon completion eventizer team will approve your profile."
				})
			  });
			setUiLoading(false);
			router.push("/dashboard/profile");
		} catch (err) {
			setUiLoading(false);
			toast.error(err.message, {
				duration: 2000,
			});
		}
	}

	return (
		<>
			{formState.uistate === "signIn" && (
				<>
					<div className="lg:max-w-[565px] m-auto pt-24 lg:pt-0">
						<>
							<h1 className="font-18 sm:font-22 md:font-26 lg:font-32 font-semibold lg:mt-8 colo4">
								Registration for <span className="color3 block">Vendor</span>
							</h1>
							<div className="line w-[45px] md:w-[80px] h-[3px] md:h-[6px] bg-[#c4c4c4] rounded-[8px] my-5"></div>
							<form onSubmit={formik.handleSubmit}>
								<SelectInput
									handleChange={formik.setFieldValue}
									value={formik.values.service}
									options={options}
									label={"Select a service"}
									placeholder="Select a service"
									name="service"
									handleBlur={formik.setFieldTouched}
									error={
										formik.touched.service &&
										formik.errors.service &&
										!formik.values.service
											? formik.errors.service
											: ""
									}
								/>

								<div className="flex gap-3 sm:gap-5">
									<div className="flex-1">
										<Input
											label="First Name"
											type="text"
											name="firstName"
											placeholder="First Name"
											value={formik.values.firstName}
											handleChange={formik.handleChange}
											handleBlur={formik.handleBlur}
											error={
												formik.touched.firstName && formik.errors.firstName
													? formik.errors.firstName
													: ""
											}
										/>
									</div>

									<div className="flex-1">
										<Input
											label="Last Name"
											type="text"
											name="lastName"
											placeholder="Last Name"
											value={formik.values.lastName}
											handleChange={formik.handleChange}
											handleBlur={formik.handleBlur}
											error={
												formik.touched.lastName && formik.errors.lastName
													? formik.errors.lastName
													: ""
											}
										/>
									</div>
								</div>

								<div className="flex gap-3 sm:gap-5">
									<div className="flex-1">
										<Input
											label="Email Address"
											type="email"
											name="email"
											placeholder="Ex: myemail@email.com"
											value={formik.values.email}
											handleChange={formik.handleChange}
											handleBlur={formik.handleBlur}
											error={
												formik.touched.email && formik.errors.email
													? formik.errors.email
													: ""
											}
										/>
									</div>

									<div className="flex-1">
										<Input
											label="Phone Number"
											type="text"
											name="phone"
											placeholder="018XXXXXXXX"
											value={formik.values.phone}
											handleChange={formik.handleChange}
											handleBlur={formik.handleBlur}
											error={
												formik.touched.phone && formik.errors.phone
													? formik.errors.phone
													: ""
											}
										/>
									</div>
								</div>

								<div className="flex gap-3 sm:gap-5">
									<div className="flex-1 relative">
										<Input
											label="Password"
											type={isShow ? "text" : "password"}
											name="password"
											placeholder="⚹⚹⚹⚹⚹⚹⚹"
											value={formik.values.password}
											handleChange={formik.handleChange}
											handleBlur={formik.handleBlur}
											error={
												formik.touched.password && formik.errors.password
													? formik.errors.password
													: ""
											}
										/>
										{formik.values.password.length > 0 && (
											<ShowPass
												handleShowClick={handleShowClick}
												isShow={isShow}
											/>
										)}
									</div>

									<div className="flex-1 relative">
										<Input
											label="Confirm Password"
											type={isShow ? "text" : "password"}
											name="confirmPassword"
											placeholder="⚹⚹⚹⚹⚹⚹⚹"
											value={formik.values.confirmPassword}
											handleChange={formik.handleChange}
											handleBlur={formik.handleBlur}
											error={
												formik.touched.confirmPassword &&
												formik.errors.confirmPassword
													? formik.errors.confirmPassword
													: ""
											}
										/>
										{formik.values.confirmPassword.length > 0 && (
											<ShowPass
												handleShowClick={handleShowClick}
												isShow={isShow}
											/>
										)}
									</div>
								</div>

								<div className="flex gap-3 items-center mb-3">
									<div>
										<input
											onChange={formik.handleChange}
											onBlur={formik.handleBlur}
											type="checkbox"
											name="agreeCondition"
											className="accent-[#ef0d5e]"
											value={formik.values.agreeCondition}
										/>
									</div>
									<div>
										<p className="font-12 sm:font-14 color1 ">
											By clicking Create Account, you agree to the{" "}
											<Link href="/terms-of-use">
												<a target="_blank" className="color3 hover:opacity-75">
													Terms of Use{" "}
												</a>
											</Link>
											and{" "}
											<Link href="/privacy-policy">
												<a target="_blank" className="color3 hover:opacity-75">
													Privacy Policy
												</a>
											</Link>
											.
										</p>
										{formik.touched.agreeCondition &&
										formik.errors.agreeCondition ? (
											<InputError text={formik.errors.agreeCondition} />
										) : (
											""
										)}
									</div>
								</div>

								<ButtonClick
									type={"submit"}
									css={`bgcolor2 text-white sm:mt-3 rounded-[8px] ${
										uiLoading && "opacity-75"
									}`}
									text={
										uiLoading ? (
											<Loader loaderWidht="w-[27px] h-[27px]" center={true} />
										) : (
											"Submit"
										)
									}
									disable={uiLoading}
								/>
							</form>
						</>
					</div>
				</>
			)}

			{formState.uistate === "confirmSignUp" && (
				<OTPInput
					title="OTP Verification"
					uiLoading={uiLoading}
					email={formState.email}
					handleSubmit={confirmSignUp}
					center={true}
				/>
			)}

			{formState.uistate === "congratsVendor" && <CongratsVendor />}
		</>
	);
};

export default RegForm;
