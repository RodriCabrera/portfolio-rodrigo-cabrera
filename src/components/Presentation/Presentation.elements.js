import styled, { keyframes } from "styled-components";

export const PresentationContainer = styled.div`
	position: relative;
	z-index: 1;
	height: 100vh;
	width: 100%;
	background: #0c0c0c;
	padding: 0 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PresentationBg = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: hidden;
`;
const caleido = keyframes`
  from {
	filter: hue-rotate(0deg);
  }

  to {
	filter: hue-rotate(360deg);
  }
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
	transition: all 5s;
	animation: ${caleido} 10s linear infinite;
`;

export const PresentationContent = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	top: 0px;
	padding-left: 70px;
	padding-right: 1rem;
	z-index: 3;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (max-width: 768px) {
		padding-left: 60px;
	}
	@media screen and (max-width: 560px) {
		padding-left: 40px;
	}
	@media screen and (max-width: 480px) {
		padding-left: 30px;
	}
`;
export const PresentationHeader = styled.h1`
	text-align: center;
	font-family: "Major Mono Display", monospace;
	font-size: 48px;
	color: rgb(255, 255, 255);
	text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2),
		0px -5px 10px rgba(255, 255, 255, 0.15);
	@media screen and (max-width: 768px) {
		font-size: 40px;
	}
	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;
export const PresentationP = styled.p`
	margin-top: 24px;
	color: #fff;
	font-size: 24px;
	text-align: center;
	font-family: "Major Mono Display", monospace;

	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
`;
