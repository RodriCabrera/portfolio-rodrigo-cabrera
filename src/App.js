import React, { useState } from "react";
import "./App.css";
import Presentation from "./components/Presentation/Presentation";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Sidebar from "./components/Sidebar/Sidebar";
import { LanguageProvider } from "./context/LanguageContext";
import About from "./components/About/About";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<LanguageProvider>
			<Sidebar toggle={toggle} isOpen={isOpen} />
			<Navbar toggle={toggle} />
			<Presentation />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</LanguageProvider>
	);
}

export default App;
