import React, { useState } from "react";
import { updateExistingPotluck } from "../api/potluckAPI";
import potluckerLogo from "../img/logo3.png";
import TextField from "@mui/material/TextField";

function RandomRecipePopup({ trigger, setTrigger, potluck, setPotluck }) {
  const [pName, setPName] = useState();
  const [pEmail, setPEmail] = useState();

  const handleClick = () => {};

  return props.trigger ? (
    <>
      <div className="popupR" id="popupR">
        <div className="popupR__content">
          <a onClick={() => props.setTrigger(false)} className="popupR__close">
            &times;
          </a>

          <div className="popupR__left">
            <img src={potluckerLogo} alt="Tour photo" className="popupR__img" />
          </div>

          <div className="popupR__right">
            <h2 className="heading-secondary u-margin-bottom-small">
              Find A Random Recipe
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">yummy</h3>

            <a onClick={handleClick} className="btn btn--green">
              Add Me to the list!
            </a>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default RandomRecipePopup;
