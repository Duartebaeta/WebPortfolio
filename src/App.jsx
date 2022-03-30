import About from "./components/About/About";
import Intro from "./components/intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

const App = () => {
	return (
		<div>
			<Navbar />
			<Intro />
			<About />
			<Projects />
		</div>
	);
};

export default App;
