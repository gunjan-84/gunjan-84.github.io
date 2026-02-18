import { motion } from "framer-motion";
import { TrendingUp, Code2, Database, Server } from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "Algo Strategies Built", value: "75+" },
  { icon: Code2, label: "Brokers Integrated", value: "10+" },
  { icon: Database, label: "Low Latency Robust Systems", value: "<10ms" },
  { icon: Server, label: "Live Trading Systems", value: "Production" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// About</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Building the Future of <span className="gradient-text">Algo Trading</span>
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed mb-12">
            Python Developer specializing in stock market technology. Graduate from SVNIT Surat with a focus on
            building scalable trading platforms, backtesting engines, and live order management systems
            for the Indian F&O market.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:border-glow transition-all duration-500 group"
            >
              <stat.icon size={24} className="text-primary mb-3 group-hover:text-glow transition-colors" />
              <p className="font-mono text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
