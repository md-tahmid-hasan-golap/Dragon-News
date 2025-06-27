import React from "react";
import SwimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import PlaygroundImage from "../../assets/playground.png";
import bgImage from "../../assets/bg.png";

const Qzon = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">Q-Zone</h2>
      <div className="space-y-5">
        <img src={SwimmingImage} alt="" />
        <img src={classImage} alt="" />
        <img src={PlaygroundImage} alt="" />
        <img src={bgImage} alt="" />
      </div>
    </div>
  );
};

export default Qzon;
