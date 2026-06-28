import React from "react";
import { Stethoscope, Vote, Eye, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      category: "AI / CIVIC TECH",
      title: "Chunav AI – AI-Powered Civic Assistant",
      description:
        "A multilingual AI assistant for election guidance and civic awareness. Features AI-powered conversations, voice input, and cloud deployment via Vercel.",
      tags: ["React.js", "Node.js", "Express", "Groq API"],
      link: "https://chunavai.vercel.app/",
      icon: (
        <Vote
          size={64}
          className="project-folder"
          style={{
            color: "var(--accent-primary)",
            transition: "color 0.3s ease",
          }}
        />
      ),
    },
    {
      category: "AI / HEALTHCARE",
      title: "MedBot (Medical Chatbot)",
      description:
        "A chatbot to answer basic medical queries using text input, built with vanilla JavaScript, HTML, CSS, and Google APIs for responses.",
      tags: ["JavaScript", "HTML/CSS", "Google APIs"],
      link: null,
      icon: (
        <Stethoscope
          size={64}
          className="project-folder"
          style={{
            color: "var(--accent-primary)",
            transition: "color 0.3s ease",
          }}
        />
      ),
    },
    {
      category: "IOT / ANDROID",
      title: "Nazar – Smart Blind Stick Companion App",
      description:
        "Real-time Android app interfacing with an IoT-based smart blind stick. Monitors live sensor data, hazard alerts, and graphs via Firebase, with Google Sign-In authentication.",
      tags: ["Kotlin", "Android", "Firebase", "Google Sign-In API"],
      link: null,
      icon: (
        <Eye
          size={64}
          className="project-folder"
          style={{
            color: "var(--accent-primary)",
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
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-panel"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              cursor: project.link ? "pointer" : "default",
            }}
          >
            {/* Icon banner area */}
            <div
              style={{
                background: "rgba(8, 145, 178, 0.08)",
                borderBottom: "1px solid rgba(8, 145, 178, 0.15)",
                height: "180px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {project.icon}
            </div>

            {/* Content */}
            <div
              style={{
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
              }}
            >
              {/* Category */}
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: "600",
                  letterSpacing: "0.08em",
                  color: "var(--accent-primary)",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                }}
              >
                {project.category}
              </span>

              {/* Title + link */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                  marginBottom: "0.85rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                {project.link && (
                  <span
                    onClick={() =>
                      window.open(project.link, "_blank", "noopener,noreferrer")
                    }
                    style={{
                      color: "var(--accent-primary)",
                      flexShrink: 0,
                      marginTop: "2px",
                      cursor: "pointer",
                    }}
                  >
                    <ExternalLink size={18} />
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.92rem",
                  lineHeight: "1.65",
                  flexGrow: 1,
                  marginBottom: "1.25rem",
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    style={{
                      background: "rgba(8, 145, 178, 0.08)",
                      border: "1px solid rgba(8, 145, 178, 0.2)",
                      color: "var(--text-secondary)",
                      fontSize: "0.78rem",
                      padding: "4px 12px",
                      borderRadius: "999px",
                      fontFamily: "monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
