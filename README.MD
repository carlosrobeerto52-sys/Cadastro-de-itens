<div align="center">

  <h1>📦 Stock Management API</h1>
  <p align="center">
    API REST moderna e de alta performance para controle e gerenciamento de estoque de produtos,<br>
    desenvolvida com <b>Node.js</b>, <b>Fastify</b> e <b>TypeScript</b>.
  </p>

  <div>
    <img src="https://img.shields.io/badge/TypeScript-5.4-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Node.js-20+-green?style=for-the-badge&logo=node.js" alt="Node.js" />
    <img src="https://img.shields.io/badge/Fastify-5.x-black?style=for-the-badge&logo=fastify" alt="Fastify" />
  </div>

</div>

<br />

## 💻 Sobre o Projeto

A **Stock Management API** é um serviço backend desenvolvido para fornecer um CRUD completo de produtos e insumos de estoque. A aplicação conta com tipagem estrita com TypeScript, respostas estruturadas com os devidos códigos de status HTTP (`200`, `201`, `204`, `400`, `404`), suporte a CORS e hot-reload para ambiente de desenvolvimento.

---

## 🚀 Tecnologias e Ferramentas

- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript no servidor.
- **[Fastify](https://fastify.dev/):** Framework web focado em alta performance e baixo overhead.
- **[TypeScript](https://www.typescriptlang.org/):** Superset JavaScript com tipagem estática e segurança em tempo de compilação.
- **[@fastify/cors](https://github.com/fastify/fastify-cors):** Habilitação de Cross-Origin Resource Sharing.
- **[tsx](https://github.com/privatenumber/tsx):** Executor TypeScript com suporte a hot-reload e carregamento de variáveis de ambiente.
- **[tsup](https://tsup.egoist.dev/):** Bundler ultra-rápido baseado em esbuild para compilação de produção.

---

## 📌 Rotas da API (Endpoints)

| Método | Rota | Descrição | Status HTTP de Sucesso |
| :--- | :--- | :--- | :--- |
| **GET** | `/itens` | Retorna todos os itens do estoque | `200 OK` |
| **GET** | `/itens/:id` | Retorna um item específico pelo ID | `200 OK` |
| **POST** | `/itens` | Cadastra um novo item no estoque | `201 Created` |
| **PUT** | `/itens/:id` | Atualiza dados de um item existente | `200 OK` |
| **DELETE** | `/itens/:id` | Remove um item do estoque pelo ID | `204 No Content` |

### Exemplo de Payload para Cadastro (`POST /itens`):

```json
{
  "nome": "Placa de Vídeo RTX 4060",
  "quantidade": 6,
  "preco": 2100.00,
  "categoria": "Hardware"
}

Como Executar o Projeto
Pré-requisitos
Git

Node.js v20+

Gerenciador de pacotes npm

1. Clonar o repositório
Bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
cd nome-do-repositorio
2. Instalar as dependências
Bash
npm install
3. Configurar variáveis de ambiente
Crie um arquivo .env na raiz do projeto (se já não existir):

Snippet de código
PORT=3333
4. Iniciar em modo de desenvolvimento
Bash
npm run start:watch
O servidor iniciará em http://localhost:3333.

📜 Scripts Disponíveis
npm run start:watch: Inicia o servidor com hot-reload (recarregamento automático a cada alteração).

npm run start:dev: Executa o servidor TypeScript em modo de desenvolvimento.

npm run dist: Compila os arquivos TypeScript para JavaScript puro na pasta dist/.

npm run start:dist: Compila e executa a versão final otimizada para produção.

👨‍💻 Autor
Desenvolvido por Carlos Roberto.

Projeto focado em estudos de desenvolvimento Backend com Node.js, Fastify e TypeScript.