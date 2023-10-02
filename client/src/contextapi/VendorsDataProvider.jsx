import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../Consts";
import axios from "axios";

export const VendorsContext = createContext({
	vendors: [],
	isLoading: Boolean,
	isError: Boolean,
	toggleVendors: () => {},
});

const VendorsDataProvider = ({ children }) => {
	const [vendorData, setVendorData] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	const [iserror, setIsError] = useState(null);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			setIsError(null);
			const response = await axios.get(`${BASE_URL}/vendors`);
			setVendorData(response.data.reverse());
			setIsLoading(false);
		} catch (err) {
			setIsError(true);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<VendorsContext.Provider
			value={{
				vendors: vendorData,
				isError: iserror,
				isLoading: isLoading,
				toggleVendors: fetchData,
			}}
		>
			{children}
		</VendorsContext.Provider>
	);
};

export default VendorsDataProvider;
