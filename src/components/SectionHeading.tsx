import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ label, title, description, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    {label && (
      <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-primary" : "text-primary"}`}>
        {label}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl font-bold mt-2 ${light ? "text-secondary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-base max-w-2xl mx-auto ${light ? "text-secondary-foreground/60" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
