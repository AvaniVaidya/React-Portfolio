import React from "react";
import "../index.css";

export default function Publication() {
  return (
    <section className="content1" id="publication">
      <div className="column">
        <span className="headerText" style={{ marginBottom: "1.5vh" }}>
          Publication
        </span>
        <p className="publicationp">
          <span
            className="publications"
            style={{ fontWeight: "500", fontSize: "3vh" }}
          >
            Text Summarization and Classification of Conversation data between
            Service chatbot and Customer.
          </span>
        </p>
        <p className="publicationp">
          <span className="publications">Description: </span>Developed a web
          application to generate an Extractive Text summary of an offline
          conversation between service chatbot of an e-commerce website and the
          customer using Text Rank algorithm, which is further classified into
          three categories - Fake, Help and Complaint using Naive Bayes
          classification algorithm to give valuable insights to organizations.
        </p>
        <p className="publicationp">
          <span className="publications">Technology Stack: </span>Python, Flask,
          HTML, JavaScript, NLP
        </p>
        <p className="publicationp">
          <span className="publications">Publication URL: </span>
          <a
            href="https://ieeexplore.ieee.org/document/9210289"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ieeexplore.ieee.org/document/9210289
          </a>
        </p>
        <p className="publicationp">
          <span className="publications">Authors: </span>Tanmayee Behere; Avani
          Vaidya; Anamika Birhade; Komal Shinde; Pranjali Deshpande; Sunita
          Jahirabadkar
        </p>
      </div>
    </section>
  );
}
