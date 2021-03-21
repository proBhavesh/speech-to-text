import React, { useState, useEffect } from "react";
import { markRes } from "./Api";
import "./sidebar.css"

const Sidebar = (props) => {
	// seeting effect hook

	const [state, setState] = useState([]);
	// setting useEffect hook

	useEffect(() => {
		const arr = markRes();
		arr.then((data) => {
			console.log(data);
			setState(data);
		});
	}, []);

	// returning the values

	return (
		<section className={`bg-yellow-500 w-72 float-left overflow-scroll h-screen ${props.name}`}>
			<div className="coinname text-3xl">
				{state.map((name)=>(
						<div className="m-2 p-2 border-b-4 border-gray-600 text-purple-700">
						<h1>{name.name}</h1>
						</div>
					))}
			</div>
		</section>
	);
};

export default Sidebar;
