const express=require('express')
const route=express.Router();
const connection = new Sequelize("dbrecipes", "root", "pass", {
    host: "127.0.0.1",
    dialect: "sqlite"
  })
// add new ingrediants
route.post('/ingrediants',(req,res)=>{
    connection.Ingrediants.create({
        name:req.body.name,
        amount:req.body.amount,
        unit:req.body.unit
    }).then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})
// select * from ingrediants
route.get('/ingrediants',(req,res,next)=>{
    connection.Ingrediants.findAll().then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})
// select One ingrediants id=?
route.get('/ingrediants/:id',(req,res,next)=>{
    connection.Ingrediants.findOne({where:{id:req.params.id}})
    .then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})
// update One ingrediants id=?
route.patch('/ingrediants/:id',(req,res,next)=>{
    connection.Ingrediants.update({
        name:req.body.name,
        amount:req.body.amount,
        unit:req.body.unit
    },{where:{id:req.params.id}}).then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})
// delete One ingrediants id=?
route.delete('/ingrediants/:id',(req,res,next)=>{
    connection.Ingrediants.destroy({where:{id:req.params.id}})
    .then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})

module.exports=route;