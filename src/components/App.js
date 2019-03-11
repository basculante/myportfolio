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
			<section id='intro'>
				<Intro />
			</section>
			<section id='about'>
				<About />
			</section>
			<section id='projects'>
				<Projects />
			</section>
			<section id='contact'>
				<Contact />
			</section>
		</div>
	);
}

export default App;
