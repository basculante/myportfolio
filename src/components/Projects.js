import React from 'react';
import { Grid, Container, Card, Image } from 'semantic-ui-react';
import "./Projects.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
						<Card fluid raised centered>
							<Image src={require("../projectimages/fourwallsofiron.png")} className="project-image"/>
							<Card.Content>
								<Card.Header>Four Walls of Iron</Card.Header>
								<Card.Description>This is my project.</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column>
						<Card fluid raised centered>
							<Image src={require("../projectimages/meditation_timer.png")} className="project-image"/>
							<Card.Content>
								<Card.Header>Meditation Timer</Card.Header>
								<Card.Description>This is my project.</Card.Description>
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