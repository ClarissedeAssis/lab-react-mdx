import Link from "next/link";
import { notFound } from "next/navigation";
import EditorialContent from "@/components/EditorialContent";
import { getContent, listContent } from "@/lib/content.mjs";

export async function generateStaticParams() {
  const products = await listContent("produtos");

  return products.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = await getContent("produtos", slug);

  if (!product) {
    return {
      title: "Produto não encontrado",
    };
  }

  return {
    title: product.frontmatter.name,
    description: product.frontmatter.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = await getContent("produtos", slug);

  if (!product) {
    notFound();
  }

  const { frontmatter, content } = product;

  return (
    <article>
      <Link href="/">
        ← Voltar
      </Link>

      <p className="eyebrow">
        {frontmatter.category}
      </p>

      <h1>{frontmatter.name}</h1>

      <p className="lead">
        {frontmatter.description}
      </p>

      <img
        src={frontmatter.image}
        alt={frontmatter.alt}
        className="product-image"
      />

      <EditorialContent source={content} />
    </article>
  );
}