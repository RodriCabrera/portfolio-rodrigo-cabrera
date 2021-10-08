import styled from "styled-components";

export const ContactContainer = styled.div`
	background-color: #262626;
	padding: 100px 0;
	padding-left: 100px;
	height: 100vh;
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
