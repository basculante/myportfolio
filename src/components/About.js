import React from 'react';
import { Grid, Image, Container, Popup, Card } from 'semantic-ui-react';
import './About.css';
import Skills from './Skills';

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

class About extends React.Component {
	state={visible: false}

	handleVisibility = () => this.setState({ visible: !this.state.visible })
	render() {
		const { visible } = this.state

		return (
			<div className="about">
					<Container>
						<Grid stackable columns={2}>
							<Grid.Column>
							<Grid.Row className="about-text">
							<h1>About</h1>
								<div>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
							</Grid.Row>
							</Grid.Column>
							<Grid.Column verticalAlign='middle'>
								<Skills />
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