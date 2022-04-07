import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Service } from '../../service/ordenes.service';

@Component({
  selector: 'app-compraventa',
  templateUrl: './compraventa.component.html',
  styleUrls: ['./compraventa.component.css']
})
export class CompraventaComponent implements OnInit {

  forma : FormGroup
  id: any
  montoc: any
  montov: any
  montor: any
  idMoneda: any

  constructor(private fb:FormBuilder, private service:Service, private router: Router) { 
    this.forma = this.fb.group({
      monedaE: ['', [Validators.required, Validators.minLength(2)]],
      montoC:['', [Validators.required, Validators.minLength(2) ]],
      monedaR:['', [Validators.required, Validators.minLength(2)]],
      montoR: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  ngOnInit(): void {
  }


calcularCambio(){
      if (this.forma.get('monedaR')?.value != 'CLP'){
      this.compra()
    }else{
      this.venta()
    }
}

  compra(){
    this.id = this.forma.get('monedaR')?.value,
    this.service.getMoneda(this.id).subscribe(moneda =>{
      console.log(moneda)  
    let data = Object.values(moneda)
    let resul = data[2]
    let info = Object.values(resul)
    this.idMoneda =info[0]
    this.montoc = info[2]
    this.montov = info[3]
    console.log(this.idMoneda)
    this.montor = this.forma.get('montoC')?.value / this.montov
    console.log(this.forma.get('montoR')?.value)
    })
  }
  
  venta(){
    this.id = this.forma.get('monedaE')?.value,
    this.service.getMoneda(this.id).subscribe(moneda =>{
      console.log(moneda)  
    let data = Object.values(moneda)
    let resul = data[2]
    let info = Object.values(resul)
    this.idMoneda =info[0]
    this.montoc = info[2]
    this.montov = info[3]
    console.log(this.idMoneda)
    this.montor = this.forma.get('montoC')?.value * this.montoc
    })
  }

  crearOrden(){
    let obj = {
      monedaE: this.forma.get('monedaE')?.value,
      montoC: this.forma.get('montoC')?.value,
      monedaR: this.forma.get('monedaR')?.value,
      montoR: this.forma.get('montoR')?.value,
    }
    if (obj.monedaE === '' || obj.monedaR === '' || obj.montoC === ''){
      alert('Se deben llenar todos los campos')
    }else{
    this.service.sendOrder(obj).subscribe(resp =>{
    });
    console.log(obj)
    this.router.navigate(['/orden']) 
    this.forma.reset()
    }
  }
}
