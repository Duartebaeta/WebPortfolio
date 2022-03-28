import { useState } from "react";
import "./about.css";

const texts = {
	'smallText': "Hi! My name is Duarte Baeta, I'm a programming student at 42 Lisboa. I'm very eager to learn new and interesting things.",

	'mediumText': "Hi! My name is Duarte Baeta, I'm eighteen years old and I come from Sintra, Portugal. I'm currently studying programming at 42 Lisboa. Ever since I started to program my mind as been flooded with questions about so many different things, right now I'm on a journey to answear them!",

	'bigText': "Hi! My name is Duarte Baeta. I first started programming in 2019 through Harvard's CS50x Introduction course and as soon as I started, I was hooked. Looking to learn new things and follow my passion I enroled in 42, an innovative project-based computer science program that taught me self-discipline and a well-rounded set of programming skills. I decided that the best step for me to take now would be to get out into the world and face real world challenges where I can truly experience what it is to be a programmer."
}

const aoiText = "Having lived most of my life in Sintra my favorite place is the beach. Wether I'm surfing or listening to an audiobook the beach is where I am most at home. One of my other great passions is volleyball, ";

const About = () => {
	const [txt, setTxt] = useState('mediumText');

	return (
		<div className="a-container">
			<div className="a-text-box">
				<h1 className="a-title">About Me</h1>
				<div className="a-selector">
					<h3 className="a-selector-title">How Much Would You Like To Know?</h3>
					<div className="a-selector-input">
						<div className="a-selector-shortest">
							<input type="radio" value='smallText' name="selector" id="selector-small" onClick={() => setTxt(document.getElementById("selector-small").value)}/>
							<span className="a-selector-text">Shortest</span>
						</div>
						<input type="radio" value='mediumText' name="selector" id="selector-medium" onClick={() => setTxt(document.getElementById("selector-medium").value)}/>
						<div className="a-selector-longest">
							<input type="radio" value='bigText' name="selector" id="selector-big" onClick={() => setTxt(document.getElementById("selector-big").value)}/>
							<span className="a-selector-text">Longest</span>
						</div>
					</div>
				</div>
				<div className="a-text">
					<p id="about-text">{texts[txt]}</p>
				</div>
				<div className="a-others">
					<div className="a-skills">
						<h3 className="a-skills-title">Skills</h3>
						<div className="a-skills-comfortable">
							<h4 className="a-skills-little-title">Technologies I'm confortable with:</h4>
							<div className="a-skills-comfortable-logos">
								<img className="lang-logo" alt="C language logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"/>
								<img className="lang-logo" alt="html5 logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
								<img className="lang-logo" alt="css logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
								<img className="lang-logo" alt="JavaScript logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
							</div>
						</div>
						<div className="a-skills-experimenting">
							<h4 className="a-skills-little-title">Other technologies I've started experimenting with:</h4>
							<div className="a-skills-experimenting-logos">
								<img className="lang-logo" alt="react logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
								<img className="lang-logo" alt="C++ logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
								<img className="lang-logo" alt="python logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
							</div>
						</div>
					</div>
					<div className="a-aoi">
						<h3 className="a-skills-title">Areas Of Interest</h3>
						<h3 className="a-aoi-text">{aoiText}</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
