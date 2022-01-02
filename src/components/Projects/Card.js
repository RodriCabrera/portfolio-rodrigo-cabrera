import React from "react";
import { FormattedMessage } from "react-intl";
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
        <CardTitle>
          <FormattedMessage id={title} />
        </CardTitle>
        <CardDesc>
          <FormattedMessage id={desc} />
        </CardDesc>
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
