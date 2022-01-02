import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./LangSwitch.css";

const LangSwitch = () => {
  const { setLanguage, language } = useLanguage();
  const handleSwitch = () => {
    language === "en" ? setLanguage("es") : setLanguage("en");
  };
  return (
    <>
      <div className="container" onClick={handleSwitch}>
        <div className="btn-container">
          <p className={`btn ${language === "en" && "active"}`}>en</p>
        </div>
        <span>/</span>
        <div className="btn-container">
          <p className={`btn ${language === "es" && "active"}`}>sp</p>
        </div>
      </div>
    </>
  );
};

export default LangSwitch;
