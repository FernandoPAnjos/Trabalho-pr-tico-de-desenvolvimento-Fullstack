import express from 'express';
import "dotenv/config";
import {pool} from 'pg';

const port = process.env.PORT ;

const app = express();
app.use(express.json());

app.get("users/",(req, res)=>{
    const clients = await pool.query
});


app.listen(3000)