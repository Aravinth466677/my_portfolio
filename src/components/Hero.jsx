import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, GitFork, Mail } from 'lucide-react';

const roles = ['Software Developer', 'React Developer', 'Frontend Engineer', 'Full Stack Builder', 'UI/UX Craftsman'];

const codeLines = [
  { indent: 0, content: 'const developer = {', color: '#f0f0f0' },
  { indent: 1, content: 'name: "Aravinth V",', color: '#00ffb3' },
  { indent: 1, content: 'role: "Software Developer",', color: '#00d4ff' },
  { indent: 1, content: 'stack: ["React", "Redux",', color: '#a78bfa' },
  { indent: 2, content: '"Spring Boot", "Java"],', color: '#a78bfa' },
  { indent: 1, content: 'cgpa: 8.1,', color: '#ffd700' },
  { indent: 1, content: 'status: "open_to_work",', color: '#00ffb3' },
  { indent: 1, content: 'passion: "clean UI +', color: '#ff6b6b' },
  { indent: 2, content: 'great UX",', color: '#ff6b6b' },
  { indent: 0, content: '};', color: '#f0f0f0' },
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const onMove = (e) => { mouseX.set(e.clientX / window.innerWidth); mouseY.set(e.clientY / window.innerHeight); };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const current = roles[roleIdx]; let t;
    if (!deleting && displayed.length < current.length)
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    else if (!deleting && displayed.length === current.length)
      t = setTimeout(() => setDeleting(true), 2000);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    else { setDeleting(false); setRoleIdx((roleIdx + 1) % roles.length); }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 180);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '0 2rem' }}>

      {/* Animated grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0,255,179,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,179,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Big background text */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: 'clamp(8rem, 20vw, 22rem)', color: 'transparent',
        WebkitTextStroke: '1px rgba(255,255,255,0.025)',
        whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none', zIndex: 0,
        letterSpacing: '-0.04em',
      }}>DEV</div>

      {/* Scanline effect */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
        <motion.div
          animate={{ y: ['0%', '100vh'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(transparent, rgba(0,255,179,0.08), transparent)', pointerEvents: 'none' }} />
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 2, paddingTop: '80px' }} className="hero-grid">

        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', display: 'block', boxShadow: '0 0 8px var(--accent)' }} />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            <span style={{ display: 'block', color: 'var(--text)' }}>Aravinth</span>
            <span style={{ display: 'block', WebkitTextStroke: '1px rgba(255,255,255,0.4)', color: 'transparent' }}>Viswa</span>
            <span style={{ display: 'block', color: 'var(--accent)', fontSize: '0.5em', fontFamily: 'var(--font-mono)', fontWeight: 400, letterSpacing: '0.05em', marginTop: '0.5rem', animation: 'flicker 8s infinite' }}>
              // {displayed}<span style={{ animation: 'blink 0.8s step-end infinite', borderRight: '2px solid var(--accent)', marginLeft: '1px' }} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ color: 'var(--muted2)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '440px', marginBottom: '2.5rem' }}>
            Building fast, accessible, production-grade web experiences. Software developer specializing in React, Redux & Spring Boot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <MagBtn primary onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Work <ArrowRight size={15} />
            </MagBtn>
            <MagBtn href="mailto:aravinthviswa4@gmail.com">
              <Mail size={15} /> Get in Touch
            </MagBtn>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/Aravinth466677', icon: <GitFork size={16} /> },
              { label: 'Email', href: 'mailto:aravinthviswa4@gmail.com', icon: <Mail size={16} /> },
            ].map(({ label, href, icon }) => (
              <motion.a key={label} href={href} target="_blank" rel="noreferrer"
                whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)', y: -2, boxShadow: '0 4px 20px rgba(0,255,179,0.15)' }}
                whileTap={{ scale: 0.94 }}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--muted2)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                {icon} {label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'relative' }}>
          {/* Glow behind terminal */}
          <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(ellipse at 50% 50%, rgba(0,255,179,0.07) 0%, transparent 70%)', borderRadius: '20px', pointerEvents: 'none' }} />

          <div style={{
            background: 'var(--card2)', border: '1px solid rgba(0,255,179,0.12)',
            borderRadius: '16px', overflow: 'hidden',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 24px 80px rgba(0,0,0,0.6)',
          }}>
            {/* Terminal titlebar */}
            <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {['#ff5f57', '#ffbd2e', '#28ca41'].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
              ))}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', marginLeft: '8px', letterSpacing: '0.05em' }}>aravinth.js</span>
            </div>

            {/* Code */}
            <div style={{ padding: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', lineHeight: 1.9 }}>
              {codeLines.map((line, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={i < visibleLines ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'flex', paddingLeft: `${line.indent * 1.5}rem`, whiteSpace: 'pre' }}>
                  <span style={{ color: 'var(--muted)', marginRight: '1.5rem', userSelect: 'none', minWidth: '1.5rem', textAlign: 'right', fontSize: '0.7rem' }}>{i + 1}</span>
                  <span style={{ color: line.color }}>{line.content}</span>
                </motion.div>
              ))}
              {visibleLines >= codeLines.length && (
                <div style={{ display: 'flex', paddingLeft: 0, marginTop: '4px' }}>
                  <span style={{ color: 'var(--muted)', marginRight: '1.5rem', minWidth: '1.5rem', textAlign: 'right', fontSize: '0.7rem' }}>11</span>
                  <span style={{ color: 'var(--accent)', animation: 'blink 1s step-end infinite', borderRight: '2px solid var(--accent)' }}>&nbsp;</span>
                </div>
              )}
            </div>

            {/* Status bar */}
            <div style={{ padding: '8px 16px', background: 'rgba(0,255,179,0.06)', borderTop: '1px solid rgba(0,255,179,0.1)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)' }}>
              <span>● JavaScript</span>
              <span>UTF-8</span>
              <span>Ln {Math.min(visibleLines, codeLines.length)}, Col 1</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', color: 'var(--muted)', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em', zIndex: 2 }}>
        <span>SCROLL</span>
        <div style={{ width: 1, height: 40, background: 'linear-gradient(var(--accent), transparent)' }} />
      </motion.div>

      <style>{`
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function MagBtn({ children, onClick, href, primary }) {
  const ref = useRef();
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  const Tag = href ? motion.a : motion.button;
  return (
    <Tag ref={ref} href={href} onClick={onClick}
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{
        x: sx, y: sy,
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        padding: '11px 28px', borderRadius: '8px', fontWeight: 600, fontSize: '0.88rem',
        cursor: 'pointer', fontFamily: 'var(--font-body)',
        background: primary ? 'var(--accent)' : 'transparent',
        color: primary ? '#000' : 'var(--text)',
        border: primary ? 'none' : '1px solid var(--border)',
        boxShadow: primary ? '0 0 30px rgba(0,255,179,0.25)' : 'none',
      }}
      whileHover={primary
        ? { boxShadow: '0 0 50px rgba(0,255,179,0.45)', scale: 1.04 }
        : { borderColor: 'var(--accent)', color: 'var(--accent)', scale: 1.04 }}
      whileTap={{ scale: 0.96 }}>
      {children}
    </Tag>
  );
}
