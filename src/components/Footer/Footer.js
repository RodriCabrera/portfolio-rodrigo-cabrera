import React from "react";
import {
	FooterContainer,
	FWrapper,
	FIconsList,
	GithubIcon,
	LinkedinIcon,
	IconLink,
} from "./Footer.elements";
const Footer = () => {
	return (
		<>
			<FooterContainer>
				<FWrapper>
					<FIconsList>
						<IconLink href="https://www.linkedin.com/feed/">
							<LinkedinIcon />
						</IconLink>
						<IconLink href="https://github.com/RodriCabrera">
							<GithubIcon />
						</IconLink>
					</FIconsList>
				</FWrapper>
			</FooterContainer>
		</>
	);
};

export default Footer;
