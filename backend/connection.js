const mongoose = require('mongoose');
const server = 'mongodb://localhost:27017';
const databse = 'mernchat-yt-user';

mongoose.connect('mongodb://127.0.0.1:27017/mernchat-yt-user').then(() => {
console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


