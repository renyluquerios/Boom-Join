const enjoi = require('joi')

//ID
const id = enjoi.number().integer()
//codigo
const codigo = enjoi.string().alphanum().min(5).max(20)
//nombre
const nombre = enjoi.string().min(5).max(40)
//detalles
const detalles = enjoi.string().min(0).max(150)
//precio
const precio = enjoi.number().min(5)

const crearProductoEsquema = enjoi.object({
  codigo: codigo.required(),
  nombre: nombre.required(),
  detalles: detalles.required(),
  precio: precio.required()
})

const actProductoEsquema = enjoi.object({
  codigo,
  nombre,
  detalles,
  precio: precio
})

const buscarProductoEsquema = enjoi.object({
  id: id.required()
})

module.exports = {crearProductoEsquema, actProductoEsquema, buscarProductoEsquema}
