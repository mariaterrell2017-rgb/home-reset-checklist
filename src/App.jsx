import { useState } from "react";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", textAlign: "center" }}>
      
      {/* HEADER */}
      <h1 style={{ color: "#6a5acd" }}>Spoiled Homes Cleaning Service</h1>
      <h2>💛 60-Minute Home Reset for Busy Moms</h2>
      <p>Let’s get your home back together — one room at a time.</p>

      {!started ? (
        <button
          onClick={() => setStarted(true)}
          style={{
            padding: "12px 20px",
            fontSize: "16px",
            backgroundColor: "#ffb6c1",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Start My Reset 🧹
        </button>
      ) : (
        <div>
          <h3>Let’s go! You got this 💪</h3>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>🧽 Kitchen — wipe, dishes, clear counters</li>
            <li>🛋 Living Room — fluff, fold, tidy</li>
            <li>🚿 Bathroom — wipe + refresh</li>
            <li>🧺 Laundry — quick reset load</li>
          </ul>

          <p style={{ marginTop: "20px" }}>
            💖 You’re doing amazing. Progress over perfection.
          </p>

          <a
            href="https://spoiledhomescleaningservice.com"
            target="_blank"
          >
            <button
              style={{
                marginTop: "20px",
                padding: "12px 20px",
                backgroundColor: "#6a5acd",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Book a Cleaning 🧼
            </button>
          </a>
        </div>
      )}
    </div>
  );
}
  
       




  

    

  

    
