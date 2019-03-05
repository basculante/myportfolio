import React from 'react';
import "./Projects.css";

const Projects = () => {
	return (
		<div className="projects parallax">
			<h1 className="section title">Projects</h1>
			<div className="ui four column padded grid centered">
				<div className="row" style={{margin:"70px"}}>
					<div className="column project description">
						<p>This is my project.</p>
					</div>
					<div className="column"></div>
					<div className="column">
						<div className="ui card">
							<div className="image">
								<img src="http://static.boxrec.com/thumb/f/f6/SRL105222258.jpg/200px-SRL105222258.jpg" alt=""/>
							</div>
							<div className="content">
								<div className="header">
									Meditation Timer
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row"  style={{margin:"70px"}}>
					<div className="column">
						<div className="ui card">
							<div className="image">
								<img src="http://static.boxrec.com/thumb/f/f6/SRL105222258.jpg/200px-SRL105222258.jpg" alt=""/>
							</div>
							<div className="content">
								<div className="header">
									Meditation Timer
								</div>
							</div>
						</div>
					</div>
					<div className="column"></div>
					<div className="column project description">
						<p>This is my project.</p>
					</div>
				</div>
				<div className="row"  style={{margin:"70px"}}>
					<div className="column project description">
						<p>This is my project.</p>
					</div>
					<div className="column"></div>
					<div className="floated column">
						<div className="ui card">
							<div className="image">
								<img src="http://static.boxrec.com/thumb/f/f6/SRL105222258.jpg/200px-SRL105222258.jpg" alt=""/>
							</div>
							<div className="content">
								<div className="header">
									Meditation Timer
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row"  style={{margin:"70px"}}>
					<div className="column">
						<div className="ui card">
							<div className="image">
								<img src="http://static.boxrec.com/thumb/f/f6/SRL105222258.jpg/200px-SRL105222258.jpg" alt=""/>
							</div>
							<div className="content">
								<div className="header">
									Meditation Timer
								</div>
							</div>
						</div>
					</div>
					<div className="column"></div>
					<div className="column project description">
						<p>This is my project.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;