import "./about.css";

const smallText = "Hi! My name is Duarte Baeta, I'm a programming student at 42 Lisboa. I'm very eager to learn new and interesting things.";

const mediumText = "Hi! My name is Duarte Baeta, I'm eighteen years old and I'm currently studying programming at 42 Lisboa. Ever since I started to learn to program my mind as been flooded with questions about so many different things, right now I'm on a journey to answear them!";

const bigText = "Hi! My name is Duarte Baeta. I first started programming 3 years ago through Harvard's CS50x Introduction course and right has I started, I was hooked. Looking to learn new things and follow my passion I enroled in 42, an innovative project-based computer science program that taught me self-discipline and a well-rounded set of programming skills. I decided that the best step for me to take now would be to get out into the world and face real world challenges where I can truly experience what it is to be a programmer.";

const About = () => {
	return (
		<div className="a-container">
			<div className="a-text-box">
				<div className="a-title">About Me</div>
				<div className="a-selector">
					<div className="a-selector-title">How Much Would You Like To Know?</div>
					<div className="a-selector-input">
						<div className="a-selector-shortest">
							<input type="radio" value="small" name="selector"/>
							<span>Shortest</span>
						</div>
						<input type="radio" value="medium" name="selector"/>
						<div className="a-selector-longest">
							<input type="radio" value="big" name="selector"/>
							<span>Longest</span>
						</div>
					</div>
				</div>
				<div className="a-text">
					<p id="about-text">{mediumText}</p>
				</div>
				<div className="a-others">
					<div className="a-skills"></div>
					<div className="a-hobbies"></div>
				</div>
			</div>
		</div>
	);
};

export default About;
