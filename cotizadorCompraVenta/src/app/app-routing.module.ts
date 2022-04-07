import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import {ClienteComponent} from "./cliente/cliente.component"

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule), canActivate: [AuthGuard]},
  { path: '', pathMatch: 'full', redirectTo:'/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
