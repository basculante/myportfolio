import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return (
		<div className="sidenav">
			<div className="ui padded column grid">
					<div className="row">
						<div className="icon"><a><i className="large home icon"></i></a>
						<div className="icon_description">Home</div>
					</div>	
				</div>
				<div className="row">
					<div className="icon">
						<a><i className="large user icon"></i></a>
						<div className="icon_description">About</div>
					</div>
				</div>	
				<div className="row">
					<div className="icon">
						<a><i className="large folder icon"></i></a>
						<div className="icon_description">My Projects</div>
					</div>
				</div>	
				<div className="row">
					<div className="icon">
						<a><i className="large envelope icon"></i></a>
						<div className="icon_description">Contact Me</div>
					</div>
				</div>
				<div className="row">
					<div className="icon">
						<a><i className="large github icon"></i></a>
						<div className="icon_description">My Github</div>
					</div>	
				</div>	
				<div className="row">
					<div className="icon">
						<a><i className="large linkedin icon"></i></a>
						<div className="icon_description">My LinkedIn</div>
					</div>
				</div>		
			</div>
		</div>
	);
}

export default Navigation;