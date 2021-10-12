import React, { useState, useEffect } from "react";
import {
	ProjectCard,
	ProjectsContainer,
	ProjectsGrid,
	ProjectsHeader,
	CardBg,
	CardInfo,
	CardTitle,
	CardDesc,
	CardIcons,
	VercelLink,
	GithubLink,
	StyledLink,
} from "./Projects.elements";
import olaestudio from "../../assets/olaestudio-min-square.jpg";
import useData from "../../hooks/useData";

const Projects = () => {
	const data = useData("projects");
	const [projectsData, setProjectsData] = useState({});

	useEffect(() => {
		setProjectsData(data);
	}, [data]);
	console.log(projectsData);
	return (
		<ProjectsContainer id="projects">
			<ProjectsHeader>{projectsData.header}</ProjectsHeader>
			<ProjectsGrid>
				<ProjectCard>
					<CardBg src={olaestudio} />
					<CardInfo>
						<CardTitle>{projectsData.cards.olaestudio.title}</CardTitle>
						<CardDesc>{projectsData.cards.olaestudio.description}</CardDesc>
						<CardIcons>
							<StyledLink
								href="https://olaestudio.vercel.app/"
								target="_blank"
								rel="noreferrer"
							>
								<VercelLink />
							</StyledLink>
							<StyledLink
								href="https://github.com/RodriCabrera/olaestudio"
								target="_blank"
								rel="noreferrer"
							>
								<GithubLink />
							</StyledLink>
						</CardIcons>
					</CardInfo>
				</ProjectCard>
				<ProjectCard>
					<CardBg
						src={
							"https://www.bellasartes.gob.ar/media/uploads/coleccion/7183.jpg"
						}
					/>
					<CardInfo>
						<CardTitle>{projectsData.cards.artlatinamerica.title}</CardTitle>
						<CardDesc>
							{projectsData.cards.artlatinamerica.description}
						</CardDesc>
						<CardIcons>
							<StyledLink
								href="https://artlatinamerica.vercel.app/"
								target="_blank"
								rel="noreferrer"
							>
								<VercelLink />
							</StyledLink>
							<StyledLink
								href="https://github.com/RodriCabrera/gallery"
								target="_blank"
								rel="noreferrer"
							>
								<GithubLink />
							</StyledLink>
						</CardIcons>
					</CardInfo>
				</ProjectCard>
			</ProjectsGrid>
		</ProjectsContainer>
	);
};

export default Projects;
