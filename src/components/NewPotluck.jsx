import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createNewPotluck } from "../api/potluckAPI";
import "../pages/dashboard.css";

import dayjs from "dayjs";
import Alert from "@mui/material/Alert";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import userEvent from "@testing-library/user-event";
import UserContext from "./UserContext";

function NewPotluck() {
  const navigate = useNavigate();

  const [eventCreated, setEventCreated] = useState(false);
  const [choiceStyle, setChoiceStyle] = useState("Choice");
  const [dateValue, setDateValue] = useState();
  const [eventName, setEventName] = useState();
  const [organizerName, setOrganizerName] = useState();
  const [organizerEmail, setOrganizerEmail] = useState();
  const [expectNumber, setExpectedNumber] = useState();
  const [eventPass, setEventPass] = useState();
  const [theme, setTheme] = useState("none");
  const [location, setLocation] = useState({ province: "" });
  const { user, setUser } = React.useContext(UserContext);

  const [validations, setValidations] = React.useState({
    eventName: "",
    organizerEmail: "",
    eventPass: "",
  });

  const [errorState, setErrorState] = React.useState({
    eventName: false,
    organizerEmail: false,
    eventPass: false,
  });

  useEffect(() => {
    if (user) {
      setOrganizerName(user.fname + " " + user.lname);
      setOrganizerEmail(user.email);
      console.log("here", user.fname);
    }
    console.log(organizerEmail);
    console.log(organizerName);

    return () => {};
  }, [user]);

  const handleLocationInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    console.log("name:", name, " value:", value);
    setLocation({
      ...location,
      [name]: value,
    });
  };

  const validateOne = (e) => {
    const { name, value } = e.target;
    let message = "";
    let error = false;

    if (!value) {
      message = `${name} is required`;
      error = true;
    }

    if (value && name === "organizerEmail" && !/\S+@\S+\.\S+/.test(value)) {
      message = "Email format must be as example@mail.com";
      error = true;
    }

    setValidations({ ...validations, [name]: message });
    setErrorState({ ...errorState, [name]: error });
  };

  const validateAll = () => {
    const validation = { eventName: "", organizerEmail: "", eventPass: "" };
    const errorS = {
      eventName: false,
      organizerEmail: false,
      eventPass: false,
    };
    let isValid = true;

    if (!eventName) {
      validation.eventName = "Name is required";
      setErrorState({ ...errorState, eventName: true });
      isValid = false;
    }

    if (!organizerEmail) {
      validation.organizerEmail = "Email is required";
      setErrorState({ ...errorState, organizerEmail: true });
      isValid = false;
    }

    if (organizerEmail && !/\S+@\S+\.\S+/.test(organizerEmail)) {
      validation.organizerEmail = "Email format must be as example@mail.com";
      setErrorState({ ...errorState, organizerEmail: true });
      isValid = false;
    }

    if (!eventPass) {
      validation.eventPass = "Event pass is required";
      setErrorState({ ...errorState, eventPass: true });
      isValid = false;
    }

    if (!isValid) {
      setValidations(validation);
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateAll();

    if (isValid) {
      const newPotluck = {
        title: eventName,
        owner: { name: organizerName, email: organizerEmail },
        location: location,
        eventPass: eventPass,
        eventDate: dateValue,
        numberExpected: expectNumber,
        theme: theme,
        choiceStyle: choiceStyle,
      };
      try {
        const created = await createNewPotluck(newPotluck);
        console.log("Created: ", created);
        setEventCreated(true);
        setTimeout(() => navigate(`/home/ExistingEvents/${created._id}`), 3000);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  return (
    <>
      <div className="title-main">
        <h1>Create Potluck</h1>
      </div>
      <Box
        className="box-field"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="on"
      >
        <TextField
          sx={{ minWidth: 600 }}
          id="EventName"
          label="Event Name"
          name="eventName"
          variant="outlined"
          required
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          onBlur={validateOne}
          helperText={validations.eventName}
          error={errorState.eventName}
        />

        <div>
          <TextField
            sx={{ minWidth: 300 }}
            id="OrganizerName"
            label="Organizer Name"
            variant="outlined"
            value={organizerName}
            defaultValue={" "}
            onChange={(e) => setOrganizerName(e.target.value)}
          />
          <TextField
            sx={{ minWidth: 300 }}
            id="OrganizerEmail"
            name="organizerEmail"
            label="Organizer Email"
            value={organizerEmail}
            defaultValue={" "}
            variant="outlined"
            onChange={(e) => setOrganizerEmail(e.target.value)}
            onBlur={validateOne}
            required
            helperText={validations.organizerEmail}
            error={errorState.organizerEmail}
          />
        </div>
        <div>
          <TextField
            id="ExpectedNumber"
            label="Expected # People"
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            variant="outlined"
            onChange={(e) => setExpectedNumber(e.target.value)}
          />
          <TextField
            sx={{ minWidth: 150 }}
            id="eventPass"
            label="EventPass 0-9999"
            type="number"
            InputProps={{ inputProps: { min: 0, max: 9999 } }}
            required
            variant="outlined"
            onChange={(e) => setEventPass(e.target.value)}
            onBlur={validateOne}
            name="eventPass"
            helperText={validations.eventPass}
            error={errorState.eventPass}
          />

          <TextField
            sx={{ width: 250 }}
            id="Theme"
            label="Theme"
            variant="outlined"
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>
        <div>
          Location<br></br>
          <TextField
            sx={{ minWidth: 600 }}
            id="name"
            name="name"
            label="Location Name"
            variant="outlined"
            onChange={handleLocationInputChange}
          />
          <br></br>
          <TextField
            sx={{ minWidth: 600 }}
            id="address"
            name="address"
            label="Address"
            variant="outlined"
            onChange={handleLocationInputChange}
          />
          <br></br>
          <TextField
            id="city"
            name="city"
            label="City"
            variant="outlined"
            onChange={handleLocationInputChange}
          />
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="select-label">Province</InputLabel>
            <Select
              labelId="select-label"
              id="province"
              name="province"
              value={location.province}
              label="Province"
              onChange={handleLocationInputChange}
            >
              <MenuItem value={"AB"}>Alberta</MenuItem>
              <MenuItem value={"BC"}>British Columbia</MenuItem>
              <MenuItem value={"MB"}>Manitoba</MenuItem>
              <MenuItem value={"NB"}>New Brunswick</MenuItem>
              <MenuItem value={"NL"}>Newfoundland and Labrador</MenuItem>
              <MenuItem value={"NT"}>Northwest Territories</MenuItem>
              <MenuItem value={"NS"}>Nova Scotia</MenuItem>
              <MenuItem value={"NU"}>Nunavut</MenuItem>
              <MenuItem value={"ON"}>Ontario</MenuItem>
              <MenuItem value={"PE"}>Prince Edward Island</MenuItem>
              <MenuItem value={"QC"}>Quebec</MenuItem>
              <MenuItem value={"SK"}>Saskatchewan</MenuItem>
              <MenuItem value={"YT"}>Yukon</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ width: 150 }}
            id="postalcode"
            name="postalcode"
            label="Postal Code"
            variant="outlined"
            onChange={handleLocationInputChange}
          />
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Event Date&Time"
            disablePast={true}
            value={dateValue}
            onChange={(e) => setDateValue(dayjs(e).format())}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <br></br>
        <label>Food People can bring:</label>
        <br></br>
        <ToggleButtonGroup
          color="primary"
          value={choiceStyle}
          exclusive
          onChange={(e) => setChoiceStyle(e.target.value)}
          aria-label="Platform"
        >
          <ToggleButton value="Assigned">Assigned</ToggleButton>
          <ToggleButton value="Choice">Free to Choose</ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <br></br>
        <a onClick={handleSubmit} className="btn btn--green">
          Submit Event
        </a>
      </Box>
      {eventCreated && (
        <Alert severity="success">
          Event Created Successfully, Lets customize your event further....
        </Alert>
      )}
    </>
  );
}

export default NewPotluck;
