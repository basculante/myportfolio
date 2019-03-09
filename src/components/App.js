import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
		<BrowserRouter>
			<div>
				<Navigation />
				<Route path="/" component={Intro} exact/>
				<Route path="/about" component={About} exact/>
				<Route path="/projects" component={Projects} exact/>
				<Route path="/skills" component={Skills} exact/>
				<Route path="/contact" component={Contact} exact/>
				<Route path="/resume" component={Resume} exact/>
			</div>		
		</BrowserRouter>
		</div>
	);
}

export default App;