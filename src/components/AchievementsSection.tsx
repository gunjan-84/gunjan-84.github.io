import { motion } from "framer-motion";
import { Award, Star, Users, Trophy } from "lucide-react";

const achievements = [
  { icon: Trophy, text: "98.47 percentile in JEE (out of 9,35,755 candidates), 100/120 in Mathematics" },
  { icon: Star, text: "100/100 in Mathematics in 10th grade with 99.72 overall percentile" },
  { icon: Users, text: "Management Head of 'Dalal Street' stock trading event at MindBend tech fest" },
  { icon: Award, text: "Advisor at college cultural fest 'Sparsh'" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Achievements</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Notable <span className="gradient-text">Milestones</span>
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
            >
              <a.icon size={20} className="text-primary shrink-0 mt-0.5" />
              <p className="text-secondary-foreground text-sm leading-relaxed">{a.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
