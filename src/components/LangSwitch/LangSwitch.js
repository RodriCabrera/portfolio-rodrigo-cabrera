import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./LangSwitch.css";

const LangSwitch = () => {
	const { setLanguage, language } = useLanguage();
	const handleClickEn = () => {
		setLanguage("en");
	};
	const handleClickSp = () => {
		setLanguage("sp");
	};
	return (
		<>
			<div className="container">
				<div className="btn-container">
					<p
						onClick={handleClickEn}
						className={`btn ${language === "en" && "active"}`}
					>
						en
					</p>
				</div>
				<div className="btn-container">
					<p
						onClick={handleClickSp}
						className={`btn ${language === "sp" && "active"}`}
					>
						sp
					</p>
				</div>
			</div>
		</>
	);
};

export default LangSwitch;
