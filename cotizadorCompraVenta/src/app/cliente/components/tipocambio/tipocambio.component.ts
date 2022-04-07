import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Service } from '../../service/ordenes.service';

@Component({
  selector: 'app-tipocambio',
  templateUrl: './tipocambio.component.html',
  styleUrls: ['./tipocambio.component.css']
})
export class TipocambioComponent implements OnInit {
  monedas : any [] = [];
  camposMonedas = ['Codigo Moneda','Moneda', 'Compra', 'Venta'];

  constructor(public auth: AuthService, private service:Service) { }

  ngOnInit(): void {
    this.cargarTipocambio()
  }

  cargarTipocambio(){
    this.service.getMonedas().subscribe(result => {
      let aux:any = result;
      this.monedas = aux.mensaje;
      console.log(this.monedas)
});
  }
}
