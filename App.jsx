import { useState, useEffect } from "react";

const tasks = [
  {
    zone: "🚀 First 10 Min — Quick Wins",
    color: "#FF6B6B",
    bg: "#FFF0F0",
    time: "10 min",
    items: [
      { id: 1, text: "Grab a laundry basket — toss anything out of place", tip: null },
      { id: 2, text: "Start a load of laundry", tip: null },
      { id: 3, text: "Wipe down kitchen counters", tip: null },
      { id: 4, text: "Toss trash from kitchen & living room", tip: null },
      { id: 5, text: "Pick up shoes, bags & coats off the floor", tip: null },
    ],
  },
  {
    zone: "🍽️ Kitchen (15 Min)",
    color: "#FF9F43",
    bg: "#FFF6ED",
    time: "15 min",
    dishwasherOptions: true,
    items: [
      { id: 6, text: "Load dishes into dishwasher & run it", tip: null, hasDishwasher: true },
      { id: 7, text: "Wash dishes by hand — prioritize what you'll use next", tip: "No dishwasher? Wash as you go — it adds up!", hasDishwasher: false },
      { id: 8, text: "Wipe stovetop & microwave handle", tip: null },
      { id: 9, text: "Wipe out sink & rinse", tip: null },
      { id: 10, text: "Sweep kitchen floor", tip: null },
    ],
  },
  {
    zone: "🛋️ Living Room (10 Min)",
    color: "#48DBFB",
    bg: "#EDF9FE",
    time: "10 min",
    items: [
      { id: 11, text: "Fluff & straighten couch pillows/throws", tip: null },
      { id: 12, text: "Clear the coffee table", tip: null },
      { id: 13, text: "Quick vacuum or Swiffer main area", tip: null },
      { id: 14, text: "Wipe down any visible surfaces", tip: null },
    ],
  },
  {
    zone: "🚿 Bathroom (10 Min)",
    color: "#A29BFE",
    bg: "#F5F3FF",
    time: "10 min",
    items: [
      { id: 15, text: "Wipe sink & faucet with a cleaning wipe", tip: null },
      { id: 16, text: "Wipe toilet seat & handle", tip: null },
      { id: 17, text: "Spray & wipe mirror", tip: null },
      { id: 18, text: "Hang up towels", tip: null },
      { id: 19, text: "Quick floor sweep or wipe", tip: null },
    ],
  },
  {
    zone: "🛏️ Bedrooms (10 Min)",
    color: "#55EFC4",
    bg: "#EDFDF8",
    time: "10 min",
    items: [
      { id: 20, text: "Make your bed — just pull it up, no perfection needed!", tip: null },
      { id: 21, text: "Clear nightstand clutter", tip: null },
      { id: 22, text: "Quick toy roundup in kids' rooms", tip: null },
      { id: 23, text: "Put away laundry basket items from step 1", tip: null },
    ],
  },
  {
    zone: "✨ Final 5 — You Did It!",
    color: "#FD79A8",
    bg: "#FFF0F7",
    time: "5 min",
    items: [
      { id: 24, text: "Move laundry to dryer (or hang)", tip: null },
      { id: 25, text: "Light a candle or spritz your fave room spray", tip: "You earned it 💕" },
      { id: 26, text: "Empty any remaining trash bags", tip: null },
      { id: 27, text: "Take a breath — your home is RESET! 🎉", tip: null },
    ],
  },
];

export default function App() {
  const [checked, setChecked] = useState({});
  const [hasDishwasher, setHasDishwasher] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setElapsed(e => e + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));

  const allItems = tasks.flatMap(t =>
    t.items.filter(item => {
      if (item.hasDishwasher === true) return hasDishwasher;
      if (item.hasDishwasher === false) return !hasDishwasher;
      return true;
    })
  );
  const totalItems = allItems.length;
  const doneCount = allItems.filter(i => checked[i.id]).length;
  const percent = Math.round((doneCount / totalItems) * 100);

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const resetAll = () => {
    setChecked({});
    setElapsed(0);
    setRunning(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #FFF9F0 0%, #FFF0F7 50%, #F0F4FF 100%)",
      fontFamily: "'Georgia', serif",
      padding: "0 0 60px",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #FF6B6B, #FD79A8)",
        padding: "32px 20px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
        <div style={{ position: "absolute", bottom: -30, left: -10, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
        <div style={{ fontSize: 36, marginBottom: 4 }}>🧹✨</div>
        <h1 style={{ margin: 0, color: "#fff", fontSize: 22, fontWeight: "bold", letterSpacing: "-0.3px", textShadow: "0 1px 3px rgba(0,0,0,0.15)" }}>
          60-Minute Home Reset
        </h1>
        <p style={{ color: "rgba(255,255,255,0.9)", margin: "6px 0 0", fontSize: 13 }}>
          for busy moms who need a win today 💕
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ padding: "16px 20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: "#555", fontFamily: "sans-serif" }}>{doneCount} of {totalItems} done</span>
          <span style={{ fontSize: 13, fontWeight: "bold", color: percent === 100 ? "#27ae60" : "#FF6B6B", fontFamily: "sans-serif" }}>{percent}%</span>
        </div>
        <div style={{ background: "#E8E8E8", borderRadius: 8, height: 10, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${percent}%`, background: "linear-gradient(90deg, #FF6B6B, #FD79A8)", borderRadius: 8, transition: "width 0.4s ease" }} />
        </div>
        {percent === 100 && (
          <div style={{ textAlign: "center", marginTop: 12, padding: "10px", background: "#EDFDF8", borderRadius: 12, fontSize: 14, color: "#27ae60", fontFamily: "sans-serif" }}>
            🎉 You crushed it, mama! Home is RESET!
          </div>
        )}
      </div>

      {/* Timer */}
      <div style={{ margin: "16px 20px", background: "#fff", borderRadius: 16, padding: "14px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <div style={{ textAlign: "center", flex: 1 }}>
          <div style={{ fontSize: 24, fontWeight: "bold", color: "#333", fontFamily: "monospace", letterSpacing: 2 }}>{formatTime(elapsed)}</div>
          <div style={{ fontSize: 11, color: "#999", fontFamily: "sans-serif" }}>elapsed</div>
        </div>
        <div style={{ display: "flex", gap: 8, flex: 2, justifyContent: "center" }}>
          <button onClick={() => setRunning(r => !r)} style={{ background: running ? "#FF6B6B" : "linear-gradient(135deg, #FF6B6B, #FD79A8)", color: "#fff", border: "none", borderRadius: 10, padding: "8px 16px", fontSize: 13, cursor: "pointer", fontFamily: "sans-serif", fontWeight: "bold" }}>
            {running ? "⏸ Pause" : "▶ Start"}
          </button>
          <button onClick={resetAll} style={{ background: "#f5f5f5", color: "#666", border: "none", borderRadius: 10, padding: "8px 12px", fontSize: 13, cursor: "pointer", fontFamily: "sans-serif" }}>
            Reset
          </button>
        </div>
      </div>

      {/* Dishwasher toggle */}
      <div style={{ margin: "0 20px 16px", background: "#fff", borderRadius: 16, padding: "14px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: "bold", color: "#333", fontFamily: "sans-serif" }}>🍽️ Do you have a dishwasher?</div>
          <div style={{ fontSize: 11, color: "#999", fontFamily: "sans-serif", marginTop: 2 }}>Checklist adjusts to match!</div>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button onClick={() => setHasDishwasher(true)} style={{ padding: "6px 14px", borderRadius: 20, border: "2px solid", borderColor: hasDishwasher ? "#FF6B6B" : "#ddd", background: hasDishwasher ? "#FFF0F0" : "#fff", color: hasDishwasher ? "#FF6B6B" : "#999", fontSize: 12, cursor: "pointer", fontFamily: "sans-serif", fontWeight: "bold" }}>Yes</button>
          <button onClick={() => setHasDishwasher(false)} style={{ padding: "6px 14px", borderRadius: 20, border: "2px solid", borderColor: !hasDishwasher ? "#FF6B6B" : "#ddd", background: !hasDishwasher ? "#FFF0F0" : "#fff", color: !hasDishwasher ? "#FF6B6B" : "#999", fontSize: 12, cursor: "pointer", fontFamily: "sans-serif", fontWeight: "bold" }}>No</button>
        </div>
      </div>

      {/* Task Zones */}
      <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: 16 }}>
        {tasks.map((zone) => {
          const zoneItems = zone.items.filter(item => {
            if (item.hasDishwasher === true) return hasDishwasher;
            if (item.hasDishwasher === false) return !hasDishwasher;
            return true;
          });
          const zoneDone = zoneItems.filter(i => checked[i.id]).length;
          const zoneComplete = zoneDone === zoneItems.length;

          return (
            <div key={zone.zone} style={{ background: "#fff", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 14px rgba(0,0,0,0.06)", border: zoneComplete ? `2px solid ${zone.color}` : "2px solid transparent", transition: "border 0.3s ease" }}>
              <div style={{ background: zone.bg, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                <div style={{ fontSize: 14, fontWeight: "bold", color: "#222", fontFamily: "sans-serif" }}>{zone.zone}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 11, color: zone.color, fontFamily: "sans-serif", background: "#fff", padding: "3px 8px", borderRadius: 20, fontWeight: "bold", border: `1px solid ${zone.color}` }}>{zone.time}</span>
                  {zoneComplete && <span style={{ fontSize: 18 }}>✅</span>}
                </div>
              </div>
              <div style={{ padding: "8px 0" }}>
                {zoneItems.map((item, idx) => (
                  <div key={item.id} onClick={() => toggle(item.id)} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 16px", cursor: "pointer", background: checked[item.id] ? "#FAFAFA" : "#fff", borderTop: idx === 0 ? "none" : "1px solid #F5F5F5", transition: "background 0.2s" }}>
                    <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${checked[item.id] ? zone.color : "#DDD"}`, background: checked[item.id] ? zone.color : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1, transition: "all 0.2s ease" }}>
                      {checked[item.id] && <span style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>✓</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, color: checked[item.id] ? "#AAA" : "#333", fontFamily: "sans-serif", textDecoration: checked[item.id] ? "line-through" : "none", lineHeight: "1.4", transition: "color 0.2s" }}>{item.text}</div>
                      {item.tip && <div style={{ fontSize: 11, color: zone.color, marginTop: 3, fontFamily: "sans-serif", fontStyle: "italic" }}>{item.tip}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 32, padding: "0 20px", fontSize: 12, color: "#AAA", fontFamily: "sans-serif", lineHeight: 1.7 }}>
        Made with love by <span style={{ color: "#FF6B6B", fontWeight: "bold" }}>The Spoiled Brand</span> ✨<br />
        You don't have to be perfect. You just have to start. 💕
      </div>
    </div>
  );
}
