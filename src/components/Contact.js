import React from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';

class Contact extends React.Component {
	render() {
		return (
		<div>
			<h1 className="section title">Contact Me</h1>
			<Form action="https://formspree.io/victorbasculante@gmail.com" method="POST">
			<Grid centered>
				<Grid.Row>
					<Grid.Column width={6}>
							<Form.Group widths='equal'>
									<Form.Input label='Name' placeholder='Name' />
									<Form.Input label='Email' placeholder='Email' />
							</Form.Group>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={6}>
							<Form.TextArea label='Message' placeholder='Message' />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Button primary>Submit</Button>
				</Grid.Row>
			</Grid>
			</Form>
		</div>
		);
	}
}

export default Contact;