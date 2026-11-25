import { profile, projects } from '@/data/profile';
import ThemeToggle from '@/components/ThemeToggle';
import Certifications from '@/components/Certifications';
import DevopsProjects from '@/components/DevopsProjects';

export default function Home() {
  const version = process.env.NEXT_PUBLIC_APP_VERSION || 'dev';

  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="toolbar">
            <ThemeToggle />
          </div>
          <img className="avatar" src="/avatar.svg" alt="" width="120" height="120" />
          <h1>{profile.fullName}</h1>
          <p className="subtitle">{profile.jobTitle}</p>
          <p className="muted">{profile.location}</p>
        </div>
      </header>

      <main className="container">
        <section id="about">
          <h2>À propos</h2>
          <p>{profile.bio}</p>
        </section>

        <section id="skills">
          <h2>Compétences</h2>
          <ul className="tags">
            {profile.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="projects">
          <h2>Projets</h2>
          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul className="tags small">
                  {p.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <DevopsProjects />
        <Certifications />

        <section id="contact">
          <h2>Contact</h2>
          <ul className="links">
            <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.fullName} · version {version}
        </div>
      </footer>
    </>
  );
}
