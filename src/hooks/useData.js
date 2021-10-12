import * as React from "react";
import { useLanguage } from "../context/LanguageContext";
import { data } from "../data/data";

const useData = (section) => {
	const [contents, setContents] = React.useState({});
	const { language } = useLanguage();
	React.useEffect(() => {
		setContents(data[section].lang[language]);
	}, [language, section]);

	return contents;
};
export default useData;
