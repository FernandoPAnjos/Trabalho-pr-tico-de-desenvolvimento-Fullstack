import express from 'express';
import "dotenv/config";

const port = process.env.PORT ;

const app = express();
app.use(express.json());

app.get("users/",()=>{
    console.log("Acessou a rota do meu servidor");
});


app.listen(3000)