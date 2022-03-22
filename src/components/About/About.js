import React from "react";
import AboutContentImg from "../../assets/AboutContentImg.png";
import kaijuKingzCircle from "../../assets/kaijuKingzCircle.png";
import "./about.css";
const About = () => {
	return (
		<section className="about" id="about">
			<div className="container">
				<div className="about-content">
					<div className="about-content-img">
						<img src={AboutContentImg} alt="About Kaijukings Image" />
					</div>
					<div className="about-text">
						<p>
							KaijuKingz was spawned from the mind of CyberKongz holder and
							community member, OhDots, under his newly founded company:
							Augminted Labs. KaijuKingz hopes to expand its community with
							synergistic mechanics that foster competition and collaboration
							between Web3 communities. The collection will start with a mint of
							3,333 Genesis Kaijuz, each granting its holder access to special
							perks and accesses. Genesis Kaijuz passively generate Radioactive
							Waste, which can be used to create Baby Kaijuz. Standing larger
							than life in a 69x69 pixel square, Kaijuz will have a wide variety
							of traits, types, and different aesthetics. Holding a Genesis
							Kaiju will reserve you a throne as a King of the Metaverse.
						</p>
					</div>
				</div>
				<div className="about-img">
					<img src={kaijuKingzCircle} alt="About Image" />
				</div>
			</div>
		</section>
	);
};

export default About;
