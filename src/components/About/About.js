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
						Hello! My name es Rodrigo, I'm from Buenos Aires and I'm glad you're
						here! I finished Coderhouse's Frontend bootcamp and I'm currently
						studying backend development (Node JS) and QA Testing.
					</AboutText>
					<AboutText>
						I'm also a yoga instructor and I'm halfway from finishing writing my
						psychology degree thesis about meditation and gestalt therapy.
					</AboutText>
					<AboutText>
						To briefly describe myself I'd say that I'm constantly looking to
						face new challenges and learn from the process. I'm goal oriented
						and a calm person regardless of high pressure environments.
						Detail-oriented, analytic and responsible. Curious by nature and
						emotionally intelligent team player.
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
