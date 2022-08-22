import React, { useEffect, useState } from "react";
import ThreeDotIcon from "../../reUseComponents/icons/ThreeDotIcon";
import UseOutsideClick from "../../../utils/useOutsideClick";
import PackagePreivew from "./PackagePreivew";
import Main from "../add-packages/Main";
import { API, Storage } from "aws-amplify";
import * as mutations from "../../../src/graphql/mutations";
import { useUserOrVendor } from "../../../authContext/AuthContext";
const PackageItem = ({ packageValue, allValue,index }) => {
	const { isOpen, refOutClick, handleAvatarClick } = UseOutsideClick();
	let { dispatch } = useUserOrVendor();
	const storage = JSON.parse(localStorage.getItem("AmpUserInfo"));
	const [modalViewIsOpen, setViewIsOpen] = React.useState(false);
	const [modalEditIsOpen, setEditIsOpen] = React.useState(false);
	const [modalDeleteIsOpen, setDeleteIsOpen] = React.useState(false);
	const [serviceAPI, setserviceAPI] = useState(null);
	const [vData, setvData] = useState(null);
	const vendor = storage?.vendor;
	const vendorDetails = storage?.vendorDetails;
	const balance = storage?.balance;
	const profilePicture = storage?.profilePicture;
	const service = storage?.vendorDetails?.service;
	const id = storage?.vendorDetails?.id;
	async function check() {
		if (service === "photography") {
			setserviceAPI(mutations.updatePhotography);
			setvData("updatePhotography");
		}
		if (service === "cinematography") {
			setserviceAPI(mutations.updateCinematography);
			setvData("updateCinematography");
		}
		if (service === "dj-musician") {
			setserviceAPI(mutations.updateDJMusician);
			setvData("updateDJMusician");
		}
		if (service === "mehedi-artist") {
			setserviceAPI(mutations.updateMehediArtist);
			setvData("updateMehediArtist");
		}
		if (service === "makeup-artist") {
			setserviceAPI(mutations.updateMakeupArtist);
			setvData("updateMakeupArtist");
		}
	}

	useEffect(() => {
		check();
	}, []);

	return (
		<>
			<li className="flex justify-between items-center bg-white rounded-[4px] px-4 md:px-6 py-2 md:py-4 gap-5 mt-2 shadow-sm ">
				<div className="overflow-hidden">
					<h6 className="color5 font-14 md:font-18 truncate w-[200px]">
						{packageValue.packageName}
					</h6>
				</div>
				<div>
					<button
						className="btn-hover text-[#34E15A] bg-[#34E15A] bg-opacity-20 rounded-[4px] font-medium font-14 sm:font-18 px-4 md:px-10 py-1"
						onClick={() => setViewIsOpen(true)}
					>
						View
					</button>
				</div>
				<div className="relative">
					{isOpen && (
						<div className="bgcolor2 shadow-lg p-2 absolute -left-32 -top-0 rounded-md font-16 font-normal text-white flex gap-4">
							<button
								className="btn-hover"
								onClick={() => setDeleteIsOpen(true)}
							>
								Delete
							</button>
							<button className="btn-hover" onClick={() => setEditIsOpen(true)}>
								Edit
							</button>
						</div>
					)}

					<button
						className="btn-hover pt-2"
						onClick={handleAvatarClick}
						ref={refOutClick}
					>
						<ThreeDotIcon />
					</button>
				</div>
			</li>

			{modalDeleteIsOpen && (
				<div className="modal-cover flex-center ">
					<div className="max-w-[800px] mx-auto bg-white p-8">
						<h2 className="color4  font-18 sm:font-20">
							Are you sure you want Delete?
						</h2>
						<button
							className="border border-red-500 text-red-700 orderBtn ml-auto block mt-5"
							onClick={async () => {
								let array = [];
								const filtered = allValue.filter(
									(item) => item.id !== packageValue.id
								);
								await filtered.map((e) => {
									array.push(JSON.stringify(e));
								});
								const updatedVendorDetails = await API.graphql({
									query: serviceAPI,
									variables: { input: { id: id, packages: array } },
								});
								dispatch({
									type: "UPDATE_SUCCESS",
									payload: {
										vendorDetails: vendorDetails || [],
										vendor: updatedVendorDetails.data[vData] || [],
										balance: balance || [],
										data: "Found",
										profilePicture: profilePicture || "",
									},
								});
								setDeleteIsOpen(false);
							}}
						>
							Yes
						</button>
					</div>

					<button
						onClick={() => setDeleteIsOpen(false)}
						className="text-white bgcolor1 btn-hover px-4 py-1 font-20 rounded-[4px] font-light absolute top-5 right-5"
					>
						close
					</button>
				</div>
			)}

			{modalEditIsOpen && (
				<div className="modal-cover">
					<div className="modal">
						<Main addPackAgeInitalValue={packageValue} iseEDit={true} index={index} setEditIsOpen={setEditIsOpen}/>
						<button
							onClick={() => setEditIsOpen(false)}
							className="text-white bgcolor1 btn-hover px-4 py-1 font-20 rounded-[4px] font-light mx-auto mt-5 block mb-10 w-full"
						>
							Close Tab
						</button>
					</div>
				</div>
			)}

			{modalViewIsOpen && (
				<div className="modal-cover">
					<div className="modal">
						<PackagePreivew packageValue={packageValue} />
						<button
							onClick={() => setViewIsOpen(false)}
							className="text-white bgcolor1 btn-hover px-4 py-1 font-20 rounded-[4px] font-light mx-auto mt-5 block mb-10 w-full"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default React.memo(PackageItem);
