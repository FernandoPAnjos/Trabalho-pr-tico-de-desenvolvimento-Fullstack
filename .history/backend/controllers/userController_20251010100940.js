// Importamos o nosso serviço que lida com a lógica de negócio
import UserService from "../services/userService.js";

// Função do controller para buscar todos os usuários
const getAllUsers = async (req, res) => {
  try {
    // Chama o serviço para buscar os dados
    const users = await UserService.findAllUsers();
    // Envia os dados como resposta JSON
    res.json(users);
  } catch (err) {
    // Em caso de erro, envia uma resposta de erro
    res.status(500).json({ error: err.message });
  }
};

// Função do controller para a busca
const searchUsers = async (req, res) => {
  try {
    const { termo } = req.query;
    // Chama o serviço, passando o termo da busca
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