import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
	AOS.init()
	return (
		<div className="ui segment parallax about">
			<div className="ui padded grid centered">
				<div className="column five wide">
					<p>My name is Victor [Wan-Teak] Joh. I am a front-end web developer.</p>
				</div>
				<div className="column three wide"></div>
				<div className="column five wide">
					<img 
						className="ui medium circular image" 
						src="https://www.biography.com/.image/t_share/MTE4MDAzNDEwOTU0OTEzMjk0/roberto-duran-v-ken-buchanan.jpg"
						alt="myPicture"
						data-aos="fade-up"
					    data-aos-offset="200"
					    data-aos-delay="50"
					    data-aos-duration="1000"
					    data-aos-easing="ease-in-out"
					    data-aos-mirror="true"
					    data-aos-once="false"
					    data-aos-anchor-placement="top"
						/>
				</div>
				<div className="ui vertical divider"></div>
			</div>
		</div>
	);
}

export default About;