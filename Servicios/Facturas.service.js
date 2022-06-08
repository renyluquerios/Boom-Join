const vum = require("@hapi/boom")
class FacturasService{
  Facturas = []

  constructor(){
    this.Facturas = []
  }
  //Lista de Facturas
  Lista(){
    return this.Facturas
  }

  //Nuevo Producto
  Nuevo(aux){
    const tamaño = this.Facturas.length
    if (tamaño == 0){
      aux.id = 1
    }else{
      aux.id = this.Facturas[tamaño-1].id + 1
    }
    this.Facturas.push(aux)
  }

  //Actualizar Factura
  async Actualizar(index, aux){
    let repetir = true
    let i = 0

    if (this.Facturas.length <= 0){
      throw vum.rangeNotSatisfiable("La tabla de Facturas está vacía")
    }else if (index <= 0 || index > this.Facturas[this.Facturas.length-1].id){
      throw vum.badData("ID no válida")
    }else{
      while (repetir){
        if (i == this.Facturas.length){
          repetir = false
          throw vum.notFound("La Factura no se ha encontrado")
        }else{
          if (index == this.Facturas[i].id){

            if (aux.RUC != undefined){
              this.Facturas[i].RUC = aux.RUC
            }if (aux.supermercado != undefined){
              this.Facturas[i].supermercado = aux.supermercado
            }if (aux.producto != undefined){
              this.Facturas[i].producto = aux.producto
            }if (aux.cantidad != undefined){
              this.Facturas[i].cantidad = aux.cantidad
            }if (aux.fecha != undefined){
              this.Facturas[i].fecha = aux.fecha
            }if (aux.monto != undefined){
              this.Facturas[i].monto = aux.monto
            }

          repetir = false
          }
          i++
        }
      }
    }
    return "Operación Finalizada; Factura Actualizada"
  }

  //Borrar Factura
  async Borrar(index){

    if (this.Facturas.length <= 0){
      throw vum.rangeNotSatisfiable("La tabla de Facturas está vacía")
    }else if (index <= 0 || index > this.Facturas[this.Facturas.length-1].id){
      throw vum.badData("ID no válida")
    }else{

      let repetir = true
      let i = 0

      while (repetir){
        if (i == this.Facturas.length){
          throw vum.notFound("La Factura no se ha encontrado")
          repetir = false
        }else{
          if (index == this.Facturas[i].id){
            this.Facturas.splice(i,1)
            repetir = false
          }
          i++;
        }
      }
    }return "Operación Finalizada; Factura "+index+" Borrada"
  }

  //Pruebas
  async prueba(id){
    const msj = "prueba"
    if (id === '1'){
      throw new Error('Mensaje de error')
    }
    return msj
  }
}
module.exports = FacturasService
