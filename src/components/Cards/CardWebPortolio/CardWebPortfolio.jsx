import "./cardwebportfolio.css";

const summaryText =
	"Making my own webportfolio in react from scratch was something I've always wanted to do. I had no previous experience in react or in frontend devlopment but I'm very proud of what I was able to do.";

const CardWebPortfolio = () => {
	return (
		<div className="cwp-card">
			<div className="cwp-card-content">
				<h2 className="cwp-title">Web-Portfolio</h2>
				<p className="cwp-content">{summaryText}</p>
				<a
					href="https://github.com/Duartebaeta/WebPortfolio"
					className="cwp-button"
					target="_blank"
					rel="noreferrer"
				>
					Learn More
				</a>
			</div>
		</div>
	);
};

export default CardWebPortfolio;
