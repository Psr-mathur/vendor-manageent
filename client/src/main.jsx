import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, HashRouter, useNavigate } from "react-router-dom";
import VendorsDataProvider from "./contextapi/VendorsDataProvider";
import { ClerkProvider } from "@clerk/clerk-react";

const clerkPubKey =
	"pk_test_Y2xpbWJpbmcta2F0eWRpZC05MC5jbGVyay5hY2NvdW50cy5kZXYk";

const MainApp = () => {
	const navigate = useNavigate();
	return (
		<ClerkProvider
			publishableKey={clerkPubKey}
			navigate={(to) => navigate(to)}
		>
			<VendorsDataProvider>
				<App />
			</VendorsDataProvider>
		</ClerkProvider>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<MainApp />
		</BrowserRouter>
	</React.StrictMode>
);
