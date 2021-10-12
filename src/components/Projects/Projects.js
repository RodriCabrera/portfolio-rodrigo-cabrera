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
import { useLanguage } from "../../context/LanguageContext";
import { data } from "../../data/data";

const Projects = () => {
	const [projectsData, setProjectsData] = useState({});
	const { language } = useLanguage();

	useEffect(() => {
		language === "en"
			? setProjectsData(data.projects.lang.en)
			: setProjectsData(data.projects.lang.sp);
	}, [language]);

	// const cardContents = (projectName) => {
	// 	return (
	// 		projectsData && (
	// 			<>
	// 				<CardTitle>{projectsData.cards.projectName.title}</CardTitle>
	// 				<CardDesc>{projectsData.cards.projectName.description}</CardDesc>
	// 			</>
	// 		)
	// 	);
	// };

	console.log(projectsData);

	return (
		<ProjectsContainer id="projects">
			<ProjectsHeader>{projectsData.header}</ProjectsHeader>
			<ProjectsGrid>
				<ProjectCard>
					<CardBg src={olaestudio} />
					<CardInfo>
						{/* {cardContents()} */}
						{/* <CardTitle>{projectsData.cards.olaestudio.title}</CardTitle> */}
						{/* <CardDesc>{projectsData.cards.olaestudio.description}</CardDesc> */}
						<CardTitle>ola estudio</CardTitle>

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
						<CardTitle>arT latin ameRica</CardTitle>

						{/* <CardTitle>{projectsData.cards.artlatinamerica.title}</CardTitle> */}
						<CardDesc>
							{/* {projectsData.cards.artlatinamerica.description} */}
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
