import React from "react";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Achievements from "./components/Achievements.jsx";
import Performance from "./components/Performance.jsx";
import CommunityWork from "./components/CommunityWork.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#about">Henry Chang</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navLinks" aria-controls="navLinks" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navLinks">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
              <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#achievements">Achievements</a></li>
              <li className="nav-item"><a className="nav-link" href="#performance">Performance</a></li>
              <li className="nav-item"><a className="nav-link" href="#community">Community</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container" style={{paddingTop: "5.25rem"}}>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <Performance />
        <CommunityWork />
      </main>

      <Footer />
    </>
  );
}
