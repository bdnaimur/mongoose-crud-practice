const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5500;
const MONGO_URL = process.env.MONGO_URL;
const users = require("./routes/userRoute")

module.exports = {name: "rahman", age:30};
// 
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log('connect MongoDb'))
    .catch(err => console.log('Mongo error', err))

// routes

app.use("/api/user", users)
 
app.get('/', (req, res) => {
    res.send('Mongoose Practice')
})

app.listen(port, () => {
    console.log(`${port}`, 'server connected')
})
