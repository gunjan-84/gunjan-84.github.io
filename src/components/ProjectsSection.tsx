import { motion } from "framer-motion";
import { TrendingUp, Cpu, BarChart3, Zap } from "lucide-react";

const projects = [
  {
    icon: TrendingUp,
    title: "No-Code Backtesting Platform",
    description: "A full-featured platform for backtesting stocks and F&O strategies on the Indian market without writing code. Processes 7 years of data in under 1 minute.",
    tags: ["Python", "Django", "Redis", "Docker"],
  },
  {
    icon: Zap,
    title: "Live Trading & OMS",
    description: "Secure, scalable live trading system with a robust order management system. Handles real-time market data and executes trades with minimal latency.",
    tags: ["Python", "Flask", "MS SQL", "AWS"],
  },
  {
    icon: Cpu,
    title: "Stock Market Prediction (AI/ML)",
    description: "Research project evaluating ML algorithms for stock forecasting. Improved prediction accuracy from 62% to 75% using SVM, Neural Networks, and custom chart patterns.",
    tags: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    icon: BarChart3,
    title: "Custom Indicator Engine",
    description: "Built 20+ custom technical indicators supporting multiple timeframes. Includes chart patterns like head & shoulders, crossovers, range breakouts, triangles, and wedges.",
    tags: ["Python", "Polars", "Multiprocessing"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Projects</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Featured <span className="gradient-text">Work</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:border-glow"
            >
              <project.icon size={28} className="text-primary mb-4" />
              <h4 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:gradient-text transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-md bg-secondary text-primary border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
