import React, { useContext, useState } from "react";
import Pagination from "../pagination/Pagination";
import Vendors from "../components/Vendors";
import { Link } from "react-router-dom";
import { VendorsContext } from "../contextapi/VendorsDataProvider";

const Home = () => {
	const {
		vendors: data,
		toggleVendors,
		isLoading,
		isError,
	} = useContext(VendorsContext);
	let limit = 7;
	const [currentPage, setCurrentPage] = useState(1);
	let totalLength = data ? data.length : 0;
	let totalPage = Math.ceil(totalLength / limit);
	// console.log(totalPage);
	// console.log(data[0]);
	const handlePageChange = (val) => {
		switch (val) {
			case "&laquo;":
				setCurrentPage(1);
				break;
			case "&lsaquo;":
				if (currentPage != 1) setCurrentPage((p) => p - 1);
				break;
			case "&rsaquo;":
				if (currentPage != totalPage) setCurrentPage((p) => p + 1);
				break;
			case "&raquo;":
				setCurrentPage(totalPage);
				break;
			default:
				if (val !== "...") {
					setCurrentPage(parseInt(val));
				}
				break;
		}
	};

	return (
		<div className=" mb-40">
			<div className=" my-3 flex gap-10 items-center justify-center bg-white text-white font-semibold">
				<button
					onClick={() => toggleVendors()}
					disabled={isLoading}
					className=" p-2 bg-slate-300 hover:scale-105 active:scale-95 transition-all"
				>
					{isLoading ? "Wait..." : "Refresh"}
				</button>
				<Link
					to={"/create"}
					className=" p-2 bg-slate-300 hover:scale-105 active:scale-95 transition-all"
				>
					Create
				</Link>
			</div>
			{isLoading ? (
				<div className="p-5 flex items-center justify-center">
					<h4 className=" font-medium">Loading...</h4>
				</div>
			) : (
				<Vendors
					data={data.slice(
						(currentPage - 1) * limit,
						currentPage * limit
					)}
				/>
			)}
			<Pagination
				totalPage={totalPage}
				limit={limit}
				currentPage={currentPage}
				siblings={1}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default Home;
