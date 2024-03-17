import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("userId", username);
    setUsername("");
    navigate("/task");
  };
  return (
    <>
      <div className="login__container">
        <form className="login__form" onSubmit={handleSubmit} action="">
          <label htmlFor="username">Provide a username</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <button>SIGN IN</button>
        </form>
      </div>
    </>
  );
};

export default Login;
