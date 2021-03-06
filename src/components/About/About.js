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
import { FormattedMessage } from "react-intl";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <Fade>
          <AboutHeader>
            <FormattedMessage id="about-header" />
          </AboutHeader>
        </Fade>
        <AboutInner>
          <AboutTextContainer>
            <AboutText>
              <FormattedMessage id="about-text1" />
            </AboutText>
            <AboutText>
              <FormattedMessage id="about-text2" />
            </AboutText>
            <AboutText>
              <FormattedMessage id="about-text3" />
            </AboutText>
            <AboutText>
              <FormattedMessage id="about-tech" />
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
            <Fade>
              <AboutImage src={photo} />
            </Fade>
          </AboutImageWrapper>
        </AboutInner>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
