const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
	{
		vendorName: {
			type: String,
			required: true,
		},
		bankAccountNo: {
			type: String,
			required: true,
			unique: true,
		},
		bankName: {
			type: String,
			required: true,
		},
		address: {
			line1: String,
			line2: String,
			city: String,
			country: String,
			zipCode: String,
		},
	},
	{ timestamps: true }
);

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = { Vendor };
