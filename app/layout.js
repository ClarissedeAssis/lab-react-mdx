import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: {
    default: "Aurora Studio",
    template: "%s | Aurora Studio",
  },
  description:
    "Aurora Studio — produtos que tornam os espaços de trabalho mais simples, confortáveis e funcionais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>

        <header>
          <nav className="container site-nav" aria-label="Principal">
            <Link className="brand" href="/">
              Aurora Studio
            </Link>

            <div className="nav-links">
              <Link href="/#produtos">Produtos</Link>
              <Link href="/#equipe">Equipe</Link>
            </div>
          </nav>
        </header>

        <main id="conteudo" className="container">
          {children}
        </main>

        <footer>
          <div className="container">
            React, Next.js e conteúdo versionado.
          </div>
        </footer>
      </body>
    </html>
  );
}