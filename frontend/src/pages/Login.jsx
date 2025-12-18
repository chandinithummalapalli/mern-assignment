/*import API from "../api";

export default function Login() {
  const login = async () => {
    const res = await API.post("/auth/login", {
      email: "test@test.com",
      password: "123"
    });
    localStorage.setItem("token", res.data.token);
    alert("Logged in");
  };

  return <button onClick={login}>Login</button>;
}*/

/*import axios from "axios";

function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    await axios.post("http://localhost:5000/api/auth/login", user);
    alert("Login Successful");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;*/


import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/events");
  };

  return (
    <div className="container">
      <h2>Login</h2>

      {location.state?.registered && (
        <p className="success">Registration successful! Please login.</p>
      )}

      <form onSubmit={handleLogin}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;