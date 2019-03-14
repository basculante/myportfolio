import React from 'react';
import { Grid, Image, Container, Icon } from 'semantic-ui-react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Intro.css';

const Intro = () => {
	return (
		<Container>
			<div className="page">
				<div className="intro">
					<Grid stackable columns={1}>
						<Grid.Column verticalAlign='middle'>
							<Grid.Row className="picture-column">
								<Image className="intro-picture" src={require("../projectimages/clear-photo.png")}
								centered/>
							</Grid.Row>
							<Grid.Row className="intro-text">
								<div>
									<p>Victor</p>
									<p>Web Developer/React/Redux</p>
								</div>
							</Grid.Row>
							<Grid.Row className="down arrow-2">
								<AnchorLink href="#about" offset='100'>
								<Icon name="angle double down" />
								</AnchorLink>
							</Grid.Row>
						</Grid.Column>
					</Grid>
				</div>
			</div>
		</Container>
	);
}

export default Intro;

