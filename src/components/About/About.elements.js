import styled from "styled-components";

export const AboutContainer = styled.div`
	padding: 5rem 3rem;
	min-height: 100vh;
	background: #1f2421;
`;
export const AboutInner = styled.div`
	display: flex;
	@media screen and (max-width: 700px) {
		flex-direction: column;
	}
`;
export const AboutHeader = styled.h2`
	color: white;
	margin-bottom: 1rem;
	font-size: 2rem;
	font-family: "Major Mono Display", monospace;
`;
export const AboutText = styled.p`
	color: white;
	width: 100%;
	margin-bottom: 1rem;
	padding-right: 1rem;
`;

export const AboutTextContainer = styled.div``;
export const AboutSkillsWrappaer = styled.div``;
export const AboutImageWrapper = styled.div`
	height: 100%;
`;
export const AboutImage = styled.img``;

export const SkillsList = styled.ul`
	color: white;
	padding-left: 20px;
`;
export const Skill = styled.li`
	color: white;
`;
