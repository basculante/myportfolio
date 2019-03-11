import React from 'react';
import { Grid, Container} from 'semantic-ui-react';
import './About.css';
import Skills from './Skills';

class About extends React.Component {
	state={visible: false}

	handleVisibility = () => this.setState({ visible: !this.state.visible })
	render() {
		const { visible } = this.state

		return (
			<div className="about">
					<Container>
					<h1 className="section title">About</h1>
						<Grid stackable columns={2}>
							<Grid.Column>
							<Grid.Row className="about-text">
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