import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import Discord from "../../assets/Discord Logo.svg";
import Twitter from "../../assets/Twitter Logo.svg";
import Opensea from "../../assets/opensea.svg";

import "./header.css";
const Header = () => {
	const [navActive, isnavActive] = useState(false);
	useEffect(() => {
		let url = window.location.href.split("/");
		let target = url[url.length - 1].toLowerCase();
		let element = document.getElementById(target);
		element && element.scrollIntoView({ behavior: "smooth", block: "start" });
	}, []);
	return (
		<header id="Home">
			<div className="container">
				<div className="logo">
					<a href="#">
						<img src={Logo} alt="Site Logo" loading="lazy" />
					</a>
				</div>
				<div className={navActive ? "menus nav-active" : "menus"}>
					<ul className="navigation">
						<li>
							<a
								href="/"
								onClick={(e) => {
									let mint = document.getElementById("mint");
									e.preventDefault();
									mint &&
										mint.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									window.history.pushState("mint", "mint", "/");
								}}
							>
								MINT
							</a>
						</li>
						<li>
							<a
								href="/"
								onClick={(e) => {
									let about = document.getElementById("about");
									e.preventDefault();
									about &&
										about.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									window.history.pushState("about", "about", "/");
								}}
							>
								ABOUT
							</a>
						</li>
						<li>
							<a
								href="/"
								onClick={(e) => {
									let team = document.getElementById("team");
									e.preventDefault();
									team &&
										team.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									window.history.pushState("team", "team", "/");
								}}
							>
								TEAM
							</a>
						</li>
						<li>
							<a
								href="/"
								onClick={(e) => {
									let rwaste = document.getElementById("rwaste");
									e.preventDefault();
									rwaste &&
										rwaste.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									window.history.pushState("rwaste", "rwaste", "/");
								}}
							>
								RWASTE
							</a>
						</li>
						<li className="lg-screen-hidden">
							<a href="/" className="btn ">
								CONNECT
							</a>
						</li>
					</ul>
				</div>
				<div className="header-cta">
					<div className="header-socials">
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
					</div>
					<div className="header-btn">
						<a href="#" className="btn">
							CONNECT
						</a>
					</div>
					<div
						className="hamburger"
						onClick={() => isnavActive(!navActive)}
					>
						<div className="line1"></div>
						<div className="line2"></div>
						<div className="line3"></div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
