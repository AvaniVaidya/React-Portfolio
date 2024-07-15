import React from "react";
import "../index.css";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJira,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJquery,
  SiCsharp,
  SiSpringboot,
  SiDotnet,
  SiKubernetes,
  SiApachekafka,
  SiMicrosoftazure,
  SiMongodb,
  SiOracle,
} from "react-icons/si";
import { MdOutlineArchitecture, MdOutlineApi } from "react-icons/md";
import { AiOutlineCi } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";

const skills = [
  // Languages and Frameworks
  { name: "React.js", icon: <FaReact /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Javascript", icon: <FaJsSquare /> },
  { name: "JQuery", icon: <SiJquery /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C#", icon: <SiCsharp /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: ".NET", icon: <SiDotnet /> },
  { name: "ASP.NET", icon: <SiDotnet /> },

  // Technologies
  { name: "AWS EC2", icon: <FaAws /> },
  { name: "ECS", icon: <FaAws /> },
  { name: "S3", icon: <FaAws /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Kafka", icon: <SiApachekafka /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Azure AI", icon: <SiMicrosoftazure /> },
  { name: "GIT", icon: <FaGitAlt /> },
  { name: "Jira", icon: <FaJira /> },

  // Development Practices
  { name: "Agile", icon: <HiOutlineLightBulb /> },
  { name: "CI/CD", icon: <AiOutlineCi /> },

  // Database
  { name: "SQL", icon: <FaDatabase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Oracle", icon: <SiOracle /> },

  // Other
  { name: "Microservices", icon: <MdOutlineArchitecture /> },
  { name: "REST API", icon: <MdOutlineApi /> },
  { name: "NLP", icon: <HiOutlineLightBulb /> },
];

const Skills = () => {
  return (
    <section className="content1" id="skills">
      <div className="column centeralign">
        <span className="headerText" style={{ marginBottom: "1.5vh" }}>
          Skills
        </span>
        <div className="skill-scroll-container">
          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
