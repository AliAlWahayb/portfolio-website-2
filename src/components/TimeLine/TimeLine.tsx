import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {  IoLogoFigma } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava, FaPython } from "react-icons/fa";
import { DiProlog } from "react-icons/di";

const ComponentTemplate: React.FC = () => {
  return (
    <VerticalTimeline lineColor="#646cff">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#2d2d2d", boxShadow: "0 3px 0 #d1d1d6" }}
        textClassName="text-white"
        contentArrowStyle={{ borderRight: "7px solid  #2d2d2d" }}
        date="2025"
        iconStyle={{
          background: "#161616",
          boxShadow:
            "0 0 0 2px #646cff, inset 0 1px 0 rgba(0, 0, 0, .08), 0 2px 0 4px rgba(0, 0, 0, .05)",
        }}
        icon={<DiProlog  />}
        iconClassName="text-primary-base"
      >
        <h3 className="vertical-timeline-element-title pb-3 flex gap-3 text-primary-base">
          <p className="bg-card-100 inline-block px-2 py-1 rounded-lg elevation-5">
            Python
          </p>
          <p className="bg-card-100 inline-block px-2 py-1 rounded-lg elevation-5">
            Prolog
          </p>
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-text-base">
          Artificial Intelligence
        </h4>
        <p className="text-secondary-text-base">
          - Weather Prediction using Machine Learning <br />
          - Sudoku Solver using Machine Learning <br />
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#2d2d2d", boxShadow: "0 3px 0 #d1d1d6" }}
        textClassName="text-white"
        contentArrowStyle={{ borderRight: "7px solid  #2d2d2d" }}
        date="2024"
        iconStyle={{
          background: "#161616",
          boxShadow:
            "0 0 0 2px #646cff, inset 0 1px 0 rgba(0, 0, 0, .08), 0 2px 0 4px rgba(0, 0, 0, .05)",
        }}
        icon={<IoLogoFigma  />}
        iconClassName="text-primary-base"
      >
        <h3 className="vertical-timeline-element-title pb-3 flex gap-3 text-primary-base">
          <p className="bg-card-100 inline-block px-2 py-1 rounded-lg elevation-5">
            Figma
          </p>
          <p className="bg-card-100 inline-block px-2 py-1 rounded-lg elevation-5">
            Axure
          </p>
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-text-base">
          Software Engineering, Human Computer Interaction
        </h4>
        <p className="text-secondary-text-base">
          - Design an app interface for a mobile application <br />- Design a
          complete software project implementation plan
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#2d2d2d", boxShadow: "0 3px 0 #d1d1d6" }}
        textClassName="text-white"
        contentArrowStyle={{ borderRight: "7px solid  #2d2d2d" }}
        date="2023"
        iconStyle={{
          background: "#161616",
          boxShadow:
            "0 0 0 2px #646cff, inset 0 1px 0 rgba(0, 0, 0, .08), 0 2px 0 4px rgba(0, 0, 0, .05)",
        }}
        icon={<FaPython  />}
        iconClassName="text-primary-base"
      >
        <h3 className="vertical-timeline-element-title pb-3 flex gap-3 text-primary-base">
          <p className="bg-card-100 inline-block px-2 py-1 rounded-lg elevation-5">
            HTML
          </p>
          <p className="bg-card-100 inline-block px-2 py-1 rounded-lg elevation-5">
            CSS
          </p>
          <p className="bg-card-100 inline-block px-2 py-1 rounded-lg elevation-5">
            JavaScript
          </p>
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-text-base">
          Data Structures, Web Systems
        </h4>
        <p className="text-secondary-text-base">
          - Design and build a games E-Commerce website <br />- Design and build
          my personal website
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#2d2d2d", boxShadow: "0 3px 0 #d1d1d6" }}
        textClassName="text-white"
        contentArrowStyle={{ borderRight: "7px solid  #2d2d2d" }}
        date="2021"
        iconStyle={{
          background: "#161616",
          boxShadow:
            "0 0 0 2px #646cff, inset 0 1px 0 rgba(0, 0, 0, .08), 0 2px 0 4px rgba(0, 0, 0, .05)",
        }}
        icon={<FaJava />}
        iconClassName="text-primary-base"
      >
        <h3 className="vertical-timeline-element-title pb-3 flex gap-3 text-primary-base">
          <p className="bg-card-100 inline-block px-2 py-1 rounded-lg elevation-5">
            Java
          </p>
          <p className="bg-card-100 inline-block px-2 py-1 rounded-lg elevation-5">
            SQL
          </p>
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-text-base">
          Discrete Mathematics, Database Design
        </h4>
        <p className="text-secondary-text-base">
          - Develop a simple restaurant app in Java <br />- Create a student
          management system with a database backend
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#2d2d2d", boxShadow: "0 3px 0 #d1d1d6" }}
        textClassName="text-white"
        contentArrowStyle={{ borderRight: "7px solid  #2d2d2d" }}
        date="2020"
        iconStyle={{
          background: "#161616",
          boxShadow:
            "0 0 0 2px #646cff, inset 0 1px 0 rgba(0, 0, 0, .08), 0 2px 0 4px rgba(0, 0, 0, .05)",
        }}
        icon={<TbBrandCpp />}
        iconClassName="text-primary-base"
      >
        <h3 className="vertical-timeline-element-title pb-3 flex gap-3 text-primary-base">
          <p className="bg-card-100 inline-block px-2 py-1 rounded-lg elevation-5">
            C++
          </p>
          <p className="bg-card-100 inline-block px-2 py-1 rounded-lg elevation-5">
            Python
          </p>
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-text-base">
          Math, Intro to Programming
        </h4>
        <p className="text-secondary-text-base">
          - Build a basic auto-clicker tool in Python <br />- Develop a simple
          calculator app in C++
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default ComponentTemplate;
