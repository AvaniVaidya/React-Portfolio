import React from "react";
import "../index.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

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
    score: "GPA: 3.7/4.0",
    location: "Santa Clara, United States",
  },
];

export default function Education() {
  return (
    // <section className="content" id="education">
    <section id="education" style={{ display: "flex", position: "relative" }}>
      <div style={{ position: "relative" }}>
        <span
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "5vh",
            width: "5vh",
            height: "80vh",
            backgroundColor: "#333",
            padding: "1vh 0vh 1vh 1vh",
            textAlign: "center",
            color: "white",
            zIndex: 100,
            position: "absolute", // Changed to absolute
            top: "5vh", // Adjust as needed
            left: "2vh", // Adjust as needed
          }}
        >
          Education Timeline
        </span>
      </div>
      <div
        className="column"
        style={{ flex: 1, position: "relative", marginLeft: "5vh" }}
      >
        {educationData.map((edu) => (
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="black" fontSize="1.5vh">
                {edu.start_year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent color="black" fontSize="1.5vh">
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
              <TimelineContent color="black" fontSize="1.5vh">
                {edu.end_year}
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        ))}
      </div>
    </section>
  );
}
