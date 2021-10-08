import React from "react";
import useData from "../../hooks/useData";
import LangSwitch from "../LangSwitch/LangSwitch";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
} from "./Sidebar.elements";

const Sidebar = ({ isOpen, toggle }) => {
	const contents = useData("navbar");
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>

			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink onClick={toggle} to="about">
						{contents[0]}
					</SidebarLink>
					<SidebarLink onClick={toggle} to="projects">
						{contents[1]}
					</SidebarLink>
					<SidebarLink onClick={toggle} to="contact">
						{contents[2]}
					</SidebarLink>
					<LangSwitch />
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
