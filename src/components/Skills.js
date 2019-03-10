import React from 'react';
import { Grid, Image, Popup } from 'semantic-ui-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';

import html5 from '../icons/html-5.svg';
import bootstrap from '../icons/bootstrap.svg';
import css from '../icons/css-3.svg';
import javascript from '../icons/javascript.svg';
import mongodb from '../icons/mongodb.svg';
import nodejs from '../icons/nodejs.svg';
import postgresql from '../icons/postgresql.svg';
import reactRouter from '../icons/react-router.svg';
import react from '../icons/react.svg';
import redux from '../icons/redux.svg';
import semanticUI from '../icons/semantic-ui.svg';

const Skills = () => {
	AOS.init()
	return (
		<div className="skills">
			<h1 className="section title">My Skills</h1>
			<Grid className="icon-grid" centered columns={3}>
				<Grid.Column>
					<Popup 
						trigger={<Image centered size='tiny' src={html5} alt="html-5"/>} 
						content="HTML-5"
						/>	
				</Grid.Column>
				<Grid.Column>
					<Popup 
							trigger={<Image centered size='tiny' src={css} alt="css-3"/>} 
							content="CSS-3"
						/>
				</Grid.Column>
				<Grid.Column>
					<Popup 
							trigger={<Image centered size='tiny' src={javascript} alt="js"/>} 
							content="JavaScript"
						/>
				</Grid.Column>
				<Grid.Column>
					<Popup 
							trigger={<Image centered size='tiny' src={react} alt="react"/>} 
							content="React"
						/>	
				</Grid.Column>
				<Grid.Column>
					<Popup 
							trigger={<Image centered size='tiny' src={redux} alt="redux"/>} 
							content="Redux"
						/>
				</Grid.Column>
				<Grid.Column>
					<Popup 
							trigger={<Image centered size='tiny' src={reactRouter} alt="react-router"/>} 
							content="React-Router"
						/>
				</Grid.Column>
				<Grid.Column>
					<Popup 
							trigger={<Image centered size='tiny' src={semanticUI} alt="semantic-ui"/>} 
							content="Semantic-UI"
						/>
				</Grid.Column>
				<Grid.Column>
					<Popup 
							trigger={<Image centered size='tiny' src={bootstrap} alt="bootstrap"/>} 
							content="Bootstrap"
						/>	
				</Grid.Column>
				<Grid.Column>
					<Popup 
							trigger={<Image centered size='tiny' src={nodejs} alt="nodejs"/>} 
							content="NodeJS"
						/>	
				</Grid.Column>
				<Grid.Column>
					<Popup 
							trigger={<Image centered size='tiny' src={postgresql} alt="postgresql"/>} 
							content="PostgreSQL"
						/>	
				</Grid.Column>
				<Grid.Column>
					<Popup 
							trigger={<Image centered size='tiny' src={mongodb} alt="mongodb"/>} 
							content="MongoDB"
						/>
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default Skills;

// <div 
// 				className="ui three column grid centered"
// 				data-aos="flip-left"
// 			    data-aos-offset="200"
// 			    data-aos-delay="50"
// 			    data-aos-duration="1000"
// 			    data-aos-easing="ease-in-out"
// 			    data-aos-mirror="true"
// 			    data-aos-once="true"
// 			    data-aos-anchor-placement="top"
// 			>
// 				<div className="row">
// 					<div className="one wide column">
// 						<Popup 
// 							trigger={<img height="100vh" src={html5} alt="html-5"/>} 
// 							content="HTML-5"
// 						/>	
// 						</div>
// 					<div className="one wide column">
// 						<Popup 
// 							trigger={<img height="100vh" src={css} alt="css-3"/>} 
// 							content="CSS-3"
// 						/>	
// 					</div>
// 					<div className="one wide column">
// 						<Popup 
// 							trigger={<img height="100vh" src={javascript} alt="js"/>} 
// 							content="JavaScript"
// 						/>	
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="one wide column">
// 						<Popup 
// 							trigger={<img height="100vh" src={react} alt="react"/>} 
// 							content="React"
// 						/>		
// 					</div>
// 					<div className="one wide column">
// 						<Popup 
// 							trigger={<img height="100vh" src={redux} alt="redux"/>} 
// 							content="Redux"
// 						/>			
// 					</div>
// 					<div className="one wide column">
// 						<Popup 
// 							trigger={<img height="100vh" src={reactRouter} alt="react-router"/>} 
// 							content="React-Router"
// 						/>					
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="one wide column">
// 						<Popup 
// 							trigger={<img height="100vh" src={semanticUI} alt="semantic-ui"/>} 
// 							content="Semantic-UI"
// 						/>				
// 					</div>
// 					<div className="one wide column">
// 						<Popup 
// 							trigger={<img height="100vh" src={bootstrap} alt="bootstrap"/>} 
// 							content="Bootstrap"
// 						/>		
// 					</div>
// 					<div className="one wide column">
// 						<Popup 
// 							trigger={<img height="100vh" src={nodejs} alt="nodejs"/>} 
// 							content="NodeJS"
// 						/>	
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="one wide column">
// 						<Popup 
// 							trigger={<img height="100vh" src={postgresql} alt="postgresql"/>} 
// 							content="PostgreSQL"
// 						/>	
// 					</div>
// 					<div className="one wide column">
// 						<Popup 
// 							trigger={<img height="100vh" src={mongodb} alt="mongodb"/>} 
// 							content="MongoDB"
// 						/>	
// 					</div>
// 				</div>
// 			</div>