import React from "react";

export default function About() {
  return (
    <section id="about" className="resume-section">
      <h2>About</h2>
      <h1 className="mb-1">HENRY CHANG</h1>
      <div className="subheading mb-3">Acoustic Engineer</div>

      <p className="lead">
        3.8 years of experience as an acoustic engineer. Love exploring the unknown
        things and knowledge. Extremely motivated to constantly develop my skills and
        grow professionally. I am confident in my ability to manage all the job that I
        need to do.
      </p>

      <div className="mt-3">
        <div>11F., No. 10, Wenlin N. Rd., Beitou Dist., Taipei City 112, Taiwan</div>
        <div>Email: <a href="mailto:henry_0325@yahoo.com.tw">henry_0325@yahoo.com.tw</a></div>
        <div>Phone: <a href="tel:+886975260521">0975-260-521</a></div>
      </div>

      <div className="mt-3">
        <a className="btn btn-outline-primary btn-sm" href="/public/docs/Henry-Chang.pdf" target="_blank" rel="noreferrer">
          Download PDF
        </a>
      </div>
    </section>
  );
}
