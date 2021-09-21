// this is requirments for backend Start
const express = require('express');
const app = express();
const bd = require('body-parser');
const cors = require('cors');
const port = 5000;
// this is requirments for backend End



// this is connect from frontend Start
app.use(cors());
app.use(bd.urlencoded({
    extended: false,
}));
app.use(bd.json());
// this is connect from frontend End


// This is api connection Start
app.get('/', (req, res) => {
    res.send("Hello Muhamamd Yahiya Asif");
});


app.post('/singup', (req, res) => {
    console.log(req.body)
})
// This is api connection End


// This is server listen api Start
app.listen(port, () => {
    console.log("Server is Running!")
})
// This is server listen api End