import styled from "styled-components";

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
export const ProjectCard = styled.div`
	padding: 1rem;
	border: 1px solid black;
	border-radius: 5px;
`;
