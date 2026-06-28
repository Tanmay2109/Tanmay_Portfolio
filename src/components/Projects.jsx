import React from "react";
import { Stethoscope, Vote, Accessibility } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Chunav AI – AI-Powered Civic Assistant",
      description:
        "A multilingual AI assistant for election guidance and civic awareness. Features AI-powered conversations, voice input, and cloud deployment via Vercel.",
      tags: ["React.js", "Node.js", "Express", "Groq API"],
      link: "https://chunavai.vercel.app/",
      icon: (
        <Vote
          size={40}
          className="project-folder"
          style={{
            color: "var(--text-primary)",
            transition: "color 0.3s ease",
          }}
        />
      ),
    },
    {
      title: "MedBot (Medical Chatbot)",
      description:
        "A chatbot to answer basic medical queries using text input, built with vanilla JavaScript, HTML, CSS, and Google APIs for responses.",
      tags: ["JavaScript", "HTML/CSS", "Google APIs"],
      icon: (
        <Stethoscope
          size={40}
          className="project-folder"
          style={{
            color: "var(--text-primary)",
            transition: "color 0.3s ease",
          }}
        />
      ),
    },
    {
      title: "Nazar – Smart Blind Stick Companion App",
      description:
        "Real-time Android app interfacing with an IoT-based smart blind stick. Monitors live sensor data, hazard alerts, and graphs via Firebase, with Google Sign-In authentication.",
      tags: ["Kotlin", "Android", "Firebase", "Google Sign-In API"],
      icon: (
        <Accessibility
          size={40}
          className="project-folder"
          style={{
            color: "var(--text-primary)",
            transition: "color 0.3s ease",
          }}
        />
      ),
    },
  ];

  return (
    <section
      id="projects"
      className="container bg-grid-3d"
      style={{ padding: "6rem 2rem" }}
    >
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-panel"
            style={{
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "perspective(1500px) scale(1.05) translateY(-15px) rotateX(4deg) rotateY(-4deg)";
              e.currentTarget.style.borderColor = "var(--accent-primary)";
              e.currentTarget.style.boxShadow =
                "-20px 20px 50px rgba(0,0,0,0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)";
              e.currentTarget.querySelector(".project-folder").style.color =
                "var(--accent-primary)";
              e.currentTarget.querySelector(".project-folder").style.transform =
                "scale(1.2) translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "perspective(1500px) scale(1) translateY(0) rotateX(0) rotateY(0)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.querySelector(".project-folder").style.color =
                "var(--text-primary)";
              e.currentTarget.querySelector(".project-folder").style.transform =
                "scale(1) translateY(0)";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              {project.icon}
            </div>

            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "1rem",
                color: "var(--text-primary)",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                flexGrow: 1,
                fontSize: "0.95rem",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginTop: "auto",
              }}
            >
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.8rem",
                    fontFamily: "monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
