# ENTREGA — Webtech Editor

## 1. Descrição do projeto

Este projeto consiste no desenvolvimento de uma aplicação web utilizando React, Next.js e MDX, com o objetivo de separar o conteúdo da apresentação da interface. A aplicação permite organizar páginas por meio de arquivos MDX, utilizando metadados para definir informações como título e descrição, enquanto o conteúdo é renderizado na interface.

O projeto também utiliza uma estrutura compatível com o Webtech Editor, permitindo a organização e edição dos documentos por meio de coleções definidas em um arquivo de configuração.

## 2. Tecnologias utilizadas

- **React 19:** desenvolvimento da interface por meio de componentes reutilizáveis.
- **Next.js 15:** estruturação das páginas e rotas da aplicação.
- **MDX:** organização do conteúdo das páginas.
- **gray-matter:** leitura e separação dos metadados e do conteúdo dos arquivos MDX.
- **next-mdx-remote:** renderização do conteúdo MDX.
- **JavaScript:** implementação da lógica da aplicação.
- **CSS:** estilização da interface.

## 3. Organização do projeto

A aplicação está organizada da seguinte maneira:

- `app/`: páginas, rotas, layouts e estilos da aplicação.
- `components/`: componentes reutilizáveis da interface.
- `cms/estrutura.json`: configuração das coleções e dos campos de conteúdo.
- `content/paginas/`: arquivos MDX utilizados pelas páginas.
- `lib/content.mjs`: funções responsáveis pela leitura dos documentos.
- `public/images/`: armazenamento das imagens utilizadas na aplicação.
- `tests/`: testes relacionados à leitura dos conteúdos.

## 4. Execução do projeto

Para executar a aplicação localmente, é necessário ter o Node.js 22 ou superior e o npm instalados.

Na pasta raiz do projeto, execute os comandos:

```bash
npm ci
npm run dev
```

Em seguida, acesse:

http://localhost:3000

Para executar a verificação do projeto, incluindo lint, testes e build, utilize:

```bash
npm run check
```

## 5. Funcionamento da aplicação

A aplicação utiliza arquivos MDX para armazenar o conteúdo das páginas. Os metadados são definidos no início de cada arquivo, em formato YAML, e o restante do documento contém o conteúdo que será apresentado na interface.

O arquivo `cms/estrutura.json` define as coleções disponíveis e os campos que podem ser editados. A aplicação utiliza essas configurações para localizar e ler os documentos.

O Next.js utiliza o sistema de rotas baseado em arquivos para apresentar as páginas. A rota dinâmica permite acessar diferentes documentos por meio de seus respectivos slugs, sem a necessidade de implementar uma rota individual para cada página.

Além disso, a aplicação possui uma página inicial que lista os conteúdos disponíveis e uma estrutura para apresentar cada documento individualmente.

## 6. Integração com o Webtech Editor

O projeto segue o contrato de arquivos utilizado pelo Webtech Editor, com coleções configuradas em `cms/estrutura.json` e documentos armazenados em arquivos MDX.

O editor permite trabalhar com rascunhos e publicar alterações no repositório do GitHub. Após a publicação, a aplicação precisa receber a versão atualizada do conteúdo para apresentar as alterações.

## 7. Considerações finais

O projeto utiliza uma arquitetura que separa a apresentação da interface dos conteúdos armazenados em arquivos, facilitando a organização e a manutenção das páginas. A combinação de React, Next.js e MDX permite reutilizar componentes e apresentar diferentes documentos a partir de uma estrutura comum.

O desenvolvimento também permite compreender a organização de rotas dinâmicas, a leitura de arquivos, a configuração de coleções e a integração entre conteúdo e interface.

