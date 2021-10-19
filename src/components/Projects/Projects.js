import React from "react";
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
import simpsons from "../../assets/simpsons-square.png";

const Projects = () => {
	return (
		<ProjectsContainer id="projects">
			<ProjectsHeader>proJects</ProjectsHeader>
			<ProjectsGrid>
				<ProjectCard>
					<CardBg src={olaestudio} />
					<CardInfo>
						<CardTitle>oLa STUdIo</CardTitle>
						<CardDesc>Website of a sound studio.</CardDesc>
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
						<CardTitle>ArT LaTin aMeRica</CardTitle>
						<CardDesc>Prototype of an online art gallery.</CardDesc>
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
				<ProjectCard>
					<CardBg
						src={
							"https://www.cultura.gob.ar/media/uploads/espantapajaros-girondo-ok.jpg"
						}
					/>
					<CardInfo>
						<CardTitle>EspantaPajarOS 10</CardTitle>
						<CardDesc>
							Web App version of the first 10 poems of Girondo's
							"Espantapájaros"
						</CardDesc>
						<CardIcons>
							<StyledLink
								href="https://espantapajaros.vercel.app/"
								target="_blank"
								rel="noreferrer"
							>
								<VercelLink />
							</StyledLink>
							<StyledLink
								href="https://github.com/RodriCabrera/espantapajaros"
								target="_blank"
								rel="noreferrer"
							>
								<GithubLink />
							</StyledLink>
						</CardIcons>
					</CardInfo>
				</ProjectCard>
				<ProjectCard>
					<CardBg src={simpsons} />
					<CardInfo>
						<CardTitle>The Simpsons Quotes QuiZZ</CardTitle>
						<CardDesc>
							Who said...? Quotes, characters and images fetched from{" "}
							<a href="https://thesimpsonsquoteapi.glitch.me/">
								The Simpsons Quote API
							</a>
						</CardDesc>
						<CardIcons>
							<StyledLink
								href="https://the-simpsons-quotes-quizz.vercel.app/"
								target="_blank"
								rel="noreferrer"
							>
								<VercelLink />
							</StyledLink>
							<StyledLink
								href="https://github.com/RodriCabrera/the-simpsons-quotes-quizz"
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
