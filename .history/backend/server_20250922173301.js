import express from "express";
import "dotenv/config";
import {}
import supabase from "./config/db.js";

const port = process.env.PORT

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
  const clients = await pool.query("SELECT * FROM clients");
  res.json(clients.rows);

  if (error) {
    console.error("Erro ao buscar usuários:", error.message);
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});