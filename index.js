const exs = require("express");
const routes = require('./Rutas')
const { manejarError, mostrarError, boomError } = require("./middleWare/Error.middleware")

const apk = exs();

const puerto = 3500;

apk.use(exs.json());

routes(apk);

//Control de Errores
apk.use(mostrarError)
apk.use(boomError)
apk.use(manejarError)

apk.listen(puerto, () =>{
  console.log("puerto " + puerto + " activo")
})

apk.get('/', (req,res)=>{
  res.send("Ventana principal del API")
})
