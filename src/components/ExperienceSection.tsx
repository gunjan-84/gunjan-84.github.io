import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Experience</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Career <span className="gradient-text">Timeline</span>
          </h3>
        </motion.div>

        <div className="space-y-8 max-w-3xl">
          {/* Arkalogi Tech */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-primary/30"
          >
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={16} className="text-primary" />
              <span className="font-mono text-xs text-primary">Nov 2024 – Present</span>
            </div>
            <h4 className="font-display text-xl font-semibold text-foreground mb-1">Founding Software Engineer / CTO</h4>
            <p className="text-muted-foreground text-sm mb-4">Arkalogi Tech — Surat, Gujarat</p>
            <ul className="space-y-2 text-secondary-foreground text-sm">
              <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Developed and deployed 30+ custom algorithmic trading strategies for Indian equity and F&O markets</li>
              <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Integrated 10+ brokers including Zerodha, Upstox, AngelOne, and AliceBlue for seamless multi-broker execution</li>
              <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Built real-time price feed integrations for NSE and BSE using broker WebSocket and REST APIs</li>
              <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Designed a scalable backtesting platform supporting custom timeframes and large historical datasets</li>
              <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Developed a secure and robust live OMS and Risk Management System (RMS) for active trading</li>
              <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Delivered production-ready trading infrastructure with focus on reliability, low latency, and extensibility</li>
            </ul>
          </motion.div>

          {/* Elite Technocrats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative pl-8 border-l-2 border-primary/30"
          >
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary/60 border-2 border-background" />
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={16} className="text-primary" />
              <span className="font-mono text-xs text-primary">Jul 2023 – Nov 2024</span>
            </div>
            <h4 className="font-display text-xl font-semibold text-foreground mb-1">Python Developer</h4>
            <p className="text-muted-foreground text-sm mb-4">Elite Technocrats — Surat, Gujarat</p>
            <ul className="space-y-2 text-secondary-foreground text-sm">
              <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Built 20+ complex strategy backtests using historical Indian stock market F&O data</li>
              <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Created a no-code backtesting platform delivering results in under 1 minute for 7 years of data</li>
              <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Developed a secure, scalable live trading and order management system (OMS)</li>
              <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Implemented 20+ custom indicators for various timeframes</li>
              <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Built a paper trading system for strategy validation</li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative pl-8 border-l-2 border-border"
          >
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-muted border-2 border-background" />
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={16} className="text-muted-foreground" />
              <span className="font-mono text-xs text-muted-foreground">July 2019 – June 2023</span>
            </div>
            <h4 className="font-display text-xl font-semibold text-foreground mb-1">B.Tech in Computer Science</h4>
            <p className="text-muted-foreground text-sm mb-2">SVNIT, Surat — CGPA: 7.02</p>
            <p className="text-secondary-foreground text-sm">
              Coursework: Data Structures, Computer Networks, DBMS, Software Engineering
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
