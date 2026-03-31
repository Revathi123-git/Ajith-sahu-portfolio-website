import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="About Me" subtitle="Get to know me" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            I am a passionate Engineering Trainee at Cubic Transportation Systems with a strong foundation in Python, Data Structures & Algorithms, and modern web technologies. I enjoy building scalable applications and exploring emerging fields like Generative AI and DevOps. I completed my Bachelor of Technology from Raghu Engineering College, Visakhapatnam. I am highly enthusiastic about learning new technologies and continuously improving my skills. Beyond technology, I enjoy traveling and long drives with friends.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Briefcase, label: "Engineering Trainee", sub: "Cubic Transportation" },
              { icon: GraduationCap, label: "B.Tech Graduate", sub: "Raghu Engineering College" },
              { icon: MapPin, label: "Hyderabad", sub: "Telangana, India" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50"
              >
                <item.icon size={20} className="text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
