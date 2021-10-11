import React from "react";
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

const About = () => {
	return (
		<AboutContainer id="about">
			<AboutHeader>About me</AboutHeader>
			<AboutInner>
				<AboutTextContainer>
					<AboutText>
						Hello! I'm glad you're here! My name is Rodrigo, I'm a freelance
						frontend developer based in Buenos Aires. I finished Coderhouse's
						Frontend bootcamp and I'm currently studying backend development
						(Node JS) and QA Testing.
					</AboutText>
					<AboutText>
						Apart from coding, I'm a yoga instructor and I'm halfway from
						finishing my psychology degree thesis about meditation and gestalt
						therapy.
					</AboutText>
					<AboutText>
						I'm currently looking to face new challenges and learn from the
						process. I'm goal oriented and a calm person regardless of high
						pressure environments. Curious by nature and emotionally intelligent
						team player.
					</AboutText>
					<AboutText>
						These are the main thechnologies I'm working with:
					</AboutText>
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
