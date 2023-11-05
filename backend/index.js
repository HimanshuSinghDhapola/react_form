const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const users = require("./mongo.js")
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


app.get("/", async(req, res) => {
  res.send("HEllo from server");
});

app.post("/", async(req, res) => {
  let {email, password} = req.body.data;
  users.findOne({email: email})
    .then(async user => {
        if(user){
          const isMatch = await bcrypt.compare(password, user.password);
          if(isMatch){
            /*res.json(`Welcome ${user.userName}`)*/
            res.json("Success")
          }else{
            res.json("Password doesn't match")
          }
        }else{
          res.json("No record exist try to signup first")
        }
    })
})

app.post("/signup", async(req, res) => {
  let {data} = req.body;
  let {password} = req.body.data;
  
  users.findOne({email: data.email})
    .then(user => {
      if(user){
        res.json("User already exists")
      }else{
        users.findOne({userName: data.userName})
          .then(async userName => {
            if(userName){
              res.json("Username already exist try new one");
            }else{
              const hash = await bcrypt.hash(password, 14);
              users.create({
                ...data,
                password: hash
              })
              /*res.json(`${data.userName} is created`)*/
              res.json("Success");
            }
          })
      }
    })
})

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
})