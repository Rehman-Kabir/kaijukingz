import React from "react";
import Arrow from "../../assets/arrow.png";
import MainImage from "../../assets/KaijuKingz.png";
import "./hero.css";
const Hero = () => {
	return (
		<>
			<section className="hero">
				<div className="feature-content">
					<img src={MainImage} alt="main Image" />
					<p>
						Behold the KaijuKingz; larger than life pixel beasts tearing down a
						city near you. Our creed is to expand the Metaverse by supporting
						talented creatives and developers looking to break into NFTs.
						$RWASTE radiates in the core of our community, passively generated
						by Genesis Kaijuz as fuel for out Kaijuz. Demolish the old to make
						way for a new kind of community - a community of Kingz.
					</p>
					<a href="#" className="btn">
						Learn More
					</a>
					<img src={Arrow} alt="Arrow Icon" className="arrow" />
				</div>
			</section>
		</>
	);
};

export default Hero;
