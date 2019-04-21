import React from "react";
import { Grid, Container, Image } from "semantic-ui-react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Container className="about-container">
          <h1 className="about-title">About</h1>
          <Grid stackable columns={2} className="about-grid">
            <Grid.Column>
              <div className="about-text">
                My name is Victor (Wan-Teak) Joh. I graduated with a B.A. in
                chemistry from New York University. I enjoy combining the
                analytical methods gained from this field with my interest for
                design and creativity. All of my projects are related to a hobby
                or passion of mine, and I use these apps in my everyday life. I
                enjoy learning new skills everyday in order to turn my ideas
                into working products. I am currently looking for my first
                position as a web developer.
              </div>
            </Grid.Column>
            <Grid.Column verticalAlign={"middle"}>
              <Image
                src={require("../projectimages/about.svg")}
                size={"medium"}
                className="about-image"
                centered
              />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default About;
