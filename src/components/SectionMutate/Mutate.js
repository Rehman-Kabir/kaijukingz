import React from "react";
import TextBoxAnimation from "../../assets/TextBoxAnimation.gif";
import MutateBtn from "../../assets/mutate.png";
import "./mutate.css";
const Mutate = () => {
	return (
		<>
			<div className="mint-main">
				<div className="mint-img">
					<img src={TextBoxAnimation} alt="TextBoxAnimation GIF" />
				</div>
				<div className="mutate-btn">
					<a href="#">
						<img src={MutateBtn} alt="MutateBtn" />
					</a>
				</div>
			</div>
		</>
	);
};

export default Mutate;
