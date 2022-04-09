import "./cardpushswap.css";

const summaryText =
	"PushSwap was a very straightforward algorithm project. We were given 2 stacks and a random integers, the objective was to sort them in the least moves possible folowing a set of rules.";

const CardPushSwap = () => {
	return (
		<div className="cps-card">
			<div className="cps-card-content">
				<h2 className="cps-title">Push Swap</h2>
				<p className="cps-content">{summaryText}</p>
				<a
					href="https://github.com/Duartebaeta/42_PushSwap"
					className="cps-button"
					target="_blank"
					rel="noreferrer"
				>
					Learn More
				</a>
			</div>
		</div>
	);
};

export default CardPushSwap;
