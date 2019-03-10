import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import './Intro.css';

const Intro = () => {
	return (
		<div className="page">
			<div className="intro">
				<Container>
					<Grid stackable columns={1}>
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
					</Grid>
				</Container>
			</div>
		</div>
	);
}

export default Intro;

