import EditorialContent from "./EditorialContent";

export default function TeamCard({ member }) {
  const { frontmatter, content } = member;

  return (
    <article className="card team-card">
      <img
        src={frontmatter.image}
        alt={frontmatter.alt}
      />

      <p className="eyebrow">{frontmatter.position}</p>

      <h3>{frontmatter.name}</h3>

      <EditorialContent source={content} />
    </article>
  );
}