import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import profilePic from "../assets/profilePic.jpg";

export default function Summary() {
  return (
    <section className="summary">
      {/* Left side: image */}
      <div className="profile-pic">
        <img src={profilePic} alt="Abhijith"/>
      </div>

      {/* Right side: details */}
      <div className="profile-details">
        <h1>Abhijith Thanippilly Soman</h1>
        <h3>Full-Stack Developer with Cybersecurity Expertise</h3>
        <p><FaPhone /> +353 899 615 104</p>
          <p><FaEnvelope /> abhijithts16@gmail.com</p>
          <p><FaLinkedin /> <a href="https://linkedin.com/in/abhijithts16" target="_blank">linkedin.com/in/abhijithts16</a></p>
          <p><FaGithub /> <a href="https://github.com/abhijithts16" target="_blank">github.com/abhijithts16</a></p>

      </div>
    </section>
  );
}