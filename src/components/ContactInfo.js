import React from "react";
import "../componentStyles/contactInfoStyles.css";

const ContactInfo = () => {
  return (
    <div className="col text-start contactInfo">
      <p>Bamba</p>
      <p style={{ opacity: "0.5" }}>Lützengatan&nbsp;10</p>

      <p style={{ opacity: "0.5" }}>11520&nbsp;Stockholm</p>
      <p style={{ opacity: "0.5" }}>Sweden</p>
      <br />

      <p>info@bambaostermalm.se</p>
      <p>www.bambaostermalm.se</p>
      <br />

      <p>
        <span>Instagram@bambaostermalm</span>
      </p>
    </div>
  );
};

export default ContactInfo;
