import React from "react";
import "./AddUser.css";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/Input";

const AddUser = () => {
  const [inputValue, setInputValue] = React.useState({
    name: "",
    email: "",
    username: "",
  });

  const handleInputChange = (e) => {
    const { name, email, username, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
      [email]: value,
      [username]: value,
    });
  };
  return (
    <div className="formGroup">
      <FormControl>
        <TextField
          id="name-input"
          name="name"
          label="Name"
          type="text"
          value={inputValue.name}
          onChange={handleInputChange}
        />

        <TextField
          id="email-input"
          name="email"
          label="email"
          type="email"
          value={inputValue.name}
          onChange={handleInputChange}
        />

        <TextField
          id="username-input"
          name="username"
          label="username"
          type="text"
          value={inputValue.name}
          onChange={handleInputChange}
        />
      </FormControl>
    </div>
  );
};

export default AddUser;
