const exs = require("express")
const rtr = exs.Router()

const facturaService = require("../../Servicios/Facturas.service")
const svc = new facturaService

rtr.get('/', (req, res) =>{
  res.send("Ventana de Facturas")
})

//Lista de Facturas
rtr.get('/lista', (req, res) =>{
  res.status(200).json(svc.Lista())
})

//Agregar Factura
rtr.post('/', (req,res)=>{
  const aux = req.body
  svc.Nuevo(aux)

  res.status(201).json({
    mensaje: "Facturas agregada",
    Datos: aux
  })
})

//Actualizar Factura
rtr.put('/:id', (req,res) =>{
  const { id } = req.params
  const aux = req.body
  res.json({
    mensaje: svc.Actualizar(id, aux),
    datosInsertados: aux
  })
})

//Borrar Factura
rtr.delete('/:id', (req,res) =>{
  const { id } = req.params

  res.json({
    mensaje: svc.Borrar(id),
  })
})


//Exports
module.exports = rtr;
