const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const app = express();
const connectDB =require('./config/db')
const PORT = process.env.PORT;
connectDB();
app.get('/get', (req, res) => {
    res.send('Get route is working');
})
app.post('/post',(req,res) => {
    res.send("post route is working")
})
app.put('/put',(req,res) => {
    res.send("put route is working")
})
app.delete('/delete',(req,res) => {
    res.send("delete route is working")
})
app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
})