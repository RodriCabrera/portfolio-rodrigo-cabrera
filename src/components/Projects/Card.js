import React from "react";
import {
  ProjectCard,
  CardInfo,
  CardBg,
  CardTitle,
  CardDesc,
  CardIcons,
  StyledLink,
  ExternalLink,
  GithubLink,
} from "./Projects.elements";

const Card = ({ bg, title, desc, deploy, github }) => {
  return (
    <ProjectCard>
      <CardBg src={bg} />
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>
        <CardIcons>
          <StyledLink href={deploy} target="_blank" rel="noreferrer">
            <ExternalLink />
          </StyledLink>
          <StyledLink href={github} target="_blank" rel="noreferrer">
            <GithubLink />
          </StyledLink>
        </CardIcons>
      </CardInfo>
    </ProjectCard>
  );
};

export default Card;
