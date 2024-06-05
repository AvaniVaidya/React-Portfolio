import React, { useState } from "react";
import "../index.css";
import { Header } from "../index.js";

const workExperienceData = [
  {
    id: 1,
    company_name: "Deutsche Bank",
    title: "Software Engineering Intern",
    timeLine: "May 2019 - July 2019",
    duration: "2 months",
    skills: "Skills: Javascript, Node.js, AJAX, D3.js, C3.js",
    details:
      "• Formed a Key-Performance Indicator Dashboard for Project Feature Management utilizing Node.js. \n\n• Retrieved feature information data from JIRA software through AJAX requests to the JIRA REST Service and transformed the JSON data in graphs/charts with D3.js/C3.js libraries to provide valuable insights.",
  },
  {
    id: 2,
    company_name: "Avaya",
    title: "Software Engineer",
    timeLine: "July 2020 - September 2022",
    duration: "2 years 2 months",
    skills:
      "Skills: C#, .NET MVC Framework, ASP.NET, WCF, IIS, HTML5, CSS, Javascript",
    details:
      "Implemented features for an Admin tool supervising communication element across Avaya based environment – a bundle of Web Applications deployed on IIS with Windows Communication Foundation as backbone of it. \n\n• Achieved a 30% reduction in user response time by caching call center agent data in the database, eliminating redundant REST API calls to the Avaya adjunct element and synchronizing data retrieval with user requests.\n\n• Secured server communication by validating server’s identity in its Certificate SAN/CN fields.\n\n• Devised a mechanism to generate SNMP Active alarm reports dumped into a rolling file to view alarm status.\n\n• Addressed customer escalations and defects promptly with accurate solutions.\n\n\n Established Server-Sent Events for streaming real-time notifications from Server to Client\n\n• Constructed two modules: a Client-side Notification plug-in in jQuery that involved Server-Sent Events (SSE), an HTML5 specification to attain real-time rendering of messages, connection status and errors, and a Server-side ASP.NET CORE platform independent web application for notification management.\n\n• Designed and implemented a user interface utilizing JavaScript, HTML, and CSS, featuring a hamburger menu icon. Integrated a real-time notification panel displaying dynamic updates. Implemented functionality allowing users to delete unnecessary notifications and seamlessly scroll through the menu.",
  },
  {
    id: 3,
    company_name: "Avaya",
    title: "Software Engineer I",
    timeLine: "October 2022 - August 2023",
    duration: "10 months",
    skills:
      "Skills: Java, Spring boot, Kubernetes, Kafka, Microsoft Azure, Microservices Architecture, Web API Development(REST API), OPEN API Specification Standard",
    details:
      "Collaborated in building an administrative tool to control and manage Avaya communication elements across Avaya based envi- ronment – a cloud-based offering built on Microservices architecture hosted on Kubernetes platform.\n\n• Created REST API for Avaya adjunct element CRUD operations leveraging OpenAPI Specification Standards with data persistence via JPA and publication on Kafka in a single transaction.\n\n• Attained synchronization of Avaya adjunct element and NGM database by fetching JSON data over WebSocket connection from an on-prem connector to cloud-based service, resolving 95% of encountered diverse conflicting cases.\n\n• Proposed and executed strategy to detect eliminated intervals within user-updated ranges, with reduced code complexity by eliminating 70% of previous algorithm’s conditional statements.\n\n• Successfully orchestrated the deployment of a cloud-based service on a Linux container using Kubernetes, while leveraging CCM commands for installation. This process involved fetching the necessary images from remote Docker repositories and closely monitoring the deployment’s health and performance metrics through kubectl commands.\n\n• Played a key role in reducing code smells and increasing code coverage.",
  },
];

export default function WorkExperience() {
  return (
    <section className="commonSection" id="workexperience">
      <Header />
      <div className="container">
        <FlashCard />
      </div>
    </section>
  );
}

function FlashCard() {
  const [selectedId, setSelectedId] = useState(null);

  function handleCardClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {workExperienceData.map((company) => (
        <div
          key={company.id}
          onClick={() => handleCardClick(company.id)}
          className={`flashcard ${company.id === selectedId ? "selected" : ""}`}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <p>
                <h1 style={{ fontFamily: "Bold", fontSize: "5vh" }}>
                  {company.company_name}
                </h1>
                <br />
                <h2>{company.title}</h2>
                <br />
                <h2>{company.timeLine}</h2>
                <br />
                <h2>{company.duration}</h2>
                <br />
                <h2>{company.skills}</h2>
              </p>
              <p className="flashcard-footer">Click for more details</p>
            </div>
            <div className="flashcard-back">
              <p style={{ fontSize: "1.8vh" }}>{company.details}</p>
              <p className="flashcard-footer">Click to go back</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
