import React from "react";
import NewPotluck from "../components/NewPotluck";

function PlanYourOwnEvent() {
  return (
    <div id="SuperWrap">
      <div className="container">
        <div className="one">
          <h3 className="title flex-title">
            <span className="title-main">
              <NewPotluck />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default PlanYourOwnEvent;
