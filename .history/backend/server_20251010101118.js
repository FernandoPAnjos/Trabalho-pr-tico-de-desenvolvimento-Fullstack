import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

// Configuração dos middlewares
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});