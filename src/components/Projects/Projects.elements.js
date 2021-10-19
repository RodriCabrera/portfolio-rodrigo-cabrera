import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
export const ProjectsContainer = styled.div`
	background-color: #dce1de;
	min-height: 100vh;
	padding: 100px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const ProjectsHeader = styled.h2`
	font-size: 48px;
	font-family: "Major Mono Display", monospace;
	margin-bottom: 2rem;
	color: rgb(0, 0, 0);
	text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2),
		0px -5px 10px rgba(255, 255, 255, 0.15);
	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;
export const ProjectsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 300px);
	grid-gap: 1rem;
	grid-auto-rows: 300px;
	gap: 2em;
	@media screen and (max-width: 1320px) {
		grid-template-columns: repeat(3, 300px);
	}
	@media screen and (max-width: 1000px) {
		grid-template-columns: repeat(2, 300px);
	}
	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(1, 300px);
	}
`;

export const CardBg = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: auto;
	height: 100%;
	transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
	@media screen and (max-width: 700px) {
		filter: blur(2px) saturate(30%) opacity(30%);
	} ;
`;
export const CardInfo = styled.div`
	position: relative;
	height: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	opacity: 0%;
	transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
	@media screen and (max-width: 700px) {
		opacity: 100%;
	} ;
`;
export const CardTitle = styled.h3`
	font-family: "Major Mono Display", monospace;
	text-align: center;
	margin-bottom: 2rem;
	@media screen and (max-width: 700px) {
		opacity: 100%;
	} ;
`;
export const CardDesc = styled.p`
	text-align: center;
`;
export const CardIcons = styled.div`
	margin-top: auto;
	font-size: 1.5rem;
	color: rgb(0, 123, 123);
	transition: 0.5s all ease-in;
	&:hover {
		color: rgb(0, 255, 255);
	}
`;
export const VercelLink = styled(SiVercel)`
	margin-right: 1rem;
`;
export const GithubLink = styled(FaGithub)``;
export const StyledLink = styled.a`
	color: inherit;
	text-decoration: none;
`;
export const ProjectCard = styled.div`
	position: relative;
	padding: 1rem;
	font-family: "Major Mono Display", monospace;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);

	&:hover ${CardBg} {
		filter: blur(1px) saturate(30%) opacity(20%);
	}
	&:hover ${CardInfo} {
		opacity: 100%;
	}
`;
