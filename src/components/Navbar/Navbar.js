import React from "react";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import LangSwitch from "../LangSwitch/LangSwitch";
import useData from "../../hooks/useData";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({ toggle, isOpen }) => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

	const contents = useData("navbar");
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="#" onClick={toggleHome}>
						RodriGo CabrerA
					</NavLogo>
					<MobileIcon onClick={toggle}>
						{isOpen ? <FaTimes /> : <FaBars />}
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
							>
								{contents[0]}
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="projects"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
							>
								{contents[1]}
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="contact"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
							>
								{contents[2]}
							</NavLinks>
						</NavItem>
						<LangSwitch />
					</NavMenu>
				</NavbarContainer>
			</Nav>
			<Sidebar toggle={toggle} isOpen={isOpen} />
		</>
	);
};

export default Navbar;
