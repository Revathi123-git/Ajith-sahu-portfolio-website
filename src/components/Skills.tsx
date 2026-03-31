import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 70 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML & CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "React.js", level: 75 },
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS", level: 70 },
      { name: "Docker", level: 72 },
      { name: "Kubernetes", level: 65 },
      { name: "Jenkins", level: 68 },
    ],
  },
  {
    title: "Tools & Concepts",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "DSA", level: 78 },
      { name: "Microservices", level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full gradient-bg"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Skills & Expertise" subtitle="What I work with" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-5">{cat.title}</h3>
              {cat.skills.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={si * 0.15} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
