import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "C++", "C"],
  },
  {
    category: "Frameworks",
    skills: ["Django", "Flask", "Gunicorn", "Nginx"],
  },
  {
    category: "Data & ML",
    skills: ["NumPy", "Pandas", "Polars", "Scikit-learn", "Matplotlib"],
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "AWS", "Git", "GitHub", "GitLab"],
  },
  {
    category: "Databases",
    skills: ["MS SQL", "MongoDB", "Redis"],
  },
  {
    category: "Concurrency",
    skills: ["Multiprocessing", "Multithreading"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Tech Stack</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-background border border-border"
            >
              <h4 className="font-mono text-xs text-primary uppercase tracking-wider mb-4">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="text-sm px-3 py-1.5 rounded-md bg-secondary text-foreground border border-border hover:border-primary/30 transition-colors cursor-default">
                    {skill}
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

export default SkillsSection;
