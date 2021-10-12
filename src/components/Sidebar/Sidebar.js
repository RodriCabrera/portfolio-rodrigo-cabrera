import React from "react";
import {
	SidebarContainer,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
} from "./Sidebar.elements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink
						onClick={toggle}
						to="about"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
					>
						About
					</SidebarLink>
					<SidebarLink
						onClick={toggle}
						to="projects"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
					>
						Projects
					</SidebarLink>
					<SidebarLink
						onClick={toggle}
						to="contact"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
					>
						Contact
					</SidebarLink>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
