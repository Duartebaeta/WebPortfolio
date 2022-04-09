import { useState } from "react";
import "./about.css";
import Me from "../../img/Me.jpg";

const texts = {
	smallText:
		"Hi! My name is Duarte Baeta, I'm a programming student at 42 Lisboa. I'm very eager to learn new and interesting things.",

	mediumText:
		"Hi! My name is Duarte Baeta, I'm eighteen years old and I come from Sintra, Portugal. I'm currently studying programming at 42 Lisboa. Ever since I started to program my mind as been flooded with questions about so many different things, right now I'm on a journey to answear them!",

	bigText:
		"Hi! My name is Duarte Baeta. I first started programming in 2019 through Harvard's CS50x Introduction course and as soon as I started, I was hooked. Looking to learn new things and follow my passion I enroled in 42, an innovative project-based computer science program that taught me self-discipline and a well-rounded set of programming skills. I decided that the best step for me to take now would be to get out into the world and face real world challenges where I can truly experience what it is to be a programmer.",
};

const About = () => {
	const [txt, setTxt] = useState("mediumText");

	return (
		<div className="a-container" id="about">
			<div className="a-text-box">
				<div className="a-text-image">
					<div className="a-selector">
						<h1 className="a-title">About Me</h1>
						<h3 className="a-selector-title">
							How Much Would You Like To Know?
						</h3>
						<div className="a-selector-input">
							<div className="a-selector-shortest">
								<input
									type="radio"
									value="smallText"
									name="selector"
									id="selector-small"
									onClick={() =>
										setTxt(document.getElementById("selector-small").value)
									}
								/>
								<span className="a-selector-text">Shortest</span>
							</div>
							<input
								type="radio"
								value="mediumText"
								name="selector"
								id="selector-medium"
								onClick={() =>
									setTxt(document.getElementById("selector-medium").value)
								}
							/>
							<div className="a-selector-longest">
								<input
									type="radio"
									value="bigText"
									name="selector"
									id="selector-big"
									onClick={() =>
										setTxt(document.getElementById("selector-big").value)
									}
								/>
								<span className="a-selector-text">Longest</span>
							</div>
						</div>
						<div className="a-text">
							<p id="about-text">{texts[txt]}</p>
						</div>
					</div>
					<div className="a-image-container">
						<img src={Me} alt="" className="a-image" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
