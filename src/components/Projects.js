import React from "react";
import { Grid, Container, Image, Divider, Popup } from "semantic-ui-react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

import html5 from "../icons/html-5.svg";
import bootstrap from "../icons/bootstrap.svg";
import css from "../icons/css-3.svg";
import reactRouter from "../icons/react-router.svg";
import react from "../icons/react.svg";
import redux from "../icons/redux.svg";
import express from "../icons/express.svg";
import knex from "../icons/knex.svg";
import semanticUI from "../icons/semantic-ui.svg";
import mongoDB from "../icons/mongodb.svg";
import materializeCSS from "../icons/materializecss.svg";

class Projects extends React.Component {
  render() {
    AOS.init();
    return (
      <div className="project-page">
        <Container>
          <div className="projects">
            <div className="project-content">
              <h1 className="project-title">Projects</h1>
              <Grid stackable columns={2} className="project-container">
                <Grid.Row>
                  <Grid.Column>
                    <Image
                      src={require("../projectimages/standing-eight.png")}
                      className="project-image"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <div>
                      <h3 className="project-name">Standing-Eight!</h3>
                    </div>
                    <Divider />
                    <div className="card-description">
                      A full-stack, responsive, boxing web app. Watch boxing
                      videos, graph training data, and purchase a boxing
                      program. This app uses React and Redux. The back-end
                      server is utilizing Express, MongoDB, Mongoose, and
                      Passport.js to handle Google authentication and user data.
                      The app is styled using MaterializeCSS.
                    </div>
                    <Divider />
                    <div>
                      <Grid>
                        <Grid.Row>
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={html5}
                              />
                            }
                            content="HTML-5"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={css}
                              />
                            }
                            content="CSS3"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={react}
                              />
                            }
                            content="React"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={redux}
                              />
                            }
                            content="Redux"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={mongoDB}
                              />
                            }
                            content="mongoDB"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={materializeCSS}
                              />
                            }
                            content="materializeCSS"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={express}
                              />
                            }
                            content="Express"
                          />
                        </Grid.Row>
                      </Grid>
                    </div>
                    <Divider />
                    <div>
                      <a href="https://peaceful-atoll-85541.herokuapp.com/">
                        Live Site
                      </a>
                      <a href="https://github.com/basculante/standing-eight-server">
                        Github
                      </a>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid stackable columns={2} className="project-container">
                <Grid.Row>
                  <Grid.Column>
                    <Image
                      src={require("../projectimages/fourwallsofiron2.jpg")}
                      className="project-image"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <div>
                      <h3 className="project-name">Four Walls of Iron 2.0</h3>
                    </div>
                    <Divider />
                    <div className="card-description">
                      A full-stack, responsive, improved version of Four Walls
                      of Iron. This workout app uses Redux and Redux-Form. The
                      back-end server is utilizing Express, NodeJS, and Knex.
                      The user database is using PostgreSQL.
                    </div>
                    <Divider />
                    <div>
                      <Grid>
                        <Grid.Row>
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={html5}
                              />
                            }
                            content="HTML-5"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={css}
                              />
                            }
                            content="CSS3"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={react}
                              />
                            }
                            content="React"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={redux}
                              />
                            }
                            content="Redux"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={knex}
                              />
                            }
                            content="Knex"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={semanticUI}
                              />
                            }
                            content="Semantic-UI"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "8vh", padding: "2vh" }}
                                src={express}
                              />
                            }
                            content="Express"
                          />
                        </Grid.Row>
                      </Grid>
                    </div>
                    <Divider />
                    <div>
                      <a href="https://silly-curran-d6b678.netlify.com/">
                        Live Site
                      </a>
                      <a href="https://github.com/basculante/fourwalls-frontend">
                        Github (Front-End)
                      </a>
                      <a href="https://github.com/basculante/fourwalls-api">
                        Github (API)
                      </a>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid stackable columns={2} className="project-container">
                <Grid.Row>
                  <Grid.Column>
                    <Image
                      src={require("../projectimages/moodmusic.jpg")}
                      className="project-image"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <div>
                      <h3 className="project-name">Mood Music</h3>
                    </div>
                    <Divider />
                    <div className="card-description">
                      A responsive weather application that displays a Spotify
                      playlist based on the current weather conditions. Along
                      with the stack listed below, this app uses Redux Form, the
                      OpenWeatherMap API, and the Spotify Play Button.
                    </div>
                    <Divider />
                    <div>
                      <Grid>
                        <Grid.Row>
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={html5}
                              />
                            }
                            content="HTML-5"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={css}
                              />
                            }
                            content="CSS3"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={react}
                              />
                            }
                            content="React"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={redux}
                              />
                            }
                            content="Redux"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={semanticUI}
                              />
                            }
                            content="Semantic-UI"
                          />
                        </Grid.Row>
                      </Grid>
                    </div>
                    <Divider />
                    <div>
                      <a href="https://nifty-panini-aaae66.netlify.com/">
                        Live Site
                      </a>
                      <a href="https://github.com/basculante/weathermusic">
                        Github
                      </a>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid stackable columns={2} className="project-container">
                <Grid.Row>
                  <Grid.Column>
                    <Image
                      src={require("../projectimages/fourwallsofiron.jpg")}
                      className="project-image"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <div>
                      <h3 className="project-name">Four Walls of Iron</h3>
                    </div>
                    <Divider />
                    <div className="card-description">
                      A workout application that makes choosing your next
                      program easy. Pick your desired goal, enter in your maxes,
                      and this workout app will calculate the rest for you.
                    </div>
                    <Divider />
                    <div>
                      <Grid>
                        <Grid.Row>
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={html5}
                              />
                            }
                            content="HTML-5"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={css}
                              />
                            }
                            content="CSS3"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={react}
                              />
                            }
                            content="React"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={bootstrap}
                              />
                            }
                            content="Bootstrap"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={reactRouter}
                              />
                            }
                            content="React-Router"
                          />
                        </Grid.Row>
                      </Grid>
                    </div>
                    <Divider />
                    <div>
                      <a href="https://zealous-raman-42f39d.netlify.com">
                        Live Site
                      </a>
                      <a href="https://github.com/basculante/FourWallsOfIron">
                        Github
                      </a>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid stackable columns={2} className="project-container">
                <Grid.Row>
                  <Grid.Column>
                    <Image
                      src={require("../projectimages/meditation_timer.jpg")}
                      className="project-image"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <div>
                      <h3 className="project-name">Meditation Timer</h3>
                    </div>
                    <Divider />
                    <div className="card-description">
                      A simple meditation timer built using React to help with
                      your daily meditation sessions.
                    </div>
                    <Divider />
                    <div>
                      <Grid>
                        <Grid.Row>
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={html5}
                              />
                            }
                            content="HTML-5"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={css}
                              />
                            }
                            content="CSS3"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={react}
                              />
                            }
                            content="React"
                          />
                          <Popup
                            trigger={
                              <Image
                                style={{ height: "9vh", padding: "2vh" }}
                                src={bootstrap}
                              />
                            }
                            content="Bootstrap"
                          />
                        </Grid.Row>
                      </Grid>
                    </div>
                    <Divider />
                    <div>
                      <a href="https://jovial-booth-f689fb.netlify.com/">
                        Live Site
                      </a>
                      <a href="https://github.com/basculante/meditation-timer">
                        Github
                      </a>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Projects;
