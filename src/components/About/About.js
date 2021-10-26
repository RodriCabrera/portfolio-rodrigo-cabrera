import React from "react";
import {
	AboutContainer,
	AboutHeader,
	AboutTextContainer,
	AboutText,
	AboutInner,
	AboutImageWrapper,
	AboutImage,
	SkillsList,
	Skill,
	AboutWrapper,
} from "./About.elements";
import photo from "../../assets/photo.png";
const About = () => {
	return (
		<AboutContainer id="about">
			<AboutWrapper>
				<AboutHeader>About me</AboutHeader>
				<AboutInner>
					<AboutTextContainer>
						<AboutText>
							Hello! I'm glad you're here! My name is Rodrigo, I'm a freelance
							frontend developer based in Buenos Aires. I finished Coderhouse's
							Frontend bootcamp and I'm currently studying backend development
							(Node JS).
						</AboutText>
						<AboutText>
							Apart from coding, I'm a yoga instructor and I'm halfway from
							finishing my psychology degree thesis about meditation and gestalt
							therapy.
						</AboutText>
						<AboutText>
							I'm currently looking to face new challenges and learn from the
							process. I'm goal oriented and a calm person regardless of high
							pressure environments.
						</AboutText>
						<AboutText>
							These are the main thechnologies I'm working with:
						</AboutText>
						<SkillsList>
							<Skill>React JS</Skill>
							<Skill>Styled Components</Skill>
							<Skill>CSS / SASS</Skill>
							<Skill>Javascript</Skill>
							<Skill>Typescript</Skill>
							<Skill>Git</Skill>
							<Skill>Firebase</Skill>
						</SkillsList>
					</AboutTextContainer>
					<AboutImageWrapper>
						<AboutImage src={photo} />
					</AboutImageWrapper>
				</AboutInner>
			</AboutWrapper>
		</AboutContainer>
	);
};

export default About;
