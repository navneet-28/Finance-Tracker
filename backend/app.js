const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const app = express();
const readdirSync = require('fs').readdirSync;

require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((r)=> app.use('/api', require(`./routes/${r}`)));



const server = ()=>{
    db();
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
   
    });
}

server();