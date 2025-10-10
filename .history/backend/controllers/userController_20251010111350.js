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

export default {
  getAllUsers,
  searchUsers,
  createUser,
};