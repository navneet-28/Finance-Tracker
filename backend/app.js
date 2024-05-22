const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const app = express();
const readdirSync = require('fs').readdirSync;
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();

const PORT = process.env.BACKEND_PORT || 8080;


const corsOptions = {
    origin: 'https://finance-tracker-chi-two.vercel.app', // Specify the client origin
    credentials: true, // Enable cookies and other credentials
  };

app.use(express.json());
app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  app.use((req, res, next) => {
    res.setHeader("Permissions-Policy", "geolocation=(self), microphone=()");
  next();
  });

//routes
readdirSync('./routes').map((r)=> app.use('/api', require(`./routes/${r}`)));

app.use('/api/user', userRoutes)

const server = ()=>{
    db();
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
   
    });
}

server();