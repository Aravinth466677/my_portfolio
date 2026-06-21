import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { SectionLabel } from './About';

const items = [
  {
    type: 'work', icon: <Briefcase size={16} />, color: '#00ffb3',
    period: 'Mar 2025 – Jun 2025', title: 'React Development Intern',
    org: 'Hirewalks, Bangalore',
    points: [
      'Built frontend modules for Rewardify using React.js + Redux with reusable component architecture.',
      'Integrated REST APIs and implemented JWT authentication workflows.',
      'Improved responsive UI across desktop and mobile using Tailwind CSS.',
      'Collaborated on debugging, feature integration, and frontend testing.',
    ],
  },
  {
    type: 'edu', icon: <GraduationCap size={16} />, color: '#00d4ff',
    period: 'Sep 2022 – Present', title: 'B.Tech in Information Technology',
    org: 'University College of Engineering, BIT Campus, Tiruchirappalli',
    points: ['CGPA: 8.1 — consistent academic performance throughout the program.'],
  },
  {
    type: 'cert', icon: <Award size={16} />, color: '#a78bfa',
    period: '2024', title: 'Hirewalks React Internship',
    org: 'Certification',
    points: ['Certified in React.js & Redux through real-time project development.'],
  },
  {
    type: 'cert', icon: <Award size={16} />, color: '#ffd700',
    period: '2024', title: 'SmartED Frontend Development',
    org: 'Certification',
    points: ['Built an Employment Management Portal using frontend technologies.'],
  },
];

export default function Experience() {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.3'] });
  const lineH = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" style={{ padding: '8rem 2rem', borderTop: '1px solid var(--border)', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <SectionLabel text="Experience & Education" />
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1, letterSpacing: '-0.03em', marginTop: '1.5rem', marginBottom: '4rem' }}>
          My <span style={{ color: 'var(--accent)' }}>journey</span>
        </motion.h2>

        <div ref={containerRef} style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Animated vertical line */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px', background: 'var(--border)' }}>
            <motion.div style={{ width: '100%', background: 'var(--accent)', height: lineH, boxShadow: '0 0 8px var(--accent)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {items.map((item, i) => (
              <TimelineCard key={i} item={item} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item, i }) {
  const { icon, color, period, title, org, points } = item;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
      style={{ position: 'relative' }}>

      {/* Node on line */}
      <div style={{
        position: 'absolute', left: '-2.375rem', top: '1.4rem',
        width: 14, height: 14, borderRadius: '50%',
        background: color, border: '2px solid var(--bg2)',
        boxShadow: `0 0 12px ${color}`,
      }} />

      <motion.div
        whileHover={{ borderColor: color, boxShadow: `0 8px 40px ${color}10`, x: 6 }}
        transition={{ duration: 0.2 }}
        style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.75rem', overflow: 'hidden', position: 'relative' }}>

        {/* Top accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${color}, transparent)` }} />

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: 32, height: 32, borderRadius: '8px', background: `${color}15`, color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {icon}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1rem' }}>{title}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted2)', marginTop: '2px' }}>{org}</div>
            </div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color, background: `${color}10`, border: `1px solid ${color}25`, borderRadius: '100px', padding: '4px 12px', whiteSpace: 'nowrap' }}>
            {period}
          </span>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '0.5rem' }}>
          {points.map((p, pi) => (
            <motion.li key={pi}
              initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 + pi * 0.06 }}
              style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.85rem', color: 'var(--muted2)', lineHeight: 1.65 }}>
              <span style={{ color, flexShrink: 0, marginTop: '5px', fontSize: '0.5rem' }}>◆</span>
              {p}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
