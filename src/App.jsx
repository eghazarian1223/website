import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { interests, photos, portfolio, projects, skillGroups } from './data.js';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
];

const trackedSections = ['home', 'skills', 'projects', 'about'];

const accentBySection = {
  home: 'violet',
  skills: 'coral',
  projects: 'coral',
  about: 'violet',
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? projects[0],
    [selectedProjectId],
  );

  useEffect(() => {
    let frameId = 0;

    const updateCloudDepth = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty('--cloud-scroll', scrollY.toFixed(2));
      document.documentElement.style.setProperty('--cloud-progress', (scrollY / maxScroll).toFixed(4));
      document.documentElement.style.setProperty('--cloud-back-x', `${scrollY * 0.04}px`);
      document.documentElement.style.setProperty('--cloud-back-y', `${scrollY * -0.1}px`);
      document.documentElement.style.setProperty('--cloud-mid-x', `${scrollY * -0.08}px`);
      document.documentElement.style.setProperty('--cloud-mid-y', `${scrollY * -0.24}px`);
      document.documentElement.style.setProperty('--cloud-front-x', `${scrollY * 0.14}px`);
      document.documentElement.style.setProperty('--cloud-front-y', `${scrollY * -0.44}px`);
      document.documentElement.style.setProperty('--moon-x', `${scrollY * -0.025}px`);
      document.documentElement.style.setProperty('--moon-y', `${scrollY * -0.08}px`);
      document.documentElement.style.setProperty('--stars-x', `${scrollY * 0.035}px`);
      document.documentElement.style.setProperty('--stars-y', `${scrollY * -0.09}px`);
      frameId = 0;
    };

    const handleScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateCloudDepth);
      }
    };

    updateCloudDepth();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.15, 0.35, 0.6] },
    );

    trackedSections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`site-shell accent-${accentBySection[activeSection]}`}>
      <Cloudscape />
      <Header activeSection={activeSection} />

      <main>
        <section id="home" className="section home-section" aria-labelledby="home-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{portfolio.handle}</p>
              <h1 id="home-title">
                Hi, I&apos;m <span>{portfolio.name}</span>.
              </h1>
              <HeroRole />
              <p className="hero-intro">{portfolio.intro}</p>
              <div className="hero-tags" aria-label="Focus areas">
                {portfolio.roles.slice(0, 3).map((role) => (
                  <span key={role}>{role}</span>
                ))}
              </div>

              <div className="action-row" aria-label="Primary links">
                <a className="button primary-button" href={portfolio.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={22} aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a className="button text-button" href={portfolio.resumeUrl} target="_blank" rel="noreferrer">
                  <FileText size={21} aria-hidden="true" />
                  <span>Resume</span>
                </a>
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section id="skills" className="section skills-section" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Technical toolkit</p>
              <h2 id="skills-title">Skills</h2>
              <p>
                Languages, frameworks, and tools I reach for when building reliable backend systems
                and data-driven applications.
              </p>
            </div>

            <div className="skills-showcase">
              {skillGroups.map((group, i) => (
                <SkillCard key={group.title} group={group} index={i} />
              ))}
            </div>
          </div>
        </section>


        <section id="projects" className="section projects-section" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Selected work</p>
              <h2 id="projects-title">Projects</h2>
            </div>

            <div className="projects-layout">
              <ProjectMap selectedProjectId={selectedProjectId} onSelectProject={setSelectedProjectId} />

              <div className="project-panel">
                <div className="project-tabs" aria-label="Project list">
                  {projects.map((project) => (
                    <button
                      className={`project-tab accent-${project.accent}`}
                      type="button"
                      key={project.id}
                      aria-pressed={selectedProjectId === project.id}
                      onClick={() => setSelectedProjectId(project.id)}
                    >
                      <span aria-hidden="true" />
                      {project.title}
                    </button>
                  ))}
                </div>

                <ProjectCard project={selectedProject} />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="about-copy">
              <p className="eyebrow">About</p>
              <h2 id="about-title">About Me</h2>
              <p>{portfolio.about}</p>
              <p>{portfolio.aboutExtra}</p>

              <div className="contact-strip">
                <a href={`mailto:${portfolio.email}`}>
                  <Mail size={18} aria-hidden="true" />
                  {portfolio.email}
                </a>
                <a href={portfolio.linkedinUrl} target="_blank" rel="noreferrer">
                  <ArrowUpRight size={18} aria-hidden="true" />
                  LinkedIn
                </a>
                <a href={portfolio.devpostUrl} target="_blank" rel="noreferrer">
                  <Trophy size={18} aria-hidden="true" />
                  Devpost
                </a>
                <span>
                  <MapPin size={18} aria-hidden="true" />
                  {portfolio.location}
                </span>
              </div>
            </div>

            <PhotoSlideshow />
          </div>

          <div className="container interests-grid" aria-label="Interests">
            {interests.map((interest) => (
              <article className="interest-card" key={interest.title}>
                <Sparkles size={20} aria-hidden="true" />
                <h3>{interest.title}</h3>
                <p>{interest.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="footer-logo">{portfolio.initials}</span>
          <p>Built with React &amp; Vite.</p>
          <div className="footer-social" aria-label="Social links">
            <a href={portfolio.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={portfolio.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${portfolio.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
            <a href={portfolio.devpostUrl} target="_blank" rel="noreferrer" aria-label="Devpost">
              <Trophy size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Cloudscape() {
  return (
    <div className="cloudscape" aria-hidden="true">
      <div className="sky-wash" />
      <div className="moon" />
      <div className="stars">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="cloud-layer cloud-back">
        <span className="cloud puff-a" />
        <span className="cloud puff-b" />
      </div>
      <div className="cloud-layer cloud-mid">
        <span className="cloud puff-c" />
        <span className="cloud puff-d" />
      </div>
      <div className="cloud-layer cloud-front">
        <span className="cloud puff-e" />
        <span className="cloud puff-f" />
      </div>
    </div>
  );
}

function Header({ activeSection }) {
  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Main navigation">
        <a className="logo" href="#home" aria-label={`${portfolio.name} home`}>
          {portfolio.initials}
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              className={activeSection === item.id ? 'active' : ''}
              href={`#${item.id}`}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="schema-grid">
        <span className="trace trace-one" />
        <span className="trace trace-two" />
        <span className="trace trace-three" />
        <span className="code-glyph glyph-one">{'{ }'}</span>
        <span className="code-glyph glyph-two">&lt;/&gt;</span>
        <span className="code-glyph glyph-three">$_</span>

        <div className="terminal-card">
          <div className="terminal-top">
            <span className="window-dot red" />
            <span className="window-dot yellow" />
            <span className="window-dot green" />
            <p>ella.cs</p>
          </div>
          <pre>
            <code>
              <span className="line-number">1</span>
              <span className="keyword">const</span> <span className="cyan">ella</span> = {'{'}
              {'\n'}
              <span className="line-number">2</span>
              {'  '}role: <span className="pink">&apos;backend&apos;</span>,
              {'\n'}
              <span className="line-number">3</span>
              {'  '}stack: [<span className="pink">&apos;.NET&apos;</span>, <span className="pink">&apos;Python&apos;</span>, <span className="pink">&apos;Azure&apos;</span>],
              {'\n'}
              <span className="line-number">4</span>
              {'  '}debug: <span className="pink">&apos;routes + data&apos;</span>,
              {'\n'}
              <span className="line-number">5</span>
              {'  '}ship: () =&gt; <span className="cyan">reliableApis</span>
              <span className="cursor" />
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, value, label }) {
  return (
    <article className="stat-card">
      <Icon size={22} aria-hidden="true" />
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

function ProjectMap({ selectedProjectId, onSelectProject }) {
  return (
    <div className="project-map" aria-label="Project route map">
      <span className="map-route" aria-hidden="true" />
      {projects.map((project, index) => (
        <button
          className={`map-pin pin-${index + 1} accent-${project.accent}`}
          type="button"
          key={project.id}
          aria-label={`Open ${project.title}`}
          aria-pressed={selectedProjectId === project.id}
          onClick={() => onSelectProject(project.id)}
        >
          <span />
        </button>
      ))}
      <span className="map-mark mark-one" aria-hidden="true" />
      <span className="map-mark mark-two" aria-hidden="true" />
      <span className="map-mark mark-three" aria-hidden="true" />
      <span className="map-mark mark-four" aria-hidden="true" />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      {project.image ? (
        <div className="project-screenshot">
          <img src={project.image} alt={`${project.title} screenshot`} />
        </div>
      ) : (
        <div className={`project-art ${project.id}`}>
          <div className="art-screen">
            <span />
            <span />
            <span />
          </div>
          <div className="art-core" />
          <div className="art-rail rail-one" />
          <div className="art-rail rail-two" />
        </div>
      )}

      <div className="project-card-body">
        <p className="project-tag">{project.tag}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-row">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <a className="project-link" href={`#${project.id}`}>
          <span>{project.metric}</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function PhotoSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);
  const next = () => setCurrent((c) => (c + 1) % photos.length);

  if (photos.length === 0) {
    return <ProfileFrame />;
  }

  return (
    <aside className="profile-frame" aria-label="Personal photos">
      <div className="slideshow-stage">
        {photos.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Photo ${i + 1}`}
            className={`slide-img${i === current ? ' active' : ''}`}
          />
        ))}
        {photos.length > 1 && (
          <>
            <button className="slide-btn slide-prev" type="button" onClick={prev} aria-label="Previous photo">
              <ChevronLeft size={20} />
            </button>
            <button className="slide-btn slide-next" type="button" onClick={next} aria-label="Next photo">
              <ChevronRight size={20} />
            </button>
          </>
        )}
        <div className="slide-dots" role="tablist" aria-label="Photo navigation">
          {photos.map((_, i) => (
            <button
              key={i}
              role="tab"
              type="button"
              className={`slide-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Photo ${i + 1}`}
              aria-selected={i === current}
            />
          ))}
        </div>
      </div>
      <div className="profile-caption">
        <Code2 size={19} aria-hidden="true" />
        <span>Backend engineer with a data science brain.</span>
      </div>
    </aside>
  );
}

function ProfileFrame() {
  return (
    <aside className="profile-frame" aria-label={`${portfolio.name} profile visual`}>
      <div className="profile-portrait">
        <div className="portrait-grid" />
        <div className="portrait-monogram">{portfolio.initials}</div>
        <div className="portrait-badges" aria-hidden="true">
          <span>
            <Database size={18} />
            CosmosDB
          </span>
          <span>
            <GraduationCap size={18} />
            UMich Data Science
          </span>
          <span>
            <ShieldCheck size={18} />
            APIs that fail gracefully
          </span>
        </div>
        <div className="portrait-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="profile-caption">
        <Code2 size={19} aria-hidden="true" />
        <span>Backend engineer with a data science brain.</span>
      </div>
    </aside>
  );
}

function SkillCard({ group, index }) {
  const icons = [Code2, Server, Database];
  const Icon = icons[index % icons.length];
  const [hoveredOrigin, setHoveredOrigin] = useState(null);

  return (
    <div className="skill-card">
      <div className="skill-card-header">
        <Icon size={20} aria-hidden="true" />
        <h3>{group.title}</h3>
      </div>
      <div className="skill-card-pills">
        {group.skills.map((skill) => (
          <span
            key={skill.name}
            onMouseEnter={() => setHoveredOrigin(skill.origin)}
            onMouseLeave={() => setHoveredOrigin(null)}
          >
            {skill.name}
          </span>
        ))}
      </div>
      <p className={`skill-origin${hoveredOrigin ? ' visible' : ''}`}>
        {hoveredOrigin ?? ''}
      </p>
    </div>
  );
}

const heroRoles = [
  'a backend engineer.',
  'a data science major.',
  'a latte enthusiast.',
];

function HeroRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = heroRoles[index];

    if (!deleting && displayed.length < full.length) {
      const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === full.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % heroRoles.length);
    }
  }, [displayed, deleting, index]);

  return (
    <p className="hero-role">
      I&apos;m{' '}
      <span className="hero-role-word">
        {displayed}
        <span className="hero-role-cursor" />
      </span>
    </p>
  );
}

export default App;
