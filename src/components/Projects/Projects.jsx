import CardPushSwap from "../Cards/CardPushSwap/CardPushSwap";
import CardSoLong from "../Cards/CardSoLong/CardSoLong";
import CardWebPortfolio from "../Cards/CardWebPortolio/CardWebPortfolio";
import "./projects.css";

const Projects = () => {
	return (
		<div className="p-container" id="projects">
			<div className="p-cards">
				<h1 className="p-title">Projects</h1>
				<h3 className="p-small-description">Some projects I'm proud of</h3>
				<div className="p-card-container">
					<CardPushSwap></CardPushSwap>
					<CardSoLong></CardSoLong>
					<CardWebPortfolio></CardWebPortfolio>
				</div>
			</div>
			<div className="p-github">
				<a
					href="https://github.com/Duartebaeta"
					target="_blank"
					rel="noreferrer"
					className="p-link"
				>
					To see more of my projects
				</a>
			</div>
		</div>
	);
};

export default Projects;
