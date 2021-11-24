import React from "react";
import {
	ProjectCard,
	CardInfo,
	CardBg,
	CardTitle,
	CardDesc,
	CardIcons,
	StyledLink,
	VercelLink,
	GithubLink,
} from "./Projects.elements";

const Card = ({ bg, title, desc, vercel, github }) => {
	return (
		<ProjectCard>
			<CardBg src={bg} />
			<CardInfo>
				<CardTitle>{title}</CardTitle>
				<CardDesc>{desc}</CardDesc>
				<CardIcons>
					<StyledLink href={vercel} target="_blank" rel="noreferrer">
						<VercelLink />
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
