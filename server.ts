import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import cors from '@fastify/cors';

const app: FastifyInstance = Fastify({ logger: true });

// Habilitar CORS
app.register(cors, {
  origin: '*'
});

interface Item {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
  categoria: string;
}

let estoque: Item[] = [
  { id: 1, nome: "Teclado Mecânico RGB", quantidade: 15, preco: 250.00, categoria: "Periféricos" },
  { id: 2, nome: "Mouse Gamer Sem Fio", quantidade: 30, preco: 120.00, categoria: "Periféricos" },
  { id: 3, nome: "Monitor 24 Pol Full HD 144Hz", quantidade: 8, preco: 850.00, categoria: "Monitores" },
  { id: 4, nome: "Headset Gamer 7.1", quantidade: 20, preco: 180.00, categoria: "Áudio" },
  { id: 5, nome: "SSD NVMe 1TB M.2", quantidade: 25, preco: 380.00, categoria: "Armazenamento" },
  { id: 6, nome: "Memória RAM 16GB DDR4 3200MHz", quantidade: 40, preco: 220.00, categoria: "Hardware" },
  { id: 7, nome: "Fonte 650W 80 Plus Bronze", quantidade: 12, preco: 340.00, categoria: "Hardware" },
  { id: 8, nome: "Gabinete Gamer Mid Tower", quantidade: 10, preco: 290.00, categoria: "Gabinetes" },
  { id: 9, nome: "Webcam Full HD 1080p", quantidade: 18, preco: 160.00, categoria: "Periféricos" },
  { id: 10, nome: "Cadeira Ergonômica", quantidade: 5, preco: 950.00, categoria: "Móveis" }
];

let nextId = 11;

interface ParamsId {
  id: string;
}

interface ItemBody {
  nome: string;
  quantidade: number;
  preco: number;
  categoria: string;
}

// Rotas CRUD
app.get('/itens', async (request: FastifyRequest, reply: FastifyReply) => {
  return reply.status(200).send(estoque);
});

app.get<{ Params: ParamsId }>('/itens/:id', async (request, reply) => {
  const { id } = request.params;
  const item = estoque.find((i) => i.id === Number(id));
  if (!item) return reply.status(404).send({ mensagem: 'Item não encontrado.' });
  return reply.status(200).send(item);
});

app.post<{ Body: ItemBody }>('/itens', async (request, reply) => {
  const { nome, quantidade, preco, categoria } = request.body;
  if (!nome || quantidade === undefined || preco === undefined || !categoria) {
    return reply.status(400).send({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  const novoItem: Item = { id: nextId++, nome, quantidade, preco, categoria };
  estoque.push(novoItem);
  return reply.status(201).send(novoItem);
});

app.put<{ Params: ParamsId; Body: Partial<ItemBody> }>('/itens/:id', async (request, reply) => {
  const { id } = request.params;
  const index = estoque.findIndex((i) => i.id === Number(id));
  if (index === -1) return reply.status(404).send({ mensagem: 'Item não encontrado.' });

  estoque[index] = { ...estoque[index], ...request.body };
  return reply.status(200).send(estoque[index]);
});

app.delete<{ Params: ParamsId }>('/itens/:id', async (request, reply) => {
  const { id } = request.params;
  const index = estoque.findIndex((i) => i.id === Number(id));
  if (index === -1) return reply.status(404).send({ mensagem: 'Item não encontrado.' });

  estoque.splice(index, 1);
  return reply.status(204).send();
});

// Inicialização com a porta do .env (3333)
const port = Number(process.env.PORT) || 3000;

const start = async () => {
  try {
    await app.listen({ port, host: '0.0.0.0' });
    console.log(`Servidor rodando em http://localhost:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();