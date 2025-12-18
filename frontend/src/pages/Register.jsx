/*import API from "../api";

export default function Register() {
  const register = async () => {
    await API.post("/auth/register", {
      email: "test@test.com",
      password: "123"
    });
    alert("Registered");
  };

  return <button onClick={register}>Register</button>;
}*/


/*function Register() {
    return (
      <div>
        <h2>Register</h2>
        <input placeholder="Email" />
        <input placeholder="Password" />
        <button>Register</button>
      </div>
    );
  }
  
  export default Register;*/

  /*import axios from "axios";

function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    };

    await axios.post("http://localhost:5000/api/auth/register", user);
    alert("User Registered");
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;*/


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://mern-backend-mkb5.onrender.com/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    navigate("/login", { state: { registered: true } });
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;