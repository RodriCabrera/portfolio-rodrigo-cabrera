import React from "react";
import useData from "../../hooks/useData";
import LangSwitch from "../LangSwitch/LangSwitch";
import {
	SidebarContainer,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
} from "./Sidebar.elements";

const Sidebar = ({ isOpen, toggle }) => {
	const contents = useData("navbar");
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
						{contents[0]}
					</SidebarLink>
					<SidebarLink
						onClick={toggle}
						to="projects"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
					>
						{contents[1]}
					</SidebarLink>
					<SidebarLink
						onClick={toggle}
						to="contact"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
					>
						{contents[2]}
					</SidebarLink>
					<LangSwitch />
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
