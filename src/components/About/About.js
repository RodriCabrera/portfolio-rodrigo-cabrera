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
              Hello! I'm glad you're here! My name is Rodrigo, I'm a frontend
              developer based in Buenos Aires. I finished Coderhouse's Frontend
              bootcamp and I'm currently studying mobile development (React
              Native).
            </AboutText>
            <AboutText>Apart from coding, I'm a psychologist.</AboutText>
            <AboutText>
              I'm currently a React Developer at LoopStudio (from Uruguay).
            </AboutText>
            <AboutText>
              These are the main thechnologies I'm working with:
            </AboutText>
            <SkillsList>
              <Skill>React JS</Skill>
              <Skill>Javascript</Skill>
              <Skill>Redux</Skill>
              <Skill>Typescript</Skill>
              <Skill>Styled Components</Skill>
              <Skill>Bootstrap</Skill>
              <Skill>HTML5</Skill>
              <Skill>CSS / SASS</Skill>
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
