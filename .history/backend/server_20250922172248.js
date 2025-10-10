import express from 'express';
import "dotenv/config";
import supabase from './config/db.js';

const port = process.env.PORT ;

const app = express();
app.use(express.json());

app.get("/users", async (req, res)=>{
    const clients = await pool.query("SELECT * FROM users");
    res.json(clients.rows);
});


app.listen(port || 3000, () => {
  console.log(`Porta:  ${port || 3000}`);

});