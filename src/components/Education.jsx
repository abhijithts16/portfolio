import useInView from "../hooks/useInView";
import "./Sections.css";

export default function Education() {
  const [masterRef, masterInView] = useInView();
  const [bachelorRef, bachelorInView] = useInView();
  const [schoolRef, schoolInView] = useInView();

  return (
    <section className="section education">
      <div className="section-heading">
        <h2>Education</h2>
        <div className="heading-line"></div>
      </div>

      <div ref={masterRef} className={`section-content ${masterInView ? "fade-in" : ""}`}>
        <div className="section-left">
          <p className="dates">Sep 2024 – Sep 2025</p>
          <p className="company">National College of Ireland, Dublin</p>
        </div>
        <div className="section-right">
          <h3>M.Sc. in Cyber Security</h3>
          <p>
          I successfully completed my Master’s in Cyber Security, where I gained in-depth expertise across 
          key security domains such as network security, penetration testing, secure web development, cryptography,
           cloud architectures, malware analysis, and incident management. The program emphasized a security-first 
           mindset and secure coding practices, enabling me to design and implement resilient systems against evolving 
           cyber threats. Beyond technical knowledge, I also developed a strong understanding of governance, ethics, 
           and sustainability in cybersecurity, equipping me to approach challenges with both technical precision and 
           strategic foresight.
          </p>
        </div>
      </div>

      <div ref={bachelorRef} className={`section-content ${bachelorInView ? "fade-in" : ""}`}>
        <div className="section-left">
          <p className="dates">Jul 2018 – Jul 2022</p>
          <p className="company">Christ College of Engineering, Kerala, India</p>
        </div>
        <div className="section-right">
          <h3>B.Tech in Computer Science and Engineering</h3>
          <p>
          A four-year undergraduate program that provided me with a comprehensive foundation in computer science, 
          including programming, database systems, operating systems, algorithms, computer networks, and software engineering.
           I graduated with an aggregate CGPA of 9.45/10, consistently applying concepts through academic projects and
            practical coursework. This program strengthened my analytical thinking, problem-solving skills, and ability 
            to work collaboratively—forming a strong base for my professional journey in software development and security.
          </p>
        </div>
      </div>

      <div ref={schoolRef} className={`section-content ${schoolInView ? "fade-in" : ""}`}>
        <div className="section-left">
          <p className="dates">Jun 2017 – Mar 2018</p>
          <p className="company">CBSE Board</p>
        </div>
        <div className="section-right">
          <h3>Higher Secondary Education</h3>
          <p>
           Over the two years of my higher secondary education specializing in the Computer Science stream, 
           I gained a strong foundation in programming and computational thinking,
            particularly through C++, which introduced me to structured programming, algorithms, and 
            object-oriented design. This early exposure to coding nurtured my curiosity for technology
             and inspired me to pursue computer science at the undergraduate level.
          </p>
        </div>
      </div>
    </section>
  );
}
