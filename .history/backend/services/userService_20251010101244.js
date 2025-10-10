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
      `name.ilike.%${termo}%,email.ilike.%${termo}%,id::text.ilike.%${termo}%`
    );

  if (error) throw error;
  return data;
};

export default {
  findAllUsers,
  searchUsersByTerm,
};