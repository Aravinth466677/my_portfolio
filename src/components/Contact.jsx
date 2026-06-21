import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, GitFork, Send, ArrowUpRight } from 'lucide-react';
import { SectionLabel } from './About';

const contacts = [
  { icon: <Mail size={16} />, label: 'Email', value: 'aravinthviswa4@gmail.com', href: 'mailto:aravinthviswa4@gmail.com' },
  { icon: <Phone size={16} />, label: 'Phone', value: '+91 90809 68033', href: 'tel:+919080968033' },
  { icon: <GitFork size={16} />, label: 'GitHub', value: 'Aravinth466677', href: 'https://github.com/Aravinth466677' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:aravinthviswa4@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: '8rem 2rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>

      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,255,179,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Big CTA header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <SectionLabel text="Contact" />
          <motion.h2
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 0.95, letterSpacing: '-0.04em', marginTop: '1.5rem' }}>
            <span style={{ display: 'block', color: 'var(--text)' }}>Let's build</span>
            <span style={{ display: 'block', color: 'var(--accent)' }}>together.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ color: 'var(--muted2)', fontSize: '1rem', marginTop: '1.5rem', maxWidth: '480px', margin: '1.5rem auto 0' }}>
            Open to full-time roles, internships, and interesting projects.
          </motion.p>

          {/* Big mailto button */}
          <motion.a
            href="mailto:aravinthviswa4@gmail.com"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.35 }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(0,255,179,0.3)' }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '2.5rem', padding: '16px 40px', background: 'var(--accent)', color: '#000', borderRadius: '100px', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-body)', boxShadow: '0 0 40px rgba(0,255,179,0.2)' }}>
            Say Hello <ArrowUpRight size={18} />
          </motion.a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="contact-grid">
          {/* Contact links */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Or reach me directly</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
              {contacts.map(({ icon, label, value, href }, i) => (
                <motion.a key={label} href={href} target="_blank" rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  whileHover={{ background: 'rgba(0,255,179,0.05)', paddingLeft: '1.75rem' }}
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', background: 'var(--card)', borderBottom: i < 2 ? '1px solid var(--border)' : 'none', color: 'inherit', transition: 'all 0.25s' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '8px', background: 'rgba(0,255,179,0.08)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 500, marginTop: '2px' }}>{value}</div>
                  </div>
                  <ArrowUpRight size={14} style={{ marginLeft: 'auto', color: 'var(--muted)', flexShrink: 0 }} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { field: 'name', placeholder: 'Your name', type: 'text' },
              { field: 'email', placeholder: 'Your email', type: 'email' },
            ].map(({ field, placeholder, type }) => (
              <div key={field} style={{ position: 'relative' }}>
                <motion.input
                  type={type} placeholder={placeholder} value={form[field]} required
                  onChange={e => setForm({ ...form, [field]: e.target.value })}
                  onFocus={() => setFocused(field)} onBlur={() => setFocused('')}
                  animate={{ borderColor: focused === field ? 'var(--accent)' : 'rgba(255,255,255,0.06)' }}
                  style={inputStyle} />
                {focused === field && <motion.div layoutId="input-glow" style={{ position: 'absolute', inset: -1, borderRadius: '9px', border: '1px solid var(--accent)', pointerEvents: 'none', boxShadow: '0 0 20px rgba(0,255,179,0.1)' }} />}
              </div>
            ))}
            <div style={{ position: 'relative' }}>
              <motion.textarea
                placeholder="Your message" rows={5} value={form.message} required
                onChange={e => setForm({ ...form, message: e.target.value })}
                onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                animate={{ borderColor: focused === 'message' ? 'var(--accent)' : 'rgba(255,255,255,0.06)' }}
                style={{ ...inputStyle, resize: 'vertical' }} />
              {focused === 'message' && <motion.div layoutId="input-glow" style={{ position: 'absolute', inset: -1, borderRadius: '9px', border: '1px solid var(--accent)', pointerEvents: 'none', boxShadow: '0 0 20px rgba(0,255,179,0.1)' }} />}
            </div>
            <motion.button type="submit"
              whileHover={{ boxShadow: '0 0 40px rgba(0,255,179,0.35)', scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', background: 'var(--accent)', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '0.92rem', cursor: 'pointer', fontFamily: 'var(--font-body)', boxShadow: '0 0 24px rgba(0,255,179,0.15)' }}>
              <Send size={16} />
              {sent ? 'Opening mail client...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

const inputStyle = {
  width: '100%', padding: '12px 16px',
  background: 'var(--card)', border: '1px solid rgba(255,255,255,0.06)',
  borderRadius: '8px', color: 'var(--text)', fontSize: '0.88rem',
  fontFamily: 'var(--font-body)', outline: 'none', display: 'block',
};
