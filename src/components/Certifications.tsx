import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award } from "lucide-react";

const certs = [
  { title: "MERN Stack", issuer: "NativeSoftTech", date: "Mar 2025" },
  { title: "Frontend Developer", issuer: "Techplement", date: "Dec 2024" },
  { title: "Frontend Technologies", issuer: "Simplilearn SkillUp", date: "2024" },
  { title: "Python, SQL & Databases", issuer: "IBM Developer Skills Network", date: "2024" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="Certifications" subtitle="Credentials" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <Award size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
