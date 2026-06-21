import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitFork, MapPin, BarChart2, Palette, UtensilsCrossed, CheckSquare } from 'lucide-react';
import { SectionLabel } from './About';

const projects = [
  {
    num: '01', id: 'echo', icon: <MapPin size={18} />, title: 'Echo',
    subtitle: 'Geo-Issue Tracking Platform',
    description: 'Location-based complaint management with map-based issue tracking, reverse geocoding, real-time status management, and full authentication workflows.',
    stack: ['React.js', 'Leaflet.js', 'Spring Boot', 'PostgreSQL', 'PostGIS'],
    live: 'https://echo-ashy-chi.vercel.app', github: 'https://github.com/Aravinth466677/echo.git',
    color: '#00ffb3',
  },
  {
    num: '02', id: 'rewardify', icon: <BarChart2 size={18} />, title: 'Rewardify',
    subtitle: 'Admin Dashboard',
    description: 'Responsive admin dashboard with Redux-powered centralized state, pagination, form validation, and REST API integration for dynamic operations.',
    stack: ['React.js', 'Redux', 'REST APIs', 'Tailwind CSS'],
    live: 'https://rewardify1.netlify.app/', github: null,
    color: '#00d4ff',
  },
  {
    num: '03', id: 'task-manager', icon: <CheckSquare size={18} />, title: 'Task Manager',
    subtitle: 'Full Stack Spring Boot App',
    description: 'Full-stack task management app with React frontend and Spring Boot REST API. Features task creation, status tracking, and a clean responsive UI.',
    stack: ['React.js', 'Spring Boot', 'Java', 'REST APIs'],
    live: 'https://task-manager-frontend-iota-vert.vercel.app/',
    github: 'https://github.com/Aravinth466677/task_manager_frontend.git',
    githubBackend: 'https://github.com/Aravinth466677/TaskManager_spring_boot.git',
    color: '#a78bfa',
  },
  {
    num: '04', id: 'life-designer', icon: <Palette size={18} />, title: 'Life Designer',
    subtitle: 'Interior Design Platform',
    description: 'Responsive interior design platform with dynamic project showcase, JWT-based admin authentication, protected routes, and reusable UI components.',
    stack: ['React.js', 'MongoDB', 'JWT', 'Responsive UI'],
    live: 'https://life-desighner.vercel.app/', github: 'https://github.com/Aravinth466677/life-desighner.git',
    color: '#ffd700',
  },
  {
    num: '05', id: 'food-app', icon: <UtensilsCrossed size={18} />, title: 'Restaurant App',
    subtitle: 'Swiggy API Clone',
    description: 'React food ordering app with restaurant filtering, dynamic menus, Redux state management, protected routes, lazy loading, and custom hooks.',
    stack: ['React.js', 'Redux', 'Swiggy API', 'Custom Hooks'],
    live: 'https://swiggyapirestaurant-jw6hfvbwk-aravinth466677s-projects.vercel.app/',
    github: 'https://github.com/Aravinth466677/restaurant-website-React-Swiggy-API-clone-.git',
    color: '#ff6b6b',
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ padding: '8rem 2rem', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <SectionLabel text="Projects" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1, letterSpacing: '-0.03em', marginTop: '1.5rem' }}>
              Selected <span style={{ color: 'var(--accent)' }}>work</span>
            </motion.h2>
          </div>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
            ({projects.length} projects)
          </motion.span>
        </div>

        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} i={i}
              isHovered={hovered === p.id}
              anyHovered={hovered !== null}
              onHover={() => setHovered(p.id)}
              onLeave={() => setHovered(null)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, i, isHovered, anyHovered, onHover, onLeave }) {
  const { num, icon, title, subtitle, description, stack, live, github, githubBackend, color } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: i * 0.07 }}
      onMouseEnter={onHover} onMouseLeave={onLeave}
      style={{
        position: 'relative', overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        opacity: anyHovered && !isHovered ? 0.35 : 1,
        transition: 'opacity 0.3s',
        cursor: 'default',
      }}>

      {/* Hover background fill */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'absolute', inset: 0, background: `${color}06`, transformOrigin: 'left', borderLeft: `2px solid ${color}`, pointerEvents: 'none' }} />
        )}
      </AnimatePresence>

      <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '2rem', padding: '2.5rem 0', alignItems: 'center' }} className="proj-row">

        {/* Number */}
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: isHovered ? color : 'var(--muted)', transition: 'color 0.3s', letterSpacing: '0.1em' }}>{num}</span>

        {/* Main */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <motion.span animate={{ color: isHovered ? color : 'var(--muted2)' }} style={{ display: 'flex' }}>{icon}</motion.span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.02em', color: isHovered ? color : 'var(--text)', transition: 'color 0.3s' }}>
              {title}
            </h3>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>— {subtitle}</span>
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                <p style={{ color: 'var(--muted2)', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '600px', marginBottom: '1rem' }}>{description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {stack.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0 }}>
          {live && (
            <motion.a href={live} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.15, color: color }} whileTap={{ scale: 0.9 }}
              style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}>
              <ExternalLink size={16} />
            </motion.a>
          )}
          {github && (
            <motion.a href={github} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.15, color: color }} whileTap={{ scale: 0.9 }}
              style={{ color: 'var(--muted)' }}>
              <GitFork size={16} />
            </motion.a>
          )}
          {githubBackend && (
            <motion.a href={githubBackend} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.15, color: color }} whileTap={{ scale: 0.9 }}
              style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '3px', fontFamily: 'var(--font-mono)', fontSize: '0.62rem' }}>
              <GitFork size={14} /><span>API</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
