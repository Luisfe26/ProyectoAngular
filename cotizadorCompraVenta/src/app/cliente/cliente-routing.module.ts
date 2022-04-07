import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { CompraventaComponent } from './components/compraventa/compraventa.component';
import { OrderComponent } from './components/order/order.component';
import { AuthGuard } from '../guards/auth.guard';
import { TipocambioComponent } from './components/tipocambio/tipocambio.component';


const routes: Routes = [
  { path: '', component: ClienteComponent},
  { path: '', pathMatch: 'full', redirectTo:'/cliente' },
  { path: 'compraventa', component: CompraventaComponent, canActivate: [AuthGuard]},
  { path: 'ordenes', component: OrderComponent, canActivate: [AuthGuard]},
  { path: 'tipocambio', component: TipocambioComponent, canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
