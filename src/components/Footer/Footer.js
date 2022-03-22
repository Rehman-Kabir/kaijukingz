import React from "react";
import Discord from "../../assets/Discord Logo.svg";
import Twitter from "../../assets/Twitter Logo.svg";
import Opensea from "../../assets/opensea.svg";
import MainImage from "../../assets/KaijuKingz.png";
import "./footer.css";
const Footer = () => {
	return (
		<footer>
			<div className="footer-team-container">
				<div className="footer-team-wrap">
					<h1>Join Our Community</h1>
					<p>
						The KaijuKingz creed is to create, protect, and rule together. We
						aim to help in the development of Web3 and other creatives, focusing
						on the NFT ecosystem in particular. We hope to deliver life changing
						scholarships and development grants through our KaijuKingz DAO;
						created first and foremost by and for the KaijuKingz community to
						enrich the Web3 and creative landscape. See how you can help, or
						even participate as a scholarship applicant
					</p>
					<a href="#" className="btn">
						Join our Discord
					</a>
				</div>
			</div>
			<div className="container">
				<div className="footer-social-links">
					<ul>
						<li>
							<a href="/">
								<img src={Discord} alt="Discord Icon" />
							</a>
						</li>
						<li>
							<a href="/">
								<img src={Twitter} alt="Twitter Icon" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src={Opensea} alt="Opensea Icon" />
							</a>
						</li>
					</ul>
					<div className="footer-mainImg">
						<img src={MainImage} alt="main Image" />
					</div>
					<p>3333 Unique Kaijuz and 6666 Unique Baby Kaijuz Who Need A Home.</p>
					<br />
					<p>© 2021 KAIJUKINGZ ALL RIGHTS RESERVED.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
