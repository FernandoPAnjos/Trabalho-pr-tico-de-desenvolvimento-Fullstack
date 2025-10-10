import supabase from "../config/db.js";

const findAllUsers = async () => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) throw error;
  return data;
};

const searchUsersByTerm = async (termo) => {
  if (!termo) {
    return [];
  }

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .or(
      `name.ilike.%${termo}%,id::text.ilike.%${termo}%`
    );

  if (error) throw error;
  return data;
};

const createUser = async (userData) => {

  const { data, error } = await supabase
    .from("users")
    .insert([userData])
    .select();
  
  // Se houver um erro na operação com o banco, nós o lançamos para o controller tratar.
  if (error) throw error;
  
  // O Supabase retorna os dados como um array, então pegamos o primeiro (e único) item.
  return data[0];
};

export default {
  findAllUsers,
  searchUsersByTerm,
  createUser,
};