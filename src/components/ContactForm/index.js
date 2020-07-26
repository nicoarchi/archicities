import React from "react";
import "./styles.css";
import emailjs from "emailjs-com";

const ContactForm = (props) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "archicities_email",
        e.target,
        "user_N7xZN0TWOfMgdj0pmDs7j"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div>Envianos tu consulta y te responderemos ASAP!</div>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label>Tu nombre: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Apellido"
            name="name"
          />
        </div>
        <div className="form-group">
          <label>Tu email: </label>
          <input
            type="email"
            className="form-control"
            placeholder="tunombre@gmail.com"
            name="email"
          />
        </div>
        <div className="form-group">
          <label>Asunto: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Asunto del mensaje"
            name="subject"
          />
        </div>
        <div className="form-group">
          <label>Mensaje: </label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Tu mensaje"
            name="message"
          />
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
