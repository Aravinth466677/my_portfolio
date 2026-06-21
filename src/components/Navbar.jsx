import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setActive(id); setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop — floating pill */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="nav-desktop-pill"
        style={{
          position: 'fixed', top: '1.25rem', left: '50%', transform: 'translateX(-50%)',
          zIndex: 200, display: 'flex', alignItems: 'center', gap: '0',
          background: scrolled ? 'rgba(8,11,15,0.85)' : 'rgba(8,11,15,0.6)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '100px', padding: '6px 8px',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,255,179,0.05)' : 'none',
          transition: 'background 0.3s, box-shadow 0.3s',
        }}>
        <motion.span
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent)', cursor: 'pointer', padding: '6px 16px', letterSpacing: '0.05em' }}>
          AV
        </motion.span>

        <div style={{ width: 1, height: 16, background: 'var(--border)', margin: '0 4px' }} />

        {links.map(l => (
          <motion.button key={l} onClick={() => scrollTo(l)}
            whileHover={{ color: 'var(--accent)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              position: 'relative', background: active === l ? 'rgba(0,255,179,0.08)' : 'none',
              border: 'none', cursor: 'pointer', padding: '7px 16px', borderRadius: '100px',
              fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 500,
              color: active === l ? 'var(--accent)' : 'var(--muted2)',
              letterSpacing: '0.02em', transition: 'background 0.2s, color 0.2s',
            }}>
            {l}
            {active === l && (
              <motion.span layoutId="pill-active"
                style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', display: 'block', boxShadow: '0 0 6px var(--accent)' }} />
            )}
          </motion.button>
        ))}

        <div style={{ width: 1, height: 16, background: 'var(--border)', margin: '0 4px' }} />

        <motion.a href="mailto:aravinthviswa4@gmail.com"
          whileHover={{ backgroundColor: 'rgba(0,255,179,0.15)', color: '#fff' }}
          whileTap={{ scale: 0.96 }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)', border: '1px solid rgba(0,255,179,0.3)', borderRadius: '100px', padding: '7px 18px', letterSpacing: '0.05em', transition: 'all 0.2s' }}>
          hire_me
        </motion.a>
      </motion.nav>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="nav-mobile-bar"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
          display: 'none', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 1.5rem', height: '56px',
          background: 'rgba(8,11,15,0.95)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
        }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent)', fontSize: '0.9rem' }}>AV</span>
        <motion.button whileTap={{ scale: 0.9 }} onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', fontSize: '1.3rem' }}>
          {menuOpen ? '✕' : '☰'}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed', top: '56px', left: 0, right: 0, zIndex: 199,
              background: 'rgba(8,11,15,0.98)', backdropFilter: 'blur(20px)',
              padding: '1.5rem', display: 'none', flexDirection: 'column', gap: '1rem',
              borderBottom: '1px solid var(--border)',
            }} className="mobile-menu">
            {links.map((l, i) => (
              <motion.button key={l} onClick={() => scrollTo(l)}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: 8, color: 'var(--accent)' }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: 'var(--text)', textAlign: 'left', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                {l}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-pill { display: none !important; }
          .nav-mobile-bar { display: flex !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
    </>
  );
}
