import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";

const LoginVolunteers = ({ setUserInfo }) => {
  const [username, setUserName] = useState([]);
  const [password, setPassword] = useState([]);
  const [wrongPasswordUsername, setWrongPasswordUsername] = useState(false);

  const _handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = await fetch("http://127.0.0.1:3232/login/sitelogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => response.json());
    console.log("Here are the login results: ", loginData);
    if (!loginData.isValid) {
      setUserInfo({ isLoggedIn: false });
      setWrongPasswordUsername(true);
    }

    if (loginData.id) {
      setUserInfo({
        isLoggedIn: true,
        id: loginData.id,
        is_admin: loginData.is_admin,
        is_guardian: loginData.is_guardian,
        is_minor: loginData.is_minor,
        first_name: loginData.first_name,
        avatar_link: loginData.avatar_link,
      });
      setWrongPasswordUsername(false);
    }
  };

  const _onUserName = (e) => {
    setUserName(e.target.value);
  };

  const _onPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={_handleSubmit}>
        <label>
          <TextField
            required
            name="name"
            id="outlined-required"
            label="Username"
            variant="outlined"
            margin="dense"
            type="text"
            onChange={_onUserName}
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            margin="dense"
            onChange={_onPassword}
            required
          />
        </label>
        <h6
          className={
            !!wrongPasswordUsername
              ? "f-red f-small m-0"
              : "f-background-color f-small m-0"
          }
        >
          Your password and username do not match.
        </h6>
        <Fab type="submit">Submit</Fab>
      </form>
    </div>
  );
};

export default LoginVolunteers;
