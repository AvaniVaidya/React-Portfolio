import { React } from "react";
import { SiGithub } from "react-icons/si";
import "../index.css";

const projects = [
  {
    id: 1,
    name: "Health Care Service Locator Application",
    tech_stack:
      "Java, Spring boot, React.js, REST API, AWS EC2, AWS ECS, AWS ALB, Docker",
    detail:
      "A web application to search for health care services at or near to the provided location, integrated with Googles Places Text Search API.",
    github_url: "https://github.com/AvaniVaidya/Medical-Services-Web-App",
  },
  {
    id: 2,
    name: "Real-time notifications streaming",
    tech_stack: "JavaScript, HTML, CSS, ASP.NET Core, SSE",
    detail:
      "A real-time notification plug-in with dynamic updates integrated with REST APIs to manage the notifications.",
    github_url: "https://github.com/AvaniVaidya/Notification-Plugin",
  },
  {
    id: 3,
    name: "Portfolio",
    tech_stack: "HTML, CSS, React.js",
    detail: "Leveraged React.js concepts to build personal porfolio.",
    github_url: "https://github.com/AvaniVaidya/React-Portfolio",
  },
  {
    id: 4,
    name: "Azure Language Detection",
    tech_stack: "Python, Microsoft Azure AI, NLP",
    detail:
      "Rest-Client built in Python to call Azure Language Detection AI service endpoint.",
    github_url: "https://github.com/AvaniVaidya/Azure-Language-Detection",
  },
];

export default function Projects() {
  return (
    <section className="content" id="projects">
      <div className="projectcolumn">
        <span className="headerText">Projects</span>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-box">
            <h3>
              <a
                href={project.github_url}
                className="project-github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <SiGithub style={{ marginRight: "1vh" }} /> */}
                <SiGithub />
              </a>
              {project.name}
            </h3>
            <p>{project.detail}</p>
            <p>{project.tech_stack}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
