import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import Fichas from "./Fichas";
import { Footer } from "./Footer"

//create your first component
const Home = () => {


	return (
		<>
			<Navbar />
			<div className="text-center">
				<h1 className="text-center mt-5">Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working...
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
					love!
				</p>
			</div>
			<Footer />


		</>
	);
};

export default Home;
