import React from "react";

export default function Achievements() {
  const items = [
    "Joined Wistron Acoustics; supported Avaya J189/K155/K175 from design to MP; built & tuned manufactory acoustic test; upgraded job level 7→8.",
    "Collaborated with client on Gandalf acoustic design; promoted to senior (level 9).",
    "Gandalf (PanaCast 50) mass production; surveyed audio DSP supplier for new project.",
    "Used Python to automate frequently repeated processes; formatted data analysis files for faster results.",
    "Created and integrated a one-click process for Line official accounts; developed a service plan and website (Wix) for SPI.",
    "Visited friends and family in the U.S. and Canada for three months."
  ];

  return (
    <section id="achievements" className="resume-section">
      <h2>Achievements</h2>
      <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
    </section>
  );
}
