import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Education from "./Pages/Education";
import WorkExperience from "./Pages/WorkExperience";
import ProjectPaper from "./Pages/ProjectPaper";

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
    name: "Projects & Paper",
    href: "#projectpaper",
  },
  {
    name: "Resume",
    href: "#resume",
  },
  {
    name: "Contact",
    href: "#contact",
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
        <ProjectPaper />
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
