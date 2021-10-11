import React, { useEffect, useState } from "react";
import {
	AboutContainer,
	AboutHeader,
	AboutTextContainer,
	AboutText,
	AboutInner,
	AboutSkillsWrappaer,
	AboutImageWrapper,
	AboutImage,
	SkillsList,
	Skill,
} from "./About.elements";
import photo from "../../assets/photo.png";
import useData from "../../hooks/useData";

const About = () => {
	const data = useData("about");
	const [aboutData, setAboutData] = useState("");
	useEffect(() => {
		setAboutData(data);
	}, [data]);
	return (
		<AboutContainer id="about">
			<AboutHeader>{aboutData.header}</AboutHeader>
			<AboutInner>
				<AboutTextContainer>
					<AboutText>{aboutData.hi}</AboutText>
					<AboutText>{aboutData.psico}</AboutText>
					<AboutText>{aboutData.desc}</AboutText>
					<AboutText>{aboutData.stack} </AboutText>
					<SkillsList>
						<Skill>React JS</Skill>
						<Skill>Styled Components</Skill>
						<Skill>CSS</Skill>
						<Skill>Git</Skill>
						<Skill>Firebase</Skill>
					</SkillsList>
				</AboutTextContainer>
				<AboutImageWrapper>
					<AboutImage src={photo} />
				</AboutImageWrapper>
			</AboutInner>
			<AboutSkillsWrappaer></AboutSkillsWrappaer>
		</AboutContainer>
	);
};

export default About;
