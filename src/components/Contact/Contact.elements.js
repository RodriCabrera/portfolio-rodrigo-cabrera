import styled from "styled-components";

export const ContactContainer = styled.div`
	background: #1f2421;
	padding: 1rem;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const CWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ContactHeader = styled.h2`
	color: #dce1de;
	font-family: "Major Mono Display", monospace;
	margin: 2rem;
`;
export const CForm = styled.form`
	max-width: 700px;
`;
export const CInput = styled.input`
	height: 30px;
	border: none;
	width: 100%;
	margin-bottom: 1rem;
	padding: 7px;
`;
export const CLabel = styled.label`
	color: #dce1de;
	font-family: "Major Mono Display", monospace;
`;
export const CTextarea = styled.textarea`
	border: none;
	font-family: "Major Mono Display", monospace;
	width: 100%;
	margin-top: 1rem;
	padding: 5px;
`;
export const CSendBtn = styled.button`
	border: none;
	padding: 10px;
	margin-top: 1.5rem;
	justify-self: flex-end;
	cursor: pointer;
	color: white;
	font-size: 1rem;
	background-color: rgb(63, 191, 191);
`;
export const CNotification = styled.p`
	color: lawngreen;
	text-align: center;
`;
