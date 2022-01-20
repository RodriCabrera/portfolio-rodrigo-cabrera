import React from "react";
import {
  ProjectsContainer,
  ProjectsGrid,
  ProjectsHeader,
} from "./Projects.elements";
import olaestudio from "../../assets/olaestudio-min-square.jpg";
import simpsons from "../../assets/simpsons-square.png";
import Card from "./Card";
import { FormattedMessage } from "react-intl";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <Fade>
        <ProjectsHeader>
          <FormattedMessage id="projects-header" />
        </ProjectsHeader>
      </Fade>

      <ProjectsGrid>
        <Card
          bg={olaestudio}
          title={"projects-ola-title"}
          desc={"projects-ola-desc"}
          deploy={"https://olaestudio.vercel.app/"}
          github={"https://github.com/RodriCabrera/olaestudio"}
        />
        <Card
          bg={
            "https://play-lh.googleusercontent.com/CiGs15N1e1tXrSnVLEY9jOnKi1oNzPQNRjqhR8fXE0pnu_bRyNmfc8xXr2VQUJTfJ9A"
          }
          title={"projects-trello-title"}
          desc={"projects-trello-desc"}
          deploy={"https://diytrello.netlify.app/"}
          github={"https://github.com/RodriCabrera/trello-clone"}
        />
        <Card
          bg={"https://www.bellasartes.gob.ar/media/uploads/coleccion/7183.jpg"}
          title={"projects-art-title"}
          desc={"projects-art-desc"}
          deploy={"https://artlatinamerica.vercel.app/"}
          github={"https://github.com/RodriCabrera/gallery"}
        />
        <Card
          bg={
            "https://p4.wallpaperbetter.com/wallpaper/13/361/145/dc-comics-gotham-city-metropolis-justice-league-hd-wallpaper-preview.jpg"
          }
          title={"projects-hero-title"}
          desc={"projects-hero-desc"}
          deploy={"https://superhero-team.vercel.app/"}
          github={"https://github.com/RodriCabrera/superhero-team-alkemy"}
        />

        <Card
          bg={
            "https://www.cultura.gob.ar/media/uploads/espantapajaros-girondo-ok.jpg"
          }
          title={"projects-esp-title"}
          desc={"projects-esp-desc"}
          deploy={"https://espantapajaros.vercel.app/"}
          github={"https://github.com/RodriCabrera/espantapajaros"}
        />
        <Card
          bg={simpsons}
          title={"projects-simpsons-title"}
          desc={"projects-simpsons-desc"}
          deploy={"https://the-simpsons-quotes-quizz.vercel.app/"}
          github={"https://github.com/RodriCabrera/the-simpsons-quotes-quizz"}
        />
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
