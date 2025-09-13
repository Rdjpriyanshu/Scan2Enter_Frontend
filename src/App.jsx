import { useState } from "react";
import Register from "./components/Register";
import Events from "./components/Events";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f43f5e 0%, #fbbf24 60%, #38bdf8 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      perspective: "1200px"
    }}>
      <h1 style={{
        fontSize: "2.8rem",
        fontWeight: 900,
        color: "#fff",
        textShadow: "0 6px 32px rgba(244,63,94,0.18), 0 1px 0 #fbbf24",
        marginBottom: "32px",
        letterSpacing: "2px",
        transform: "rotateY(-8deg) scale(1.04)",
        background: "linear-gradient(90deg, #f43f5e 0%, #fbbf24 50%, #38bdf8 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        🎫 QR Ticketing System
      </h1>
      <div style={{
        transform: "rotateY(8deg) scale(1.01)",
        boxShadow: "0 8px 32px rgba(244,63,94,0.12), 0 1.5px 0 #fbbf24",
        borderRadius: "18px",
        background: "linear-gradient(135deg, #fff 60%, #fbbf24 100%)",
        padding: "32px 0",
        minWidth: "370px",
        maxWidth: "760px",
        width: "100%"
      }}>
        {!user ? <Register setUser={setUser} /> : <Events user={user} />}
      </div>
    </div>
  );
}

export default App;
