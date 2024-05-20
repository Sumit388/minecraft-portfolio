//* Packages Imports */
import { useState } from "react";

//* Components Imports */
import CommonHeading from "../components/Common/CommonHeading";

//* Data Imports */
import { CONTACT_PAGE_DESCRIPTION } from "../data/Contact/contactData";

//* Utils Imports */
import { sendEmailNotification } from "../utils/urls";

//* Styles Imports */
import Styles from "../styles/Contact/Contact.module.scss";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.REACT_APP_YOUR_ACCESS);

    const response = await fetch(sendEmailNotification, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className={Styles.contactContainer}>
      <CommonHeading
        description={CONTACT_PAGE_DESCRIPTION}
        activeTab="Contact"
      />
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email Id:</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" required></textarea>
        <button type="submit">Submit Form</button>
      </form>
      <span className={Styles.submitNotification}>{result}</span>
    </div>
  );
};

export default Contact;
