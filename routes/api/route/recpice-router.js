const express=require('express')
const route=express.Router();
const connection = new Sequelize("dbrecipes", "root", "pass", {
    host: "127.0.0.1",
    dialect: "sqlite"
  })

route.post('/recpice',(req,res)=>{
    connection.Recpice.create({
        aggregateLikes:req.body.aggregateLikes,
        title:req.body.title,
        readyInMinutes:req.body.readyInMinutes,
        servings:req.body.servings,
        cuisines:req.body.cuisines,
        occasions:req.body.occasions,
        instructions:req.body.instructions,
    }).then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})
route.get('/recpice',(req,res,next)=>{
    connection.Recpice.findAll().then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})
route.get('/recpice/:id',(req,res,next)=>{
    connection.Recpice.findOne({where:{id:req.params.id}})
    .then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})
route.patch('/recpice/:id',(req,res,next)=>{
    connection.Recpice.update({
        aggregateLikes:req.body.aggregateLikes,
        title:req.body.title,
        readyInMinutes:req.body.readyInMinutes,
        servings:req.body.servings,
        cuisines:req.body.cuisines,
        occasions:req.body.occasions,
        instructions:req.body.instructions,
    },{where:{id:req.params.id}}).then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})
route.delete('/recpice/:id',(req,res,next)=>{
    connection.Recpice.destroy({where:{id:req.params.id}})
    .then((responce)=>res.status(200).send(responce))
    .catch((err)=>res.status(404).send(err))
})

module.exports=route;