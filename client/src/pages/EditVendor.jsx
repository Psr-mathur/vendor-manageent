import React, { useContext } from "react";
import Form from "../components/Form";
import { useLocation } from "react-router-dom";
import { VendorsContext } from "../contextapi/VendorsDataProvider";
import { convertToFormFormat } from "../Consts";

const EditVendor = () => {
	const _id = useLocation().pathname.split("/").pop();
	const { vendors } = useContext(VendorsContext);
	// console.log(vendors);
	let currVendor = vendors.filter((v) => v["_id"] == _id)[0];
	// console.log(currVendor);
	currVendor = convertToFormFormat(currVendor);
	// console.log(currVendor);
	return (
		<>
			<Form usefor="edit" data={currVendor} />
		</>
	);
};

export default EditVendor;
