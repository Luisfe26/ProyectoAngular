import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { AuthModule } from '@auth0/auth0-angular';
import { CompraventaComponent } from './components/compraventa/compraventa.component';
import { OrderComponent } from './components/order/order.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TipocambioComponent } from './components/tipocambio/tipocambio.component';


@NgModule({
  declarations: [
    ClienteComponent,
    CompraventaComponent,
    OrderComponent,
    TipocambioComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-dfqh0pml.us.auth0.com',
      clientId: '1Gm7mrfjczrFY5GG075UId3siZ0W1gte'
    }),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
