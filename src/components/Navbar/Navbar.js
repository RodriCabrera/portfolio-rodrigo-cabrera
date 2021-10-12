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

const Navbar = ({ toggle, isOpen }) => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};

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
								About
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
								Projects
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
								Contact
							</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
