const vum = require("@hapi/boom")
class ProductosService{
  Productos = []

  constructor(){
    this.Productos = []
  }
  //Lista de Productos
  Lista(){
    return this.Productos
  }

  //Nuevo Producto
  Nuevo(aux){
    const tamaño = this.Productos.length
    if (tamaño == 0){
      aux.id = 1
    }else{
      aux.id = this.Productos[tamaño-1].id + 1
    }
    this.Productos.push(aux)
  }

  //Actualizar Producto
  async Actualizar(index, aux){
    let repetir = true
    let i = 0

    if (this.Productos.length <= 0){
      throw vum.rangeNotSatisfiable("La tabla de Productos está vacía")
    }else if (index <= 0 || index > this.Productos[this.Productos.length-1].id){
      throw vum.badData("ID no válida")
    }else{
      while (repetir){
        if (i == this.Productos.length){
          repetir = false
          throw vum.notFound("El producto no se ha encontrado")
        }else{
          if (index == this.Productos[i].id){

            if (aux.codigo != undefined){
              this.Productos[i].codigo = aux.codigo
            }if (aux.nombre != undefined){
              this.Productos[i].nombre = aux.nombre
            }if (aux.detalles != undefined){
              this.Productos[i].detalles = aux.detalles
            }if (aux.precio != undefined){
              this.Productos[i].precio = aux.precio
            }

          repetir = false
          }
          i++
        }
      }
    }
    return "Operación Finalizada; Producto Actualizado"
  }

  //Actualización Parcial de Producto
  async ActualizarParcial(index, aux){
    let repetir = true
    let i = 0

    if (this.Productos.length <= 0){
      throw vum.rangeNotSatisfiable("La tabla de Productos está vacía")
    }else if (index <= 0 || index > this.Productos[this.Productos.length-1].id){
      throw vum.badData("ID no válida")
    }else{
      while (repetir){
        if (i == this.Productos.length){
          throw vum.notFound("El producto no se ha encontrado")
        repetir = false
        }else{
          if (index == this.Productos[i].id){

            if (aux.codigo != undefined){
              this.Productos[i].codigo = aux.codigo
            }if (aux.nombre != undefined){
              this.Productos[i].nombre = aux.nombre
            }if (aux.detalles != undefined){
              this.Productos[i].detalles = aux.detalles
            }if (aux.precio != undefined){
              this.Productos[i].precio = aux.precio
            }

          repetir = false
          }
          i++
        }
      }
    }
    return "Operación Finalizada; Producto Actualizado parcialmente"
  }

  //Borrar Producto
  async Borrar(index){

    if (this.Productos.length <= 0){
      throw vum.rangeNotSatisfiable("La tabla de Productos está vacía")
    }else if (index <= 0 || index > this.Productos[this.Productos.length-1].id){
      throw vum.badData("ID no válida")
    }else{

      let repetir = true
      let i = 0

      while (repetir){
        if (i == this.Productos.length){
          throw vum.notFound("El producto no se ha encontrado")
          repetir = false
        }else{
          if (index == this.Productos[i].id){
            this.Productos.splice(i,1)
            repetir = false
          }
          i++;
        }
      }
    }return "Operación Finalizada; Producto "+index+" Borrado"
  }

  //BuscarProducto
  async Buscar(id){
    const index = Number(id)
    const producto = this.Productos.find(item => item.id === index)

    if (this.Productos.length <= 0){
      throw vum.rangeNotSatisfiable("La tabla de Productos está vacía")
    }else if (index <= 0 || index > this.Productos[this.Productos.length-1].id){
      throw vum.badData("ID no válida")
    }else if (producto == undefined){
      throw vum.notFound("El producto no se ha encontrado")
    }else{
      return producto
    }
  }

  //Pruebas
  async prueba(id){
    const msj = "prueba"
    if (id === '1'){
      throw new Error('Mensaje de error')
    }
    return msj
  }

  // prueba2(id){
  //   const msj = "prueba 2"
  //   const errorcito = this.errorAuto()
  //   return msj
  // }
}
module.exports = ProductosService
