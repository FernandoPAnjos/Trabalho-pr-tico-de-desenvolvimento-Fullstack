// Importamos o nosso serviço que lida com a lógica de negócio
import UserService from "../services/userService.js";

// Função do controller para buscar todos os usuários
const getAllUsers = async (req, res) => {
  try {
    const users = await UserService.findAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const searchUsers = async (req, res) => {
  try {
    const { termo } = req.query;
    const users = await UserService.searchUsersByTerm(termo);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default {
  getAllUsers,
  searchUsers,
};