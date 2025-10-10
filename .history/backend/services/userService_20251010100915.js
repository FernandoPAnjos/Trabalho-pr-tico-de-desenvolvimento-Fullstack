import supabase from "../config/db.js";

// Função para buscar todos os usuários
const findAllUsers = async () => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) throw error;
  return data;
};

// Função para buscar usuários por um termo
const searchUsersByTerm = async (termo) => {
  if (!termo) {
    return [];
  }

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .or(
      `name.ilike.%${termo}%,email.ilike.%${termo}%,id::text.ilike.%${termo}%`
    );

  if (error) throw error;
  return data;
};

// Futuramente, você pode adicionar mais funções aqui:
// const findUserById = async (id) => { ... };
// const createUser = async (userData) => { ... };

// Exportamos as funções para que os controllers possam usá-las
export default {
  findAllUsers,
  searchUsersByTerm,
};