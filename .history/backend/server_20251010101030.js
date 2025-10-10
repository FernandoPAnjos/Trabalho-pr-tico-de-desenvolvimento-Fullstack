import express from "express";
import cors from "cors";
// 1. Importe o seu arquivo de rotas de usuário
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

// Configuração dos middlewares
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// 2. Conecte as rotas de usuário à sua aplicação
// A API agora responderá em '/users' para todas as rotas definidas em userRoutes
app.use("/users", userRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});