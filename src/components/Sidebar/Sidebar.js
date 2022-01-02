import React from "react";
import { FormattedMessage } from "react-intl";
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
            <FormattedMessage id="nav-about" />
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            <FormattedMessage id="nav-projects" />
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            <FormattedMessage id="nav-contact" />
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
