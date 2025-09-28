import useInView from "../hooks/useInView";
import "./Sections.css";

export default function Projects() {
  const [projRef, projInView] = useInView({ threshold: 0.2 });

  const projects = [
    {
      title: "Startup Platform: Idea Submission & Funding Matchmaking",
      desc: "A full-stack platform designed to connect innovators with investors by collecting startup ideas and funding interests. The system was built with Angular 19 and Bootstrap 5 to deliver a responsive SPA, while ASP.NET Core 9 provided a secure RESTful backend. PostgreSQL via Supabase handled persistent storage, AWS S3 managed files with presigned URLs, and authentication was secured using JWT and BCrypt. Docker ensured portability and smooth deployment.",
      github: "https://github.com/abhijithts16/startup-platform",
      live: "https://startup-platform-9jbk.onrender.com/",
    },
    {
      title: "API Anomaly Predictor: Real-Time Threat Detection",
      desc: "Implemented a middleware-based API gateway capable of real-time anomaly detection using machine learning models. A One-Class SVM was trained on benign data for unsupervised detection, while a Hybrid Random Forest provided accurate classification of malicious requests. Flask served as the backend with dedicated endpoints for prediction, complemented by a simple test UI. Preprocessing pipelines ensured consistency, while evaluation showed strong results under simulated real-world API workloads.",
      github: "https://github.com/abhijithts16/API-Anomaly-Predictor",
    },
    {
      title: "Online Grocery Store: Secure E-Commerce Platform",
      desc: "Developed as a full-stack e-commerce application, this project allowed browsing, cart management, and order placement with role-based access for admins, sellers, and customers. Built using Flask and MySQL, it offered features like inventory control, order tracking, and promotional discounts. Security was prioritized through Flask-Bcrypt, Flask-WTF, and hardened sessions, with Bandit static analysis ensuring code safety. Bootstrap 5 and Jinja templates delivered a responsive, user-friendly front-end shopping experience.",
      github: "https://github.com/abhijithts16/Online-Grocery-Store",
    },
  ];

  return (
    <section className="section projects">
      <div className="section-heading">
        <h2>Projects</h2>
        <div className="heading-line"></div>
      </div>

      <div ref={projRef} className={`projects-grid ${projInView ? "fade-in" : ""}`}>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">Live</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
