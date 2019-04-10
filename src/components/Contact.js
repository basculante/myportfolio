import React from 'react';
import { Container, Grid, Button, Segment } from 'semantic-ui-react';
import './Contact.css';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
	}

class Contact extends React.Component {
	  constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, message } = this.state;
		return (
		<Container>
		<div className="contact">
			<h1 className="section title">Contact Me</h1>
			<form name="contact" method="POST" netlify="true">
				<Segment>
					<Grid centered>
						<Grid.Row>
							<Grid.Column textAlign={'center'}>
								<p><label>Name:</label></p>
								<p><input type="text" name="name" value={name} onChange={this.handleChange} /></p> 
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column textAlign={'center'}>
								<p><label>Email:</label></p>
								<p><input type="email" name="email" value={email} onChange={this.handleChange} /></p>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row>
							<Grid.Column textAlign={'center'}>
								<p><label>Message:</label></p>
								<p><textarea name="message" value={message} onChange={this.handleChange} /></p>
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