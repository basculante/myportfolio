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
		<div className="page">
			<Navigation />
			<Intro />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
