import { devopsProjects } from '@/data/profile';

export default function DevopsProjects() {
  return (
    <section id="devops">
      <h2>Projets DevOps &amp; Cloud</h2>
      <div className="grid">
        {devopsProjects.map((p) => (
          <article className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <ul className="tags small">
              {p.stack
                .split(',')
                .map((t) => t.trim())
                .filter(Boolean)
                .map((t) => (
                  <li key={t}>{t}</li>
                ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
