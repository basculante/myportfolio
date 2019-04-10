import React from 'react';
import { Grid, Container, Icon, Popup} from 'semantic-ui-react';
import Resume from '../resume/Resume.pdf';
import './About.css';

class About extends React.Component {
	render() {
		return (
			<div className="about">
					<Container>
					<h1 className="section title">About</h1>
						<Grid stackable columns={1}>
							<Grid.Column>
							<Grid.Row>
								<div className="about-text">
									My name is Victor (Wan-Teak) Joh.
									I graduated with a B.A. in chemistry from New York University. I enjoy combining the analytical methods
									gained from this field with my interest for design and creativity.
									All of my projects are related to a hobby or passion of mine, and I use these apps in my everyday life. 
									I enjoy learning new skills everyday in order to turn my ideas into working products.
									I am currently looking for my first position as a web developer. 
								</div>
							</Grid.Row>
							</Grid.Column>
							<Grid.Column>
								<div className="social-icon">
									<a href="https://github.com/basculante">
									<Popup 
										trigger={<Icon className="resume-icon" name="github" size={'huge'}/>} 
										content="Github"
										/>	
									</a>
									<a href="https://www.linkedin.com/in/victor-wan-teak-joh-924203ba/">
									<Popup 
										trigger={<Icon className="resume-icon" name="linkedin" size={'huge'}/>} 
										content="LinkedIn"
										/>
									</a>
									<a href={Resume}>
									<Popup 
										trigger={<Icon className="resume-icon" name="file" size={'huge'}/>} 
										content="CV"
										/>	
									</a>
								</div>
							</Grid.Column>
						</Grid>
					</Container>
			</div>
		);
	}
}

export default About;

// <h1 className="section title">About Me</h1>
// 				<Grid className="about" centered>
// 					<Grid.Row>
// 						<Grid.Column width={6}>
// 							<p>Where did you go to school?</p>
// 						</Grid.Column>
// 						<Grid.Column>
// 						</Grid.Column>
// 						<Grid.Column>
// 							<i className="large plus icon" onClick={this.handleVisibility}/>
// 						</Grid.Column>
// 					</Grid.Row>
// 					<Grid.Row>
// 						<Grid.Column width={6}>
// 							<Transition.Group animation={'fade up'}>
// 								{visible && <div>NYU!</div>}
// 							</Transition.Group>
// 						</Grid.Column>
// 						<Grid.Column>
// 						</Grid.Column>
// 						<Grid.Column>
// 						</Grid.Column>
// 					</Grid.Row>
// 					<Grid.Row>
// 						<Grid.Column width={6}>
// 							<p>What are your hobbies?</p>
// 						</Grid.Column>
// 						<Grid.Column>
// 						</Grid.Column>
// 						<Grid.Column>
// 							<i className="large plus icon" onClick={this.handleVisibility}/>
// 						</Grid.Column>
// 					</Grid.Row>
// 					<Grid.Row>
// 						<Grid.Column width={6}>
// 							<Transition.Group animation={'fade up'}>
// 								{visible && <div>Boxing, reading, Go game, movies.</div>}
// 							</Transition.Group>
// 						</Grid.Column>
// 						<Grid.Column>
// 						</Grid.Column>
// 						<Grid.Column>
// 						</Grid.Column>
// 					</Grid.Row>
// 				</Grid>