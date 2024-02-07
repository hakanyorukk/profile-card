import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "React",
    level: "beginner",
    color: "blue",
  },
  {
    skill: "Git-GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "HTML",
    level: "advanced",
    color: "#2662EA",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="jaguar.jpg" alt="jaguar" />;
}
function Intro() {
  return (
    <div>
      <h1>Hakan Yoruk</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((ski) => (
        <Skill skillObj={ski} />
      ))}
      {/* <Skill name="React" emoji="💪" color="blue" />
      <Skill name="HTML+CSS" emoji="💪" color="orange" />
      <Skill name="JavaScript" emoji="💪" color="yellow" />
      <Skill name="Svelte" emoji="👶" color="orangered" /> */}
    </div>
  );
}

function Skill({ skillObj }) {
  console.log(skillObj);
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
