import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from './About';

const groups = [
  { category: 'Frontend', color: '#00ffb3', skills: [{ name: 'React.js', level: 95 }, { name: 'Redux', level: 88 }, { name: 'JavaScript ES6+', level: 92 }, { name: 'Tailwind CSS', level: 85 }, { name: 'HTML5 / CSS3', level: 95 }, { name: 'Bootstrap', level: 78 }] },
  { category: 'Backend', color: '#00d4ff', skills: [{ name: 'Spring Boot', level: 75 }, { name: 'REST APIs', level: 88 }, { name: 'JWT Auth', level: 82 }, { name: 'Java', level: 78 }] },
  { category: 'Databases', color: '#a78bfa', skills: [{ name: 'PostgreSQL', level: 80 }, { name: 'MySQL', level: 75 }, { name: 'MongoDB', level: 72 }, { name: 'PostGIS', level: 65 }] },
  { category: 'Tools', color: '#ffd700', skills: [{ name: 'Git / GitHub', level: 90 }, { name: 'VS Code', level: 95 }, { name: 'IntelliJ IDEA', level: 80 }, { name: 'pgAdmin', level: 75 }, { name: 'Maven', level: 78 }, { name: 'Docker', level: 70 }] },
  { category: 'Deploy', color: '#ff6b6b', skills: [{ name: 'Vercel', level: 92 }, { name: 'Render', level: 80 }, { name: 'Railway', level: 75 }, { name: 'Neon', level: 72 }, { name: 'Supabase', level: 70 }] },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const group = groups[active];

  return (
    <section id="skills" style={{ padding: '8rem 2rem', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <SectionLabel text="Technical Skills" />
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1, letterSpacing: '-0.03em' }}>
            My <span style={{ color: 'var(--accent)' }}>stack</span>
          </motion.h2>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {groups.map((g, i) => (
              <motion.button key={g.category} onClick={() => setActive(i)}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                style={{
                  padding: '8px 18px', borderRadius: '100px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                  fontWeight: 500, cursor: 'pointer', letterSpacing: '0.04em',
                  border: i === active ? `1px solid ${g.color}` : '1px solid var(--border)',
                  background: i === active ? `${g.color}12` : 'transparent',
                  color: i === active ? g.color : 'var(--muted2)',
                  transition: 'all 0.2s',
                }}>
                {g.category}
              </motion.button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="skills-layout">
          {/* Bar chart */}
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {group.skills.map(({ name, level }, i) => (
                <div key={name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontWeight: 500, fontSize: '0.88rem' }}>{name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: group.color }}>{level}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${level}%` }}
                      viewport={{ once: false }} transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      style={{ height: '100%', background: `linear-gradient(90deg, ${group.color}, ${group.color}88)`, borderRadius: '4px', boxShadow: `0 0 8px ${group.color}60` }} />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Floating orbs */}
          <AnimatePresence mode="wait">
            <motion.div key={active + '-orbs'}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: 'relative', height: '320px' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 180, height: 180, borderRadius: '50%', border: `1px solid ${group.color}20`, boxShadow: `0 0 60px ${group.color}08` }} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 260, height: 260, borderRadius: '50%', border: `1px solid ${group.color}10` }} />
              <motion.div
                animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', top: '50%', left: '50%', width: 300, height: 300, marginTop: -150, marginLeft: -150 }}>
                {group.skills.map(({ name }, i) => {
                  const angle = (i / group.skills.length) * 2 * Math.PI;
                  const r = 130;
                  return (
                    <motion.div key={name}
                      animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      whileHover={{ scale: 1.2 }}
                      style={{
                        position: 'absolute',
                        left: 150 + r * Math.cos(angle) - 40,
                        top: 150 + r * Math.sin(angle) - 16,
                        fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                        color: group.color, background: `${group.color}10`,
                        border: `1px solid ${group.color}30`, borderRadius: '100px',
                        padding: '4px 10px', whiteSpace: 'nowrap', cursor: 'default',
                      }}>
                      {name}
                    </motion.div>
                  );
                })}
              </motion.div>
              {/* Center dot */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 40, height: 40, borderRadius: '50%', background: `${group.color}18`, border: `1px solid ${group.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: group.color, boxShadow: `0 0 12px ${group.color}` }} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .skills-layout { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
