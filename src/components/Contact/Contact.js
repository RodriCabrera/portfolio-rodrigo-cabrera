import React, { useRef, useState } from "react";
import {
  CForm,
  CInput,
  CLabel,
  ContactContainer,
  ContactHeader,
  CTextarea,
  CWrapper,
  // CSendBtn,
  // CNotification,
} from "./Contact.elements";
import emailjs from "emailjs-com";
import Footer from "../Footer/Footer";
import ContactNotifications from "./Subcomponents/ContactNotifications";
import { FormattedMessage } from "react-intl";
import { Fade } from "react-reveal";
const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formState, setFormState] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });

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
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setSent(true);
        setLoading(false);
        clearForm();
      });
  };
  const onInputChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  function clearForm() {
    setFormState({
      userName: "",
      userEmail: "",
      userPhone: "",
      message: "",
    });
  }
  return (
    <ContactContainer id="contact">
      <CWrapper>
        <Fade bottom>
          <ContactHeader>
            <FormattedMessage id="contact-header" />
          </ContactHeader>
          <CForm ref={form} onSubmit={handleSubmit}>
            {/* NAME */}
            <CLabel htmlFor="user_name">
              <FormattedMessage id="contact-name" />
            </CLabel>
            <CInput
              type="text"
              name="userName"
              onChange={onInputChange}
              required
              value={formState.userName}
            />
            {/* EMAIL */}
            <CLabel htmlFor="user_email">
              <FormattedMessage id="contact-email" />
            </CLabel>
            <CInput
              type="text"
              name="userEmail"
              required
              onChange={onInputChange}
              value={formState.userEmail}
            />
            {/* MESSAGE */}
            <CTextarea
              rows="4"
              placeholder="??????"
              name="message"
              value={formState.message}
              onChange={onInputChange}
            />
            <ContactNotifications sent={sent} loading={loading} />
          </CForm>
        </Fade>
      </CWrapper>
      <Footer />
    </ContactContainer>
  );
};

export default Contact;
