import React, { useState } from "react";
import "./App.css";
import Presentation from "./components/Presentation/Presentation";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar";
import { useLanguage } from "./context/LanguageContext";
import { IntlProvider } from "react-intl";
import enMessages from "./lang/en-US.json";
import esMessages from "./lang/es.json";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { language } = useLanguage(); // segun este language seran los messages del IntlProvider
  let activeLang = enMessages;
  if (language === "es") {
    activeLang = esMessages;
  } else {
    activeLang = enMessages;
  }

  return (
    <IntlProvider locale={language} messages={activeLang}>
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
