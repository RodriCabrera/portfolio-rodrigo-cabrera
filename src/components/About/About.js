import React from "react";
import {
	AboutContainer,
	AboutHeader,
	AboutParagraph,
	AboutText,
	AboutTextSub,
	AboutInfo,
	AboutSkillsWrappaer,
	AboutImageWrapper,
	AboutImage,
} from "./About.elements";
import profilePic from "../../assets/profile-photo.jpg";

const About = () => {
	return (
		<AboutContainer id="about">
			<AboutInfo>
				<AboutHeader>About</AboutHeader>
				<AboutParagraph>
					<AboutText>
						I'm constantly looking to face new challenges and learn from the
						process.
					</AboutText>
					<AboutTextSub>
						&#x1F393; Finished Coderhouse's Frontend bootcamp and getting into
						backend development (Node JS).
					</AboutTextSub>
				</AboutParagraph>
				<AboutParagraph>
					<AboutText>
						Goal oriented and calm regardless of high pressure environments.
					</AboutText>
					<AboutTextSub>&#x1F9D8; I'm also a yoga instructor.</AboutTextSub>
				</AboutParagraph>
				<AboutParagraph>
					<AboutText>
						Detail-oriented, analytic and responsible. Curious by nature and
						emotionally intelligent team player.
					</AboutText>
					<AboutTextSub>
						&#128211;Halfway from finishing writing my psychology degree thesis.
					</AboutTextSub>
				</AboutParagraph>
				<AboutSkillsWrappaer></AboutSkillsWrappaer>
			</AboutInfo>
			<AboutImageWrapper>
				<AboutImage src={profilePic} />
			</AboutImageWrapper>
		</AboutContainer>
	);
};

export default About;
