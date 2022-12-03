const {Router} = require('express');
const Proyecto = require('../models/Proyecto');
const router = Router()

router.get('/', async function(req,res){
    console.log("Servidor actual : ", process.env.HOST);
    try{
       const proyecto = await Proyecto.find()
       res.send(proyecto)
    }catch(error){
        console.log(error);
        res.status(500).send('ocurrio un error')
    }
})
     router.get('/:proyectoId', async function(req, res){
        console.log("Servidor actual : ", process.env.HOST);
        try {
            const proyecto = await Proyecto.findById(req.params.proyectoId)
            if (!proyecto) {
                return res.status(404).send('Proyecto no existe')
                              
            }
            res.send(proyecto)
        } catch (error) {
            console.log(error);
            res.status(500).send('Ocurrio un error al consultar proyectos')
        }
     });

 
module.exports = router