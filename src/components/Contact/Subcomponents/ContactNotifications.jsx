import React from "react";
import { CSendBtn, CNotification } from "../Contact.elements";
const ContactNotifications = ({ sent, loading }) => {
	return (
		<>
			{!sent && !loading && <CSendBtn>Send</CSendBtn>}
			{!sent && loading && <CNotification>Sending message...</CNotification>}
			{sent && loading === false && (
				<>
					<CSendBtn>Send</CSendBtn>
					<CNotification>Thank you! Message sent</CNotification>
				</>
			)}
		</>
	);
};

export default ContactNotifications;
