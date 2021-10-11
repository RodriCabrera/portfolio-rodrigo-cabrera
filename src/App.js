import React, { useState } from "react";
import "./App.css";
import Presentation from "./components/Presentation/Presentation";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { LanguageProvider } from "./context/LanguageContext";
import About from "./components/About/About";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<LanguageProvider>
			<Navbar toggle={toggle} isOpen={isOpen} />
			<Presentation />
			<About />
			<Projects />
			<Contact />
		</LanguageProvider>
	);
}

export default App;
