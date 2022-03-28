import About from "./components/About/About";
import Intro from "./components/intro/Intro";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
	return (
		<div>
			<Navbar />
			<Intro />
			<About />
		</div>
	);
};

export default App;
