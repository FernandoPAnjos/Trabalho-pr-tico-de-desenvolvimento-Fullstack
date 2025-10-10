import express from "express";
import UserController from "../controllers/userController.js";

// Usamos o Router do Express para criar um grupo de rotas
const router = express.Router();

// Rota GET para a raiz ('/') que buscará todos os usuários
router.get("/", UserController.getAllUsers);

// Rota GET para '/search' que acionará a busca
router.get("/search", UserController.searchUsers);

export default router;