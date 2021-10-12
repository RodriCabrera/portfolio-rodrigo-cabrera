import styled from "styled-components";

export const AboutContainer = styled.div`
	padding: 7rem 3rem 1rem 3rem;
	min-height: 100vh;
	background: #1f2421;
	display: flex;
	color: white;
	justify-content: center;
`;
export const AboutWrapper = styled.div`
	max-width: 900px;
`;
export const AboutInner = styled.div`
	display: flex;
	@media screen and (max-width: 700px) {
		flex-direction: column;
	}
`;
export const AboutHeader = styled.h2`
	margin-bottom: 2rem;
	font-size: 2rem;
	font-family: "Major Mono Display", monospace;
`;
export const AboutText = styled.p`
	width: 100%;
	margin-bottom: 1rem;
	padding-right: 1rem;
	line-height: 1.5rem;
`;

export const AboutTextContainer = styled.div`
	margin-right: 3rem;
`;
export const AboutSkillsWrappaer = styled.div``;
export const AboutImageWrapper = styled.div`
	height: 200px;
	display: flex;
`;

export const AboutImage = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 5px;
	box-shadow: rgba(63, 191, 191, 0.56) 10px 22px 90px 1px;
`;

export const SkillsList = styled.ul`
	padding-left: 20px;
	list-style: none;
	margin-bottom: 2rem;
`;
export const Skill = styled.li`
	&:before {
		content: "\\25B8";
		color: lightblue;
		font-weight: bold;
		display: inline-block;
		width: 1em;
		margin-left: -1em;
		margin-right: 1em;
	}
`;
