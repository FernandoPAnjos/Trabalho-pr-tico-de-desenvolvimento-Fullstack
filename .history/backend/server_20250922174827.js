import express from "express";
import "dotenv/config";
import supabase from "./config/db.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

// Rota para listar usuários
app.get("/users", async (req, res) => {
  try {
    const { data, error } = await supabase.from("users").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error("Erro ao buscar usuários:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`🚀 Server running on port ${port}`));