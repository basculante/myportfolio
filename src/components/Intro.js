import React from "react";
import { Grid, Image, Icon, Popup } from "semantic-ui-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from "../resume/Resume.pdf";
import "./Intro.css";

const Intro = () => {
  AOS.init();
  return (
    <div className="page">
      <div className="intro">
        <Grid stackable columns={1}>
          <Grid.Column verticalAlign="middle">
            <Grid.Row>
              <div className="social-icon">
                <a href="https://github.com/basculante">
                  <Popup
                    trigger={
                      <Icon
                        className="resume-icon"
                        name="github"
                        size={"small"}
                      />
                    }
                    content="Github"
                  />
                </a>
                <a href="https://www.linkedin.com/in/victor-wan-teak-joh-924203ba/">
                  <Popup
                    trigger={
                      <Icon
                        className="resume-icon"
                        name="linkedin"
                        size={"small"}
                      />
                    }
                    content="LinkedIn"
                  />
                </a>
                <a href={Resume}>
                  <Popup
                    trigger={
                      <Icon
                        className="resume-icon"
                        name="file"
                        size={"small"}
                      />
                    }
                    content="CV"
                  />
                </a>
              </div>
            </Grid.Row>
            <Grid.Row className="picture-column">
              <Image
                className="intro-picture"
                src={require("../projectimages/clear-photo.png")}
                circular
                centered
              />
            </Grid.Row>
            <Grid.Row className="intro-text">
              <div
                data-aos="fade-up"
                data-aos-offset="20"
                data-aos-delay="20"
                data-aos-duration="500"
                data-aos-easing="linear"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom"
              >
                <p>{"VICTOR JOH"}</p>
                <p>{"WEB DEVELOPER/REACT/REDUX"}</p>
              </div>
            </Grid.Row>
            <Grid.Row className="down arrow-2">
              <AnchorLink href="#about" offset="100">
                <Icon name="angle double down" />
              </AnchorLink>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Intro;
