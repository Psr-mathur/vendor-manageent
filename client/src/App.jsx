import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import EditVendor from "./pages/EditVendor";
import CreateVendor from "./pages/CreateVendor";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/edit/:id" element={<EditVendor />} />
				<Route path="/create" element={<CreateVendor />} />
			</Route>
		</Routes>
	);
};

export default App;
