import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'restaurante', component: RestauranteComponent},
  { path: 'diversao', component: DiversaoComponent},
  {path: 'oferta', component: HomeComponent},
  {path: 'oferta/:id', component: OfertaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
