/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/


/*import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  const submitData = async () => {
    await axios.post("http://localhost:5000/api/users/register", {
      name: name,
      email: "test@gmail.com",
      password: "123456"
    });
    alert("Data sent");
  };

  return (
    <div>
      <h1>MERN Assignment</h1>
      <input
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={submitData}>Submit</button>
    </div>
  );
}

export default App;*/


/*import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();
    alert("User added successfully");
    console.log(data);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default App;*/


/*import { useEffect, useState } from "react";

const API = "http://localhost:5000/api";

export default function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${API}/events`)
      .then(res => res.json())
      .then(setEvents);
  }, []);

  return (
    <div>
      <h2>Events</h2>
      {events.map(e => (
        <div key={e._id}>
          <h3>{e.title}</h3>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
}*/


/*import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";

function App() {
  return (
    <>
      <Register />
      <Login />
      <Events />
    </>
  );
}

export default App;*/

/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;*/


/*import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", gap: "10px" }}>
        <Link to="/register">Register</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/events">Events</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;*/
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Events from "./pages/Events";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register"/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/events" element={<Events/>}/>
    </Routes>
  );
}

export default App;

