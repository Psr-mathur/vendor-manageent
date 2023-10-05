import {
	SignUpButton,
	UserButton,
	useClerk,
	useUser,
} from "@clerk/clerk-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const clerk = useClerk();
	const cUser = useUser();
	const currPath = useLocation().pathname;
	console.log(currPath);
	const handleLogin = () => {
		clerk.openSignIn({
			redirectUrl: currPath,
		});
	};
	return (
		<div className="sticky top-0 z-20 bg-slate-100 text-slate-700 flex items-center justify-center">
			<h2 className=" my-3 font-bold">Vendor Management</h2>
			<div className=" absolute right-5 top-3">
				{!cUser.isSignedIn ? (
					<button
						onClick={handleLogin}
						className=" bg-black text-white p-2 active:scale-90"
					>
						LogIn
					</button>
				) : (
					<UserButton userProfileMode="modal" afterSignOutUrl="/" />
				)}
			</div>
		</div>
	);
};

export default Navbar;
