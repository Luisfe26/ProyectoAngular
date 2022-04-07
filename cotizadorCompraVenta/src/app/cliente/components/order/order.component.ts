import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Service } from '../../service/ordenes.service';

// export interface Moneda {  
//   Nombre: string,
//   MonedaCompra: string,
//   MonedaVenta: string,
// }

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  ordenes: any [] = [];
  camposOrdenes = ['Moneda', 'Monto Cambiado ', 'Moneda', 'Monto Recibido'];
 
  constructor(public auth: AuthService, private service:Service) { }

  ngOnInit(): void {
    this.cargarOrdenes()
  }

  cargarOrdenes(){
    this.service.getOrdenes().subscribe(result => {
      let aux:any = result;
      if (aux === []){
      alert(this.ordenes)
    }else{
      this.ordenes = aux.mensaje;
    }
});
}
}