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
    <div className="formContainer">
      <div className="formTitle">
        Envianos tu consulta y te responderemos ASAP!
      </div>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label>Tu nombre: </label>
          <input
            type="text"
            className="formInput"
            placeholder="Nombre Apellido"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label>Tu email: </label>
          <input
            type="email"
            className="formInput"
            placeholder="tunombre@gmail.com"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label>Asunto: </label>
          <input
            type="text"
            className="formInput"
            placeholder="Asunto del mensaje"
            name="subject"
            required
          />
        </div>
        <div className="form-group">
          <label>Mensaje: </label>
          <textarea
            type="text"
            className="formTextarea"
            placeholder="Tu mensaje"
            name="message"
            required
          />
        </div>
        <div>
          <input className="btnEnviar" type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
