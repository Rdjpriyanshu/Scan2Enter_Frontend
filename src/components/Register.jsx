import { useState } from "react";
import api from "../api";

function Register({ setUser }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("http://localhost:3000/api/users/register", {
        name,
        phone,
      });
      alert(res.data.message);
      setUser(res.data.data); // pass user data up
    } catch (err) {
      console.error(err);
      alert("Error registering user");
    }
  };

  return (
      <form 
        onSubmit={handleRegister}
        style={{
          maxWidth: "350px",
          margin: "40px auto",
          padding: "32px 24px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "18px"
        }}
      >
        <h2 style={{
          textAlign: "center",
          marginBottom: "8px",
          color: "#2d3748",
          fontWeight: 700
        }}>Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "10px 12px",
            borderRadius: "6px",
            border: "1px solid #cbd5e1",
            fontSize: "16px"
          }}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={{
            padding: "10px 12px",
            borderRadius: "6px",
            border: "1px solid #cbd5e1",
            fontSize: "16px"
          }}
        />
        <button 
          type="submit"
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "12px",
            fontWeight: 600,
            fontSize: "16px",
            cursor: "pointer",
            transition: "background 0.2s"
          }}
          onMouseOver={e => e.target.style.background = '#1e40af'}
          onMouseOut={e => e.target.style.background = '#2563eb'}
        >
          Register
        </button>
      </form>
  );
}

export default Register;
