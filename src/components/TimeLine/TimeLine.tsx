import React, { useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoLogoFigma } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava, FaPython } from "react-icons/fa";
import { DiProlog } from "react-icons/di";

// Style constants
const contentStyle = { 
  background: "#2d2d2d", 
  boxShadow: "0 3px 0 #d1d1d6" 
};

const iconStyle = {
  background: "#161616",
  boxShadow: "0 0 0 2px #646cff, inset 0 1px 0 rgba(0, 0, 0, .08), 0 2px 0 4px rgba(0, 0, 0, .05)",
};

const arrowStyle = { 
  borderRight: "7px solid #2d2d2d" 
};

// Data-driven structure
const timelineEvents = [
  {
    id: 1,
    year: "2025",
    Icon: DiProlog,
    skills: ["Python", "Prolog"],
    title: "Artificial Intelligence",
    content: `- Weather Prediction using Machine Learning<br/>
             - Sudoku Solver using Machine Learning`
  },
  {
    id: 2,
    year: "2024",
    Icon: IoLogoFigma,
    skills: ["Figma", "Axure"],
    title: "Software Engineering, Human Computer Interaction",
    content: `- Design an app interface for a mobile application<br/>
             - Design a complete software project implementation plan`
  },
  {
    id: 3,
    year: "2023",
    Icon: FaPython,
    skills: ["HTML", "CSS", "JavaScript"],
    title: "Data Structures, Web Systems",
    content: `- Design and build a games E-Commerce website<br/>
             - Design and build my personal website`
  },
  {
    id: 4,
    year: "2021",
    Icon: FaJava,
    skills: ["Java", "SQL"],
    title: "Discrete Mathematics, Database Design",
    content: `- Develop a simple restaurant app in Java<br/>
             - Create a student management system with a database backend`
  },
  {
    id: 5,
    year: "2020",
    Icon: TbBrandCpp,
    skills: ["C++", "Python"],
    title: "Math, Intro to Programming",
    content: `- Build a basic auto-clicker tool in Python<br/>
             - Develop a simple calculator app in C++`
  }
];

const TimelineComponent: React.FC = React.memo(() => {
  const memoizedEvents = useMemo(() => timelineEvents, []);

  return (
    <VerticalTimeline lineColor="#646cff">
      {memoizedEvents.map(event => (
        <VerticalTimelineElement
          key={event.id}
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          textClassName="text-white"
          contentArrowStyle={arrowStyle}
          date={event.year}
          iconStyle={iconStyle}
          icon={<event.Icon />}
          iconClassName="text-primary-base"
        >
          <h3 className="vertical-timeline-element-title pb-3 flex gap-3 text-primary-base">
            {event.skills.map((skill, index) => (
              <span 
                key={`${event.id}-${index}`}
                className="bg-card-100 inline-block px-2 py-1 rounded-lg elevation-5"
              >
                {skill}
              </span>
            ))}
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-text-base">
            {event.title}
          </h4>
          <p 
            className="text-secondary-text-base"
            dangerouslySetInnerHTML={{ __html: event.content }}
          />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
});

export default TimelineComponent;