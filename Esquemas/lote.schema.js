const enjoi = require('joi')

//ID
const id = enjoi.number().integer();
//Cantidad Disponible
const cantidadDisponible = enjoi.number().min(1).integer()
//fecha de Vencimiento del Producto
const fechaVencimientoProducto = enjoi.date().min('now')
//contiene un Producto
const contieneProducto = enjoi.number().integer().min(1)

const crearLoteEsquema = enjoi.object({
  cantidadDisponible: cantidadDisponible.required(),
  fechaVencimientoProducto: fechaVencimientoProducto.required(),
  contieneProducto: contieneProducto.required()
})

const actLoteEsquema = enjoi.object({
  cantidadDisponible,
  fechaVencimientoProducto,
  contieneProducto
})

const buscarLoteEsquema = enjoi.object({
  id: id.required()
})

module.exports = { crearLoteEsquema, actLoteEsquema, buscarLoteEsquema}
