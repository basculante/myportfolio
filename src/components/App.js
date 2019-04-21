import React from "react";
import "./App.css";

import Navigation from "./Navigation";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Copyright from "./Copyright";

const App = () => {
	return (
		<div className="page">
			<Navigation />
			<section id="intro">
				<Intro />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<Skills />
			<section id="contact">
				<Contact />
			</section>
			<Copyright />
		</div>
	);
};

export default App;
