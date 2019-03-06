import React from 'react';
import { Grid, Image, Dimmer, Header, Segment } from 'semantic-ui-react';


class MeditationTimer extends React.Component {
	state={}

	handleShow = () => this.setState({ active:true })
	handleHide = () => this.setState({ active: false })

	render(){
		const { active } = this.state
		return (
			<div>
				<Grid centered className="project_grids">
					<Grid.Row style={{margin: '150px'}}>
						<Grid.Column 
							width={5} 
							data-aos="fade-right"
						    data-aos-offset="200"
						    data-aos-delay="50"
						    data-aos-duration="1000"
						    data-aos-easing="ease-in-out"
						    data-aos-mirror="true"
						    data-aos-once="true"
						    data-aos-anchor-placement="top"
							>
							<p>This is my project.</p>
						</Grid.Column>
						<Grid.Column width={2}>
						</Grid.Column>
						<Grid.Column 
							width={9}
							data-aos="fade-left"
						    data-aos-offset="200"
						    data-aos-delay="50"
						    data-aos-duration="1000"
						    data-aos-easing="ease-in-out"
						    data-aos-mirror="true"
						    data-aos-once="true"
						    data-aos-anchor-placement="top"
							>
							<Dimmer.Dimmable as={Segment} blurring dimmed={active}>
								<Image src={require("../../projectimages/meditation_timer.png")} onMouseEnter={this.handleShow} />
								<Dimmer active={active} onMouseLeave={this.handleHide}>
									<p>A simple meditation timer for your daily meditation sessions.</p>
								</Dimmer>
							</Dimmer.Dimmable>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default MeditationTimer;