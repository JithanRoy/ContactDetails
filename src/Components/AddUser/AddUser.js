import React from "react";
import "./AddUser.css";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import { useState, useHistory } from "react";


const AddUser = () => {
  const history = useHistory();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    username: "",
  });

  const { name, email, username } = inputValue;
  const handleInputChange = (e) => {
    const { name, email, username, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
      [email]: value,
      [username]: value,
    });
  };

  const onClickChange = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:3001/users",inputValue);
      history.push("/");
  }

  return (
      <form className="formGroup" onSubmit={(e) => onClickChange(e)}>
            <TextField
              id="name-input"
              className="addUserInputField"
              label="name"
              variant="outlined"
              name="name"
              value={name}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="username-input"
              className="addUserInputField"
              label="username"
              variant="outlined"
              name="username"
              value={username}
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              id="email-input"
              className="addUserInputField"
              label="email"
              variant="outlined"
              name="email"
              value={email}
              onChange={(e) => handleInputChange(e)}
            />
            <Button variant="contained">Submit</Button>
      </form>
  );
};

export default AddUser;
