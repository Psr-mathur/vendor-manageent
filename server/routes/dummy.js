const { Vendor } = require("../schema");
const express = require("express");
const dummy = express.Router();

const dummyData = [
	{
		vendorName: "Jane Smith",
		bankAccountNo: "27182818284590",
		bankName: "Bank of America",
		address: {
			line1: "123 Elm Street",
			line2: "Apt 4B",
			city: "Springfield",
			country: "USA",
			zipCode: "12345",
		},
	},
	{
		vendorName: "Alice Johnson",
		bankAccountNo: "98765432101234",
		bankName: "European Bank",
		address: {
			line1: "42 High Street",
			line2: "",
			city: "London",
			country: "UK",
			zipCode: "SW1A 1AA",
		},
	},
	{
		vendorName: "Alice Johnson",
		bankAccountNo: "12345678901234",
		bankName: "ABC Bank",
		address: {
			line1: "123 Oak Avenue",
			line2: "",
			city: "Springfield",
			country: "USA",
			zipCode: "54321",
		},
	},
	{
		vendorName: "Bob Smith",
		bankAccountNo: "98765432102345",
		bankName: "XYZ Bank",
		address: {
			line1: "456 Maple Street",
			line2: "Apt 7C",
			city: "Oakland",
			country: "USA",
			zipCode: "67890",
		},
	},
	{
		vendorName: "Eva Williams",
		bankAccountNo: "87654321003456",
		bankName: "PQR Bank",
		address: {
			line1: "789 Pine Road",
			line2: "",
			city: "Los Angeles",
			country: "USA",
			zipCode: "12345",
		},
	},
	{
		vendorName: "David Brown",
		bankAccountNo: "13579246802468",
		bankName: "Sample Bank",
		address: {
			line1: "789 Elm Street",
			line2: "",
			city: "Boston",
			country: "USA",
			zipCode: "56789",
		},
	},
	{
		vendorName: "Sophia Miller",
		bankAccountNo: "86420975318765",
		bankName: "Finance Corporation",
		address: {
			line1: "456 Cedar Road",
			line2: "Apt 5D",
			city: "Chicago",
			country: "USA",
			zipCode: "43210",
		},
	},
	{
		vendorName: "Oliver Wilson",
		bankAccountNo: "31415926535897",
		bankName: "Global Bank",
		address: {
			line1: "1010 Oak Lane",
			line2: "",
			city: "New York",
			country: "USA",
			zipCode: "98765",
		},
	},
	{
		vendorName: "Emma Wilson",
		bankAccountNo: "77777777777777",
		bankName: "Sample Bank",
		address: {
			line1: "123 Pine Street",
			line2: "Apt 2B",
			city: "Los Angeles",
			country: "USA",
			zipCode: "90001",
		},
	},
	{
		vendorName: "Liam Johnson",
		bankAccountNo: "88888888888888",
		bankName: "Finance Corp",
		address: {
			line1: "456 Elm Road",
			line2: "",
			city: "Chicago",
			country: "USA",
			zipCode: "60601",
		},
	},
	{
		vendorName: "Mia Smith",
		bankAccountNo: "99999999999999",
		bankName: "Global Bank",
		address: {
			line1: "789 Oak Avenue",
			line2: "",
			city: "Houston",
			country: "USA",
			zipCode: "77001",
		},
	},
];

dummy.post("/vendors/dummy", async (req, res) => {
	try {
		await Vendor.insertMany(dummyData);
		res.status(201).json("Populated dummy");
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

module.exports = { dummy };
