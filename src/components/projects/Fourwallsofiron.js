import React from 'react';
import { Grid, Image, Dimmer, Header, Segment } from 'semantic-ui-react';


class Fourwallsofiron extends React.Component {
	state={}

	handleShow = () => this.setState({ active:true })
	handleHide = () => this.setState({ active: false })

	render(){
		const { active } = this.state
		return (
			<div>
				<Grid centered className="project_grids">
					<Grid.Row style={{margin: '4vh'}}>
						<Grid.Column 
							width={9}
							data-aos="fade-right"
						    data-aos-offset="200"
						    data-aos-delay="50"
						    data-aos-duration="1000"
						    data-aos-easing="ease-in-out"
						    data-aos-mirror="true"
						    data-aos-once="true"
						    data-aos-anchor-placement="top"
							>
							<a href="https://fourwallsofiron.herokuapp.com">
							<Dimmer.Dimmable as={Segment} blurring dimmed={active}>
								<Image src={require("../../projectimages/fourwallsofiron.png")} onMouseEnter={this.handleShow} />
								<Dimmer active={active} onMouseLeave={this.handleHide}>
									<p>A workout app that allows you to choose and customize a program based on your needs.</p>
								</Dimmer>
							</Dimmer.Dimmable>
							</a>
						</Grid.Column>
						<Grid.Column width={2}>
						</Grid.Column>
						<Grid.Column 
							width={5} 
							data-aos="fade-left"
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
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default Fourwallsofiron;