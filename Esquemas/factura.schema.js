const enjoi = require('joi')

//ID
const id = enjoi.number().integer()
//ruc
const RUC = enjoi.string().min(5).max(20)
//supermercado
const supermercado = enjoi.string().min(5).max(40)
//producto
const producto = enjoi.string().min(0).max(150)
//cantidad
const cantidad = enjoi.number().min(5)
//Fecha
const fecha = enjoi.date().min(12)
//monto
const monto = enjoi.number().min(2).max(150)

const crearFacturaEsquema = enjoi.object({
  RUC: RUC.required(),
  supermercado: supermercado.required(),
  producto: producto.required(),
  cantidad: cantidad.required(),
  fecha: fecha.required(),
  monto: monto.required()
})

const actFacturaEsquema = enjoi.object({
  RUC,
  supermercado,
  producto ,
  cantidad,
  fecha,
  monto: monto
})

module.exports = {crearFacturaEsquema, actFacturaEsquema}
