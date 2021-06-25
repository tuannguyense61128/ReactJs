import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const handleAccountCheck = async (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setMessage("");
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      history.push("/");
    } else {
      setMessage("Tài khoản hoặc mật khẩu của bạn không chính xác");
    }
  };

  return (
    <div className={styles.LoginForm}>
      <div className={styles.loginBox}>
        <form className={styles.form} action="" onSubmit={handleAccountCheck}>
          <h2>Login</h2>
          <div className={styles.loginInput}>
            <input
              type="text"
              name="Username"
              id="userName"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label htmlFor="Username">Username</label>
          </div>
          <div className={styles.loginInput}>
            <input
              id="password"
              type="Password"
              name=""
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="">Password</label>
          </div>
          <div id="loginStatus">
            <span>{message}</span>
          </div>
          <button type="submit" href="">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
