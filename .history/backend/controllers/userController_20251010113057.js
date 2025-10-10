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
    const userData = req.body;

    const newUser = await UserService.createUser(userData);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    // O ID do usuário a ser deletado vem como um parâmetro na URL (ex: /users/15)
    const { id } = req.params;

    // Chama o serviço para deletar o usuário
    const deletedUser = await UserService.deleteUser(id);
    
    // Envia uma resposta de sucesso. 
    // Status 200 (OK) com o objeto deletado, ou 204 (No Content) sem corpo são comuns.
    res.status(200).json(deletedUser);
  } catch (err) {
    // Se o serviço disser que o usuário não foi encontrado
    if (err.message === 'Usuário não encontrado.') {
      return res.status(404).json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
};

export default {
  getAllUsers,
  searchUsers,
  createUser,
};