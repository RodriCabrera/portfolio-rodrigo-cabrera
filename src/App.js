import React, { useState } from "react";
import "./App.css";
import Presentation from "./components/Presentation/Presentation";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Navbar toggle={toggle} isOpen={isOpen} />
			<Sidebar toggle={toggle} isOpen={isOpen} />
			<Presentation />
			<About />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
