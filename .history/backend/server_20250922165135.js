import express from 'express';
import "dotenv/config";

const port = process.env.PORT ;

const app = express();
app.use(express.json());

app.get("users/",(req, res)=>{
    const clients = awa
});


app.listen(3000)