import React, { useState } from "react";
import { coinNames } from "./Components/Api.jsx";
import Sidebar from "./Components/Sidebar";
import "./Components/sidebar.css";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Sidebar />

		</>
	);
}

export default App;
