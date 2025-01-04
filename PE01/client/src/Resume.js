import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Varunprakash Shanmugam</h1>
        <p>123 Seattle, WA USA | (206) 218-1234 | shanmugamvarunpraka@cityuniversity.edu</p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, WA USA | March 2025</p>
          <p>GPA: 3.9/4.0</p>

          <h3>Bachelor of Engineering in Mechanical Engineering</h3>
          <p>Anna University, India | May 2022</p>
          <p>GPA: 3.7/4.0</p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <ul>
            <li>Web Development</li>
            <li>Technical Support</li>
            <li>Server Administration</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>
        <div className="experience">
          <h3>DevOps Engineer</h3>
          <p>Wipro September 2022 - July 2023</p>
          <p>Worked as a DevOps engineer</p>
        </div>
      </section>

       <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Learning Management System - LMS</h3>
          <p>Flexible and ease to use web application for educational purpose</p>
        </div>
      </section>

    </div>
  );
};

export default Resume;