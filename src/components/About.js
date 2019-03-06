import React from 'react';
import { Grid, Form, Transition } from 'semantic-ui-react';
import './About.css';

class About extends React.Component {
	state={visible: false}

	handleVisibility = () => this.setState({ visible: !this.state.visible })
	render() {
		const { visible } = this.state

		return (
			<div>
				<h1 className="section title">About Me</h1>
				<Grid className="about" centered>
					<Grid.Row>
						<Grid.Column width={6}>
							<p>Where did you go to school?</p>
						</Grid.Column>
						<Grid.Column>
						</Grid.Column>
						<Grid.Column>
							<i className="large plus icon" onClick={this.handleVisibility}/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={6}>
							<Transition.Group animation={'fade up'}>
								{visible && <div>NYU!</div>}
							</Transition.Group>
						</Grid.Column>
						<Grid.Column>
						</Grid.Column>
						<Grid.Column>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={6}>
							<p>What are your hobbies?</p>
						</Grid.Column>
						<Grid.Column>
						</Grid.Column>
						<Grid.Column>
							<i className="large plus icon" onClick={this.handleVisibility}/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={6}>
							<Transition.Group animation={'fade up'}>
								{visible && <div>Boxing, reading, Go game, movies.</div>}
							</Transition.Group>
						</Grid.Column>
						<Grid.Column>
						</Grid.Column>
						<Grid.Column>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default About;