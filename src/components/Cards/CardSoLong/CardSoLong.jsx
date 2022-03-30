import "./cardsolong.css";

const summaryText = "So Long was a very fun project, the objective was to make a small 2D top down game in C where you ran around collecting items to open a door";

const CardSoLong = () => {
	return (
		<div className="c-card">
			<div className="c-card-content">
				<h2 className="c-title">So Long</h2>
				<p className="c-content">{summaryText}</p>
				<a href="https://github.com/Duartebaeta/42_so_long" className="c-button">Learn More</a>
			</div>
		</div>
	);
};

export default CardSoLong;
