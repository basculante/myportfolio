import React from 'react';
import { Container, Form, Grid, Button, Segment } from 'semantic-ui-react';
import './Contact.css';

class Contact extends React.Component {
	render() {
		return (
		<Container>
		<div className="contact">
			<h1 className="section title">Contact Me</h1>
			<Form name="contact" method="POST" data-netlify="true">
				<Segment>
					<Grid centered>
						<Grid.Row>
							<Grid.Column>
									<Form.Group widths='equal'>
											<Form.Input label='Name' placeholder='Name' />
											<Form.Input label='Email' placeholder='Email' />
									</Form.Group>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column>
									<Form.TextArea label='Message' placeholder='Message' />
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Button secondary className="submit-button">Submit</Button>
						</Grid.Row>
					</Grid>
				</Segment>
			</Form>
		</div>
		</Container>
		);
	}
}

export default Contact;