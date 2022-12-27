const express = require('express');
const routes = require('./routers/auth'); // import the routes
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors")
const PORT = process.env.PORT 
const URL = process.env.URL
const app = express();
app.use(express.json());
app.use(cors())
mongoose.set('strictQuery', false);

try {
    mongoose.connect(URL,{ useNewUrlParser: true ,useUnifiedTopology:true})
    console.log("Database Connection");
} catch (error) {
    console.log(error)
}

app.use('/', routes); //to use the routes


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
