import Link from "next/link";
import { getContent, listContent } from "@/lib/content.mjs";
import EditorialContent from "@/components/EditorialContent";
import ProductCard from "@/components/ProductCard";
import TeamCard from "@/components/TeamCard";

export default async function Home() {
  const company = await getContent("paginas", "empresa");
  const products = await listContent("produtos");
  const team = await listContent("equipe");

  return (
    <>
      <section className="hero">
      

        {company ? (
          <>
            <h1>{company.frontmatter.title}</h1>
            <p className="lead">{company.frontmatter.lead}</p>

            <EditorialContent source={company.content} />
          </>
        ) : (
          <>
            <h1>Aurora Studio</h1>
            <p className="lead">
              Conteúdo da empresa ainda não disponível.
            </p>
          </>
        )}
      </section>

      <section aria-labelledby="produtos">
        <p className="eyebrow">Nosso catálogo</p>
        <h2 id="produtos">Produtos</h2>

        {products.length > 0 ? (
          <div className="grid">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
              />
            ))}
          </div>
        ) : (
          <p>Nenhum produto cadastrado.</p>
        )}
      </section>

      <section aria-labelledby="equipe">
        <p className="eyebrow">Quem somos</p>
        <h2 id="equipe">Nossa equipe</h2>

        {team.length > 0 ? (
          <div className="grid">
            {team.map((member) => (
              <TeamCard
                key={member.slug}
                member={member}
              />
            ))}
          </div>
        ) : (
          <p>Nenhum integrante cadastrado.</p>
        )}
      </section>
    </>
  );
}