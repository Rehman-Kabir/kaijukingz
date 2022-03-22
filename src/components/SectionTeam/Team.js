import React from "react";
import ProfileOne from "../../assets/dots.png";
import Twitter from "../../assets/Twitter Logo.svg";
import ProfileTwo from "../../assets/3lll.png";
import ProfileThree from "../../assets/madotsuki.png";
import ProfileFour from "../../assets/kekwin.png";
import ProfileFive from "../../assets/arzy.png";
import "./team.css";
const Team = () => {
	return (
		<section className="team" id="team">
			<h1>Kaiju Kingz Team</h1>
			<div className="container">
				<div className="team-member-wrap">
					<img src={ProfileOne} alt="Profile Image" />
					<div className="team-title">
						<h2>Dots</h2>
						<a href="#">
							<img src={Twitter} alt="Twitter Logo" />
						</a>
					</div>
					<p>Lead Developer</p>
				</div>
				<div className="team-member-wrap">
					<img src={ProfileTwo} alt="Profile Image" />
					<div className="team-title">
						<h2>3LLL</h2>
						<a href="#">
							<img src={Twitter} alt="Twitter Logo" />
						</a>
					</div>
					<p>Artist</p>
				</div>
				<div className="team-member-wrap">
					<img src={ProfileThree} alt="Profile Image" />
					<div className="team-title">
						<h2>Madotsuki</h2>
						<a href="#">
							<img src={Twitter} alt="Twitter Logo" />
						</a>
					</div>
					<p>Community Manager</p>
				</div>
				<div className="team-member-wrap">
					<img src={ProfileFour} alt="Profile Image" />
					<div className="team-title">
						<h2>KEKWIN</h2>
						<a href="#">
							<img src={Twitter} alt="Twitter Logo" />
						</a>
					</div>
					<p>Developer</p>
				</div>
				<div className="team-member-wrap">
					<img src={ProfileFive} alt="Profile Image" />
					<div className="team-title">
						<h2>arzy</h2>
						<a href="#">
							<img src={Twitter} alt="Twitter Logo" />
						</a>
					</div>
					<p>Developer</p>
				</div>
			</div>
		</section>
	);
};

export default Team;
