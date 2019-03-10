import React from 'react';
import './App.css';

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
			<Intro />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;
