import React from "react";
import "../componentStyles/contactInfoStyles.css";

const ContactInfo = () => {
  return (
    <div
      style={{ marginBottom: "50px" }}
      className="col text-start text-white "
    >
      <p style={{ marginBottom: "0px" }}>Bamba</p>
      <p style={{ opacity: "0.5", marginBottom: "0px" }}>Lützengatan 10</p>
      <p style={{ opacity: "0.5", marginBottom: "0px" }}>11520 Stockholm</p>
      <p style={{ opacity: "0.5" }}>Sweden</p>
      <p style={{ marginBottom: "0px" }}>info@bambaostermalm.se</p>
      <p>www.bambaostermalm.se</p>
      <p>Instagram@bambaostermalm</p>
    </div>
  );
};

export default ContactInfo;
