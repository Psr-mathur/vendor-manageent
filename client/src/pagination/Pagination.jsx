import React from "react";
import { getPaginationRange } from "./usePagination";

const Pagination = (props) => {
	// console.log(props);
	const arr = getPaginationRange(
		props.totalPage,
		props.limit,
		props.currentPage,
		props.siblings
	);
	// console.log(arr);

	return (
		<div className=" flex items-center justify-center mt-7">
			<ul className=" flex list-none gap-2">
				<li
					className=" h-6 w-6 text-center cursor-pointer shadow rounded bg-slate-100 text-slate-500"
					onClick={() => props.onPageChange("&laquo;")}
				>
					<span>&laquo;</span>
				</li>
				<li
					className=" h-6 w-6 text-center cursor-pointer shadow rounded bg-slate-100 text-slate-500"
					onClick={() => props.onPageChange("&lsaquo;")}
				>
					<span>&lsaquo;</span>
				</li>
				{arr.map((val) => {
					if (val === props.currentPage) {
						return (
							<li
								className=" h-6 w-6 text-center cursor-pointer shadow rounded text-slate-200 bg-zinc-500"
								key={val}
								onClick={() => props.onPageChange(val)}
							>
								<span>{val}</span>
							</li>
						);
					} else {
						return (
							<li
								className=" h-6 w-6 text-center cursor-pointer shadow rounded bg-slate-100 text-slate-500"
								key={val}
								onClick={() => props.onPageChange(val)}
							>
								<span>{val}</span>
							</li>
						);
					}
				})}
				<li
					className=" h-6 w-6 text-center cursor-pointer shadow rounded bg-slate-100 text-slate-500"
					onClick={() => props.onPageChange("&rsaquo;")}
				>
					<span>&rsaquo;</span>
				</li>
				<li
					className=" h-6 w-6 text-center cursor-pointer shadow rounded bg-slate-100 text-slate-500"
					onClick={() => props.onPageChange("&raquo;")}
				>
					<span>&raquo;</span>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
