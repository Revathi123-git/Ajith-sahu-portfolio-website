import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <SectionHeading title="Experience" subtitle="My journey" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative pl-8 border-l-2 border-primary/30"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-background" />
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <Briefcase size={18} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">Engineering Trainee</h3>
                <p className="text-sm text-primary">Cubic Transportation Systems</p>
              </div>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Working with cloud technologies and DevOps tools
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                Exposure to AWS, Docker, Kubernetes, Jenkins
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                Contributing to scalable engineering solutions
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
