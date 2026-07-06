import { motion } from 'framer-motion';
import { GitFork, Mail, ArrowUp } from 'lucide-react';

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

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
          { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/aravinth-v-dev/' },
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
