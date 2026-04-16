import React from "react";

export default function App() {
  const checklist = [
    "Make all beds",
    "Open blinds/curtains",
    "Pick up trash",
    "Clear countertops",
    "Load or unload dishwasher",
    "Wipe kitchen counters",
    "Sweep high-traffic floors",
    "Do one load of laundry",
    "Tidy living room",
    "Reset bathroom counters",
  ];

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full"> 
        
          

        <p className="text-gray-600 text-center mb-6">
          A simple reset routine to get your home back in order fast.
        </p>
        <div className="space-y-3">
          {checklist.map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-3 p-3 rounded-lg border border-pink-100 hover:bg-pink-50"
            >
              <input type="checkbox" className="w-5 h-5 accent-pink-500" />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
    
    

<div className="mt-8 text-center">
  <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow">
    Start Your Reset
  </button>
</div>

<div className="mt-6 text-center">
  <a
    href="https://www.spoiledhomescleaningservice.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl shadow"
  >
    Book a Cleaning
</a>
</div>
</div> 
</div> 
);
}


  

    

  

    
