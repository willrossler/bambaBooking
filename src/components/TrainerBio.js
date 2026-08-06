import React, { useState } from "react";
import "../screenStyles/aboutUsScreen.css";

const PREVIEW_LENGTH = 200;

// Generic replacement for the old *Desktop.js / *Prez.js / *Short.js files
// (12 files for 4 people, with drifting/inconsistent bio text between them).
// Responsive by itself via CSS (see .trainerBio in aboutUsScreen.css),
// so it no longer needs a separate desktop-only and mobile-only version.
const TrainerBio = ({ trainer, expandable = true }) => {
  const [showMore, setShowMore] = useState(!expandable);
  const { name, role, image, bio, specialties } = trainer;

  const firstParagraph = bio[0];
  const isTruncated = expandable && !showMore && firstParagraph.length > PREVIEW_LENGTH;
  const visibleParagraphs = showMore
    ? bio
    : [isTruncated ? firstParagraph.slice(0, PREVIEW_LENGTH) + "..." : firstParagraph];

  return (
    <div className="trainerBio">
      <img src={image} alt={name} className="trainerBioImage" />
      <div className="trainerBioContent">
        <h1 className="title">{name}</h1>
        <p className="descriptionTextMobile" style={{ fontWeight: "500" }}>
          {role}
        </p>
        <hr className="aboutUsHR" />
        {visibleParagraphs.map((paragraph, index) => (
          <p className="descriptionTextMobile" key={index}>
            {paragraph}
          </p>
        ))}
        {showMore && specialties && specialties.length > 0 && (
          <>
            <p className="descriptionTitleMobile" style={{ fontWeight: "500", marginTop: "10px" }}>
              Specialicerad inom:
            </p>
            <ul className="descriptionTextMobile" style={{ marginBottom: "30px", lineHeight: "21px" }}>
              {specialties.map((specialty) => (
                <li key={specialty}>{specialty}</li>
              ))}
            </ul>
          </>
        )}
        {expandable && (bio.length > 1 || firstParagraph.length > PREVIEW_LENGTH) && (
          <p className="visaMer" onClick={() => setShowMore((value) => !value)}>
            {showMore ? "Visa mindre" : "Läs mer"}
          </p>
        )}
      </div>
    </div>
  );
};

export default TrainerBio;
