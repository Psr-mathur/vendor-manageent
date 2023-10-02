import React, { useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Consts";
import { toast } from "react-toastify";
import { VendorsContext } from "../contextapi/VendorsDataProvider";

const InitialData = {
	vendorName: "Jhon Doe",
	bankAccountNo: "31415926535897",
	bankName: "Test Bank Of India",
	address: {
		line1: "Main Street 16, Lovpur",
		line2: "",
		city: "Lovpur",
		country: "India",
		zipCode: "844720",
	},
	_id: "qw3ed54dj7ddgh",
};

const Modal = ({
	useFor = "venshow",
	data = InitialData,
	setOpenModal = () => {},
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [iserror, setIsError] = useState(null);
	const { toggleVendors } = useContext(VendorsContext);

	const deleteData = async () => {
		try {
			setIsLoading(true);
			setIsError(null);
			const response = await axios.delete(
				`${BASE_URL}/vendors/${data["_id"]}`
			);
			setIsLoading(false);
			toggleVendors();
			toast("Deleted Succesfully.");
		} catch (err) {
			setIsError(true);
			setIsLoading(false);
			toast.error("Some Error Occurred! try later.");
		}
	};
	const handleDelete = async () => {
		await deleteData();
		setOpenModal(false);
	};
	return (
		<>
			<div className=" fixed z-10 top-48 m-auto">
				{useFor != "delete" ? (
					<div className="z-50 p-4 flex flex-col items-center justify-center gap-2 min-w-[320px] max-w-2xl bg-white rounded-2xl">
						<h2 className=" font-semibold">{data["vendorName"]}</h2>
						<h4 className=" text-blue-500">
							{data["bankAccountNo"]}
						</h4>
						<h4 className=" text-amber-900">{data["bankName"]}</h4>
						<div className="w-full flex flex-col gap-3 px-5">
							<h3 className=" text-sm font-semibold">Address:</h3>
							{data["address"]["line1"] && (
								<span className=" text-sm text-slate-500">
									{data["address"]["line1"]}
								</span>
							)}
							{data["address"]["line2"] && (
								<span className=" text-sm text-slate-500">
									{data["address"]["line1"]}
								</span>
							)}
							{data["address"]["city"] && (
								<span className=" text-sm text-slate-500">
									{data["address"]["city"]}
								</span>
							)}
							{data["address"]["country"] && (
								<span className=" text-sm text-slate-500">
									{data["address"]["country"]}
								</span>
							)}
							{data["address"]["zipCode"] && (
								<span className=" text-sm text-slate-500">
									{data["address"]["zipCode"]}
								</span>
							)}
						</div>
						<button
							onClick={() => setOpenModal(false)}
							className="px-3 py-2 text-slate-100 font-semibold hover:scale-110 active:scale-90 transition-all bg-sky-500 rounded"
						>
							Close
						</button>
					</div>
				) : (
					<div className="z-50 p-4 flex flex-col items-center justify-center gap-2 min-w-[320px] max-w-2xl bg-white rounded-2xl">
						<span className=" text-rose-400 font-semibold">
							{isLoading
								? "Deleting please wait.."
								: "Are you Sure?"}
						</span>
						<div className=" flex gap-6 py-6">
							<button
								onClick={handleDelete}
								disabled={isLoading}
								className="px-3 py-2 text-slate-100 font-semibold hover:scale-110 active:scale-90 transition-all bg-rose-500 rounded"
							>
								{isLoading ? "wait.." : "Yes"}
							</button>
							<button
								onClick={() => setOpenModal(false)}
								disabled={isLoading}
								className="px-3 py-2 text-slate-100 font-semibold hover:scale-110 active:scale-90 transition-all bg-slate-500 rounded"
							>
								No
							</button>
						</div>
					</div>
				)}
			</div>
			<div
				onClick={() => setOpenModal(false)}
				className=" fixed top-0 left-0 z-[8] h-full w-full flex items-center justify-center bg-[rgba(0,0,0,0.19)]"
			></div>
		</>
	);
};

export default Modal;
