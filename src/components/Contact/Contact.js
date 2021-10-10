import React, { useRef, useState } from "react";
import {
	CForm,
	CInput,
	CLabel,
	ContactContainer,
	ContactHeader,
	CTextarea,
	CWrapper,
	CSendBtn,
	CNotification,
} from "./Contact.elements";
import emailjs from "emailjs-com";

const Contact = () => {
	const form = useRef();
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		emailjs
			.sendForm(
				process.env.REACT_APP_YOUR_SERVICE_ID,
				process.env.REACT_APP_YOUR_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_YOUR_USER_ID
			)
			.then(
				(result) => {
					console.log(result.text);
					setSent(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	const handleChange = (e) => {
		if (e.target.name === "user_name") {
			console.log("tipeando en nombre");
			setName(e.target.value);
		} else if (e.target.name === "user_email") {
			console.log("tipeando en email");
			setEmail(e.target.value);
		}
	};
	return (
		<ContactContainer id="contact">
			<CWrapper>
				<ContactHeader>CONTACT</ContactHeader>
				<CForm ref={form} onSubmit={handleSubmit}>
					{/* NAME */}
					<CLabel htmlFor="user_name">Name</CLabel>
					<CInput
						type="text"
						name="user_name"
						id="user_name"
						onChange={handleChange}
						required
					/>
					{/* EMAIL */}
					<CLabel htmlFor="user_email">Email</CLabel>
					<CInput
						type="text"
						name="user_email"
						id="user_email"
						required
						onSubmit={handleChange}
					/>
					{/* MESSAGE */}
					<CTextarea rows="4" placeholder="Message" name="message" />
					{!sent && <CSendBtn>Send</CSendBtn>}
					{sent && <CNotification>Thank you! Message sent</CNotification>}

					{/* sent:loading
					false:false --> inicial *  btn activo / sin notif.
					false:true  --> enviando * btn inactivo / sin notif.
					true:false  --> enviado *  btn activo+form vacio / con notif. */}
				</CForm>
			</CWrapper>
		</ContactContainer>
	);
};

export default Contact;
