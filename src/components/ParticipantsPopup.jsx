import React, { useState } from "react";
import { updateExistingPotluck } from "../api/potluckAPI";
import potluckerLogo from "../img/logo3.png";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function ParticipantsPopup(props) {
  const [pName, setPName] = useState();
  const [pEmail, setPEmail] = useState();

  const [validations, setValidations] = React.useState({
    ParticipantEmail: "",
  });

  const [errorState, setErrorState] = React.useState({
    ParticipantEmail: false,
  });

  const validateOne = (e) => {
    const { name, value } = e.target;
    let message = "";
    let error = false;

    if (!value) {
      message = `${name} is required`;
      error = true;
    }

    if (value && name === "ParticipantEmail" && !/\S+@\S+\.\S+/.test(value)) {
      message = "Email format must be as example@mail.com";
      error = true;
    }

    setValidations({ ...validations, [name]: message });
    setErrorState({ ...errorState, [name]: error });
  };

  const validateAll = () => {
    const validation = { ParticipantEmail: "" };

    let isValid = true;

    if (!pEmail) {
      validation.ParticipantEmail = "Email is required";
      setErrorState({ ...errorState, ParticipantEmail: true });
      isValid = false;
    }

    if (pEmail && !/\S+@\S+\.\S+/.test(pEmail)) {
      validation.ParticipantEmail = "Email format must be as example@mail.com";
      setErrorState({ ...errorState, ParticipantEmail: true });
      isValid = false;
    }

    if (!isValid) {
      setValidations(validation);
    }

    return isValid;
  };

  const handleClick = () => {
    if (validateAll()) {
      const oldPotluck = props.potluck;
      oldPotluck.numberAttending = oldPotluck.numberAttending + 1;
      oldPotluck.participants.push({
        name: pName,
        email: pEmail,
        attending: true,
      });
      props.setPotluck(oldPotluck);
      setPEmail("");
      setPName("");
      updateExistingPotluck(props.potluck);
    }
  };

  const handleRemoveClick = () => {
    if (validateAll()) {
      const oldPotluck = props.potluck;
      const newP = oldPotluck.participants.filter((p) => p.email !== pEmail);
      if (newP.length !== oldPotluck.participants.length) {
        oldPotluck.participants = newP;
        oldPotluck.numberAttending = oldPotluck.numberAttending - 1;
        props.setPotluck(oldPotluck);
        setPEmail("");
        setPName("");
        updateExistingPotluck(props.potluck);
      }
    }
  };

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
              {props.potluck.title}
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Look Who's Coming &ndash; and who's not!
            </h3>

            <h2>Participants</h2>
            <ul className="popupR__text">
              {props.potluck.participants.map((participant, index) => (
                <>
                  <li>
                    {index + 1}. {`${participant.name} - ${participant.email}`}
                  </li>
                </>
              ))}
            </ul>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="participant"
                label="Name"
                variant="outlined"
                value={pName}
                onChange={(e) => setPName(e.target.value)}
              />
              <TextField
                id="participantEmail"
                name="ParticipantEmail"
                label="Email"
                variant="outlined"
                required="true"
                value={pEmail}
                onChange={(e) => setPEmail(e.target.value)}
                onBlur={validateOne}
                helperText={validations.ParticipantEmail}
                error={errorState.ParticipantEmail}
              />
              <br></br>
              <a
                onClick={handleClick}
                className="btn btn--green"
                style={{ padding: "10px" }}
              >
                Add Me to the list!
              </a>
              <a
                onClick={handleRemoveClick}
                className="btn btn--green"
                style={{ padding: "10px" }}
              >
                Remove me the list!
              </a>
            </Box>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}

export default ParticipantsPopup;
