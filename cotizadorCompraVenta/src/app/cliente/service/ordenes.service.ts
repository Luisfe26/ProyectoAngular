import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {

  private urlApi  = 'http://localhost:3000'

  constructor(private http:HttpClient) { }


getMonedas(){
  return this.http.get(this.urlApi+ '/monedas');
}

getMoneda(id:any){
  return this.http.get(`${this.urlApi}/moneda/${id}`)
}

getOrdenes(){
  return this.http.get(this.urlApi+ '/ordenes');
}

sendOrder(orden:any){
  return this.http.post(this.urlApi +'/orden', orden);
}
}