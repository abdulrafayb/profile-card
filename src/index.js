import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillsData = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "Bootstrap",
    level: "advanced",
    color: "skyblue",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "lightgreen",
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
  return <img className="avatar" src="./avatar.jpeg" alt="Abdul Rafay" />;
}

function Intro() {
  return (
    <div>
      <h1>Abdul Rafay</h1>
      <h4>Front-End Developer</h4>
    </div>
  );
}

function SkillList() {
  const skills = skillsData;
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "🐣"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
