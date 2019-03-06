import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Intro.css';

const Intro = () => {
	AOS.init()
	return (
		<div className="ui parallax about">
			<div className="ui padded grid centered" style={{padding:'100px'}}>
				<div className="column five wide">
					<p>Hi I'm Victor.</p>
					<p>I am a front-end web developer.</p>
				</div>
				<div className="column three wide"></div>
				<div className="column five wide">
					<img 
						className="ui medium circular image" 
						src="https://cdn.shopify.com/s/files/1/0219/2362/products/8a2c459df2d19633fb04b8a9de377f65_1024x1024.jpg?v=1521072072"
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
			</div>
		</div>
	);
}

export default Intro;