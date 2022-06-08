const exs = require("express")
const rtr = exs.Router()

const LotesService = require("../../Servicios/Lotes.service")
const controlValidarDato = require("../../middleWare/Validar.middleware")
const { crearLoteEsquema, actLoteEsquema, buscarLoteEsquema } = require("../../Esquemas/lote.schema")
const svc = new LotesService

rtr.get('/', (req, res) =>{
  res.send("Ventana de Lotes")
})

//Lista de Lotes
rtr.get('/lista', (req, res) =>{
  res.status(200).json(svc.Lista())
})

//Nuevo Lote
rtr.post('/', controlValidarDato(crearLoteEsquema, 'body') , async (req,res,next)=>{
  //fecha es mm/dd/aaaa
  try {
    const aux = req.body
    svc.Nuevo(aux)
    res.status(201).json({
      mensaje: "Lote añadido",
      datos: aux
    })
  } catch (error) {
    next(error)
  }

})


//Actualizar Lote
rtr.put('/:id', controlValidarDato(actLoteEsquema, 'body') , async(req,res,next) =>{
  try {
    const { id } = req.params
    const aux = req.body
    const msj = await svc.Actualizar(id,aux)
    res.json({
      mensaje: msj,
      datos: aux
    })
  } catch (error) {
    next(error)
  }
})

//Actualización Parcial de un Lote
rtr.patch('/:id', controlValidarDato(actLoteEsquema, 'body') , async (req,res,next) =>{
  try {
    const { id } = req.params
    const aux = req.body
    const msj = await svc.ActualizarParcial(id,aux)
    res.json({
      mensaje: msj,
      datos: aux
    })
  } catch (error) {
    next(error)
  }
})

//Borrar Lote
rtr.delete('/:id', controlValidarDato(buscarLoteEsquema, 'params'), async (req,res,next) =>{
  try {
    const { id } = req.params
    const msj = await svc.Borrar(id)
    res.json({
      mensaje: msj
    })
  } catch (error) {
    next(error)
  }

})

//Buscar Lote
rtr.get('/:id', controlValidarDato(buscarLoteEsquema, 'params') , async (req,res,next)=>{
  try {
    const { id } = req.params
    const loteBuscado = await svc.Buscar(id)
    res.status(200).json({
      mensaje: "Operación Finalizada; Lote Encontrado",
      datos: loteBuscado
    })
  } catch (error) {
    next(error)
  }
})



//Exports
module.exports = rtr;
