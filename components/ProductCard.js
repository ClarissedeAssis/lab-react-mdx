import Link from "next/link";

export default function ProductCard({ product }) {
  const { slug, frontmatter } = product;

  return (
    <article className="card product-card">
      <img
        src={frontmatter.image}
        alt={frontmatter.alt}
      />

      <p className="eyebrow">{frontmatter.category}</p>

      <h3>{frontmatter.name}</h3>

      <p>{frontmatter.description}</p>

      <Link href={`/produtos/${slug}`}>
        Conhecer produto
      </Link>
    </article>
  );
}