import React from "react";
import ImgFirst from "../../assets/YourBrandHere-Small.gif";
import ImgSecond from "../../assets/SpaceKaiju-Small.gif";
import ImgThird from "../../assets/GhostKaiju-Small.gif";
import ImgFourth from "../../assets/EvilKaiju-Small.gif";
import ImgFifth from "../../assets/MagiKaiju-Small.gif";
import Sixth from "../../assets/Sixth.gif";
import Eight from "../../assets/Eight.gif";
import Seventh from "../../assets/SushiChefKaiju-Small.gif";
import Nine from "../../assets/MechKaiju-Small.gif";
import Tenth from "../../assets/NeoChromeKaiju-Small.gif";
import NFTimg from "../../assets/d-a-nft.png";
import "./schedule.css";
const Schedule = () => {
	return (
		<section className="schedule" id="schedule">
			<h1>POST LAUNCH SCHEDULE</h1>
			<div className="container">
				<div className="schedule-wrap">
					<h1>PHASE 1</h1>
					<h1>Legendary Auction [Finished]</h1>
					<p>
						Feast your eyes on some of the rarest KaijuKingz in the collection:
						the Legendary Kaijuz. Only 10 of these mythical beasts exist, and
						they are all unique 1/1 special edition Kaijuz with animations
						exclusive to them. One Legendary Kaiju, the Mecha Kaiju, was
						exclusively auctioned off, only allowing holders of N0XSCAPE
						Founders Cards to participate in the auction. Another one of these
						special Legends was tucked away in the initial mint of KaijuKingz
						for one lucky degen to find. After all KaijuKingz were minted, the
						final 8 were auctioned off.
					</p>
					<div className="schedule-img-container">
						<div className="img-wrap">
							<img src={ImgFirst} alt="" />
						</div>
						<div className="img-wrap">
							<img src={ImgSecond} alt="" />
						</div>
						<div className="img-wrap">
							<img src={ImgThird} alt="" />
						</div>
						<div className="img-wrap">
							<img src={ImgFourth} alt="" />
						</div>
						<div className="img-wrap">
							<img src={ImgFifth} alt="" />
						</div>
						<div className="img-wrap">
							<img src={Sixth} alt="" />
						</div>
						<div className="img-wrap">
							<img src={Seventh} alt="" />
						</div>
						<div className="img-wrap">
							<img src={Eight} alt="" />
						</div>
						<div className="img-wrap">
							<img src={Nine} alt="" />
						</div>
						<div className="img-wrap">
							<img src={Tenth} alt="" />
						</div>
					</div>
					<p>
						The KaijuKingz community DAO will use the community vault to plan
						how Talent Grants will be utilized, who will be qualified to receive
						them, and how they will be scheduled. Aspiring creators can apply
						for grants that will give them the resources needed to execute their
						visions.
					</p>
				</div>
				<br />
				<br />
				<div className="schedule-wrap">
					<h1>DAO FORMATION</h1>
					<p>
						Feast your eyes on some of the rarest KaijuKingz in the collection:
						the Legendary Kaijuz. Only 10 of these mythical beasts exist, and
						they are all unique 1/1 special edition Kaijuz with animations
						exclusive to them. One Legendary Kaiju, the Mecha Kaiju, was
						exclusively auctioned off, only allowing holders of N0XSCAPE
						Founders Cards to participate in the auction. Another one of these
						special Legends was tucked away in the initial mint of KaijuKingz
						for one lucky degen to find. After all KaijuKingz were minted, the
						final 8 were auctioned off.
					</p>
					<br />
					<br />
					<p>
						The KaijuKingz DAO will help create a community focused on deciding
						the direction of KaijuKingz, the expansion of its ecosystem, and how
						to curate and strengthen the best of technical and creative talent
						to develop Web3 and NFTs. KaijuKingz sales will go into the
						community vault, which will be used to issue grants and scholarships
						to talented applicants within the community. Why go for a DAO
						structure? Because all Kingz deserve to have their voices heard.
						Each KaijuKing will bestow voting power upon their holders within
						the ecosystem, allowing for truly decentralized decision making.
					</p>
				</div>
				<br />
				<br />
				<div className="schedule-wrap font-color">
					<h1>COMMUNITY ADVOCATES</h1>
					<p>
						And just how will these newcomers make sure they’re getting the
						training they need to succeed? We believe in rewarding those who
						help create meaningful contributions to the community and have
						reserved a total of 20 special Senpai Kaijuz for those who wish to
						take on the crown as mentors that can volunteer their expertise in
						order to nurture the next generation of Kingz into greatness. Become
						a mentor and make KaijuKingz a portal for the next colossal talents
						to enter the space.
					</p>
					<div className="schedule-nftimg">
						<img src={NFTimg} alt="" />
					</div>
				</div>
				<div className="schedule-wrap">
					<h1>PHASE 2</h1>
					<p>
						The KaijuKingz break out of their 69x69 containers to become
						full-fledged Voxelized versions of themselves to traverse around the
						metaverse! With 3D models of VX Kaijuz, you’ll be able to use them
						as your own personal avatar in multiple metaverse spaces, starting
						with The SandBox.
					</p>
				</div>
				<br />
				<br />
				<div className="schedule-wrap">
					<h1>PHASE 3</h1>
					<p>
						The KaijuKingz DAO begins utilizing the community vault for grants
						that empower upcoming talent by assisting them with living expenses
						and training them to break their way into the world of Web3.
						Talented individuals are welcome to use their newly acquired skills
						to continue developing the KaijuKingz DAO, but aren’t required to.
						Regardless, Kingz will always help other Kingz into greatness!
					</p>
				</div>
				<br />
				<br />
				<div className="schedule-wrap">
					<h1>BEYOND</h1>
					<p>
						As the KaijuKingz DAO grows, so will the ideas of the Kingz within.
						The future of the project lies in the hands of its holders. New
						utility for $RWASTE for redemption of cosmetic upgrades, new drops
						for all holders, an e-sports team, project developments to expand
						the Kaiju empire - the possibilities are limitless! Grab your crown
						and sit down on your throne, it’s time to rule the world, Kingz!
					</p>
				</div>
				<br />
				<br />
			</div>
		</section>
	);
};

export default Schedule;
