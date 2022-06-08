const bum = require("@hapi/boom")

class LotesService{
  Lotes = []

  constructor(){
    this.Lotes = []
  }
  //Lista de Lotes
  Lista(){
    return this.Lotes
  }

  //Nuevo Lote
  Nuevo(aux){
    const tamaño = this.Lotes.length
    if (tamaño == 0){
      aux.id = 1
    }else{
      aux.id = this.Lotes[tamaño-1].id + 1
    }
    this.Lotes.push(aux)
  }

  //Actualizar Lote
  async Actualizar(index, aux){
    let repetir = true
    let i = 0

    if (this.Lotes.length <= 0){
      throw bum.rangeNotSatisfiable("La tabla de Lotes está vacía")
    }else if (index <= 0 || index > this.Lotes[this.Lotes.length-1].id){
      throw bum.badData("ID no válida")
    }else{
      while (repetir){
        if (i == this.Lotes.length){
        repetir = false
        throw bum.notFound("El lote no se ha encontrado")
        }else{
          if (index == this.Lotes[i].id){
            this.Lotes[i].cantidadDisponible = aux.cantidadDisponible
            this.Lotes[i].fechaVencimientoProducto = aux.fechaVencimientoProducto
            this.Lotes[i].contieneProducto = aux.contieneProducto

            repetir = false
          }
          i++
        }
      }
    }
    return "Operación Finalizada; Lote Actualizado"
  }

  //Actualización Parcial de Producto
  async ActualizarParcial(index, aux){
    let repetir = true
    let i = 0

    if (this.Lotes.length <= 0){
      throw bum.rangeNotSatisfiable("La tabla de Lotes está vacía")
    }else if (index <= 0 || index > this.Lotes[this.Lotes.length-1].id){
      throw bum.badData("ID no válida")
    }else{
      while (repetir){
        if (i == this.Lotes.length){
          repetir = false
          throw bum.notFound("El lote no se ha encontrado")
        }else{
          if (index == this.Lotes[i].id){
            if (aux.cantidadDisponible != undefined){
              this.Lotes[i].cantidadDisponible = aux.cantidadDisponible
            }if (aux.fechaVencimientoProducto != undefined){
              this.Lotes[i].fechaVencimientoProducto = aux.fechaVencimientoProducto
            }if (aux.contieneProducto != undefined){
              this.Lotes[i].contieneProducto = aux.contieneProducto
            }

            repetir = false
          }
          i++
        }
      }
    }
    return "Operación Finalizada; Lote Actualizado parcialmente"
  }

  //Borrar Lote
  async Borrar(index){
    if (this.Lotes.length <= 0){
      throw bum.rangeNotSatisfiable("La tabla de Lotes está vacía")
    }else if (index <= 0 || index > this.Lotes[this.Lotes.length-1].id){
      throw bum.badData("ID no válida")
    }else{

      let repetir = true
      let i = 0

      while (repetir){
        if (i == this.Lotes.length){
          throw bum.notFound("El producto no se ha encontrado")
          repetir = false
        }else{
          if (index == this.Lotes[i].id){
            this.Lotes.splice(i,1)
            repetir = false
          }
          i++;
        }
      }
    }return "Operación Finalizada; Lote"+index+"Borrado"
  }

  //Buscar Lote
  async Buscar(id){
    const index = Number(id)
    const lote = this.Lotes.find(item => item.id === index)

    if (this.Lotes.length <= 0){
      throw bum.rangeNotSatisfiable("La tabla de lote está vacía")
    }else if (index <= 0 || index > this.Lotes[this.Lotes.length-1].id){
      throw bum.badData("ID no válida")
    }else if (lote == undefined){
      throw bum.notFound("El lote no se ha encontrado")
    }else{
      return lote
    }
  }
}

module.exports = LotesService
