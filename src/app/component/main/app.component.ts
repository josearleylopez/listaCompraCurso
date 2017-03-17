import { Component } from '@angular/core';
import { Producto } from '../../classes/producto';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
  /*template: `<h1>Hola y bienvenido {{name}}</h1>
  <h2>Mi primer componente</h2>`,*/
})
export class AppComponent {
  producto: Producto = new Producto(1, 'Patatas', 1, 3, 'Patatas para freir');
}
