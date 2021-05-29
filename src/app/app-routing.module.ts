import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './inicio/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'productos', component: ProductosComponent}, 
  {path: 'productodetalle/:id', component: ProductoDetalleComponent},
  {path: 'noticias', component: NoticiasComponent}, 
  {path: 'colaboradores', component: ColaboradoresComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
