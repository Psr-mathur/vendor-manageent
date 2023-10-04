import React from "react";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import EditVendor from "./pages/EditVendor";
import CreateVendor from "./pages/CreateVendor";
import {
	SignedIn,
	SignedOut,
	RedirectToSignIn,
	SignIn,
} from "@clerk/clerk-react";

export const Protect = ({ children }) => {
	return (
		<>
			<SignedIn>{children}</SignedIn>
			<SignedOut>
				<div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center">
					<SignIn />
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
