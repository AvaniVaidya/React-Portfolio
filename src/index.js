import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Education from "./Pages/Education";
import WorkExperience from "./Pages/WorkExperience";

export const activeLinks = [
  {
    name: "Home",
    href: "#home",
  },
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
    <>
      <Home />
      <About />
      <Education />
      <WorkExperience />
    </>
  );
}

export function Header() {
  return (
    <header className="infoList">
      {activeLinks.map((link) => (
        <Link activeLinkObj={link} />
      ))}
    </header>
  );
}

function Link({ activeLinkObj }) {
  return (
    <li className="listItem">
      <a className="link" href={activeLinkObj.href}>
        {activeLinkObj.name}
      </a>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
