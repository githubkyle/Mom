import React, { useState } from "react";

const ContactForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  // const [formStatus, setFormStatus] = useState("");

  const handleNameChange = e => {
    setNameValue(e.target.value);
  };

  const handleEmailChange = e => {
    setEmailValue(e.target.value);
  };

  const handleMessageChange = e => {
    setMessageValue(e.target.value);
  };

  return (
    <div>
      <h2>Contact me here</h2>

      <form
        // onSubmit={onSubmit}
        action="https://formsubmit.co/pfeeney1208@gmail.com"
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={nameValue}
          onChange={handleNameChange}
          required
        />
        <input
          type="email"
          value={emailValue}
          onChange={handleEmailChange}
          name="email"
          placeholder="Your Email Address"
          required
        />

        <input
          type="text"
          name="message"
          value={messageValue}
          onChange={handleMessageChange}
          placeholder="Your Message here "
          required
        />

        <button className="btn btn-danger" type="submit">
          {/* {formStatus} */}Send
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
