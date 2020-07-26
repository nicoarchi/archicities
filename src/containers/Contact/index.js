import React from "react";
import "./styles.css";
import Card from "../../components/UI/Card";
import ContactForm from "../../components/ContactForm";

const Contact = (props) => {
  return (
    <div>
      <Card>
        <ContactForm />
      </Card>
    </div>
  );
};

export default Contact;
