import React from "react";
import "../index.css";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function About() {
  return (
    <section className="content" id="about">
      <div className="column centeralign">
        <img
          src="./React-Portfolio/AvaniImage3.jpg"
          alt="profileImage"
          className="profile-image"
        ></img>
        <span className="textstyle1">Avani Vaidya</span>
        <span className="textstyle1">Software Engineer</span>
      </div>
      <div className="column">
        <span className="headerText">About Me</span>
        <p className="textstyle2">
          A highly skilled and motivated Computer Science and Engineering
          graduate student, possessing experience in software engineering and
          development, with significant contributions to innovative projects.
          Through adept implementation of robust solutions, have consistently
          enhanced system efficiency while delivering valuable insights.
          Proficient across a diverse spectrum of technologies, have organized
          numerous team events, showcasing leadership and collaborative prowess.
        </p>
        <span className="textstyle3">Contact</span>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/avanivaidya2512"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin />
            <span className="link-text">
              www.linkedin.com/in/avanivaidya2512
            </span>
          </a>
          <a
            href="https://github.com/AvaniVaidya"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub />
            <span className="link-text">https://github.com/AvaniVaidya</span>
          </a>
          <a href="mailto:avanivaidya1997@gmail.com" className="social-link">
            <HiOutlineMail />
            <span className="link-text">avanivaidya1997@gmail.com</span>
          </a>
          <span className="textstyle3">Resume</span>
          <a
            href="https://bit.ly/avanivaidyaresume"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload />
            <span className="link-text">Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
