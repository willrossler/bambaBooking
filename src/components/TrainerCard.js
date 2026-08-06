import React from "react";
import "../componentStyles/trainerCard.css";

// Generic replacement for the old TrainerCardAbbe/Jocke/Martin/Naj.js files.
// Pass any trainer object from src/data/trainers.js as a prop.
const TrainerCard = ({ trainer }) => {
  const { name, role, email, image } = trainer;

  return (
    <div className="d-flex flex-col trainerCard">
      <div className="d-flex flex-column">
        <img src={image} alt={name} className="user-image" />
        <hr />
        <div className="trainerCardP">
          <p>{name}</p>
          <p style={{ opacity: "0.5", fontWeight: "400" }}>{role}</p>
          {email && (
            <>
              <p style={{ opacity: "0.5", fontWeight: "400" }}> — </p>
              <a href={`mailto:${email}`}>
                <p id="hoverPink" style={{ fontWeight: "400", fontSize: "14px" }}>
                  {email}
                </p>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
