import React from "react";
import "../index.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Header } from "../index.js";

const educationData = [
  {
    id: 1,
    start_year: "2013",
    end_year: "2014",
    degree: "High School",
    institution: "Dr. Kalmadi Shamarao High School",
    score: "Percentage: 94%",
    location: "Pune, India",
  },
  {
    id: 2,
    start_year: "2014",
    end_year: "2016",
    degree: "Intermediate/+2",
    institution: "Sir Parashurambhau college",
    score: "Percentage: 82%",
    location: "Pune, India",
  },
  {
    id: 3,
    start_year: "2016",
    end_year: "2020",
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "MKSSS's Cummins college of Engineering for Women",
    score: "GPA: 3.9/4.0",
    location: "Pune, India",
  },
  {
    id: 4,
    start_year: "2023",
    end_year: "Present",
    degree: "Master of Science in Computer Science and Engineering",
    institution: "Santa Clara University",
    score: "GPA: 3.6/4.0",
    location: "Santa Clara, United States",
  },
];

export default function Education() {
  return (
    <section className="commonSection" id="education">
      <Header />
      <div className="container">
        <section className="midSection" style={{ marginTop: "2%" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "3vh",
              marginLeft: "10%",
              color: "rgb(177, 134, 26)",
            }}
          >
            Education History
          </p>
          {educationData.map((edu) => (
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineOppositeContent color="black">
                  {edu.start_year}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent color="black">
                  {edu.degree}
                  <br />
                  {edu.institution}
                  <br />
                  {edu.score}
                  <br />
                  {edu.location}
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent color="black">{edu.end_year}</TimelineContent>
              </TimelineItem>
            </Timeline>
          ))}
        </section>
        <section className="midSection" style={{ marginTop: "2%" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: "3vh",
              marginLeft: "10%",
              color: "rgb(177, 134, 26)",
            }}
          >
            Courses
          </p>
        </section>
      </div>
    </section>
  );
}
