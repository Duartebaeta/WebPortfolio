import React from "react";
import About from "./components/About/About";
import Intro from "./components/intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import "./app.css";
import Contact from "./components/Contact/Contact";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<div className="sections">
				<Intro />
				<About />
				<Projects />
				<Contact />
			</div>
		</div>
	);
};
export default App;
