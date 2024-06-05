import React from "react";
import "../index.css";
import { Header } from "../index.js";

export default function About() {
  return (
    <section className="commonSection" id="about">
      <Header />
      <div className="container">
        <section className="midSection">
          <img
            src="/AvaniImage2.jpg"
            alt="profileImage"
            className="circular-image"
          ></img>
          <h2 className="headersText1">Avani Vaidya</h2>
          <h3 className="headersText2">Software Engineer</h3>
          <h3 className="headersText2">Santa Clara, California</h3>
        </section>
        <section className="midSection">
          <p className="aboutText">
            A highly skilled and motivated Computer Science and Engineering
            graduate student, possessing experience in software engineering and
            development, with significant contributions to innovative projects.
            Through adept implementation of robust solutions, have consistently
            enhanced system efficiency while delivering valuable insights.
            Proficient across a diverse spectrum of technologies, have organized
            numerous team events, showcasing leadership and collaborative
            prowess.
          </p>
        </section>
      </div>
    </section>
  );
}
