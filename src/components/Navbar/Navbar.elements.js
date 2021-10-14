import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
	background-color: rgba(0, 0, 0, 0.4);
	box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: fixed;
	top: 0;
	z-index: 999;
	backdrop-filter: blur(8px);

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;
export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1300px;
`;
export const NavLogo = styled.a`
	color: #fff;
	font-family: "Major Mono Display", monospace;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	letter-spacing: 2px;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
	transition: all 0.2s ease;
	@media screen and (max-width: 768px) {
		font-size: 1rem;
	}
	&:hover {
		text-shadow: 0px 0px 6px rgba(63, 191, 255, 0.7);
	}
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		font-size: 1.8rem;
		color: white;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const NavItem = styled.li`
	height: 80px;
`;
export const NavLinks = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		text-shadow: 0px 0px 6px rgba(63, 191, 191, 0.7),
			1px 1px 10px rgba(63, 191, 191, 0.7);
	}

	&.active {
		border-bottom: 1px solid #fff;
	}
`;
