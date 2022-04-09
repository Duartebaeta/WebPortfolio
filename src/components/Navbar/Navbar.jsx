import "./navbar.css";

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="nav-home">
				<a href="#intro" className="nav-home-name">
					Duarte Baeta
				</a>
			</div>
			<div className="nav-paths">
				<div className="nav-paths-in">
					<a href="#about" className="nav-about">
						About Me
					</a>
					<a href="#projects" className="nav-projects">
						Projects
					</a>
					<a href="#contacts" className="nav-contact">
						Contacts
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
