import UserService from "../services/userService.js";

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

const createUser = async (req, res) => {
  try {
    // Os dados do novo usuário (nome, email, etc.) vêm no corpo (body) da requisição.
    // O middleware `app.use(express.json())` no seu server.js é quem torna isso possível.
    const userData = req.body;

    // Chamamos o nosso serviço para efetivamente criar o usuário no banco,
    // passando os dados que recebemos.
    const newUser = await UserService.createUser(userData);

    // Se tudo deu certo, enviamos uma resposta de sucesso.
    // O status 201 (Created) é o código HTTP padrão para quando um recurso é criado com sucesso.
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default {
  getAllUsers,
  searchUsers,
  createUser,
};