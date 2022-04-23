const express=require('express')
const route=express.Router();
const connection = new Sequelize("dbrecipes", "root", "pass", {
    host: "127.0.0.1",
    dialect: "sqlite"
  })

route.post('/user',(req,res)=>{
    connection.User.create({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email
    }).then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})
route.get('/users',(req,res,next)=>{
    connection.User.findAll().then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})
route.get('/user/:id',(req,res,next)=>{
    connection.User.findOne({where:{id:req.params.id}})
    .then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})
route.patch('/user/:id',(req,res,next)=>{
    connection.User.update({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email
    },{where:{id:req.params.id}}).then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})
route.delete('/user/:id',(req,res,next)=>{
    connection.User.destroy({where:{id:req.params.id}})
    .then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})

module.exports=route;


