import React from 'react';
import { Grid, Image } from 'semantic-ui-react';


class Fourwallsofiron extends React.Component {
	render(){
		return (
			<div className="project-1">
				<Grid stackable centered className="project_grids" columns={2}>
					<Grid.Row className="project_row">
						<Grid.Column 
							data-aos="fade-right"
						    data-aos-offset="200"
						    data-aos-delay="50"
						    data-aos-duration="1000"
						    data-aos-easing="ease-in-out"
						    data-aos-mirror="true"
						    data-aos-once="true"
						    data-aos-anchor-placement="top"
							>
							<Image src={require("../../projectimages/fourwallsofiron.png")} className="project-image" size="huge"/>
						</Grid.Column>
						<Grid.Column 
							data-aos="fade-left"
						    data-aos-offset="200"
						    data-aos-delay="50"
						    data-aos-duration="1000"
						    data-aos-easing="ease-in-out"
						    data-aos-mirror="true"
						    data-aos-once="true"
						    data-aos-anchor-placement="top"
						    className="project-info"
						    textAlign='center'
							>
							<h1>Four Walls of Iron</h1>
							<p>This is my project.</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default Fourwallsofiron;