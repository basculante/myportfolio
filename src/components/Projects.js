import React from 'react';
import { Grid, Container, Card, Image, Divider, Popup } from 'semantic-ui-react';
import "./Projects.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import html5 from '../icons/html-5.svg';
import bootstrap from '../icons/bootstrap.svg';
import css from '../icons/css-3.svg';
import javascript from '../icons/javascript.svg';
import reactRouter from '../icons/react-router.svg';
import react from '../icons/react.svg';
import redux from '../icons/redux.svg';
import semanticUI from '../icons/semantic-ui.svg';

class Projects extends React.Component {
	render() {
		AOS.init()
		return (
			<Container>
			<div className="projects">
				<div className="project-content">
					<h1 className="section title">Projects</h1>
					<Grid stackable columns={2}>
					<Grid.Column>
						<Card fluid raised centered className="project-card">
							<Image src={require("../projectimages/moodmusic.png")} className="project-image"/>
							<Card.Content>
								<Card.Header>
									<div className="card-header">
										Mood Music
									</div>
								</Card.Header>
								<Card.Description>
									<div className="card-description">
									A responsive weather application that displays a Spotify playlist based on the current weather conditions.
									Along with the stack listed below, this app uses Redux Form, the OpenWeatherMap API, and the Spotify Play Button.
									</div>
									<Divider />
									<div>
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={html5} />} 
											content="HTML-5"
											/>	
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={css} />} 
											content="CSS3"
											/>
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={react} />} 
											content="React"
											/>
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={redux} />} 
											content="Redux"
											/>
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={semanticUI} />} 
											content="Semantic-UI"
											/>						
									</div>
									<Divider />
										<div>
											<a href="https://nifty-panini-aaae66.netlify.com/">Live Site</a>
											<a href="https://github.com/basculante/weathermusic">Github</a>
										</div>
								</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column>
						<Card fluid raised centered className="project-card">
							<Image src={require("../projectimages/fourwallsofiron.png")} className="project-image"/>
							<Card.Content>
								<Card.Header>
									<div className="card-header">
										Four Walls of Iron
									</div>
								 </Card.Header>
								<Card.Description>
									<div className="card-description">
									A workout application that makes choosing your next program easy. Pick your 
									desired goal, enter in your maxes, and this workout app will calculate the rest
									for you.
									</div>
									<Divider />
									<div>
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={html5} />} 
											content="HTML-5"
											/>	
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={css} />} 
											content="CSS3"
											/>
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={react} />} 
											content="React"
											/>
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={reactRouter} />} 
											content="React-Router"
											/>	
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={bootstrap} />} 
											content="Bootstrap"
											/>						
									</div>
									<Divider />
										<div>
											<a href="https://zealous-raman-42f39d.netlify.com">Live Site</a>
											<a href="https://github.com/basculante/FourWallsOfIron">Github</a>
										</div>
								</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column>
						<Card fluid raised centered className="project-card">
							<Image src={require("../projectimages/meditation_timer.png")} className="project-image"/>
							<Card.Content>
								<Card.Header>
									<div className="card-header">
										Meditation Timer
									</div>
								 </Card.Header>
								<Card.Description>
									<div className="card-description">
									A simple meditation timer to help with your daily meditation sessions. This was my first 
									project. By building this app, I was able to learn how to use React as well as
									practice coding in Javascript. 
									</div>
									<Divider />
									<div>
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={html5} />} 
											content="HTML-5"
											/>	
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={css} />} 
											content="CSS3"
											/>
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={react} />} 
											content="React"
											/>	
										<Popup 
											trigger={<Image style={{height:'9vh', padding: '2vh'}} src={bootstrap} />} 
											content="Bootstrap"
											/>						
									</div>
									<Divider />
										<div>
											<a href="https://jovial-booth-f689fb.netlify.com/">Live Site</a>
											<a href="https://github.com/basculante/meditation-timer">Github</a>
										</div>
								</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
					</Grid>
				</div>
			</div>
			</Container>
		);
	}
}

export default Projects;