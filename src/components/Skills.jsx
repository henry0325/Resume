import React from "react";

export default function Skills() {
  const skills = [
    "Exceptional communication and computer skills",
    "Done the work in a team or independent environment",
    "Handling work under stress and multitasking",
    "Accurately followed the instructions and provide high-quality results",
    "Highly effectively adapt and learn new things"
  ];
  const ideas = [
    "Believe there is nothing “can't” achieve",
    "Parental respect, work hard and enjoy life",
    "Never too old to learn"
  ];

  return (
    <section id="skills" className="resume-section">
      <h2>Skills</h2>
      <div className="mb-3">
        {skills.map(s => <span key={s} className="badge-skill">{s}</span>)}
      </div>

      <h3 className="mt-4">Thought &amp; Idea</h3>
      <ul>{ideas.map(i => <li key={i}>{i}</li>)}</ul>
    </section>
  );
}
