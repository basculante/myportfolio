import React from 'react';
import "./Projects.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Fourwallsofiron from './projects/Fourwallsofiron';
import MeditationTimer from './projects/MeditationTimer';

class Projects extends React.Component {
	render() {
		AOS.init()
		return (
			<div>
				<h1 className="section title">Projects</h1>
				<Fourwallsofiron />
				<MeditationTimer />
			</div>
		);
	}
}

export default Projects;