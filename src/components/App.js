import React from 'react';
import Navigation from './Navigation';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';

const App = () => {
	return (
		<div>
			<Navigation />
			<Intro id="intro" />
			<About id="abouts" />
			<Projects id="projects" />
			<Skills id="skills" />
			<Resume id="resume" />
			<Contact id="contact" />
		</div>
	);
}

export default App;