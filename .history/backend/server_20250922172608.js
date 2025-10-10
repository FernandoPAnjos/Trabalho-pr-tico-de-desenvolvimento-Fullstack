import express from "express";
import supabase from "./config/db.js";
import pool from "./config/db.js";

const app = express();
app.use(express.json());

// Rota de teste
app.get("/users", (req, res) => {
  res.send("Rota /users funcionando!");
});
app.get("/users", async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    console.error("Erro ao buscar usuários:", error.message);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});