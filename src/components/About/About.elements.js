import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.div`
	padding: 7rem 3rem 7rem 3rem;
	min-height: 100vh;
	width: 100%auto;
	background: #1f2421;
	display: flex;
	color: white;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 700px) {
		padding: 7rem 1rem 7rem 1rem;
	}
`;
export const AboutWrapper = styled.div`
	max-width: 900px;
`;
export const AboutInner = styled.div`
	display: flex;
	@media screen and (max-width: 700px) {
		flex-direction: column;
		align-items: center;
	}
`;
export const AboutHeader = styled.h2`
	margin-bottom: 3rem;
	width: 100%;
	font-size: 2rem;
	font-family: "Major Mono Display", monospace;
	color: rgb(63, 191, 191);
	&:after {
		display: inline-block;
		content: "";
		border-top: 1px solid rgb(63, 191, 191);
		width: 50%;
		margin: 0 1rem;
		transform: translateY(-0.7rem);
	}
	@media screen and (max-width: 950px) {
		&:after {
			width: 50%;
		}
	}
	@media screen and (max-width: 810px) {
		&:after {
			width: 50%;
		}
	}
	@media screen and (max-width: 700px) {
		text-align: center;
	}
`;
export const AboutText = styled.p`
	width: 100%;
	margin-bottom: 1rem;
	padding-right: 1rem;
	line-height: 1.6rem;
`;

export const AboutTextContainer = styled.div`
	margin-right: 3rem;
	@media screen and (max-width: 700px) {
		margin-right: 0rem;
	}
`;
export const AboutImageWrapper = styled.div`
	height: 200px;
	display: flex;
`;
const movimientoSombra = keyframes`
  0% {
	box-shadow: rgba(63, 191, 191, 0.56) 10px 22px 90px 1px;
  }
  50% {
	box-shadow: rgba(63, 191, 191, 0.56) 5px 19px 70px 3px;
  }
  100%{
	box-shadow: rgba(63, 191, 191, 0.56) 10px 22px 90px 1px;
  }
`;
export const AboutImage = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 5px;
	/* box-shadow: rgba(63, 191, 191, 0.56) 10px 22px 90px 1px; */
	animation: ${movimientoSombra} 3s linear infinite;
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
