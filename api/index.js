import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js'
import User from './models/User.js';
import UserRoute from './routes/user.route.js'

dotenv.config();
db.connect();

const app = express();

app.use(express.json());

app.use("/users", UserRoute);
app.get('/', (req, res) => {
    res.send({message: 'Olá mundo'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
