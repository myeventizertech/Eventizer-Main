import React, { useState, useEffect } from "react";
import Link from "next/link";
import OrderForm from "./OrderForm";
import PackageDetails from "./PackageDetails";
import Close from "../../../reUseComponents/icons/Close";
import GoBack from "../../../reUseComponents/icons/GoBack";
import { useRouter } from "next/router";
import { Storage } from "aws-amplify";
import * as mutations from "../../../../src/graphql/mutations";
import { API } from "aws-amplify";
import InformationModal from "../../../reUseComponents/InformationModal";
const Main = ({
	vendor,
	bool,
	boolval,
	setorder,
	orderData,
	service,
	bendor,
}) => {
	const router = useRouter();
	const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
	const [modal, setModal] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [passData, setPassData] = useState({});
	const [Files, setFiles] = useState([]);
	const [firstPage, setFirstPage] = useState(false);
	const [fourthPage, setFourthPage] = useState(false);
	const user = storage?.user;
	const handleBack = () => {
		setShowForm(false);
	};

	const [packageStandard, setPackageStandard] = useState("");
	const [vendorId, setVendorId] = useState("");
	const [vendorNumber, setVendorNumber] = useState("");
	const [title, setTitle] = useState("");
	const [vendorEmail, setVendorEmail] = useState("");
	const [packageName, setPackageName] = useState("");
	const [packageService, setPackageService] = useState("");
	const [qual, setqual] = useState("");
	let handleSHowOrderFrom = (quality) => {
		setPassData(obj);

		// setShowForm(true);

		let obj = {
			...orderData[quality],
			packageStandard: setPackageStandard(quality),
			vendorId: setVendorId(vendor?.id),
			vendorNumber: setVendorNumber(vendor?.phoneNumber),
			title: setTitle(vendor?.title),
			vendorEmail: setVendorEmail(vendor?.email),
			packName: setPackageName(orderData?.packageName),
			service: setPackageService(service),
			quality: setqual(quality),
		};
	};
	let packageObj = {
		...orderData[qual],
		packageStandard: packageStandard,
		vendorId: vendorId,
		vendorNumber: vendorNumber,
		title: title,
		vendorEmail: vendorEmail,
		packageName: packageName,
		packageService: packageService,
	};

	function checkData() {
		if (orderData?.packageImage?.length !== 0) {
			orderData?.packageImage?.map(async (e) => {
				let signedURL = await Storage.get(e);
				let url = signedURL;
				const data = await fetch(url);
				if (data.ok) {
					setFiles((prev) => {
						return [...prev, url];
					});
				} else {
					return;
				}
			});
		}
	}
	async function CreateRequest(data) {
		let packageData = {
			...data.packageObj,
			people: data?.peopleNumber,
			EventType: data?.eventType,
			age: data?.customerAge,
		};
		let datass = {
			address: data.address,
			name: user?.firstName + " " + user?.lastName,
			phoneNumberUser: user?.phoneNumber,
			phoneNumberVendor: data?.vendor?.phoneNumber,
			package: JSON.stringify(packageData),
			bookedDay: data?.startDate,
			totalPayment: data?.price,
			vendorID: data?.vendor?.id,
			userID: user?.id,
			city: data?.location,
			start: data?.startTime,
			end: data?.startTime,
			total: "Not Mentioned",
			initialPayment: 0,
			duePayment: data?.price,
			status: "Pending",
			title: data?.vendor?.title,
			packageName:
				data?.packageObj?.packageName + " " + data?.packageObj?.packageStandard,
			notes: data?.description || "",
		};
		await API.graphql({
			query: mutations.createOrders,
			variables: { input: datass },
		});
		await fetch(
			"https://ouorw5sokfjhv44dyacow5acju0ucjeg.lambda-url.ap-southeast-1.on.aws/",
			{
				method: "POST",
				mode: "no-cors",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: passData?.vendorEmail,
					subject: "New order request on eventizer",
					body: "You have a new order request on eventizer. Please approve or reject the order request.",
				}),
			}
		);
		router.push("/dashboard/my-booking");
		console.log(datass);
	}
	useEffect(() => {
		checkData();
	}, []);
	let checkIsHave = (quality) => {
		if (orderData?.[quality].pricePerHour || orderData?.[quality].pricePerDay) {
			return true;
		}
		return false;
	};
	return (
		<>
			<div className={` container pt-24`}>
				{modal && (
					<InformationModal
						vendor={vendor}
						setModal={setModal}
						setShowForm={setShowForm}
						fourthPage={fourthPage}
						setFourthPage={setFourthPage}
						firstPage={firstPage}
						setFirstPage={setFirstPage}
						packageValue={orderData}
						modal={modal}
						packageObj={packageObj}
						CreateRequest={CreateRequest}
						bendor={bendor}
					/>
				)}

				{!modal && (
					<div>
						{!showForm && (
							<>
								<button className="py-5" onClick={() => bool(false)}>
									<GoBack />
								</button>
								<div>
									<h3 className="font-22 font-normal color3">
										{orderData?.packageName}
									</h3>
									<p className="color1 font-14">{orderData?.packageDetails}</p>
								</div>

								{orderData?.packageDemoLink && (
									<div className="mt-8">
										<Link href={orderData?.packageDemoLink}>
											<a className=" font-16 btn-hover bgcolor1 text-white rounded-md py-1 px-2 font-normal">
												See package demo Link
											</a>
										</Link>
									</div>
								)}

								<div className="grid grid-cols-1 md:grid-cols-2 mdx:grid-cols-3 gap-8 mt-7">
									{/* ====================== */}
									{checkIsHave("basic") && (
										<div>
											<PackageDetails
												quality="basic"
												packageValue={orderData}
												handleClick={handleSHowOrderFrom}
												setModal={setModal}
												setFirstPage={setFirstPage}
												setFourthPage={setFourthPage}
												firstPage={firstPage}
											/>
										</div>
									)}
									{/* ====================== */}
									{checkIsHave("standard") && (
										<div>
											<PackageDetails
												quality={"standard"}
												packageValue={orderData}
												handleClick={handleSHowOrderFrom}
												setModal={setModal}
												setFirstPage={setFirstPage}
												setFourthPage={setFourthPage}
												firstPage={firstPage}
											/>
										</div>
									)}
									{/* ========================= */}
									{checkIsHave("premium") && (
										<div>
											<PackageDetails
												quality="premium"
												packageValue={orderData}
												handleClick={handleSHowOrderFrom}
												setModal={setModal}
												setFirstPage={setFirstPage}
												setFourthPage={setFourthPage}
												firstPage={firstPage}
											/>
										</div>
									)}
								</div>
							</>
						)}

						{showForm && (
							<>
								<div className="max-w-[40rem] mx-auto my-5 bg-white rounded p-6 shadow-lg">
									<header className="h-[73px] max-w-[40rem] w-[100%] mb-5  pl-[-24px] pr-[-24px] drop-shadow">
										<div className="flex justify-between ">
											<div className="flex items-center pt-5">
												<button onClick={handleBack}>
													<GoBack></GoBack>
												</button>
												<h1 className="text-2xl font-normal ml-5">
													Makeup Artist
												</h1>
											</div>
											<div className="pt-5">
												<button onClick={() => setShowForm(false)}>
													<Close />
												</button>
											</div>
										</div>
									</header>
									{/* <button
                onClick={() => setShowForm(false)}
                className="ml-auto block mb-5"
              >
              </button> */}
									<OrderForm
										passData={passData}
										vendor={vendor}
										setShowForm={setShowForm}
									/>
								</div>
							</>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default Main;
