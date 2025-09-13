import { useEffect, useState } from "react";
import api from "../api";

function Events({ user }) {
  const [events, setEvents] = useState([]);
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await api.get("/events");
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  const bookTicket = async (eventId) => {
    try {
      const res = await api.post("/tickets/book", {
        eventId,
        userId: user.id,
      });
      alert(res.data.message);
      setTicket(res.data.data);
    } catch (err) {
      console.error(err);
      alert("Error booking ticket");
    }
  };

  return (
    <div style={{
      maxWidth: "900px",
      margin: "48px auto",
      padding: "40px 32px",
      background: "rgba(255,255,255,0.18)",
      borderRadius: "32px",
      boxShadow: "0 8px 40px 0 rgba(56,189,248,0.18)",
      backdropFilter: "blur(12px)",
      border: "2px solid rgba(56,189,248,0.18)",
      fontFamily: "Poppins, Segoe UI, sans-serif",
      position: "relative"
    }}>
      <h2 style={{
        textAlign: "center",
        color: "#f43f5e",
        fontWeight: 900,
        fontSize: "2.4rem",
        marginBottom: "36px",
        letterSpacing: "2px",
        textShadow: "0 2px 16px #fbbf24, 0 1px 0 #38bdf8"
      }}>🌟 Unique Events</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "32px"
      }}>
        {events.map((ev) => (
          <div key={ev._id} style={{
            background: "linear-gradient(135deg, #38bdf8 0%, #fbbf24 100%)",
            borderRadius: "24px",
            boxShadow: "0 4px 24px rgba(244,63,94,0.10)",
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer"
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'scale(1.04) rotateY(6deg)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(244,63,94,0.18)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(244,63,94,0.10)';
          }}
          >
            <span style={{
              fontWeight: 900,
              fontSize: "1.5rem",
              color: "#f43f5e",
              marginBottom: "10px",
              textShadow: "0 1px 8px #fbbf24"
            }}>{ev.name}</span>
            <span style={{
              color: "#2563eb",
              fontWeight: 600,
              marginBottom: "8px"
            }}>@ {ev.location}</span>
            <span style={{
              color: "#fff",
              background: "#f43f5e",
              borderRadius: "8px",
              padding: "4px 12px",
              fontWeight: 700,
              fontSize: "1rem",
              marginBottom: "18px"
            }}>{ev.date}</span>
            <button 
              onClick={() => bookTicket(ev._id)}
              style={{
                background: "linear-gradient(90deg, #f43f5e 0%, #fbbf24 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "12px 32px",
                fontWeight: 700,
                fontSize: "1.1rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(244,63,94,0.10)",
                marginTop: "10px",
                transition: "background 0.2s"
              }}
              onMouseOver={e => e.target.style.background = 'linear-gradient(90deg, #38bdf8 0%, #f43f5e 100%)'}
              onMouseOut={e => e.target.style.background = 'linear-gradient(90deg, #f43f5e 0%, #fbbf24 100%)'}
            >
              Book Ticket
            </button>
            <div style={{
              position: "absolute",
              top: "-18px",
              right: "-18px",
              width: "48px",
              height: "48px",
              background: "rgba(255,255,255,0.22)",
              borderRadius: "50%",
              boxShadow: "0 2px 8px #fbbf24"
            }}></div>
          </div>
        ))}
      </div>

      {ticket && (
        <div style={{
          marginTop: "48px",
          background: "rgba(255,255,255,0.32)",
          borderRadius: "24px",
          padding: "32px",
          textAlign: "center",
          boxShadow: "0 4px 24px rgba(56,189,248,0.12)",
          backdropFilter: "blur(8px)",
          border: "2px solid #38bdf8"
        }}>
          <h3 style={{
            color: "#f43f5e",
            fontWeight: 900,
            marginBottom: "18px",
            fontSize: "1.4rem",
            textShadow: "0 1px 8px #fbbf24"
          }}>🎟️ Your Ticket</h3>
          <p style={{
            fontWeight: 700,
            color: ticket.status === 'confirmed' ? '#059669' : '#f59e42',
            marginBottom: "18px",
            fontSize: "1.1rem"
          }}>Status: {ticket.status}</p>
          <img src={ticket.qrCode} alt="QR Code" style={{
            width: "140px",
            height: "140px",
            borderRadius: "16px",
            boxShadow: "0 2px 12px rgba(56,189,248,0.18)"
          }} />
        </div>
      )}
    </div>
  );
}

export default Events;
