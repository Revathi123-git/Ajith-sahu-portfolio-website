import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">{subtitle}</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      <div className="w-20 h-1 gradient-bg rounded-full mx-auto mt-4" />
    </motion.div>
  );
};

export default SectionHeading;
