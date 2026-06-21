import { motion } from 'framer-motion';
import { Code2, Layers, Zap, Users } from 'lucide-react';

const marqueeItems = ['React.js', 'Redux', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS', 'JWT Auth', 'REST APIs', 'MongoDB', 'Java', 'Git', 'Leaflet.js', 'UI/UX'];

const stats = [
  { value: '5+', label: 'Projects' },
  { value: '8.1', label: 'CGPA' },
  { value: '12+', label: 'Technologies' },
  { value: '4mo', label: 'Experience' },
];

const traits = [
  { icon: <Code2 size={20} />, title: 'Clean Code' },
  { icon: <Layers size={20} />, title: 'State Mastery' },
  { icon: <Zap size={20} />, title: 'Performance' },
  { icon: <Users size={20} />, title: 'Team Player' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 0', overflow: 'hidden' }}>

      {/* Marquee */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '14px 0', marginBottom: '6rem', position: 'relative' }}>
        <div style={{ display: 'flex', gap: '3rem', width: 'max-content', animation: 'marquee 18s linear infinite' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '3rem' }}>
              {item} <span style={{ color: 'var(--accent)', opacity: 0.4 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '5rem', alignItems: 'end' }} className="about-header">
          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <SectionLabel text="About Me" />
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, letterSpacing: '-0.03em', marginTop: '1.5rem' }}>
              I build things<br />
              <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)', color: 'transparent' }}>for the</span>{' '}
              <span style={{ color: 'var(--accent)' }}>web.</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
            <p style={{ color: 'var(--muted2)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
              B.Tech IT student at UCE BIT Campus, Tiruchirappalli (CGPA: 8.1). Interned at Hirewalks, Bangalore — built production frontend modules for the Rewardify platform.
            </p>
            <p style={{ color: 'var(--muted2)', lineHeight: 1.85, fontSize: '1rem' }}>
              Specializing in React.js + Redux, REST APIs, JWT auth, and responsive design. Looking for my next role to ship great products at scale.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
              {['aravinthviswa4@gmail.com', '+91 90809 68033'].map((v, i) => (
                <motion.a key={v} href={i === 0 ? `mailto:${v}` : `tel:${v.replace(/\s/g,'')}`}
                  whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted2)', border: '1px solid var(--border)', borderRadius: '6px', padding: '6px 12px', transition: 'all 0.2s' }}>
                  {v}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', marginBottom: '4rem' }} className="stats-grid">
          {stats.map(({ value, label }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ background: 'rgba(0,255,179,0.04)' }}
              style={{ background: 'var(--card)', padding: '2.5rem 2rem', textAlign: 'center', transition: 'background 0.3s' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{value}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Traits */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="traits-grid">
          {traits.map(({ icon, title }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              whileHover={{ borderColor: 'var(--accent)', y: -4, boxShadow: '0 12px 40px rgba(0,255,179,0.08)' }}
              style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'default', transition: 'border-color 0.2s' }}>
              <span style={{ color: 'var(--accent)' }}>{icon}</span>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{title}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-header { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .traits-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        ◆ {text}
      </span>
    </motion.div>
  );
}
