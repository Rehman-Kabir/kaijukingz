import React from "react";
import MainImage from "../../assets/KaijuKingz.png";
import ContentImage from "../../assets/KaijuKingz-content.png";

import "./content.css";
const Content = () => {
	return (
		<section className="content" id="content">
			<div className="container">
				<div className="content-main-image">
					<img src={MainImage} alt="Content main image" />
					<div className="mainimg-text">
						<p>
							3333 Genesis Kaijuz <span>|</span> 6666 Baby Kaijuz to be created
							<span>|</span> 0.06666 Mint Price
						</p>
					</div>
				</div>

				<div className="content-container">
					<div className="content-data">
						<h1>Genesis Kaijuz</h1>
						<p>
							The original Kingz. These were the first KaijuKingz to be minted,
							and the only ones capable of generating 5 $RWASTE a day. Currently
							$RWASTE can be used to name Kaijuz, write lore for Kaijuz, and
							even to create a Baby Kaiju by Fuzing the DNA from two Genesis
							Kaijuz. As the project and community develops, there will be even
							further utilization of $RWASTE, making Genesis Kaijuz the
							foundation for all things to come. All 3333 Genesis Kaijuz have
							been completely minted and there will never be any more created.
						</p>
					</div>
					<div className="content-data">
						<h1>Baby Kaijuz</h1>
						<p>
							Created from mutating the fuzed DNA of two Genesis Kaijuz. There
							is a maximum of 6,666 of these monsters to be created. Although
							Baby Kaijuz require DNA from two separate Genesis Kaijuz to be
							created, they do not inherit traits from them. Instead, Baby
							Kaijuz mutate traits of their own, and can even be born with belly
							and spike colors that are different from their body colors. More
							will be revealed about Baby Kaijuz as Augminted Labs continues
							studying them over time.
						</p>
					</div>
				</div>
				<div className="contentimg">
					<img src={ContentImage} alt="ContentImage" />
				</div>
				<div className="community-wrap">
					<h1>The KaijuKingz Community</h1>
					<p>
						• Will aim to mentor and onboard untapped talent into the Web3
						ecosystem, as well as potentially granting scholarships, making the
						KaijuKingz community a gateway for future Kingz to earn their own
						thrones. <br /> • Will provide funding for living
						expenses,equipment, and classes for developers and creatives to
						promote them down a path of greatness. <br /> • Will expand the
						KaijuKingz universe with additional features and updates, allowing
						it to continually grow in ways that the community values most.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Content;
