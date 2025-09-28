import { useEffect, useRef, useState } from "react";
import "./Sections.css";

export default function Intro() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} className={`intro ${visible ? "visible" : ""}`}>
      <p>
      Hello! I'm Abhijith Thanippilly Soman, a full-stack developer and cybersecurity enthusiast. I specialize in building secure, scalable, and user-friendly web applications, with a focus on delivering high-quality solutions that meet real-world business needs. I enjoy designing robust systems, implementing secure coding practices, and continuously improving my craft by staying up-to-date with modern technologies and cybersecurity trends. best practices.
      </p>
    </section>
  );
}
