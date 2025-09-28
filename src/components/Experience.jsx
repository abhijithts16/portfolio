import useInView from "../hooks/useInView";
import "./Sections.css";

export default function Experience() {
  const [jobRef, jobInView] = useInView({ threshold: 0.2 });

  return (
    <section className="section experience">
      <div className="section-heading">
        <h2>Experience</h2>
        <div className="heading-line"></div>
      </div>

      <div ref={jobRef} className={`section-content ${jobInView ? "fade-in" : ""}`}>
        <div className="section-left">
          <p className="dates">Aug 2022 – Sep 2024</p>
          <h3 className="company">SOTI</h3>
        </div>
        <div className="section-right">
          <h3>Software Developer</h3>
          <p>
          At SOTI, I worked as a Software Developer on MobiControl, the company’s flagship product. 
          As a full-stack engineer, I built and maintained well-structured, scalable modules using .NET, 
          Angular, and SQL Server, focusing on functionality, performance, and clean code. 
          I often explored unfamiliar codebases, tackled ambiguous problems, and suggested practical 
          solutions to support business goals. Working in an Agile team, I delivered features on schedule, 
          followed Scrum practices, and kept high standards on all tasks. I also continuously expanded my 
          technical and product knowledge to contribute effectively to the team.
          </p>
        </div>
      </div>
    </section>
  );
}
