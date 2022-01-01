import React, { useState } from "react";
import "./App.css";
import Presentation from "./components/Presentation/Presentation";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { IntlProvider } from "react-intl";
import enMessages from "./lang/en-US.json";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { language } = useLanguage();
  console.log(language);
  return (
    <IntlProvider locale="en" messages={enMessages}>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Presentation />
      <About />
      <Projects />
      <Contact />
    </IntlProvider>
  );
}

export default App;
