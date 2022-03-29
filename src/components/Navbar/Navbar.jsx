import "./navbar.css";

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="nav-home">
				<div className="nav-home-name" onClick={console.log("clicks")}>Duarte Baeta</div>
			</div>
			<div className="nav-paths">
				<div className="nav-paths-in">
					<div className="nav-about">About Me</div>
					<div className="nav-projects">Projects</div>
					<div className="nav-contact">Contact</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
