import * as React from "react";

const LanguageContext = React.createContext([]);
LanguageContext.displayName = "LanguageContext";

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = React.useState("en");

	const value = { language, setLanguage };

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = React.useContext(LanguageContext);
	if (!context) {
		throw new Error(
			"useLanguage debe usarse desde adentro de un LanguageProvider"
		);
	}
	return context;
};
