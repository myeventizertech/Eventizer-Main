import React, { useState } from "react";
import Input from "../reUseComponents/Input";
import { useFormik } from "formik";
import {
	validationSchema,
	formikPassWordResetSchema,
} from "../../utils/SignInValidationSchema";
import ButtonClick from "../reUseComponents/ButtonClick";
import SocialLogin from "../reUseComponents/SocialLogin";
import SignUpToolTip from "./SignUpToolTip";
import { Auth } from "aws-amplify";
import Loader from "../reUseComponents/Loader";
import { useRouter } from "next/router";
import SendCodeInput from "../reUseComponents/SendCodeInput";
import toast from "react-hot-toast";
import debounce from "../../utils/debounceSubmitHandler";
import OTPInput from "../reUseComponents/OTPInput";
import { useUserOrVendor } from "../../authContext/AuthContext";
import useShowPass from "../../utils/useShowPass";
import ShowPass from "../reUseComponents/ShowPass";
import * as queries from "../../src/graphql/queries";
import { API } from "aws-amplify";
const Main = () => {
	let { isShow, handleShowClick } = useShowPass();
	let { setAuthLoader } = useUserOrVendor();
	let { dispatch } = useUserOrVendor();
	const router = useRouter();
	const [uiLoading, setUiLoading] = useState(false);
	const [formState, setFormState] = useState({
		email: "",
		password: "",
		uistate: "signIn",
	});
	const { email } = formState;

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validateOnBlur: true,
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			setUiLoading(true);
			setAuthLoader(true);
			try {
				await debounce(500);


				await Auth.signIn({
					username: values.email,
					password: values.password,
				});
				const user = await Auth.currentAuthenticatedUser();
				let data = user.attributes["custom:userOrvendor"];
				let id = user.attributes.sub
				let service = user.attributes["custom:service"]
				if (data === "vendor") {
					let serviceAPI = null;
					let vData = null

					if ((service === "photography")) {
						serviceAPI = queries.getPhotography;
						vData = "getPhotography"
					}
					if ((service === "cinematography")) {
						serviceAPI = queries.getCinematography;
						vData = "getCinematography"
					}
					if ((service === "dj-musician")) {
						serviceAPI = queries.getDJMusician;
						vData = "getDJMusician"
					}
					if ((service === "mehedi-artist")) {
						serviceAPI = queries.getMehediArtist;
						vData = "getMehediArtist"
					}
					if ((service === "makeup-artist")) {
						serviceAPI = queries.getMakeupArtist;
						vData = "getMakeupArtist"
					}
					const vendor = await API.graphql({
						query: queries.getVendor,
						variables: { id: id }
					});
					const vendorDetails = await API.graphql({
						query: serviceAPI,
						variables: { id: id }
					});
					const balance = await API.graphql({
						query: queries.getBalance,
						variables: { id: id }
					});
					dispatch({
						type: "LOGIN_SUCCESS",
						payload: {
							vendorDetails: vendor?.data?.getVendor,
							vendor: vendorDetails?.data[vData],
							balance: balance?.data?.getBalance,
							data: "Found",
							profilePicture: vendorDetails?.data[vData]?.uploadYourPhoto
						},
					})
				}
				if (data === "user") {
					const user = await API.graphql({
						query: queries.getUser,
						variables: { id: id }
					});
					dispatch({
						type: "UPDATE_SUCCESS",
						payload: {
							user: user?.data?.getUser,
							data: "Found",
							profilePicture: "ProfilePicture/User" + id + ".png"

						},
					});
				}

				router.push("/");
				setFormState((prev) => ({
					...prev,
					email,
				}));
				setUiLoading(false);
				setAuthLoader(false);
			} catch (err) {
				if (err && err.message === "User is not confirmed.") {
					setFormState((prev) => ({
						...prev,
						email: values.email,
						uistate: "confirmSignUp",
					}));
					try {
						await Auth.resendSignUp(values.email);
						router.push("/sign-in");
					} catch (err) {
						toast.error(err.message, {
							duration: 3000,
						});
					}
				}
				setUiLoading(false);
				setAuthLoader(false);

				toast.error(err.message, {
					duration: 2000,
				});
			}
		},
	});

	async function resendconfirmSignUp(event, OTP) {
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
			toast.success("Account re-confirmation successful", {
				duration: 3000,
			});
			setFormState((prev) => ({ ...prev, uistate: "signIn" }));
			setUiLoading(false);
		} catch (err) {
			console.log({ err });
			setUiLoading(false);
			toast.error(err.message, {
				duration: 2000,
			});
		}
	}

	async function forgotPassword(values) {
		setUiLoading(true);
		try {
			await debounce(500);
			await Auth.forgotPassword(values.email);
			setFormState((prev) => ({
				...prev,
				email: values.email,
				uistate: "forgotPasswordSubmit",
			}));
			setUiLoading(false);
			router.push("/sign-in");
		} catch (err) {
			console.log({ err });

			setUiLoading(false);
			toast.error(err.message, {
				duration: 2000,
			});
		}
	}

	const formikPassWordReset = useFormik({
		initialValues: {
			otp: "",
			password: "",
		},
		validateOnBlur: true,
		validationSchema: formikPassWordResetSchema,
		onSubmit: async (values) => {
			setUiLoading(true);
			try {
				await debounce(500);
				await Auth.forgotPasswordSubmit(email, values.otp, values.password);
				toast.success("Password Reset successful", {
					duration: 3000,
				});
				setFormState((prev) => ({ ...prev, uistate: "signIn" }));
				setUiLoading(false);
			} catch (err) {
				setUiLoading(false);
				toast.error(err.message, {
					duration: 2000,
				});
			}
		},
	});

	return (
		<div className="container pt-24 md:pt-28 ">
			{formState.uistate === "signIn" && (
				<>
					<div className="sign-box">
						<h1 className="sign-box-title">Welcome Back</h1>

						<form onSubmit={formik.handleSubmit}>
							<>
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
							</>
							<>
								<div className="relative">
									<Input
										label="Password"
										type={isShow ? "text" : "password"}
										name="password"
										placeholder="⚹⚹⚹⚹⚹⚹"
										value={formik.values.password}
										handleChange={formik.handleChange}
										handleBlur={formik.handleBlur}
										error={
											formik.touched.password && formik.errors.password
												? formik.errors.password
												: ""
										}
									/>

									<button
										type="button"
										onClick={() => {
											setFormState((prev) => ({
												...prev,
												uistate: "forgotPassword",
											}));
											router.push("/sign-in");
										}}
										className="color3 font-12 sm:font-14 hover:opacity-75 select-none absolute top-1 sm:top-2 right-0"
									>
										Forgot password
									</button>
									{formik.values.password.length > 0 && (
										<ShowPass
											handleShowClick={handleShowClick}
											isShow={isShow}
										/>
									)}
								</div>
							</>

							<ButtonClick
								type={"submit"}
								css={`bgcolor2 text-white sm:mt-3 rounded-[8px] ${uiLoading && "opacity-75"
									}`}
								text={
									uiLoading ? (
										<Loader loaderWidht="w-[27px] h-[27px]" center={true} />
									) : (
										"Sign in"
									)
								}
								disable={uiLoading}
							/>
						</form>
						<>
							{/* <SocialLogin text="Sign In" /> */}
						</>
					</div>
					<div className="text-center mt-8 relative">
						<SignUpToolTip />
					</div>
				</>
			)}
			{formState.uistate === "forgotPassword" && (
				<SendCodeInput
					title="Forgot password"
					label="Enter Email"
					btnText={"Send Code"}
					type={"email"}
					placeholder={"Enter email address"}
					uiLoading={uiLoading}
					setFormState={setFormState}
					handleSendCode={forgotPassword}
				/>
			)}

			{formState.uistate === "forgotPasswordSubmit" && (
				<div className="sign-box">
					<h1 className="sign-box-title mb-1">Password Reset</h1>
					<p className="color1 font-14 sm:font-18 font-normal mx-auto max-w-[26rem] break-words mb-3 text-center">
						{formState.email}
					</p>

					<form onSubmit={formikPassWordReset.handleSubmit}>
						<>
							<Input
								label="Enter OTP"
								type="text"
								name="otp"
								placeholder="000000"
								value={formikPassWordReset.values.otp}
								handleChange={formikPassWordReset.handleChange}
								handleBlur={formikPassWordReset.handleBlur}
								error={
									formikPassWordReset.touched.otp &&
										formikPassWordReset.errors.otp
										? formikPassWordReset.errors.otp
										: ""
								}
							/>
						</>
						<>
							<div className="relative">
								<Input
									label="New password"
									type="password"
									name="password"
									placeholder="⚹⚹⚹⚹⚹⚹"
									value={formikPassWordReset.values.password}
									handleChange={formikPassWordReset.handleChange}
									handleBlur={formikPassWordReset.handleBlur}
									error={
										formikPassWordReset.touched.password &&
											formikPassWordReset.errors.password
											? formikPassWordReset.errors.password
											: ""
									}
								/>
							</div>
						</>

						<ButtonClick
							type={"submit"}
							css={`bgcolor2 text-white sm:mt-3 rounded-[8px] ${uiLoading && "opacity-75"
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
				</div>
			)}

			{formState.uistate === "confirmSignUp" && (
				<OTPInput
					title="OTP Verification"
					uiLoading={uiLoading}
					email={formState.email}
					handleSubmit={resendconfirmSignUp}
				/>
			)}
		</div>
	);
};

export default Main;
