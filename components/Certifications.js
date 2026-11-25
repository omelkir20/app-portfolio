import { certifications } from '@/data/profile';

export default function Certifications() {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <div className="grid">
        {certifications.map((c) => (
          <article className="card" key={`${c.name}-${c.year}`}>
            <h3>{c.name}</h3>
            <p>
              {c.issuer} · {c.year}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
