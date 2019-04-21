import React from "react";
import { Container, Grid, Button, Segment } from "semantic-ui-react";
import "./Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <Container>
          <div className="contact">
            <h1 className="contact-title">Contact Me</h1>
            <form
              action="https://formspree.io/wantechjoh@gmail.com"
              method="POST"
            >
              <Segment>
                <Grid className="contact-form" centered>
                  <Grid.Row>
                    <Grid.Column textAlign={"center"}>
                      <p>
                        <label>Name:</label>
                      </p>
                      <p>
                        <input
                          className="contact-input"
                          type="text"
                          name="name"
                          placeholder="Your Name..."
                        />
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column textAlign={"center"}>
                      <p>
                        <label>Email:</label>
                      </p>
                      <p>
                        <input
                          className="contact-input"
                          type="email"
                          name="_replyto"
                          placeholder="You@example.com"
                        />
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column textAlign={"center"}>
                      <p>
                        <label>Message:</label>
                      </p>
                      <p>
                        {" "}
                        <textarea
                          className="contact-input"
                          name="message"
                          placeholder="Your Message..."
                        />
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Button secondary className="submit-button">
                      Send Message
                    </Button>
                  </Grid.Row>
                </Grid>
              </Segment>
            </form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;
