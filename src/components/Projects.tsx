import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Content Generator",
    description: "An intelligent content generation tool powered by Python and Generative AI APIs, capable of generating blog posts, summaries, and marketing copy.",
    tech: ["Python", "GenAI", "FastAPI", "React"],
    github: "#",
    live: "#",
  },
  {
    title: "DevOps CI/CD Pipeline",
    description: "Automated CI/CD pipeline for containerized microservices with automated testing, building, and deployment to AWS ECS.",
    tech: ["Jenkins", "Docker", "AWS", "Kubernetes"],
    github: "#",
    live: "#",
  },
  {
    title: "MERN Stack Web App",
    description: "A full-stack task management application with real-time updates, authentication, and responsive design.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Data Analytics Dashboard",
    description: "Interactive analytics dashboard with real-time data visualizations, filters, and export capabilities built for business intelligence.",
    tech: ["Python", "SQL", "React", "Chart.js"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Projects" subtitle="What I've built" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 group flex flex-col"
            >
              <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-sm">
                  <Github size={16} /> Code
                </a>
                <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 text-sm">
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
