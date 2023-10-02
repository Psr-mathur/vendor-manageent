import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

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

const Vendor = ({ data = InitialData }) => {
	const [openmodal, setOpenModal] = useState(false);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	return (
		<>
			<div className=" py-2 px-4 flex items-center justify-between w-full max-w-screen-md border bg-rose-50 rounded-lg hover:scale-105 hover:bg-lime-50 transition-all">
				<div
					onClick={() => setOpenModal(true)}
					className="sm:flex-[3] flex flex-col gap-2 cursor-pointer"
				>
					<h3 className=" font-semibold">{data["vendorName"]}</h3>
					<h4 className=" text-gray-500">{data["bankAccountNo"]}</h4>
					<h4 className=" text-neutral-500">{data["bankName"]}</h4>
				</div>
				<div className="sm:flex-1 flex items-center justify-around gap-5">
					<Link
						to={`/edit/${data["_id"]}`}
						className=" px-3 py-2 text-slate-100 font-semibold hover:scale-110 active:scale-90 transition-all bg-green-500 rounded"
					>
						Edit
					</Link>
					<button
						onClick={() => setOpenDeleteModal(true)}
						className=" px-3 py-2 text-slate-100 font-semibold hover:scale-110 active:scale-90 transition-all bg-rose-500 rounded"
					>
						Delete
					</button>
				</div>
			</div>
			{openDeleteModal && (
				<Modal
					useFor="delete"
					data={data}
					setOpenModal={setOpenDeleteModal}
				/>
			)}
			{openmodal && <Modal setOpenModal={setOpenModal} data={data} />}
		</>
	);
};

export default Vendor;
