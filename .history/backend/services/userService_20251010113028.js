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
  
  if (error) throw error;
  
  return data[0];
};

const deleteUser = async (id) => {
  const { data, error } = await supabase
    .from("users")
    .delete()
    .eq('id', id)
    .select();

  if (error) throw error;
  
  if (data.length === 0) {
    throw new Error('Usuário não encontrado.');
  }
  
  return data[0]; 
};

export default {
  findAllUsers,
  searchUsersByTerm,
  createUser,
  deleteUser,