const { Vendor } = require("../schema");
const express = require("express");
const router = express.Router();

router.post("/vendors", async (req, res) => {
	try {
		const vendor = new Vendor(req.body["data"]);
		await vendor.save();
		res.status(201).json(vendor);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

router.get("/vendors", async (req, res) => {
	try {
		const vendors = await Vendor.find();
		res.json(vendors);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

router.put("/vendors/:id", async (req, res) => {
	const vendorId = req.params.id;
	const updates = req.body.toupdate;

	try {
		const updatedVendor = await Vendor.findByIdAndUpdate(
			vendorId,
			updates,
			{
				new: true,
			}
		);

		if (!updatedVendor) {
			return res.status(404).json({ error: "Vendor not found" });
		}

		res.status(200).json(updatedVendor);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

router.delete("/vendors/:id", async (req, res) => {
	const vendorId = req.params.id;

	try {
		const deletedVendor = await Vendor.findByIdAndRemove(vendorId);

		if (!deletedVendor) {
			return res.status(404).json({ error: "Vendor not found" });
		}

		res.status(200).json({ message: "Vendor deleted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal server error" });
	}
});

module.exports = { router };
