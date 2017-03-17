import { Component, Output, EventEmitter} from '@angular/core';
import { Producto} from '../../classes/producto'; 

@Component({
    moduleId:module.id,
    selector:'formulario-producto',
    templateUrl:'formulario-producto.html'
})

export class FormularioProductoComponent{
    model: Producto=new Producto(0,'',0,0);
    @Output() onsubmit = new EventEmitter<any>();//Definir e instanciar un evento - any quiere decir que recibe cualquier tipo de objeto

    public submit(){
        this.onsubmit.emit(this.model);
        console.log(this.model);
        this.model = new Producto(0,'',0,0);
    }
}