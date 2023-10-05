import React from "react";
import Home from "./pages/Home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import EditVendor from "./pages/EditVendor";
import CreateVendor from "./pages/CreateVendor";
import {
	SignedIn,
	SignedOut,
	RedirectToSignIn,
	SignIn,
	useClerk,
} from "@clerk/clerk-react";

export const Protect = ({ children }) => {
	const clerk = useClerk();
	const currPath = useLocation().pathname;
	const handleLoginClick = () => {
		clerk.openSignIn({
			redirectUrl: currPath,
		});
	};
	const handleRegisterClick = () => {
		clerk.openSignUp({
			redirectUrl: currPath,
		});
	};

	return (
		<>
			<SignedIn>{children}</SignedIn>
			<SignedOut>
				<div className=" h-screen p-5 flex flex-col items-center justify-center gap-14">
					<p>
						You are not signed in. Please sign up or log into your
						account to view this page!
					</p>
					<div className=" flex gap-12">
						<button
							className=" px-3 py-2 bg-slate-600 text-white font-semibold hover:scale-105 active:scale-90 transition-all"
							onClick={handleLoginClick}
						>
							Login
						</button>
						<button
							className=" px-3 py-2 bg-slate-600 text-white font-semibold hover:scale-105 active:scale-90 transition-all"
							onClick={handleRegisterClick}
						>
							Register
						</button>
					</div>
				</div>
			</SignedOut>
		</>
	);
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route
					path="/edit/:id"
					element={
						<Protect>
							<EditVendor />
						</Protect>
					}
				/>
				<Route
					path="/create"
					element={
						<Protect>
							<CreateVendor />
						</Protect>
					}
				/>
			</Route>
		</Routes>
	);
};

export default App;
