import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Container, Segment, Icon } from 'semantic-ui-react';
import './Intro.css';

const Intro = () => {
	return (
		<div className="intro">
			<Container>
				<Grid stackable columns={2}>
					<Grid.Column verticalAlign='middle'>
					<Grid.Row className="picture-column">
						<Image className="intro-picture" src="https://cimg.tvgcdn.net/i/2014/03/22/05783684-3681-4645-9e00-4b1acb4d40ce/c1ee9944800552b3b19e4dbf18dd9a7b/140321-the-boondocks1.jpg"
						circular centered/>
					</Grid.Row>
					<Grid.Row className="intro-text">
						<div>
							<p>My name is Victor.</p>
							<p>I am a React developer.</p>
						</div>
					</Grid.Row>
					</Grid.Column>
					<Grid.Column className="button-align" verticalAlign='middle'>
							<Link to="/about" className="button"><Icon className="arrow" name='angle double right'/></Link>
					</Grid.Column>
				</Grid>
			</Container>
		</div>
	);
}

export default Intro;

