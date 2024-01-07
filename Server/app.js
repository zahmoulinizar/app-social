const express = require("express");

require("dotenv").config();

const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(express.json())

app.use(cors())


app.get("/", (req, res) => {
    res.send("hello social media app");
});

const userRoutes = require('./Routes/user.route')

app.use('/users' , userRoutes)

// Data Base connection

mongoose.connect(process.env.DATABASE_URL ,
{ 
    useNewUrlParser : true  ,
    useUnifiedTopology :true ,
})

const db = mongoose.connection ; 

db.on("error" , console.error.bind(console , "connection error : ")) ; 
db.once ("open" , function (){
    console.log("Database Connected successfully") ;   // Database connected successfully
})

// port
app.listen(process.env.PORT, () => {
  console.log(`app listenning on port ${process.env.PORT}`);
});
