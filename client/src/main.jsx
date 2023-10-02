import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import VendorsDataProvider from "./contextapi/VendorsDataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HashRouter>
			<VendorsDataProvider>
				<App />
			</VendorsDataProvider>
		</HashRouter>
	</React.StrictMode>
);
