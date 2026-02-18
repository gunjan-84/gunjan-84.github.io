import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Contact</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            Interested in algo trading, market tech, or just want to chat? Reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a href="mailto:solankigunjan02@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
            <Mail size={16} /> Email Me
          </a>
        </motion.div>

        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <a href="https://github.com/gunjan-84" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="https://linkedin.com/in/solankigunjan" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <span className="flex items-center gap-1 text-sm"><MapPin size={14} /> Surat, Gujarat</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
