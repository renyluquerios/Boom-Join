const dum = require('@hapi/boom')

function controlValidarDato(schema, objeto){
  return (req,res,next) => {
    const data = req[objeto]
    const { error } = schema.validate(data)
    if ( error ){
      throw dum.badRequest(error)
    }
    next()
  }
}

module.exports = controlValidarDato;
