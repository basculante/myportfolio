import React from 'react';
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';

const App = () => {
	return (
		<div>
			<Navigation />
			<About />
			<Projects />
			<Skills />
			<Resume />
			<Contact />
		</div>
	);
}

export default App;