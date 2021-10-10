import styled from "styled-components";

export const ProjectsContainer = styled.div`
	background-color: #dce1de;
	min-height: 100vh;
	padding: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (max-width: 768px) {
		padding-left: 60px;
		padding-right: 60px;
	}
	@media screen and (max-width: 560px) {
		padding-left: 40px;
		padding-right: 40px;
	}
	@media screen and (max-width: 480px) {
		padding-left: 30px;
		padding-right: 30px;
	}
`;
export const ProjectsHeader = styled.h2`
	font-size: 48px;
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
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
	grid-auto-rows: minmax(300px, auto);
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 560px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
export const ProjectCard = styled.div`
	padding: 1rem;
	border: 1px solid black;
	border-radius: 5px;
`;
