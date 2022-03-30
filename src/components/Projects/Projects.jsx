import CardPushSwap from "../Cards/CardPushSwap/CardPushSwap";
import CardSoLong from "../Cards/CardSoLong/CardSoLong";
import CardWebPortfolio from "../Cards/CardWebPortolio/CardWebPortfolio";
import "./projects.css";

const Projects = () => {
	return (
		<div className="p-container">
			<h1 className="p-title">Projects</h1>
			<div className="p-card-container">
				<CardSoLong />
				<CardPushSwap />
				<CardWebPortfolio />
			</div>
			<div className="p-skills-container"></div>
		</div>
	);
};

export default Projects;
