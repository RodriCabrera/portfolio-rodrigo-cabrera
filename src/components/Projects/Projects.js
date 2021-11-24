import React from "react";
import {
	ProjectsContainer,
	ProjectsGrid,
	ProjectsHeader,
} from "./Projects.elements";
import olaestudio from "../../assets/olaestudio-min-square.jpg";
import simpsons from "../../assets/simpsons-square.png";
import Card from "./Card";

const Projects = () => {
	return (
		<ProjectsContainer id="projects">
			<ProjectsHeader>proJects</ProjectsHeader>
			<ProjectsGrid>
				<Card
					bg={olaestudio}
					title={"oLa STUdIo"}
					desc={"Website of a sound studio."}
					vercel={"https://olaestudio.vercel.app/"}
					github={"https://github.com/RodriCabrera/olaestudio"}
				/>
				<Card
					bg={"https://www.bellasartes.gob.ar/media/uploads/coleccion/7183.jpg"}
					title={"ArT LaTin aMeRica"}
					desc={"Prototype of an online art gallery."}
					vercel={"https://artlatinamerica.vercel.app/"}
					github={"https://github.com/RodriCabrera/gallery"}
				/>
				<Card
					bg={
						"https://p4.wallpaperbetter.com/wallpaper/13/361/145/dc-comics-gotham-city-metropolis-justice-league-hd-wallpaper-preview.jpg"
					}
					title={"superheRo Team"}
					desc={
						"Select superheroes and villains to form a team. The data comes from Superhero-API."
					}
					vercel={"https://superhero-team.vercel.app/"}
					github={"https://github.com/RodriCabrera/superhero-team-alkemy"}
				/>

				<Card
					bg={
						"https://www.cultura.gob.ar/media/uploads/espantapajaros-girondo-ok.jpg"
					}
					title={"EspantaPajarOS 10"}
					desc={
						"Web App version of the first 10 poems of Girondo's 'Espantapájaros'"
					}
					vercel={"https://espantapajaros.vercel.app/"}
					github={"https://github.com/RodriCabrera/espantapajaros"}
				/>
				<Card
					bg={simpsons}
					title={"The Simpsons Quotes QuiZZ"}
					desc={
						"Who said...? Quotes, characters and images fetched from The Simpsons Quote API"
					}
					vercel={"https://the-simpsons-quotes-quizz.vercel.app/"}
					github={"https://github.com/RodriCabrera/the-simpsons-quotes-quizz"}
				/>
			</ProjectsGrid>
		</ProjectsContainer>
	);
};

export default Projects;
