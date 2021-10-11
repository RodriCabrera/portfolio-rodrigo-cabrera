import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const FooterContainer = styled.div`
	height: 80px;
`;
export const FWrapper = styled.div`
	height: 100%;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const FIconsList = styled.div`
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const IconLink = styled.a`
	text-decoration: none;
	color: inherit;
	transition: all 1s;
	margin: 1rem;
	&:hover {
		color: darkolivegreen;
	}
`;
export const LinkedinIcon = styled(FaLinkedinIn)``;
export const GithubIcon = styled(FaGithub)``;
