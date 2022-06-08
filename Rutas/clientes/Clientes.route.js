const exs = require("express")
const rtr = exs.Router()

rtr.get('/', (req, res) =>{
  res.send("Ventana de Clientes")
})

module.exports = rtr
