import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navigation.css';

class Navigation extends React.Component {
	render() {
		return(
			<ul className="block-menu">
				<li>
					<AnchorLink href='#intro' className="three-d">
					Home
						<span aria-hidden="true" className="three-d-box">
							<span className="front">Home</span>
							<span className="back">Home</span>
						</span>
					</AnchorLink>	
				</li>
				<li>
					<AnchorLink href='#about' offset='100' className="three-d">
					About
						<span aria-hidden="true" className="three-d-box">
							<span className="front">About</span>
							<span className="back">About</span>
						</span>
					</AnchorLink>	
				</li>
				<li>
					<AnchorLink href='#projects' offset='100' className="three-d">
					Projects
						<span aria-hidden="true" className="three-d-box">
							<span className="front">Projects</span>
							<span className="back">Projects</span>
						</span>
					</AnchorLink>	
				</li>
				<li>
					<AnchorLink href='#contact' offset='100' className="three-d">
					Contact
						<span aria-hidden="true" className="three-d-box">
							<span className="front">Contact</span>
							<span className="back">Contact</span>
						</span>
					</AnchorLink>	
				</li>
			</ul>
		);
	}
}

export default Navigation;

// <div className="sidenav">
// 			<div className="ui padded column grid">
// 					<div className="row">
// 						<div className="icon">
// 							<i className="large home icon" onClick={this.scrollToTop}></i>
// 						<div className="icon_description">Home</div>
// 					</div>	
// 				</div>
// 				<div className="row">
// 					<div className="icon">
// 						<span
// 							activeClass="active"
// 							to="abouts"
// 							spy={true}
// 							smooth={true}
// 							offset={-70}
// 							duration={500}>
// 								<i className="large user icon"></i>
// 								<div className="icon_description">About</div>
// 						</Link>
// 					</div>
// 				</div>	
// 				<div className="row">
// 					<div className="icon">
// 						<Link
// 							activeClass="active"
// 							to="projects"
// 							spy={true}
// 							smooth={true}
// 							offset={-70}
// 							duration={500}>
// 								<i className="large folder icon"></i>
// 								<div className="icon_description">Projects</div>
// 						</Link>
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="icon">
// 						<Link
// 							activeClass="active"
// 							to="skills"
// 							spy={true}
// 							smooth={true}
// 							offset={-70}
// 							duration={500}>
// 								<i className="large keyboard icon"></i>
// 								<div className="icon_description">Skills</div>
// 						</Link>
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="icon">
// 						<Link
// 							activeClass="active"
// 							to="resume"
// 							spy={true}
// 							smooth={true}
// 							offset={-70}
// 							duration={500}>
// 								<i className="large file icon"></i>
// 								<div className="icon_description">Resume</div>
// 						</Link>
// 					</div>
// 				</div>			
// 				<div className="row">
// 					<div className="icon">
// 						<Link
// 							activeClass="active"
// 							to="contact"
// 							spy={true}
// 							smooth={true}
// 							offset={-70}
// 							duration={500}>
// 								<i className="large envelope icon"></i>
// 								<div className="icon_description">Contact</div>
// 						</Link>
// 					</div>
// 				</div>
// 				<div className="row">
// 					<div className="icon">
// 						<a href="https://github.com/basculante"><i className="large github icon"></i></a>
// 						<div className="icon_description">My Github</div>
// 					</div>	
// 				</div>	
// 				<div className="row">
// 					<div className="icon">
// 						<a href="https://www.linkedin.com"><i className="large linkedin icon"></i></a>
// 						<div className="icon_description">My LinkedIn</div>
// 					</div>
// 				</div>		
// 			</div>
// 		</div>