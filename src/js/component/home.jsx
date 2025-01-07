import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer"
import {CounterList} from "./prueba";
import Board from "./Board";

//create your first component
const Home = () => {


	return (
		<>
			<Navbar />
			<Board/>
			
			


		</>
	);
};

export default Home;
