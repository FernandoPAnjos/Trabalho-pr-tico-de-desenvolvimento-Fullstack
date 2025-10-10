import express from 'express';
import "dotenv/config";
import {pool} from './config/db.js'';

const port = process.env.PORT ;

const app = express();
app.use(express.json());

app.get("users/", async (req, res)=>{
    const clients = await pool.query("SELECT * FROM users");
    res.json(clients.rows);
});


app.listen(3000)