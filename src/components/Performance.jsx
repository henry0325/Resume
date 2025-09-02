import React from "react";

export default function Performance() {
  const items = [
    "Provided pre-boot suggestions to reduce cycle time in manufacturing test (improve around 70%; 150 → 50 sec).",
    "Improved higher frequency SPL by adding a structure to reflect audio through the tweeter.",
    "Created SoundCheck test sequence for automated acoustic testing.",
    "Organized task items to expedite schedule and prevent resource wastage.",
    "Collaborated across functions to enhance design & production processes for mass production.",
    "Recommended speaker/microphone mounting designs to reduce buzzing and avoid assembly leakage."
  ];
  return (
    <section id="performance" className="resume-section">
      <h2>Performance Improvement</h2>
      <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
    </section>
  );
}
