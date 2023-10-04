import { SignUpButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const { isSignedIn } = useUser();
	return (
		<div className="sticky top-0 z-20 bg-slate-100 text-slate-700 flex items-center justify-center">
			<h2 className=" my-3 font-bold">Vendor Management</h2>
			<div className=" absolute right-5 top-3">
				{!isSignedIn ? (
					<div className=" bg-black text-white p-2 active:scale-90">
						<SignUpButton />
					</div>
				) : (
					<UserButton />
				)}
			</div>
		</div>
	);
};

export default Navbar;
