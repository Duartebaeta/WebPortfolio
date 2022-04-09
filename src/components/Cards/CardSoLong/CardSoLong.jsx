import "./cardsolong.css";

const summaryText =
	"So Long was a very fun project, the objective was to make a small 2D top down game in C, using a school provided library, where you ran around collecting items and avoiding enemies to open a door";

const CardSoLong = () => {
	return (
		<div className="csl-card">
			<div className="csl-card-content">
				<h2 className="csl-title">So Long</h2>
				<p className="csl-content">{summaryText}</p>
				<a
					href="https://github.com/Duartebaeta/42_so_long"
					className="csl-button"
					target="_blank"
					rel="noreferrer"
				>
					Learn More
				</a>
			</div>
		</div>
	);
};

export default CardSoLong;
