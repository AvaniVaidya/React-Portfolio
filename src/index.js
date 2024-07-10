import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./Pages/About";
import Education from "./Pages/Education";
import WorkExperience from "./Pages/WorkExperience";
import Projects from "./Pages/Projects";
import Publication from "./Pages/Publication";
import Skills from "./Pages/Skills";

export const activeLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Education",
    href: "#education",
  },
  {
    name: "Work Experience",
    href: "#workexperience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Publication",
    href: "#publication",
  },
  {
    name: "Skills",
    href: "#skills",
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <div>
        <About />
      </div>
      <div className="content">
        <Education />
      </div>
      <div>
        <WorkExperience />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Publication />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
}

export function Header() {
  return (
    <nav className="navbar">
      <ul>
        {activeLinks.map((link) => (
          <Link activeLinkObj={link} />
        ))}
      </ul>
    </nav>
  );
}

function Link({ activeLinkObj }) {
  return (
    <li>
      <a href={activeLinkObj.href}>{activeLinkObj.name}</a>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
