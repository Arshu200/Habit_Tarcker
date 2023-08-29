const mongoose = require('mongoose');

// storing the db on mongo atlas
const DB = "mongodb+srv://shaik22arshad:iWb1774yZUPwZ3ki@cluster0.ntipqh2.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect('mongodb://127.0.0.1/habit_tracker');

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;