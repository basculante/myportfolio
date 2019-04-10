import React from 'react';
import { Container, Grid, Button, Segment } from 'semantic-ui-react';
import './Contact.css';

class Contact extends React.Component {
	render() {
		return (
		<Container>
		<div className="contact">
			<h1 className="section title">Contact Me</h1>
			<form name="contact" method="POST" netlify>
				<Segment>
					<Grid centered>
						<Grid.Row>
							<Grid.Column textAlign={'center'}>
								<p><label>Name:</label></p>
								<p><input type="text" name="name" /></p> 
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column textAlign={'center'}>
								<p><label>Email:</label></p>
								<p><input type="email" name="email" /></p>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column textAlign={'center'}>
								<p><label>Message:</label></p>
								<p> <textarea name="message"></textarea></p>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<button type="submit">Submit</button>
						</Grid.Row>
					</Grid>
				</Segment>
			</form>
		</div>
		</Container>
		);
	}
}

export default Contact;