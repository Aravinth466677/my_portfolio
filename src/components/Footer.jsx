import { motion } from 'framer-motion';
import { GitFork, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 2rem', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)' }}>
          © 2025 <span style={{ color: 'var(--accent)' }}>Aravinth V</span>
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'block', boxShadow: '0 0 6px #4ade80' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>open_to_work</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {[
          { icon: <GitFork size={15} />, href: 'https://github.com/Aravinth466677' },
          { icon: <Mail size={15} />, href: 'mailto:aravinthviswa4@gmail.com' },
        ].map(({ icon, href }, i) => (
          <motion.a key={i} href={href} target="_blank" rel="noreferrer"
            whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)', y: -2 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: 'var(--muted)', width: 32, height: 32, border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
            {icon}
          </motion.a>
        ))}
        <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)', y: -2 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: 'var(--muted)', width: 32, height: 32, border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
          <ArrowUp size={15} />
        </motion.button>
      </div>
    </footer>
  );
}
