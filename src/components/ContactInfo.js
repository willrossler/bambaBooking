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

      <a href="mailto:info@bambaostermalm.se">
        <p>
          {" "}
          <span>info@bambaostermalm.se</span>
        </p>
      </a>
      <a href="www.bambaostermalm.se">
        <p>www.bambaostermalm.se</p>
      </a>
      <br />

      <a href="https://www.instagram.com/bambaostermalm/">
        <p>Instagram@bambaostermalm</p>
      </a>
    </div>
  );
};

export default ContactInfo;
