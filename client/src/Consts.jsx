export const BASE_URL = "http://localhost:4000/api";

export const convertToSendFormat = (data) => {
	const { name, acn, bank, address1, address2, city, country, zip } = data;
	return {
		vendorName: name,
		bankAccountNo: acn,
		bankName: bank,
		address: {
			line1: address1,
			line2: address2,
			city: city,
			country: country,
			zipCode: zip,
		},
	};
};

export const convertToFormFormat = (data) => {
	return {
		name: data.vendorName || "",
		acn: data.bankAccountNo || "",
		bank: data.bankName || "",
		address1: data.address.line1,
		address2: data.address.line2,
		city: data.address.city,
		country: data.address.country,
		zip: data.address.zipCode,
		_id: data["_id"],
	};
};
