import React from "react";
import {
	ProjectCard,
	ProjectsContainer,
	ProjectsGrid,
	ProjectsHeader,
} from "./Projects.elements";

const Projects = () => {
	return (
		<ProjectsContainer id="projects">
			<ProjectsHeader>Projects</ProjectsHeader>
			<ProjectsGrid>
				<ProjectCard>Art Latin America</ProjectCard>
				<ProjectCard>Ola Estudio</ProjectCard>
				<ProjectCard>Project Card</ProjectCard>
				<ProjectCard>Project Card</ProjectCard>
				<ProjectCard>Project Card</ProjectCard>
				<ProjectCard>Project Card</ProjectCard>
			</ProjectsGrid>
		</ProjectsContainer>
	);
};

export default Projects;
