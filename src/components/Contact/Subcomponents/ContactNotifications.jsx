import React from "react";
import { FormattedMessage } from "react-intl";
import { CSendBtn, CNotification } from "../Contact.elements";
const ContactNotifications = ({ sent, loading }) => {
	return (
		<>
			{!sent && !loading && <CSendBtn><FormattedMessage id="contact-send"/></CSendBtn>}
			{!sent && loading && <CNotification>Sending message...</CNotification>}
			{sent && loading === false && (
				<>
					<CSendBtn><FormattedMessage id="contact-send"/></CSendBtn>
					<CNotification><FormattedMessage id="contact-notification"/></CNotification>
				</>
			)}
		</>
	);
};

export default ContactNotifications;
