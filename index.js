// this is requirments for backend Start
const express = require('express');
const app = express();
const bd = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
let authModel = require('./authschema');
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
    // console.log(req.body)

    let userCreate = new authModel({ email: req.body.email, password: req.body.password });
    userCreate.save().then((response) => {
        // console.log(response, 'response success');
        res.status(200).send({result:response,message:'user create successfully'})
    }).catch((error) => {
        // console.log(error, 'err');
        res.status(400).send({result:error,message:'user are not create'})
    });
})
// This is api connection End



// Connect Mongo DB Start
mongoose.connect('mongodb+srv://yahiya:MYahiyaAsif17@cluster0.xupqt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
});

mongoose.connection.on("connected", () => {
    console.log("DataBase Connected");
});

mongoose.connection.on("error", () => {
    console.log("DataBase Not Connected");
});
// Connect Mongo DB End



// This is server listen api Start
app.listen(port, () => {
    console.log("Server is Running!")
})
// This is server listen api Endz