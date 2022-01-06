const express = require('express')
const app = express();
const port = 4000

const mongose = require("mongoose");
const usermodel = require("./model/user")

const login = require("./route/login");
const regstration = require("./route/register");
const listData = require('./route/userlist');
const deleteData = require('./route/deleteuser');
const updateData = require('./route/updateuser');


mongose.connect("mongodb://localhost:27017/userdetails")
.then(()=>console.log("mongodb connected"));

app.use("/login",login);
app.use("/regi",regstration);
app.use("/list",listData);
app.use("/delete",deleteData);
app.use("/update",updateData);



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`server run on 4000`))


