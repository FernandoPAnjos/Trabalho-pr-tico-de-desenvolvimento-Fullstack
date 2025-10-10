import express from 'express';
import "dotenv/config";
import {pool} from 'pg';

const port = process.env.PORT ;

const app = express();
app.use(express.json());

app.get("users/", async (req, res)=>{
    const clients = await pool.query("SELECT * FROM users");
});


app.listen(3000)