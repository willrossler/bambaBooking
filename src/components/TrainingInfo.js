import React from "react";
import "../componentStyles/trainingInfo.css";

const TrainingInfo = () => {
  return (
    <div className="row py-4">
      <h3 style={{ color: "#fff" }}>Träningsformer</h3>
      <div className="paragraph">
        <p>— Classes (up to 20 people)</p>
        <p>— Small groups (up to 5 people)</p>
        <p>— Personal training (one on one)</p>
        <p>— Trials (three sessions for a complete walkthrough)</p>
        <p>— Introduction (one session)</p>
        <h5>All available training packages also available as gift cards</h5>
      </div>
    </div>
  );
};

export default TrainingInfo;
