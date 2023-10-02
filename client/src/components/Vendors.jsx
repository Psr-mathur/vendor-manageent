import React from "react";
import Vendor from "./Vendor";

const Vendors = ({ data = [] }) => {
	return (
		<div className="px-2 sm:p-0 flex flex-col gap-3 items-center justify-center relative">
			{data.map((d, ind) => (
				<Vendor key={ind} data={d} />
			))}
		</div>
	);
};

export default Vendors;
