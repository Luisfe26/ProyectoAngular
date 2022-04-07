import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Service } from './service/ordenes.service';

export interface OrdenesService {
  monedaE: string,
  monedaR: string,
  montoC: number,
  montoR: number,
}
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() campos: any;
  @Input() results: any;

  obj = Object.keys

  constructor(public auth: AuthService, private service:Service) { }

  ngOnInit(): void {
  }
}
