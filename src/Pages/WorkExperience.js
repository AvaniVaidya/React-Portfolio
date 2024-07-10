import React, { useState } from "react";
import "../index.css";

const workExperienceData = [
  {
    id: 1,
    company_name: "Deutsche Bank",
    title: "Software Engineering Intern",
    timeLine: "May 2019 - July 2019",
    duration: "2 months",
    skills: "Skills: Javascript, Node.js, AJAX, D3.js, C3.js",
    details:
      "• Formed a Key-Performance Indicator dashboard for project feature management utilizing Node.js.\n\nRetrieved feature information data from JIRA software through AJAX requests to the JIRA REST Service and transformed the JSON data into graphs/charts with D3.js/C3.js libraries providing valuable insights.",
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
      "• Developed UI with Razor Pages in .cshtml for CRUD operations, utilizing C# and .NET Framework for backend integration with MySQL based on MVC architecture, improving scalability and maintainability.\n\n• Secured server communication by validating server’s identity in Certificate SAN/CN fields.\n\n• Devised a mechanism for generating SNMP Active alarm reports in rolling files to monitor alarm status, cutting down operational costs by 15%.\n\n• Addressed bottleneck defects, increasing code quality and performance by 25%.",
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
      "• Created REST APIs for CRUD operations with Java, Spring Boot, OpenAPI, JPA for data persistence, and Kafka for publishing data in a single transaction, improving data consistency by 20% and reliability by 15%.\n\n• Synchronized Avaya adjunct elements with NGM database via WebSocket from on-premises to cloud service, ensuring seamless data integration and reducing latency by 25%.\n\n• Dropped code complexity by 70% through optimized algorithms, resulting in faster execution times.\n\n• Deployed cloud services on Linux containers using Kubernetes, Docker images and performance monitoring via kubectl, enhancing system scalability and reliability.\n\n• Enhanced code quality by decreasing code smells by 30% and increasing code coverage to 80% through writing JUnit test cases incorporating Mockito.",
  },
];

export default function WorkExperience() {
  return (
    <section className="content" id="workexperience">
      {/* <section className="content" id="workexperience"> */}
      <div className="column">
        <span className="headerText" style={{ marginBottom: "1.5vh" }}>
          Work Experience
        </span>
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
