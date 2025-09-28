import { useRef, useState, useEffect } from "react";
import useInView from "../hooks/useInView";
import "./Sections.css";

export default function Skills() {
  const skills = [["Angular", "React"], ["C#", "Python"], [".NET Framework", "SQL"]];
  const rowRefs = [useRef(null), useRef(null), useRef(null)];
  const [visibleRows, setVisibleRows] = useState([false, false, false]);

  rowRefs.forEach((ref, idx) => {
    const [r, inView] = useInView({ threshold: 0.3 });
    rowRefs[idx] = r;
    useEffect(() => {
      setVisibleRows((prev) => {
        const newVis = [...prev];
        newVis[idx] = inView;
        return newVis;
      });
    }, [inView]);
  });

  return (
    <section className="section skills">
      <div className="section-heading">
        <h2>Skills</h2>
        <div className="heading-line"></div>
      </div>

      <div className="skills-grid">
        {skills.map((rowSkills, rowIdx) => (
          <div key={rowIdx} ref={rowRefs[rowIdx]} className={`skill-row ${visibleRows[rowIdx] ? "fade-in" : ""}`}>
            {rowSkills.map((skill) => (
              <div key={skill} className={`skill-card ${visibleRows[rowIdx] ? "fill" : ""}`}>
                <span className="skill-text">{skill}</span>
                <div className="fill-bar"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
