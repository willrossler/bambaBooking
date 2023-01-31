import React from "react";
import "../componentStyles/contactInfoStyles.css";

const ContactInfo = () => {
  return (
    <div className="col text-start text-white contactInfo">
      <p>Bamba</p>
      <p style={{ opacity: "0.5" }}>Lützengatan 10</p>
      <p style={{ opacity: "0.5" }}>11520 Stockholm</p>
      <p style={{ opacity: "0.5" }}>Sweden</p>
      <br />

      <p>info@bambaostermalm.se</p>
      <p>www.bambaostermalm.se</p>
      <br />
      <br />

      <p>Instagram@bambaostermalm</p>
    </div>
  );
};

export default ContactInfo;